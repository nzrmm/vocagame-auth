import { cn } from "@/libs/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
  size?: "small" | "large";
};

const Logo = ({ size = "large", className, ...props }: Props) => {
  return (
    <div
      className={cn(
        "w-14 h-14 bg-primary/20",
        "flex items-center justify-center",
        {
          "w-14 h-14 rounded-xl": size === "large",
          "w-10 h-10 rounded-sm": size === "small",
        },
        className
      )}
      {...props}
    >
      <span
        className={cn(" font-semibold text-primary", {
          "text-3xl": size === "large",
          "text-xl": size === "small",
        })}
      >
        V
      </span>
    </div>
  );
};

export default Logo;
