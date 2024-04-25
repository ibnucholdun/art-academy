"use client";

import { Book, CalendarRange, Layout, Users } from "lucide-react";
import SidebarItem from "./SidebarItem";

const routes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    icon: Users,
    label: "Users",
    href: "/admin/users",
  },
  {
    icon: Book,
    label: "Courses",
    href: "/admin/courses",
  },
  {
    icon: CalendarRange,
    label: "Events",
    href: "/admin/events",
  },
];

const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
