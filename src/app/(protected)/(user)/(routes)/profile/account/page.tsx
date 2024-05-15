import React from "react";
import EmailForm from "./_components/EmailForm";
import { currentUser } from "@/lib/auth";

type Props = {};

const AccountPage = async (props: Props) => {
  const user = await currentUser();

  if (!user?.id && user?.role !== "USER") return null;
  return (
    <>
      <EmailForm user={user} />
    </>
  );
};

export default AccountPage;
