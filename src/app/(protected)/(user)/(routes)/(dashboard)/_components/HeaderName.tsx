"use client";

import { BrushIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const activeCourses = ["my-courses"];
const HeaderName = (props: Props) => {
  const pathname = usePathname();
  return (
    <>
      <Link className="lg:hidden" href="/my-dashboard">
        <BrushIcon className="h-6 w-6 text-[#5c4033]" />
        <span className="sr-only">Home</span>
      </Link>
      <div className="w-full flex-1">
        <h1 className="text-lg font-semibold text-[#5c4033] dark:text-white">
          {pathname === "/my-dashboard" && "Dashboard"}
          {activeCourses.includes(pathname.split("/")[1]) && "Courses"}
          {pathname === "/my-events" && "Events"}
        </h1>
      </div>
    </>
  );
};

export default HeaderName;
