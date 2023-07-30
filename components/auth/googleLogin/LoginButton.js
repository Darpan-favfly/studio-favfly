import { FcGoogle } from "react-icons/fc";

const LoginButton = ({ title }) => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <button className="dark:bg-muted-700 text-muted-800 border-muted-300 dark:border-muted-600 nui-focus relative inline-flex grow items-center justify-center gap-2 rounded border bg-white px-6 py-4 dark:text-white">
        <FcGoogle className="icon h-5 w-5" />
        <div>{title} with Google</div>
      </button>
    </div>
  );
};

export default LoginButton;
