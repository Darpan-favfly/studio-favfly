import { HiArrowLongLeft } from "react-icons/hi2";
import LoginBox from "./LoginBox";
import Link from "next/link";

const LoginSection = () => {
  return (
    <div className="dark:bg-muted-800 flex min-h-screen bg-white">
      <div className="relative flex flex-1 flex-col justify-center px-6 py-12 lg:w-2/5 lg:flex-none">
        <div className="dark:bg-muted-800 relative mx-auto w-full max-w-sm bg-white">
          <div className="flex w-full items-center justify-between mb-8">
            <Link
              href="/"
              className="text-muted-400 hover:text-primary-500 flex items-center gap-2 font-sans font-medium transition-colors duration-300">
              <HiArrowLongLeft />
              <span>Back to Home</span>
            </Link>
          </div>
          <LoginBox />
        </div>
      </div>
      <div className="bg-muted-100 dark:bg-muted-900 relative hidden w-0 flex-1 items-center justify-center lg:flex lg:w-3/5">
        <div className="mx-auto w-full max-w-4xl">
          <img
            className="max-w-md mx-auto"
            src="https://tairo.cssninja.io/img/illustrations/magician.svg"
            alt=""
            width="500"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
