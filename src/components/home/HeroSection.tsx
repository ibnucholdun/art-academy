"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {};

const HeroSection = (props: Props) => {
  const router = useRouter();
  return (
    <div className="w-full bg-gradient-to-r from-brown300 via-brown500 to-brown700 py-24 md:py-32 lg:py-40 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Unlock Your Creative Potential
          </h1>
          <p className="mt-6 text-lg text-white md:text-xl animate-fade-in-up">
            Discover the art of painting, drawing, and more with our expert-led
            online courses.
          </p>
          <div className="mt-8 animate-fade-in-up">
            <Button
              className="rounded-full bg-white px-8 py-3 text-lg font-medium text-[#6F3823] transition-colors hover:bg-gray-200"
              variant="default"
              onClick={() => router.push("/courses")}>
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
