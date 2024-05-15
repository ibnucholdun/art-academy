"use client";

import { BrushIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const HeaderName = (props: Props) => {
  const pathname = usePathname();
  return (
    <>
      <Link className="lg:hidden" href="/profile/edit-profile">
        <BrushIcon className="h-6 w-6 text-[#5c4033]" />
        <span className="sr-only">Home</span>
      </Link>
      <div className="w-full flex-1">
        <h1 className="text-lg font-semibold text-[#5c4033] dark:text-white">
          {pathname === "/profile/edit-profile" && "Edit Profile"}
          {pathname === "/profile/account" && "Account"}
        </h1>
      </div>
    </>
  );
};

export default HeaderName;
