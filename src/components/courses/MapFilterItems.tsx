"use client";

import React, { useCallback } from "react";
import { categoryItems } from "@/lib/categoryItems";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

type Props = {};

const MapFilterItems = (props: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="w-full flex justify-center items-center mt-5">
      <div className="flex gap-x-10  w-full">
        {categoryItems.map((item) => (
          <Link
            href={pathname + "?" + createQueryString("filter", item.name)}
            key={item.id}
            className={cn(
              search === item.name
                ? "border-b-2 border-black pb-2 flex-shrink-0"
                : "opacity-70 flex-shrink-0",
              "flex flex-col gap-y-3 items-center"
            )}>
            <div className="relative w-6 h-6">
              <Image
                src={item.image}
                alt={item.title}
                className="w-6 h-6"
                width={24}
                height={24}
              />
            </div>
            <p className="text-xs font-medium">{item.title}</p>
          </Link>
        ))}
      </div>
      {/* <Input className="w-full" placeholder="Search" /> */}
    </div>
  );
};

export default MapFilterItems;
