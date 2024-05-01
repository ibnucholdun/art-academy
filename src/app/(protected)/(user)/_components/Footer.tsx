import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#6F3823] py-8 md:py-12 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white animate-fade-in-up">
          © 2024 Art Academy. All rights reserved.
        </div>
        <nav className="mt-4 md:mt-0 flex items-center space-x-6 animate-fade-in-up">
          <Link
            className="text-white hover:text-gray-200 transition-colors"
            href="#">
            Terms of Service
          </Link>
          <Link
            className="text-white hover:text-gray-200 transition-colors"
            href="#">
            Privacy Policy
          </Link>
          <Link
            className="text-white hover:text-gray-200 transition-colors"
            href="#">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
