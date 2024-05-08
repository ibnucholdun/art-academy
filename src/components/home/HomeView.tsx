import React from "react";
import prisma from "@/lib/prisma";

import Navbar from "@/app/(protected)/(user)/_components/Navbar";
import HeroSection from "./HeroSection";
import ListCourses from "./ListCourses";
import ListTestimonials from "./ListTestimonials";
import BannerStart from "./BannerStart";
import ListEvents from "./ListEvents";
import Footer from "@/app/(protected)/(user)/_components/Footer";

type Props = {};

const HomeView: React.FC<Props> = async () => {
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
      <Navbar />
      <HeroSection />
      <ListCourses courses={courses} />
      <ListTestimonials />
      <BannerStart />
      <ListEvents events={events} />
      <Footer />
    </>
  );
};

export default HomeView;
