import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin - Dashboard",
  description: "Admin - Dashboard",
  icons: {
    icon: "/logo.svg",
  },
};

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <>{children}</>;
};

export default Layout;
