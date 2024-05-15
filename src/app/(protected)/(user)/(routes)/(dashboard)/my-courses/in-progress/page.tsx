import getCourses from "@/actions/getCourses";
import { currentUser } from "@/lib/auth";
import React from "react";
import CourseCard from "../../my-dashboard/_components/CourseCard";
import NoItems from "@/components/NoItem";

type Props = {};

const MyCoursesInProgressPage = async (props: Props) => {
  const user = await currentUser();
  const courses = await getCourses({ userId: user?.id! });
  const coursesInProgress = courses.filter((course) => {
    return course.progress! < 100 && course.progress !== null;
  });

  return (
    <>
      {coursesInProgress.length === 0 ? (
        <NoItems title="Sorry no courses found..." description="" />
      ) : (
        <>
          {coursesInProgress.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </>
      )}
    </>
  );
};

export default MyCoursesInProgressPage;
