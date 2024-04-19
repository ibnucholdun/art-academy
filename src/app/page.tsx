import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();
  return (
    <>
      {user ? (
        <form
          action={async () => {
            "use server";

            await signOut();
          }}>
          <Button type="submit">Sign out</Button>
        </form>
      ) : (
        <Button variant="secondary" size="lg">
          <Link href="/auth/login">Sign In</Link>
        </Button>
      )}
    </>
  );
}
