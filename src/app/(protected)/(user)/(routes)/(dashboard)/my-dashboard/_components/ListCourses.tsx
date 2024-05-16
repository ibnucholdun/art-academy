import getCourses from "@/actions/getCourses";
import { currentUser } from "@/lib/auth";
import React from "react";
import CourseCard from "./CourseCard";
import NoItems from "@/components/NoItem";

type Props = {};

const ListCourses = async (props: Props) => {
  const user = await currentUser();
  const courses = await getCourses({ userId: user?.id! });

  const courseProgressUnder100 = courses.filter((course) => {
    return course.progress! < 100 && course.progress !== null;
  });

  return (
    <>
      {courseProgressUnder100.length === 0 ? (
        <NoItems title="Sorry no courses found..." description="" />
      ) : (
        <>
          {courseProgressUnder100.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </>
      )}
    </>
  );
};

export default ListCourses;
