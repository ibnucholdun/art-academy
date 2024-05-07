import React from "react";
import { Category, Course } from "@prisma/client";
import CourseCard from "@/components/CourseCard";
import NoItems from "../NoItem";

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

type Props = {
  items: CourseWithProgressWithCategory[];
};

const CoursesList: React.FC<Props> = ({ items }) => {
  return (
    <div>
      <div className="grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((item) => (
          <CourseCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl!}
            chaptersLength={item.chapters.length}
            price={item.price!}
            category={item?.category?.name!}
            progress={item.progress}
          />
        ))}
      </div>
      {items.length === 0 && (
        <NoItems
          title="Sorry no listing found for category found..."
          description="Please check a other category or create your own listing!"
        />
      )}
    </div>
  );
};

export default CoursesList;
