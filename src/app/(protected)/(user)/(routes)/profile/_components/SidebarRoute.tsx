"use client";

import { cn } from "@/lib/utils";
import { Key, User, UserRoundCog } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const SidebarRoute = (props: Props) => {
  const pathname = usePathname();

  return (
    <nav className="grid items-start gap-2 text-sm font-medium text-[#5c4033]">
      <Link
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-[#f5f5f5] dark:hover:bg-[#262626]",
          {
            "bg-[#f5f5f5] dark:bg-[#262626]":
              pathname === "/profile/edit-profile",
          }
        )}
        href="/profile/edit-profile">
        <User className="h-4 w-4" />
        Update Profile
      </Link>
      <Link
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-[#f5f5f5] dark:hover:bg-[#262626]",
          {
            "bg-[#f5f5f5] dark:bg-[#262626]": pathname === "/profile/account",
          }
        )}
        href="/profile/account">
        <UserRoundCog className="h-4 w-4" />
        Account
      </Link>
    </nav>
  );
};

export default SidebarRoute;
