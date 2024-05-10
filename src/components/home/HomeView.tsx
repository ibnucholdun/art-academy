import React from "react";
import prisma from "@/lib/prisma";

import Navbar from "@/app/(protected)/(user)/_components/Navbar";
import HeroSection from "./HeroSection";
import ListCourses, { CourseWithProgressWithCategory } from "./ListCourses";
import ListTestimonials from "./ListTestimonials";
import BannerStart from "./BannerStart";
import ListEvents from "./ListEvents";
import Footer from "@/app/(protected)/(user)/_components/Footer";
import { currentUser } from "@/lib/auth";
import getProgress from "@/actions/getProgress";

type Props = {};

const HomeView: React.FC<Props> = async () => {
  const user = await currentUser();
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
      purchases: {
        where: {
          userId: user?.id,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const coursesWithProgress: CourseWithProgressWithCategory[] =
    await Promise.all(
      courses.map(async (course) => {
        if (course.purchases.length == 0) {
          return {
            ...course,
            progress: null,
          };
        }
        const progressPercentage = await getProgress(user?.id!, course.id);
        return {
          ...course,
          progress: progressPercentage,
        };
      })
    );

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
      {user ? (
        <ListCourses courses={coursesWithProgress} />
      ) : (
        <ListCourses courses={courses} />
      )}
      <ListTestimonials />
      <BannerStart />
      <ListEvents events={events} />
      <Footer />
    </>
  );
};

export default HomeView;
