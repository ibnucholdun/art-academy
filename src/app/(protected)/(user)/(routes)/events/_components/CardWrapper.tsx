"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

import Header from "./Header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
};

const CardWrapper: React.FC<Props> = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
}) => {
  const router = useRouter();
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button onClick={() => router.push(backButtonHref)} className="mx-auto">
          {backButtonLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
