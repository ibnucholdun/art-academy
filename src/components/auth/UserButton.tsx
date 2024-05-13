"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Home, LayoutDashboard, LogOut, User } from "lucide-react";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  user: any;
};

const UserButton: React.FC<Props> = ({ user }) => {
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {user.image === null ? (
            <AvatarFallback>{user?.name[0].toUpperCase()}</AvatarFallback>
          ) : (
            <AvatarImage src={user?.image} />
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem className="hover:bg-white">
          <div className="flex items-center justify-center gap-x-2">
            <Avatar>
              {user.image === null ? (
                <AvatarFallback>{user?.name[0].toUpperCase()}</AvatarFallback>
              ) : (
                <AvatarImage src={user?.image} />
              )}
            </Avatar>
            <p className="">{user?.name}</p>
          </div>
        </DropdownMenuItem>
        <hr className="my-2 h-px border-0 bg-slate-300" />
        <DropdownMenuItem className="hover:bg-white">
          {pathname === "/my-dashboard" ? (
            <>
              <Home className="mr-2 h-4 w-4" />
              <Link href="/">Back to Home</Link>
            </>
          ) : (
            <>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link href="/my-dashboard">Dashboard</Link>
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-white ">
          <User className="mr-2 h-4 w-4" />
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <LogoutButton>
          <DropdownMenuItem className="hover:bg-white">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
