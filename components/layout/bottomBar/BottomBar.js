import Link from "next/link";

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
import BottomBarItem from "./BottomBarItem";

const BottomBar = () => {
  const navItems = [
    { title: "Dashboard", link: "/", icon: <FiAirplay /> },
    { title: "Projects", link: "/projects", icon: <BiRocket /> },
    { title: "Clients", link: "/clients", icon: <FiUsers /> },
    { title: "Companies", link: "/companies", icon: <FiGlobe /> },
    { title: "Invoices", link: "/invoices", icon: <FiFileText /> },
    { title: "Quotes", link: "/quotes", icon: <FiFile /> },
    { title: "Referrals", link: "/referrals", icon: <FiGift /> },
    { title: "Team Members", link: "/team-members", icon: <FiSlack /> },
  ];

  return (
    <div className="fixed start-0 bottom-0 z-[60] flex items-center lg:hidden w-full h-[80px] border-muted-200 dark:border-muted-700 dark:bg-muted-800 border-t bg-white transition-all duration-300 overflow-x-auto px-4">
      {navItems.map((item, index) => (
        <BottomBarItem key={index} data={item} />
      ))}
    </div>
  );
};

export default BottomBar;
