"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type Props = {
  label: string;
  href: string;
};

const BackButton: React.FC<Props> = ({ label, href }) => {
  return (
    <Button
      variant="link"
      className="font-normal text-base p-0 text-[#6f3823]"
      asChild>
      <Link href={href} className="flex">
        <ChevronLeft className="w-6 h-6 pr-2" /> {label}
      </Link>
    </Button>
  );
};

export default BackButton;
