import getCourses from "@/actions/getCourses";
import { currentUser } from "@/lib/auth";
import React from "react";
import CourseCard from "../../my-dashboard/_components/CourseCard";
import NoItems from "@/components/NoItem";

type Props = {};

const MyCoursesCompletedPage = async (props: Props) => {
  const user = await currentUser();
  const courses = await getCourses({ userId: user?.id! });
  const coursesCompleted = courses.filter((course) => {
    return course.progress! >= 100 && course.progress !== null;
  });

  return (
    <>
      {coursesCompleted.length === 0 ? (
        <NoItems
          title="Sorry no completed courses found..."
          description="Please complete a course to see it here."
        />
      ) : (
        <>
          {coursesCompleted.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </>
      )}
    </>
  );
};

export default MyCoursesCompletedPage;
