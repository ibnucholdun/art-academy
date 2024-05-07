import HeroSectionCarousel from "./HeroSectionCarousel";

type Props = {
  user: any;
};

const CoursePageView = ({ user }: Props) => {
  return (
    <>
      <HeroSectionCarousel user={user} />
    </>
  );
};

export default CoursePageView;
