import getCourses from "@/actions/getCourses";
import CourseProgress from "@/components/CourseProgress";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import Image from "next/image";
import React from "react";
import CourseCard from "./CourseCard";
import getChapter from "@/actions/getChapter";

type Props = {};

const ListCourses = async (props: Props) => {
  const user = await currentUser();
  const courses = await getCourses({ userId: user?.id! });

  const courseProgressUnder100 = courses.filter((course) => {
    return course.progress! < 100 && course.progress !== null;
  });
  return (
    <>
      {courseProgressUnder100.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  );
};

export default ListCourses;
