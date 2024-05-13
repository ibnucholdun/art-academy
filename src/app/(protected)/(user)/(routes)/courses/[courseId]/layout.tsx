import getProgress from "@/actions/getProgress";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";
import CourseSidebar from "./_components/CourseSidebar";

import { currentUser } from "@/lib/auth";
import BackButton from "./_components/BackButton";

type Props = {
  children: React.ReactNode;
  params: { courseId: string };
};

const CourseLayout: React.FC<Props> = async ({ children, params }) => {
  const user = await currentUser();

  if (!user?.id && user?.role !== "USER") return redirect("/");

  const course = await prisma.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId: user?.id,
            },
          },
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if (!course) return redirect("/");

  const progressCount = await getProgress(user?.id!, course.id);

  return (
    <div className="min-h-screen bg-slate-300/20">
      <div className="container md:py-12">
        <BackButton label="Back to courses" href="/courses" />
        <div className=" md:flex w-full mt-6">
          <main className="h-full w-full">{children}</main>
          <div className="hidden md:flex h-full w-80 flex-col">
            <CourseSidebar course={course} progressCount={progressCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;
