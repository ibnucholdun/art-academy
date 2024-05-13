import React from "react";
import Link from "next/link";
import { BrushIcon } from "lucide-react";
import UserButton from "@/components/auth/UserButton";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { currentUser } from "@/lib/auth";
import NavbarListItem from "./NavbarListItem";

type Props = {};

const Navbar: React.FC<Props> = async () => {
  const user = await currentUser();
  return (
    <header className="bg-[#6F3823] py-4 md:py-6 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          className="text-white text-lg font-bold animate-fade-in-up flex items-center gap-2"
          href="/">
          <BrushIcon className="w-8 h-8 text-white" />
          Art Academy
        </Link>
        <NavbarListItem user={user} />
      </div>
    </header>
  );
};

export default Navbar;
