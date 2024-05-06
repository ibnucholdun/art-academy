import CoursePageView from "@/components/courses/CoursePageView";
import { currentUser } from "@/lib/auth";
import React from "react";

type Props = {
  searchParams?: {
    filter?: string;
  };
};

const CoursePage = async ({ searchParams }: Props) => {
  const user = await currentUser();
  return (
    <>
      <CoursePageView user={user} searchParams={searchParams} />
    </>
  );
};

export default CoursePage;
