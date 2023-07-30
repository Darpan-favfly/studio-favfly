import Link from "next/link";

const RegisterForm = () => {
  return (
    <form className="mt-6">
      <div className="mt-5">
        <div>
          <div className="space-y-4">
            <div className="relative">
              <label
                for="ninja-input-214"
                className="pb-1 text-[0.825rem] nui-label w-full">
                Name
              </label>
              <div className="group/nui-input relative">
                <input
                  id="ninja-input-214"
                  type="email"
                  autocomplete="email"
                  className="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-3 h-10 py-2 text-sm leading-5 rounded"
                  placeholder="Name"
                  value=""
                />
              </div>
            </div>
            <div className="relative">
              <label
                for="ninja-input-214"
                className="pb-1 text-[0.825rem] nui-label w-full">
                Email address
              </label>
              <div className="group/nui-input relative">
                <input
                  id="ninja-input-214"
                  type="email"
                  autocomplete="email"
                  className="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-3 h-10 py-2 text-sm leading-5 rounded"
                  placeholder="Email address"
                  value=""
                />
              </div>
            </div>
            <div className="relative">
              <label
                for="ninja-input-215"
                className="pb-1 text-[0.825rem] nui-label w-full">
                Password
              </label>
              <div className="group/nui-input relative">
                <input
                  id="ninja-input-215"
                  type="password"
                  autocomplete="current-password"
                  className="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 rounded"
                  placeholder="Password"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-xs leading-5">
              <a
                href="/auth/recover"
                className="text-primary-600 hover:text-primary-500 font-sans font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="mt-6">
            <div className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                className="is-button rounded bg-primary-500 dark:bg-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-primary-500/50 dark:hover:enabled:shadow-primary-800/20 focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500 !h-11 w-full">
                Sign in
              </button>
            </div>
          </div>
        </div>
        <p className="text-muted-400 mt-4 flex justify-between font-sans text-xs leading-5">
          <span>Already have an account?</span>
          <Link
            href="/login"
            className="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline">
            Please login here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
