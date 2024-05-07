import getCourses from "@/actions/getCourses";
import CoursePageView from "@/components/courses/CoursePageView";
import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import React from "react";

type Props = {
  searchParams: {
    title: string;
    categoryId: string;
  };
};

const CoursePage = async ({ searchParams }: Props) => {
  const user = await currentUser();
  const categories = await prisma.category.findMany();
  const courses = await getCourses({
    userId: user?.id!,
    ...searchParams,
  });
  return (
    <>
      <CoursePageView user={user} categories={categories} courses={courses} />
    </>
  );
};

export default CoursePage;
