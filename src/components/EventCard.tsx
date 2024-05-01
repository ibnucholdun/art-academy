"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Props = {
  link: string;
  title: string;
  description: string;
  imageUrl: string;
};

const EventCard = ({ title, description, imageUrl, link }: Props) => {
  const router = useRouter();
  return (
    <Card>
      <CardContent>
        <Image
          alt={title}
          className="rounded-md "
          height={225}
          src={imageUrl}
          style={{
            aspectRatio: "400/225",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="mt-4">
          <h3 className="text-xl font-bold text-[#6F3823]">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="text-[#6F3823]"
          variant="link"
          onClick={() => router.push(link)}>
          View More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
