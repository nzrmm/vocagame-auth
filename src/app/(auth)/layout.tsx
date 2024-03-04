import ToggleTheme from "@/components/toggle-theme";

import { cn } from "@/libs/utils";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={cn("min-h-screen relative")}>
      <div className={cn("absolute top-8 right-8")}>
        <ToggleTheme />
      </div>

      {children}
    </main>
  );
};

export default AuthLayout;
