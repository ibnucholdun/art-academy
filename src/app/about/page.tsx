import React from "react";
import Navbar from "../(protected)/(user)/_components/Navbar";
import Footer from "../(protected)/(user)/_components/Footer";
import BannerSection from "./_components/BannerSection";
import Image from "next/image";
import StorySection from "./_components/StorySection";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen\">
        <BannerSection />
        <div className="flex flex-col items-center justify-center text-brown900 w-7/12 mx-auto my-16 gap-y-16">
          <p className="text-xl text-center font-bold">
            At Art Academy, we’ve seen again and again how the seemingly simple
            act of creating can be a force for growth, change, and discovery in
            people’s lives. We want to inspire and multiply the kind of creative
            exploration that furthers expression, learning and application.
          </p>
          <p className="text-xl text-center font-bold">
            Art Academy is an online learning community with thousands of
            classes for creative and curious people, on topics including
            illustration, design, photography, video, freelancing, and more. On
            Art Academy, members come together to find inspiration and take the
            next step in their creative journey.
          </p>
          <h1 className="text-3xl font-bold">At Art Academy, We Empower:</h1>
          <div className="flex justify-around w-full">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/member.svg"
                alt="member"
                width={100}
                height={100}
              />
              <h3 className="text-2xl font-bold mt-6">Members to</h3>
              <ul className="text-center mt-4">
                <li className="text-lg font-medium">Get inspired.</li>
                <li className="text-lg font-medium">Learn new skills.</li>
                <li className="text-lg font-medium">Make discoveries.</li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/teacher.svg"
                alt="member"
                width={100}
                height={100}
              />
              <h3 className="text-2xl font-bold mt-6">Teachers to</h3>
              <ul className="text-center mt-4">
                <li className="text-lg font-medium">Share expertise.</li>
                <li className="text-lg font-medium">Earn money.</li>
                <li className="text-lg font-medium">Give back.</li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/employe.svg"
                alt="member"
                width={100}
                height={100}
              />
              <h3 className="text-2xl font-bold mt-6">Employees to</h3>
              <ul className="text-center mt-4">
                <li className="text-lg font-medium">Be curious.</li>
                <li className="text-lg font-medium">Make an impact.</li>
                <li className="text-lg font-medium">Live a full life.</li>
              </ul>
            </div>
          </div>
        </div>
        <StorySection />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
