"use client";

import { Menu } from "lucide-react";

import { Sidebar } from "@/components/layouts";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import { cn } from "@/libs/utils";

const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className={cn("md:hidden hover:opacity-75 transition")}>
        <Menu />
      </SheetTrigger>

      <SheetContent side={"left"} className={cn("p-0 bg-white w-[250px]")}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobile;
