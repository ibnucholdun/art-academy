import { currentUser } from "@/lib/auth";
import HomeView from "@/components/home/HomeView";

export default async function Home() {
  const user = await currentUser();
  return <HomeView user={user} />;
}
