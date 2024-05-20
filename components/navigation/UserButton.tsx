"use client";

import { LogOut } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export const UserButton = ({ user }: Session) => {
  return (
    <div>
      <Button onClick={() => signOut()}>
        <LogOut size={16} /> LogOut
      </Button>
    </div>
  );
};
