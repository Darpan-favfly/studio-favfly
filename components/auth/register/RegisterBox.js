import LoginButton from "../googleLogin/LoginButton";
import RegisterForm from "./RegisterForm";

const RegisterBox = () => {
  return (
    <div>
      <h2 className="font-heading text-3xl font-medium mb-1">Sign up now!</h2>
      <p className="font-alt text-xs font-normal leading-normal text-muted-400 mb-6">
        Sign up with gmail or your credentials
      </p>
      <LoginButton title="Signup" />
      <div className="flex-100 mt-8 flex items-center">
        <hr className="border-muted-200 dark:border-muted-700 flex-auto border-t-2" />
        <span className="text-muted-600 dark:text-muted-300 px-4 font-sans font-light">
          OR
        </span>
        <hr className="border-muted-200 dark:border-muted-700 flex-auto border-t-2" />
      </div>

      {/* ===== register form ===== */}
      <RegisterForm />
    </div>
  );
};

export default RegisterBox;
