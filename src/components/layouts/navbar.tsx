"use client";

import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SidebarMobile } from "@/components/layouts";

import { cn } from "@/libs/utils";
import { logout } from "@/actions/logout";

const Navbar = () => {
  const onClick = () => {
    logout();
  };

  return (
    <nav
      className={cn(
        "h-[80px] sticky top-0 flex items-center border-b bg-white shadow-sm p-4 "
      )}
    >
      <SidebarMobile />

      <div className={cn("flex items-center gap-2 ml-auto")}>
        <Button size="sm" variant="ghost" onClick={onClick}>
          <LogOut className={cn("w-4 h-4 mr-2")} /> Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
