"use client";
import { useEffect, useState } from "react";
import { FiBell, FiSun, FiMoon } from "react-icons/fi";
import UserRightMenu from "./UserRightMenu";

const RightMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex items-center gap-2 h-16">
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        type="button"
        className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white transition-all duration-300 nui-focus text-yellow-300">
        {isDarkMode ? <FiMoon /> : <FiSun />}
      </button>
      <button
        type="button"
        className="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4 text-muted-400">
        <FiBell />
      </button>

      <div className="group inline-flex items-center justify-center text-right">
        <div className="relative h-9 w-9 text-left">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
            type="button">
            <img
              src="https://tairo.cssninja.io/img/avatars/2.svg"
              className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
              alt=""
            />
          </button>
          {showUserMenu && <UserRightMenu />}
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
