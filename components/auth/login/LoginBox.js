import LoginButton from "../googleLogin/LoginButton";
import LoginForm from "./LoginForm";

const LoginBox = () => {
  return (
    <div>
      <h2 className="font-heading text-3xl font-medium mb-1">Welcome back.</h2>
      <p className="font-alt text-xs font-normal leading-normal text-muted-400 mb-6">
        Login with google or your credentials
      </p>
      <LoginButton title="Login" />
      <div className="flex-100 mt-8 flex items-center">
        <hr className="border-muted-200 dark:border-muted-700 flex-auto border-t-2" />
        <span className="text-muted-600 dark:text-muted-300 px-4 font-sans font-light">
          OR
        </span>
        <hr className="border-muted-200 dark:border-muted-700 flex-auto border-t-2" />
      </div>
      {/* ===== login form ===== */}
      <LoginForm />
    </div>
  );
};

export default LoginBox;
