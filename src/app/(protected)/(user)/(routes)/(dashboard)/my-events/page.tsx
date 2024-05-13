import React from "react";
import DevelopmentCard from "../../events/_components/DevelopmentCard";
import { currentUser } from "@/lib/auth";

type Props = {};

const MyEventsPage = async (props: Props) => {
  const user = await currentUser();

  if (!user?.id && user?.role !== "USER") return null;
  return (
    <div className="h-full flex items-center justify-center ">
      <DevelopmentCard />
    </div>
  );
};

export default MyEventsPage;
