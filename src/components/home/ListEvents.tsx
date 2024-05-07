import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import EventCard from "../EventCard";
import { Event } from "@prisma/client";

type Props = {
  events: Event[];
};

const ListEvents = async ({ events }: Props) => {
  return (
    <section className="py-16 md:py-24 lg:py-32 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold leading-tight text-[#6F3823] md:text-4xl">
            Explore Our Workshops
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Check out our upcoming art workshops and events.
          </p>
        </div>
        <div className="w-full container mx-auto mt-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full">
            <CarouselContent>
              {events.map((event) => (
                <CarouselItem
                  key={event.id}
                  className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <EventCard
                      key={event.id}
                      title={event.title}
                      description={event.description!}
                      imageUrl={event.imageUrl!}
                      link={`/events/${event.id}`}
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

export default ListEvents;
