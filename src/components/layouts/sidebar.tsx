"use client";

import { Home, CircleUserRound } from "lucide-react";

import Logo from "@/components/logo";
import { SidebarItem } from "@/components/layouts";
import { cn } from "@/libs/utils";

const routes = [
  // {
  //   icon: Home,
  //   label: "Dashboard",
  //   href: "/",
  // },
  {
    icon: CircleUserRound,
    label: "Profile",
    href: "/profile",
  },
];

const Sidebar = () => {
  return (
    <aside
      className={cn(
        "sticky top-0 w-[250px] h-screen border-r bg-white shadow-sm"
      )}
    >
      <div className={cn("px-6 py-4")}>
        <Logo size="small" />
      </div>

      <div className={cn("flex flex-col py-2")}>
        {routes.map((route) => {
          return <SidebarItem key={route.href} {...route} />;
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
