import { RegisterForm } from "@/containers/register-page";

import { cn } from "@/libs/utils";

const RegisterPage = () => {
  return (
    <div
      className={cn(
        "min-h-screen md:bg-primary flex justify-center items-center md:p-16"
      )}
    >
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
