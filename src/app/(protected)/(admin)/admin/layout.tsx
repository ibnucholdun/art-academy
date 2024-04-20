import React from "react";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

type Props = { children: React.ReactNode };

const AdminDashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50 md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56  flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 h-full pt-[80px] md:p-6">{children}</main>
    </div>
  );
};

export default AdminDashboardLayout;
