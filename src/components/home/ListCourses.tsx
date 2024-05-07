import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CourseCard from "../CourseCard";
import { Category, Course } from "@prisma/client";

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

type Props = {
  courses: CourseWithProgressWithCategory[] | any;
};

const ListCourses = async ({ courses }: Props) => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#6F3823] md:text-4xl">
            Featured Courses
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Explore our selection of top-rated art education courses.
          </p>
        </div>
        <div className="w-full container mx-auto mt-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full">
            <CarouselContent>
              {courses.map((course: any) => (
                <CarouselItem
                  key={course.id}
                  className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <CourseCard
                      id={course.id}
                      title={course.title}
                      imageUrl={course.imageUrl!}
                      chaptersLength={course?.chapters.length}
                      price={course.price!}
                      category={course?.category?.name!}
                      progress={course.progress}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ListCourses;
