import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin - Users Management",
  description: "Admin - Users Management",
  icons: {
    icon: "/logo.svg",
  },
};

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const UsersLayout: React.FC<Props> = ({ children, modal }) => {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
};

export default UsersLayout;
