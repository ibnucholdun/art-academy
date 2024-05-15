import { currentUser } from "@/lib/auth";
import React from "react";
import HeaderName from "./HeaderName";
import UserButton from "@/components/auth/UserButton";

type Props = {
  children: React.ReactNode;
};

const ContentDashboard = async ({ children }: Props) => {
  const user = await currentUser();
  return (
    <>
      <header className="flex py-6 items-center gap-4 border-b border-[#e5e5e5] bg-white px-8 dark:border-[#262626] dark:bg-[#1a1a1a]">
        <HeaderName />
        <UserButton user={user} />
      </header>
      <main className="flex flex-1 flex-col gap-7 p-6">{children}</main>
    </>
  );
};

export default ContentDashboard;
