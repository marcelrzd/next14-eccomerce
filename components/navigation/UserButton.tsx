"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export const UserButton = ({ user }: Session) => {
  return (
    <div>
      <button>Login</button> <br />
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};
