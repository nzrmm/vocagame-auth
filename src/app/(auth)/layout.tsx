import { cn } from "@/libs/utils";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className={cn("min-h-screen")}>{children}</main>;
};

export default AuthLayout;
