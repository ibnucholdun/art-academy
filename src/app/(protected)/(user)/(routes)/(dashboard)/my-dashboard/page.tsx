import React from "react";
import WelcomeSection from "./_components/WelcomeSection";
import ListCourses from "./_components/ListCourses";

type Props = {};

const MyDashboardPage = (props: Props) => {
  return (
    <>
      <WelcomeSection />
      <h3 className="text-2xl font-semibold text-[#5c4033] dark:text-white">
        Continue Course
      </h3>
      <ListCourses />
    </>
  );
};

export default MyDashboardPage;
