"use client";

import CourseProgress from "@/components/CourseProgress";
import { CourseWithProgressWithCategory } from "@/components/home/ListCourses";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  course: CourseWithProgressWithCategory;
};

const CourseCard = ({ course }: Props) => {
  const router = useRouter();
  return (
    <div className="bg-brown500/30 py-3 px-8 rounded-md mb-1">
      <div className="flex gap-x-6 items-center">
        {course.imageUrl ? (
          <Image
            src={course.imageUrl!}
            alt="course image"
            width={100}
            height={100}
          />
        ) : null}
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold text-[#5c4033] dark:text-white">
            {course.title}
          </h3>
          <div className=" ">
            <CourseProgress
              variant={course.progress === 100 ? "success" : "default"}
              size="sm"
              value={course.progress!}
            />
          </div>
        </div>
        <div className="flex justify-end w-full">
          <Button onClick={() => router.push(`/courses/${course.id}`)}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
