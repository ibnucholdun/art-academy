"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const ListFilter = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-8 ">
      <Link
        href="/my-courses/all"
        className={cn(
          pathname === "/my-courses/all"
            ? "font-bold underline underline-offset-2 decoration-2 decoration-brown500 text-brown900"
            : ""
        )}>
        All Courses
      </Link>
      <Link
        href="/my-courses/in-progress"
        className={cn(
          pathname === "/my-courses/in-progress"
            ? "font-bold underline underline-offset-2 decoration-2 decoration-brown500 text-brown900"
            : ""
        )}>
        In Progress
      </Link>
      <Link
        href="/my-courses/completed"
        className={cn(
          pathname === "/my-courses/completed"
            ? "font-bold underline underline-offset-2 decoration-2 decoration-brown500 text-brown900"
            : ""
        )}>
        Completed
      </Link>
    </div>
  );
};

export default ListFilter;
