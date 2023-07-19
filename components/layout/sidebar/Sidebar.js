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
  FiBriefcase,
  FiLayout,
} from "react-icons/fi";
import { BiRocket } from "react-icons/bi";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const topItems = [
    { title: "Dashboard", link: "/", icon: <FiAirplay /> },
    { title: "Projects", link: "/projects", icon: <BiRocket /> },
    { title: "Clients", link: "/clients", icon: <FiUsers /> },
    { title: "Companies", link: "/companies", icon: <FiGlobe /> },
    { title: "Services", link: "/services", icon: <FiBriefcase /> },
    { title: "Invoices", link: "/invoices", icon: <FiFileText /> },
    { title: "Quotes", link: "/quotes", icon: <FiFile /> },
    { title: "Referrals", link: "/referrals", icon: <FiGift /> },
    { title: "Team Members", link: "/team-members", icon: <FiSlack /> },
    { title: "Studio", link: "/studio", icon: <FiLayout /> },
  ];

  const bottomItems = [
    { title: "Settings", link: "/settings", icon: <FiSettings /> },
  ];

  return (
    <div className="pointer-events-none fixed start-0 top-0 z-[60] hidden lg:flex h-full">
      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r bg-white transition-all duration-300">
        <div className="flex h-16 w-full items-center justify-center p-5">
          <Link href="/" className="flex items-center justify-center">
            <img
              className="w-100"
              src="https://i.ibb.co/Rp2PKFb/favfly-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          {topItems.map((item, index) => (
            <SidebarItem key={index} data={item} />
          ))}
        </div>
        <div className="mt-auto">
          {bottomItems.map((item, index) => (
            <SidebarItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
