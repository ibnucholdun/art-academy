import Image from "next/image";
import React from "react";

type Props = {};

const StorySection = (props: Props) => {
  return (
    <div className="relative h-[420px] group overflow-hidden mb-16">
      <Image
        src="/aboutStoryHero.webp"
        alt="hero"
        className="bg-no-repeat bg-center object-cover h-full w-full"
        width={1200}
        height={600}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 text-white w-full">
        <h1 className=" text-4xl font-light text-center">
          “The thing I thought couldn’t be possible a year or two ago, is
          actually happening.”
        </h1>
        <p className="text-center mt-4 font-light text-2xl">
          –Artist, student & Skillshare teacher
        </p>
      </div>
    </div>
  );
};

export default StorySection;
