import { auth } from "@/server/auth";
import { UserButton } from "./UserButton";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";

export default async function Nav() {
  const session = await auth();
  console.log("session", session);
  return (
    <header className=" py-4 bg-gray-500 text-white">
      <nav>
        <ul className="flex justify-between">
          <li>Logo</li>
          {!session ? (
            <li>
              <Button asChild>
                <Link href="api/auth/signin" className="flex gap-2">
                  <LogIn size={16} />
                  <span> Login</span>
                </Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton user={session?.user} expires={session?.expires} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
