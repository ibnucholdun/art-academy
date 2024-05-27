import { DataTable } from "./_components/DataTabel";
import { columns } from "./_components/Columns";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { currentUser } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Courses Management",
  description: "Admin - Courses Management",
  icons: {
    icon: "/logo.svg",
  },
};

const CoursesAdminPage = async () => {
  const user = await currentUser();

  if (!user?.id) return redirect("/");

  const courses = await prisma.course.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesAdminPage;
