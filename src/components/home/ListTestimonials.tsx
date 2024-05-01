import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import TestimonialCard from "../TestimonialCard";

type Props = {};

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    avatar: "placeholder-profile.png",
    description:
      "The art courses on this platform have been a game-changer for me. The instructors are knowledgeable and the lessons are engaging. Highly recommended!",
  },
  {
    id: 2,
    name: "Ahmad Rifai",
    avatar: "",
    description:
      "I've been able to improve my drawing skills significantly thanks to the comprehensive lessons on this platform. The feedback from the instructors has been invaluable.",
  },
  {
    id: 3,
    name: "Samsul Arif",
    avatar: "",
    description:
      "I've always wanted to learn how to paint, and this platform has made it so accessible. The step-by-step tutorials are easy to follow, and I&apos;m seeing real progress in my work.",
  },
  {
    id: 4,
    name: "Ahmad Rifai",
    avatar: "",
    description:
      "I've been able to improve my drawing skills significantly thanks to the comprehensive lessons on this platform. The feedback from the instructors has been invaluable.",
  },
  {
    id: 5,
    name: "John Doe",
    avatar: "placeholder-profile.png",
    description:
      "The art courses on this platform have been a game-changer for me. The instructors are knowledgeable and the lessons are engaging. Highly recommended!",
  },
];

const ListTestimonials = (props: Props) => {
  return (
    <section className="bg-gray-100 py-16 md:py-24 lg:py-32 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold leading-tight text-[#6F3823] md:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Hear from our satisfied students about their learning experience.
          </p>
        </div>
        <div className="w-full container mx-auto mt-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <TestimonialCard
                      key={testimonial.id}
                      name={testimonial.name}
                      avatar={testimonial.avatar}
                      description={testimonial.description}
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

export default ListTestimonials;
