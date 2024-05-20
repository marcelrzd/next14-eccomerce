"use client";

import { AuthCard } from "./AuthCard";

export const LoginForm = () => {
  return (
    <AuthCard
      cardTitle="Welcome Back!"
      backButtonHref="/auth/register"
      backButtonLabel="Create a new account"
      showSocials
    >
      <div>jose</div>
    </AuthCard>
  );
};
