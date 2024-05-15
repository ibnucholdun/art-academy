import getCourses from "@/actions/getCourses";
import { currentUser } from "@/lib/auth";
import React from "react";
import CourseCard from "../../my-dashboard/_components/CourseCard";
import NoItems from "@/components/NoItem";

type Props = {};

const MyCoursesAllPage = async (props: Props) => {
  const user = await currentUser();
  const courses = await getCourses({ userId: user?.id! });

  const filteredCourses = courses.filter(
    (course) => course.purchases.length !== 0
  );

  return (
    <>
      {filteredCourses.length === 0 ? (
        <NoItems title="Sorry no courses found..." description="" />
      ) : (
        <>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </>
      )}
    </>
  );
};

export default MyCoursesAllPage;
