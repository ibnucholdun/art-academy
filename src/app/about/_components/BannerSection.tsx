import Image from "next/image";
import React from "react";

type Props = {};

const BannerSection = (props: Props) => {
  return (
    <div className="relative h-[420px] group overflow-hidden">
      <Image
        src="/aboutHero.jpg"
        alt="hero"
        className="bg-no-repeat bg-center object-cover h-full w-full"
        width={1200}
        height={600}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
        Inspiring discovery through creativity.
      </h1>
    </div>
  );
};

export default BannerSection;
