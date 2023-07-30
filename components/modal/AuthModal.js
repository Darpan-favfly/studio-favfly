import { IoClose } from "react-icons/io5";
import LoginBox from "../login/LoginBox";
import RegisterBox from "../register/RegisterBox";

const AuthModal = ({ type }) => {
  return (
    <div className="relative z-[9999]">
      <div className="bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0"></div>
      <div className="fixed inset-0">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div
            id="headlessui-dialog-panel-142"
            className="dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all rounded-lg max-w-md p-4 md:p-6 relative">
            <button
              type="button"
              className="absolute top-2 right-2 flex h-9 w-9 items-center justify-center transition-colors duration-300 disabled:opacity-30 hover:bg-muted-100 dark:hover:bg-muted-700 text-muted-700 dark:text-muted-50 rounded-full">
              <IoClose className="text-2xl fill-current" />
            </button>
            {type == "login" ? <LoginBox /> : <RegisterBox />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
