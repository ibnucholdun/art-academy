import React from "react";
import Navbar from "../(protected)/(user)/_components/Navbar";
import Footer from "../(protected)/(user)/_components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Academy - Contact",
  description: "Art Academy - Contact",
  icons: {
    icon: "/logo.svg",
  },
};

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="bg-gray400">
          <h1 className="text-4xl font-semibold text-center p-10">Contact</h1>
        </div>
        <div className="container my-10">
          <div className="w-full bg-gray400 border rounded-lg p-10">
            <div className="flex flex-row gap-28">
              <div className="flex flex-row gap-3 w-1/3 justify-center">
                <i className="bx bx-map text-xl"></i>
                <div className="flex flex-col gap-3 text-center">
                  <h3 className="text-lg font-medium">Address</h3>
                  <p className="text-sm font-light text-justify">
                    Jl. Durian Raya No. 30A, RT. 4/RW. 4 Jagakarsa, Jakarta
                    Selatan, Daerah Khusus Ibukota Jakarta 12620
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3 w-1/3 justify-center text-center">
                <i className="bx bx-phone text-xl"></i>
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-medium">Telepon</h3>
                  <p className="text-sm font-light text-justify">
                    (021) 29517702
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3 w-1/3 justify-center text-center">
                <i className="bx bx-envelope text-xl"></i>
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-medium">E-mail</h3>
                  <p className="text-sm font-light text-justify">
                    info@serrla.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 shadow-xl rounded-2xl">
              <iframe
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Jl. Durian Raya No. 30A, RT. 4/RW. 4 Jagakarsa, Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12620  &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="w-full h-[400px]"></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
