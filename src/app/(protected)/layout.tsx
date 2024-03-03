import { Navbar, Sidebar } from "@/components/layouts";
import { cn } from "@/libs/utils";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn("antialiased min-h-screen")}>
      <div className={cn("flex")}>
        <div className={cn("hidden md:block")}>
          <Sidebar />
        </div>

        <div className={cn("flex-1")}>
          <Navbar />
          <main className={cn("p-4")}>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
