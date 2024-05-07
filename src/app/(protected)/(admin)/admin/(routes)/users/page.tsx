import { getUserAll } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { columns } from "../../_components/Coloums";
import React from "react";
import { DataTable } from "../../_components/DataTabel";

type Props = {};

const AdminUserPage = async (props: Props) => {
  const user = await currentUser();

  if (!user?.id) redirect("/");
  if (user?.role !== "ADMIN") redirect("/");

  const users = (await getUserAll()) || [];

  return (
    <div className="p-6">
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default AdminUserPage;
