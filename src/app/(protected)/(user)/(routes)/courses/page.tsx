import CoursePageView from "@/components/courses/CoursePageView";
import { currentUser } from "@/lib/auth";
import React from "react";

type Props = {};

const CoursePage = async (props: Props) => {
  const user = await currentUser();
  return (
    <>
      <CoursePageView user={user} />
    </>
  );
};

export default CoursePage;
