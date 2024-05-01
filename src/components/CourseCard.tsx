"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const CourseCard = ({ title, description, imageUrl, link }: Props) => {
  const router = useRouter();
  return (
    <Card>
      <CardContent>
        <Image
          alt={title}
          className="rounded-md object-cover aspect-video"
          height={225}
          src={imageUrl}
          width={400}
        />
        <div className="mt-4 animate-fade-in-up">
          <h3 className="text-xl font-bold text-[#6F3823]">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="text-[#6F3823] animate-fade-in-up p-0"
          variant="link"
          onClick={() => router.push(link)}>
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
