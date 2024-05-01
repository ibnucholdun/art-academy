import React from "react";
import prisma from "@/lib/prisma";

import Navbar from "@/app/(protected)/(user)/_components/Navbar";
import HeroSection from "./HeroSection";
import ListCourses from "./ListCourses";
import ListTestimonials from "./ListTestimonials";
import BannerStart from "./BannerStart";
import ListEvents from "./ListEvents";

type Props = {
  user: any;
};

const HomeView: React.FC<Props> = async ({ user }) => {
  const courses = await prisma.course.findMany({
    where: {
      isPublished: true,
    },
    include: {
      category: true,
      chapters: {
        where: {
          isPublished: true,
        },
        select: {
          id: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const events = await prisma.event.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <Navbar user={user} />
      <HeroSection />
      <ListCourses courses={courses} />
      <ListTestimonials />
      <BannerStart />
      <ListEvents events={events} />
    </>
  );
};

export default HomeView;
