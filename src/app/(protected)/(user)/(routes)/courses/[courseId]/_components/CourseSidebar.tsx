import React from "react";
import { redirect } from "next/navigation";
import { Chapter, Course, UserProgress } from "@prisma/client";

import prisma from "@/lib/prisma";
import { currentUser } from "@/lib/auth";
import CourseSidebarItem from "./CourseSidebarItem";

type Props = {
  course: Course & {
    chapters: (Chapter & { userProgress: UserProgress[] | null })[];
  };
  progressCount: number;
};

const CourseSidebar: React.FC<Props> = async ({ course, progressCount }) => {
  const user = await currentUser();

  if (!user?.id && user?.role !== "USER") return redirect("/");

  const purchase = await prisma.purchase.findUnique({
    where: {
      userId_courseId: {
        userId: user?.id!,
        courseId: course.id,
      },
    },
  });

  return (
    <>
      <div className="pb-4 flex -flex-col">
        <h1 className="font-semibold">{course.title}</h1>
      </div>
      <div className="border rounded-md bg-white">
        <h1 className="p-8 font-semibold">Progress bar</h1>
        <div className="h-full overflow-y-auto shadow-sm">
          <div className="flex flex-col w-full">
            {course.chapters.map((chapter) => (
              <CourseSidebarItem
                key={chapter.id}
                id={chapter.id}
                label={chapter.title}
                isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
                courseId={course.id}
                isLocked={!chapter.isFree && !purchase}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSidebar;
