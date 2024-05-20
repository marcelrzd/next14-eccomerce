"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type BackButtonType = {
  href: string;
  label: string;
};

export const BackButton = ({ href, label }: BackButtonType) => {
  return (
    <div>
      <Button className="font-medium w-full">
        <Link aria-label={label} href={href}>
          {label}
        </Link>
      </Button>
    </div>
  );
};
