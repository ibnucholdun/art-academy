import React from "react";
import CourseCard from "../CourseCard";
import prisma from "@/lib/prisma";
import NoItem from "../NoItem";

type Props = {};

const ListCourses = async ({
  searchParams,
}: {
  searchParams?: { filter?: string };
}) => {
  const data = await prisma.course.findMany({
    where: {
      isPublished: true,
      category: {
        name: searchParams?.filter ?? undefined,
      },
    },
    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      {data.length === 0 ? (
        <NoItem
          title="Sorry no listing found for category found..."
          description="Please check a other category or create your own listing!"
        />
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {data.map((item) => (
            <CourseCard
              key={item.id}
              title={item.title}
              description={item.description!}
              imageUrl={item.imageUrl!}
              link={`/courses/${item.id}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ListCourses;
