import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ConstructionIcon } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

type Props = {
  label: string;
};

const Header: React.FC<Props> = ({ label }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", poppins.className)}>
        <ConstructionIcon className="mx-auto h-16 w-16 text-gray-500 dark:text-gray-400" />
      </h1>
      <p className="text-muted-foreground text-3xl">{label}</p>
    </div>
  );
};

export default Header;
