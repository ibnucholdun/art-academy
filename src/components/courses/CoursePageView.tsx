import HeroSectionCarousel from "./HeroSectionCarousel";
import MapFilterItems from "./MapFilterItems";
import { Suspense } from "react";
import ListCourses from "./ListCourses";

type Props = {
  user: any;
  searchParams?: {
    filter?: string;
  };
};

const CoursePageView = ({ user, searchParams }: Props) => {
  return (
    <>
      <HeroSectionCarousel user={user} />
      <MapFilterItems />

      <Suspense fallback={<div>Loading...</div>} key={searchParams?.filter}>
        <ListCourses searchParams={searchParams} />
      </Suspense>
    </>
  );
};

export default CoursePageView;
