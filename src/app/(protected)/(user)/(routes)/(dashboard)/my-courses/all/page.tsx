import getCourses from "@/actions/getCourses";
import { currentUser } from "@/lib/auth";
import React from "react";
import CourseCard from "../../my-dashboard/_components/CourseCard";

type Props = {};

const MyCoursesAllPage = async (props: Props) => {
  const user = await currentUser();
  const courses = await getCourses({ userId: user?.id! });

  return (
    <>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  );
};

export default MyCoursesAllPage;
