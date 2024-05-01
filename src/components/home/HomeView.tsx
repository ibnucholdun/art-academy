import React from "react";
import prisma from "@/lib/prisma";

import Navbar from "@/app/(protected)/(user)/_components/Navbar";
import HeroSection from "./HeroSection";
import ListCourses from "./ListCourses";

type Props = {
  user: any;
};

const HomeView: React.FC<Props> = async ({ user }) => {
  const courses = await prisma.course.findMany({
    where: {
      isPublished: true,
    },
    include: {
      category: true,
      chapters: {
        where: {
          isPublished: true,
        },
        select: {
          id: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <Navbar user={user} />
      <HeroSection />
      <ListCourses courses={courses} />
    </>
  );
};

export default HomeView;
