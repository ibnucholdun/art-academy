import { currentRole, currentUser } from "@/lib/auth";
import HomeView from "@/components/home/HomeView";
import DashboardAdmin from "@/components/admin/DashboardAdmin";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  const role = await currentRole();

  if (role === "ADMIN") {
    redirect("/admin");
  }

  return <HomeView user={user} />;
}
