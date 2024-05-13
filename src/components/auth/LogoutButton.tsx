"use client";

import { logout } from "@/actions/logout";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const LogoutButton: React.FC<Props> = ({ children }) => {
  const onClick = () => {
    logout();
  };
  return (
    <span onClick={onClick} className="cursor-pointer flex w-full">
      {children}
    </span>
  );
};

export default LogoutButton;
