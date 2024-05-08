import { currentRole, currentUser } from "@/lib/auth";
import HomeView from "@/components/home/HomeView";
import { redirect } from "next/navigation";

export default async function Home() {
  const role = await currentRole();

  if (role === "ADMIN") {
    redirect("/admin/dashboard");
  }

  return <HomeView />;
}
