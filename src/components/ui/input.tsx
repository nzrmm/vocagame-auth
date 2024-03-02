import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/libs/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [isShowPassword, setIsShowPassword] = React.useState(false);

    return (
      <div className={cn("relative")}>
        <input
          type={isShowPassword ? "text" : type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />

        {type === "password" && (
          <Button
            size="icon"
            type="button"
            variant="ghost"
            className="absolute inset-y-0 right-0 flex items-center justify-center w-16 h-full text-gray-500"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <Eye /> : <EyeOff />}
          </Button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
