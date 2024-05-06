"use client";

import React from "react";
import Link from "next/link";
import { BrushIcon } from "lucide-react";
import UserButton from "@/components/auth/UserButton";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  user: any;
};

const Navbar: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className="bg-[#6F3823] py-4 md:py-6 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          className="text-white text-lg font-bold animate-fade-in-up flex items-center gap-2"
          href="/">
          <BrushIcon className="w-8 h-8 text-white" />
          Art Academy
        </Link>
        <nav className="hidden md:flex items-center space-x-6 animate-fade-in-up">
          {user ? (
            <>
              <Link
                className={cn(
                  "text-white hover:text-gray-300 transition-colors",
                  pathname === "/courses" &&
                    "text-gray-300 underline underline-offset-4"
                )}
                href="/courses">
                Courses
              </Link>
              <Link
                className={cn(
                  "text-white hover:text-gray-300 transition-colors",
                  pathname === "/events" &&
                    "text-gray-300 underline underline-offset-4"
                )}
                href="#">
                Events
              </Link>
              <Link
                className={cn(
                  "text-white hover:text-gray-300 transition-colors",
                  pathname === "/about" &&
                    "text-gray-300 underline underline-offset-4"
                )}
                href="/about">
                About
              </Link>
              <Link
                className={cn(
                  "text-white hover:text-gray-300 transition-colors",
                  pathname === "/contact" &&
                    "text-gray-300 underline underline-offset-4"
                )}
                href="/contact">
                Contact
              </Link>
            </>
          ) : (
            <>
              <Link
                className={cn(
                  "text-white hover:text-gray-300 transition-colors",
                  pathname === "/about" &&
                    "text-gray-300 underline underline-offset-4"
                )}
                href="/about">
                About
              </Link>
              <Link
                className={cn(
                  "text-white hover:text-gray-300 transition-colors",
                  pathname === "/contact" &&
                    "text-gray-300 underline underline-offset-4"
                )}
                href="/contact">
                Contact
              </Link>
            </>
          )}
        </nav>
        {user ? (
          <UserButton user={user} />
        ) : (
          <Button
            className="rounded-full bg-white px-6 py-2 text-sm font-medium text-[#6F3823] transition-colors hover:bg-gray-200 md:px-8 md:py-3 md:text-lg animate-fade-in-up"
            variant="default"
            onClick={() => router.push("/auth/register")}>
            Sign Up
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
