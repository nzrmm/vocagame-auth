"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/libs/utils";

type Props = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const SidebarItem = ({ icon: Icon, label, href }: Props) => {
  const pathname = usePathname();

  const isActive = () => {
    if (href === "/" && pathname === href) return true;
    if (href !== "/" && pathname.includes(href)) return true;

    return false;
  };

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 text-slate-500 pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        {
          "font-medium text-primary bg-primary/20 hover:bg-primary/20 hover:text-primary border-r-4 border-primary":
            isActive(),
        }
      )}
    >
      <div className={cn("flex items-center gap-2 py-4")}>
        <Icon
          size={22}
          className={cn("text-slate-500", {
            "text-primary": isActive(),
          })}
        />
        {label}
      </div>
    </Link>
  );
};

export default SidebarItem;
