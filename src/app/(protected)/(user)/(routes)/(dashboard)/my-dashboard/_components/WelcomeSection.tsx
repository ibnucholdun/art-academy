import { currentUser } from "@/lib/auth";
import React from "react";

type Props = {};

const WelcomeSection = async (props: Props) => {
  const user = await currentUser();
  return (
    <div className="space-y-2 bg-brown500/30 p-12 rounded-md">
      <h2 className="text-4xl font-semibold text-[#5c4033] dark:text-white">
        Welcome back, {user?.name}!
      </h2>
      <p className="text-[#5c4033] dark:text-[#ccc]">
        Start studying again. Here&apos;s a quick overview of your current
        course.
      </p>
    </div>
  );
};

export default WelcomeSection;
