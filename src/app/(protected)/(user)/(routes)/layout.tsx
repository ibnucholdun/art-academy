import React from "react";
import Navbar from "../_components/Navbar";
import { currentUser } from "@/lib/auth";
import Footer from "../_components/Footer";

type Props = {
  children: React.ReactNode;
};

const UserLayout = async ({ children }: Props) => {
  const user = await currentUser();
  return (
    <>
      <Navbar user={user} />
      <div className="min-h-screen container mx-auto my-12">{children}</div>
      <Footer />
    </>
  );
};

export default UserLayout;
