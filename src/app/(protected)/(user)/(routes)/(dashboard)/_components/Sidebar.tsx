import React from "react";
import SidebarRoute from "./SidebarRoute";
import { currentUser } from "@/lib/auth";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil } from "lucide-react";
import Link from "next/link";

type Props = {};

const Sidebar = async (props: Props) => {
  const user: any = await currentUser();
  return (
    <div className="flex h-full flex-col border-r border-[#e5e5e5] bg-white p-6 dark:border-[#262626] dark:bg-[#1a1a1a]">
      <div className="flex h-[120px] items-center justify-center relative">
        <Avatar className="h-[80px] w-[80px]">
          {user.image === null ? (
            <AvatarFallback className="text-4xl">
              {user?.name[0].toUpperCase()}
            </AvatarFallback>
          ) : (
            <AvatarImage src={user?.image} />
          )}
        </Avatar>
        <Link
          href="/profile"
          className=" absolute top-0 right-0 border-2 p-1 rounded-md">
          <Pencil className=" text-[#5c4033]  h-5 w-5" />
        </Link>
      </div>
      <p className="text-lg font-semibold text-[#5c4033] dark:text-white text-center">
        {user?.name}
      </p>
      <div className="flex-1 overflow-auto py-4">
        <SidebarRoute />
      </div>
    </div>
  );
};

export default Sidebar;
