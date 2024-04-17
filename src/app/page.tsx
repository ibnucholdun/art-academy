import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Button variant="secondary" size="lg">
      <Link href="/auth/login">Sign In</Link>
    </Button>
  );
}
