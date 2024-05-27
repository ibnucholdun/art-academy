import React from "react";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Academy - Courses",
  description: "Art Academy - Courses",
  icons: {
    icon: "/logo.svg",
  },
};

type Props = {
  children: React.ReactNode;
};

const UserLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default UserLayout;
