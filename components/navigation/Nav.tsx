import { auth } from "@/server/auth";
import { UserButton } from "./UserButton";

export default async function Nav() {
  const session = await auth();
  console.log(session);
  if (session)
    return (
      <header className=" py-4 bg-gray-500 text-white">
        <nav>
          <ul className="flex justify-between">
            <li>Logo</li>
            <li>
              <UserButton user={session?.user} expires={session?.expires} />
            </li>
          </ul>
        </nav>
      </header>
    );
}
