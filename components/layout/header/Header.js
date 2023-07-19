"use client";

import { usePathname } from "next/navigation";

// ===== import icons =====
import {
  FiAirplay,
  FiFileText,
  FiFile,
  FiUsers,
  FiGift,
  FiGlobe,
  FiSlack,
  FiSettings,
} from "react-icons/fi";
import { BiRocket } from "react-icons/bi";

import RightMenu from "./RightMenu";

const Header = () => {
  const pathname = usePathname();

  const items = [
    { title: "Dashboard", link: "/", icon: <FiAirplay /> },
    { title: "Projects", link: "/projects", icon: <BiRocket /> },
    { title: "Clients", link: "/clients", icon: <FiUsers /> },
    { title: "Companies", link: "/companies", icon: <FiGlobe /> },
    { title: "Invoices", link: "/invoices", icon: <FiFileText /> },
    { title: "Quotes", link: "/quotes", icon: <FiFile /> },
    { title: "Referrals", link: "/referrals", icon: <FiGift /> },
    { title: "Team Members", link: "/members", icon: <FiSlack /> },
  ];

  return (
    <div className="px-4 lg:px-10 xl:max-w-[calc(100%_-_80px)] lg:ms-[80px] sticky top-0 z-50 mb-5 flex h-16 items-center gap-2 border-b border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800">
      {items
        ?.filter((item) => item?.link == pathname)
        .map((item, index) => (
          <h6
            key={index}
            className="flex font-heading text-lg font-light leading-normal text-muted-800 dark:text-white">
            <span className="h-100 flex items-center justify-center text-primary-500 me-2 text-2xl">
              {item?.icon}
            </span>
            {item?.title}
          </h6>
        ))}
      <div className="ms-auto"></div>
      <RightMenu />
    </div>
  );
};

export default Header;
