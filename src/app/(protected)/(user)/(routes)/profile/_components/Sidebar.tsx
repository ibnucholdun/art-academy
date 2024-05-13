import { BrushIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import SidebarRoute from "./SidebarRoute";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="flex h-full flex-col border-r border-[#e5e5e5] bg-white p-6 dark:border-[#262626] dark:bg-[#1a1a1a]">
      <div className="flex h-[60px] items-center border-b border-slate-300">
        <Link
          className="flex items-center gap-2 font-semibold text-[#5c4033]"
          href="/">
          <BrushIcon className="h-6 w-6" />
          <span className="">Art Academy</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <SidebarRoute />
      </div>
    </div>
  );
};

export default Sidebar;
