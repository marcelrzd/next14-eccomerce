"use server";

import { createSafeActionClient } from "next-safe-action";
import { LoginSchema } from "@/types/login-schema";
import { users } from "../schema";
import { eq } from "drizzle-orm";
import { db } from "..";

const action = createSafeActionClient();

export const emailSignIn = action(
  LoginSchema,
  async ({ email, password, code }) => {
    // check if user is on db
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser?.email !== email) {
      throw new Error("Email not found!");
    }

    // if(!existingUser?.emailVerified){}

    console.log(email, password, code);
    return { success: email };
  }
);
