import Sidebar from "./_components/Sidebar";
import ContentDashboard from "./_components/ContentDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Academy - Dashboard",
  description: "Art Academy - Dashboard",
  icons: {
    icon: "/logo.svg",
  },
};

type Props = {
  children: React.ReactNode;
};
export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <div className="grid min-h-screen w-full grid-cols-[280px_1fr] bg-[#f5f5f5] dark:bg-[#1a1a1a]">
        <Sidebar />
        <div className="flex flex-col">
          <ContentDashboard>{children}</ContentDashboard>
        </div>
      </div>
    </>
  );
}
