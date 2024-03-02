import { cn } from "@/libs/utils";
import { ComponentProps } from "react";

const Logo = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "w-14 h-14 rounded-xl bg-primary/20",
        "flex items-center justify-center",
        className
      )}
      {...props}
    >
      <span className={cn("text-3xl font-semibold text-primary")}>V</span>
    </div>
  );
};

export default Logo;
