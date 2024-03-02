import { LoginForm } from "@/containers/login-page";

import { cn } from "@/libs/utils";

const LoginPage = () => {
  return (
    <div className={cn("h-screen grid grid-cols-2")}>
      <div className={cn("bg-primary flex justify-center items-center p-16")}>
        <div className={cn("text-white text-center w-2/3")}>
          <h1 className={cn("uppercase text-5xl font-extrabold mb-8")}>
            Lorem
          </h1>
          <p>
            &quot;Neque porro quisquam est qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit...&quot;
          </p>
          <p>
            &quot;There is no one who loves pain itself, who seeks after it and
            wants to have it, simply because it is pain...&quot;
          </p>
        </div>
      </div>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
