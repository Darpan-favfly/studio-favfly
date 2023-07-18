import {
  FiCheckCircle,
  FiInfo,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiPhone,
  FiCalendar,
} from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const UserList = () => {
  return (
    <>
      <div>
        <div className="ltablet:grid-cols-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          <UserListItem />
          <UserListItem />
          <UserListItem />
          <UserListItem />
          <UserListItem warning={true} />
          <UserListItem />
          <UserListItem />
          <UserListItem warning={true} />
          <UserListItem />
          <UserListItem />
        </div>
      </div>
    </>
  );
};

const UserListItem = ({ warning }) => {
  const socialLinks = [
    { title: "facebook", icon: <FiFacebook /> },
    { title: "instagram", icon: <FiInstagram /> },
    { title: "linkedin", icon: <FiLinkedin /> },
    { title: "twitter", icon: <FiTwitter /> },
  ];

  return (
    <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl">
      <div className="nui-bg-50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-heading text-base font-medium leading-none">
              Birthday
            </p>
            <p className="font-alt text-xs font-normal leading-normal text-muted-400">
              26 days to go
            </p>
          </div>
          <div className="tooltip-left" data-tooltip="5 days ago">
            {!warning ? (
              <FiCheckCircle className="icon text-success-500 h-6 w-6" />
            ) : (
              <FiInfo className="icon text-warning-500 h-6 w-6" />
            )}
          </div>
        </div>
        {/* <div>
          <a
            href="/layouts/user-grid-3#"
            className="router-link-active router-link-exact-active text-primary-500 font-sans text-xs underline-offset-4 hover:underline">
            Reverse Factor
          </a>
        </div> */}
      </div>
      <div className="p-6">
        <div className="mb-3 flex w-full items-center justify-center">
          <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-rose-500/20 text-rose-500">
            <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
              <img
                src="https://tairo.cssninja.io/img/avatars/20.svg"
                className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                alt=""
              />
            </div>

            {/* <div className="dark:bg-muted-800 absolute z-10 block overflow-hidden rounded-full bg-white h-8 w-8 bottom-0 end-0">
                <img
                  src="/img/icons/flags/united-states-of-america.svg"
                  className="relative h-full w-full scale-90 rounded-full object-cover"
                  alt=""
                />
              </div> */}
          </div>
        </div>
        <div className="text-center">
          <p
            className="font-heading text-base font-medium leading-none"
            tag="h3">
            Rig Biswas{" "}
            <span className="font-alt text-xs font-normal leading-normal text-muted-400">
              - Product Manager
            </span>
          </p>
          <Link
            href="/companies"
            className="font-alt text-xs font-normal leading-normal text-muted-400 transition-all duration-300 underline-offset-4 hover:underline hover:text-primary-500">
            Reverse Factor
          </Link>
        </div>

        {/* ===== social links ===== */}
        <div className="mb-6 mt-4 flex items-center justify-center gap-3">
          {socialLinks?.map((item, index) => (
            <div
              key={index}
              className="border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-all duration-300 cursor-pointer">
              {item?.icon}
            </div>
          ))}
        </div>

        {/* ===== buttons area ===== */}
        <div className="flex items-center gap-2">
          {/* ===== whatsapp button ===== */}
          <button
            type="button"
            className="is-button rounded is-button-default w-full">
            <BsWhatsapp className="icon h-4 w-4" />
            <span>Whatsapp</span>
          </button>

          {/* ===== call button ===== */}
          <button
            type="button"
            className="is-button rounded is-button-default w-full">
            <FiPhone className="icon h-4 w-4" />
            <span>Talk</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
