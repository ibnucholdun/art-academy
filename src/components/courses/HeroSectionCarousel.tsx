"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {
  user: any;
};

const HeroSectionCarousel = ({ user }: Props) => {
  const router = useRouter();
  return (
    <Carousel className="mb-12" plugins={[Autoplay({ delay: 4000 })]}>
      <CarouselContent>
        <CarouselItem>
          <div className="relative group overflow-hidden rounded-lg shadow-lg ">
            <img
              alt="Course image"
              className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
              height={600}
              src="/banner1.png"
              width={1200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-4 pl-12">
              <div className="bg-white p-4 w-2/6 rounded-md">
                <h2 className="text-3xl font-bold mb-2">
                  {user.name}, thanks for trying a free course
                </h2>
                <p className=" mb-4">
                  Now, unlock our best features with courses as low as Rp100.000
                  — limited time only.
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative group overflow-hidden rounded-lg shadow-lg ">
            <img
              alt="Course image"
              className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
              height={600}
              src="/banner2.png"
              width={1200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-4 pl-12">
              <div className="bg-white p-4 w-2/6 rounded-md">
                <h2 className="text-3xl font-bold mb-2">
                  Subscribe to the best of Art Academy
                </h2>
                <p className=" mb-4">
                  With Personal Plan, you get access to 8,000 of our top-rated
                  courses in Art, Architecture and more.
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative group overflow-hidden rounded-lg shadow-lg ">
            <img
              alt="Course image"
              className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
              height={600}
              src="/banner3.jpg"
              width={1200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-4 pl-12">
              <div className="bg-white p-4 w-2/6 rounded-md">
                <h2 className="text-3xl font-bold mb-2">
                  We missed you, {user.name}
                </h2>
                <p className="mb-4">
                  <Button
                    variant="link"
                    onClick={() => router.push("/")}
                    className="p-0 underline text-[#5624d0] text-base">
                    Get back on track
                  </Button>{" "}
                  and achieve your goals. 5-10 minutes a day will do.
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="w-8 h-8 bg-black text-white" />
      <CarouselNext className="w-8 h-8 bg-black text-white" />
    </Carousel>
  );
};

export default HeroSectionCarousel;
