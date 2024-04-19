import Navbar from "@/app/(protected)/(user)/_components/Navbar";
import React from "react";

type Props = {
  user: any;
};

const HomeView: React.FC<Props> = ({ user }) => {
  return <Navbar user={user} />;
};

export default HomeView;
