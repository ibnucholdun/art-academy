import { signOut } from "@/auth";
import UserButton from "@/components/auth/UserButton";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  user: any;
};

const Navbar: React.FC<Props> = async ({ user }) => {
  return (
    <div className="w-full flex flex-row justify-between py-3 px-[70px] items-center bg-brown600 fixed z-50">
      <Link href={"/"} className="">
        <Image
          src="/logoSerrla.png"
          width={100}
          height={100}
          alt="logo serrla"
          className="w-[50px]"
        />
      </Link>
      <div className="">
        {user ? (
          <ul className="flex gap-10">
            <Link href={"/"} className={` hover:text-[#666666] cursor-default`}>
              Home
            </Link>
            <Link
              href={"/modul"}
              className={` hover:text-[#666666] cursor-default`}>
              Modul
            </Link>
            <Link
              href={"/event"}
              className={` hover:text-[#666666] cursor-default `}>
              Event
            </Link>
            <Link
              href={"/member/dashboard"}
              className={` hover:text-[#666666] cursor-default `}>
              Dashboard
            </Link>
          </ul>
        ) : (
          <ul className="flex gap-10">
            <Link href={"/"} className={` hover:text-[#666666] cursor-default`}>
              Home
            </Link>
            <Link
              href={"/about"}
              className={`hover:text-[#666666] cursor-default `}>
              About
            </Link>
            <Link
              href={"/contact"}
              className={` hover:text-[#666666] cursor-default `}>
              Contact
            </Link>
          </ul>
        )}
      </div>
      {user ? (
        <UserButton user={user} />
      ) : (
        <Button variant="secondary">
          <Link href="/auth/login">Sign In</Link>
        </Button>
      )}
    </div>
  );
};

export default Navbar;
