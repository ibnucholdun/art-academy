import React from "react";
import ListFilter from "./_components/ListFilter";

type Props = { children: React.ReactNode };

const MyCoursesLayout = ({ children }: Props) => {
  return (
    <>
      <ListFilter />
      {children}
    </>
  );
};

export default MyCoursesLayout;
