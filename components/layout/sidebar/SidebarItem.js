"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({ data }) => {
  const { title, link, icon } = data;

  const pathname = usePathname();

  return (
    <div className="flex h-16 w-full items-center justify-center">
      <div className="tooltip-right" data-tooltip={title}>
        <Link
          href={link}
          className={`flex h-12 w-12 text-xl items-center justify-center rounded-2xl transition-colors duration-300 hover:text-primary-500 hover:bg-primary-100 ${
            pathname === link
              ? "bg-primary-100 text-primary-500 dark:bg-primary-500/10"
              : "text-muted-400"
          } `}>
          <i>{icon}</i>
        </Link>
      </div>
    </div>
  );
};

export default SidebarItem;
