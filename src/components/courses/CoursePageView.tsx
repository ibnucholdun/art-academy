import SearchInput from "../SearchInput";
import Categories from "./Categories";
import CoursesList from "./CourseList";
import HeroSectionCarousel from "./HeroSectionCarousel";

type Props = {
  user: any;
  categories: any;
  courses: any;
};

const CoursePageView = ({ user, categories, courses }: Props) => {
  return (
    <>
      <HeroSectionCarousel user={user} />
      <div className="flex items-center justify-between my-5">
        <Categories items={categories} />
        <SearchInput />
      </div>
      <CoursesList items={courses} />
    </>
  );
};

export default CoursePageView;
