"use client";

import React from "react";
import SidebarRoutes from "./SidebarRoutes";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-brown200 to-brown500">
      <div className="p-6">
        <h1 className="text-2xl">Admin Panel</h1>
      </div>
      <div className="flex flex-col w-full justify-between h-full">
        <SidebarRoutes />
        <div className="p-6">
          <Button onClick={() => logout()} className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
