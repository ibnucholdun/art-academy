import React from "react";
import Link from "next/link";
import { BrushIcon } from "lucide-react";
import UserButton from "@/components/auth/UserButton";
import { Button } from "@/components/ui/button";

type Props = {
  user: any;
};

const Navbar: React.FC<Props> = async ({ user }) => {
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
                className="text-white hover:text-gray-300 transition-colors"
                href="#">
                Courses
              </Link>
              <Link
                className="text-white hover:text-gray-300 transition-colors"
                href="#">
                Workshops
              </Link>
              <Link
                className="text-white hover:text-gray-300 transition-colors"
                href="#">
                About
              </Link>
              <Link
                className="text-white hover:text-gray-300 transition-colors"
                href="#">
                Contact
              </Link>
            </>
          ) : (
            <>
              <Link
                className="text-white hover:text-gray-300 transition-colors"
                href="#">
                About
              </Link>
              <Link
                className="text-white hover:text-gray-300 transition-colors"
                href="#">
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
            variant="default">
            <Link href="/auth/register">Sign Up</Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
