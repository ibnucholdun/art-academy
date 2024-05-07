import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";
import { DataTable } from "./_components/DataTabel";
import { columns } from "./_components/Columns";
import prisma from "@/lib/prisma";

type Props = {};

const AdminEventsPage = async (props: Props) => {
  const user = await currentUser();

  if (!user?.id && user?.role !== "ADMIN") return redirect("/");

  const event = await prisma.event.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-6">
      <DataTable columns={columns} data={event} />
    </div>
  );
};

export default AdminEventsPage;
