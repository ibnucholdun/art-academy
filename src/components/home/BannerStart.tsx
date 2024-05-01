"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {};

const BannerStart = (props: Props) => {
  const router = useRouter();
  return (
    <section className="bg-[#6F3823] py-16 md:py-24 lg:py-32 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Ready to Start Your Art Journey?
          </h2>
          <p className="mt-4 text-lg text-white md:text-xl">
            Sign up for our art education platform and unlock your creative
            potential.
          </p>
          <div className="mt-8 animate-fade-in-up">
            <Button
              className="rounded-full bg-white px-8 py-3 text-lg font-medium text-[#6F3823] transition-colors hover:bg-gray-200"
              onClick={() => router.push("/auth/register")}>
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerStart;
