"use client";

import { cn } from "@/lib/utils";
import { BookIcon, CalendarRange, HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const activeCourse = ["my-courses"];

const SidebarRoute = (props: Props) => {
  const pathname = usePathname();

  return (
    <nav className="grid items-start gap-2 text-sm font-medium text-[#5c4033]">
      <Link
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-[#f5f5f5] dark:hover:bg-[#262626]",
          {
            "bg-[#f5f5f5] dark:bg-[#262626]": pathname === "/my-dashboard",
          }
        )}
        href="/my-dashboard">
        <HomeIcon className="h-4 w-4" />
        Dashboard
      </Link>
      <Link
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-[#f5f5f5] dark:hover:bg-[#262626]",
          {
            "bg-[#f5f5f5] dark:bg-[#262626]": activeCourse.includes(
              pathname.split("/")[1]
            ),
          }
        )}
        href="/my-courses/all">
        <BookIcon className="h-4 w-4" />
        Courses
      </Link>
      <Link
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-[#f5f5f5] dark:hover:bg-[#262626]",
          {
            "bg-[#f5f5f5] dark:bg-[#262626]": pathname === "/my-events",
          }
        )}
        href="/my-events">
        <CalendarRange className="h-4 w-4" />
        Events
      </Link>
    </nav>
  );
};

export default SidebarRoute;
