import {
  FiCheckCircle,
  FiInfo,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiSearch,
  FiPlus,
  FiAlertTriangle,
} from "react-icons/fi";

import Link from "next/link";
import ContactButtons from "./ContactButtons";

import daysLeft from "@/utils/modules/daysLeft";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const UserList = ({ data }) => {
  return (
    <>
      {/* ===== filter ===== */}
      <Filter />

      {/* ===== user list ===== */}
      <div className="ltablet:grid-cols-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
        {data?.map((item, index) => (
          <UserListItem key={index} data={item} />
        ))}
      </div>
    </>
  );
};

const UserListItem = ({ data, warning }) => {
  const socialLinks = [
    { title: "facebook", icon: <FiFacebook /> },
    { title: "instagram", icon: <FiInstagram /> },
    { title: "linkedin", icon: <FiLinkedin /> },
    { title: "twitter", icon: <FiTwitter /> },
    { title: "youtube", icon: <FiYoutube /> },
  ];

  const { lastContacted, dob, image, name, email, socialMediaHandles } =
    data?.contactedPerson?.client;

  const today = dayjs();
  const daysSinceLastContact = today.diff(dayjs(lastContacted), "day");

  const birthdayRemain = daysLeft(dob);

  return (
    <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl">
      <div className="nui-bg-50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-heading text-base font-medium leading-none">
              Birthday
            </p>
            {dob && (
              <p className="font-alt text-xs font-normal leading-normal text-muted-400">
                {birthdayRemain == 0
                  ? "Congrats 🎉"
                  : birthdayRemain > 7
                  ? dayjs(dob).format("DD MMMM")
                  : `${birthdayRemain} days remain`}
              </p>
            )}
          </div>
          {lastContacted ? (
            <div
              className="tooltip-left"
              data-tooltip={dayjs(lastContacted).fromNow()}>
              {daysSinceLastContact <= 7 ? (
                <FiCheckCircle className="icon text-success-500 h-6 w-6" />
              ) : (
                <FiInfo className="icon text-warning-500 h-6 w-6" />
              )}
            </div>
          ) : (
            <div className="tooltip-left" data-tooltip="No client interaction.">
              <FiAlertTriangle className="icon text-danger-500 h-6 w-6" />
            </div>
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex w-full items-center justify-center">
          <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-rose-500/20 text-rose-500">
            <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
              <img
                src={image}
                alt={name}
                className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <p
            className="font-heading text-base font-medium leading-none"
            tag="h3">
            {name}
            <span className="font-alt text-xs font-normal leading-normal text-muted-400 ms-1">
              - {data?.contactedPerson?.role}
            </span>
          </p>

          <div className="font-alt text-xs font-normal leading-normal text-muted-400 transition-all duration-300 underline-offset-4 hover:underline hover:text-primary-500 cursor-pointer">
            {data?.brandName}
          </div>
        </div>

        {/* ===== social links ===== */}
        <div className="mb-6 mt-4 flex items-center justify-center gap-3">
          {socialMediaHandles?.map((item, index) => (
            <Link
              key={index}
              href={item?.link}
              target="_blank"
              className="border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-all duration-300 cursor-pointer">
              {
                socialLinks?.filter((data) => data.title == item.platform)?.[0]
                  ?.icon
              }
            </Link>
          ))}
        </div>

        {/* ===== buttons area ===== */}
        <ContactButtons data={data?.contactedPerson?.client} />
      </div>
    </div>
  );
};

const Filter = () => {
  return (
    <div className="mb-6 flex w-full flex-col items-center justify-between gap-4 sm:flex-row pt-2">
      <div className="flex w-full items-center gap-4 sm:w-auto">
        <div className="relative w-full sm:w-auto">
          <div className="group/nui-input relative">
            <input
              id="ninja-input-13"
              type="text"
              className="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded"
              placeholder="Filter users..."
            />

            <div className="text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75 h-10 w-10">
              <FiSearch className="icon h-[1.15rem] w-[1.15rem]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-4 sm:w-auto">
        <button
          type="button"
          className="is-button rounded is-button-default w-full sm:w-32">
          Manage
        </button>
        <button
          type="button"
          className="is-button rounded bg-primary-500 dark:bg-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-primary-500/50 dark:hover:enabled:shadow-primary-800/20 focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500 w-full sm:w-32">
          <FiPlus className="icon h-4 w-4" />
          <span>Add User</span>
        </button>
      </div>
    </div>
  );
};

export default UserList;
