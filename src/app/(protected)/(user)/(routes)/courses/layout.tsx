import React from "react";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";

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
