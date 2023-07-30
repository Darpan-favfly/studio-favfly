import dayjs from "dayjs";
import millify from "millify";
import { FiCalendar, FiSearch, FiPlus } from "react-icons/fi";

const CompanyList = ({ data }) => {
  return (
    <>
      {/* ===== filter ===== */}
      <Filter />

      {/* ===== companies list ===== */}
      <div className="space-y-4">
        {data?.map((item, index) => (
          <CompanyListItem key={index} data={item} />
        ))}
      </div>
    </>
  );
};

const CompanyListItem = ({ data }) => {
  const {
    brandName,
    status,
    members,
    projects,
    website,
    monthlyIncome,
    logo,
    joinedDate,
    lifetimeValue,
  } = data;

  const colors = {
    bgSuccess: "bg-green-500",
    bgWarning: "bg-red-500",
  };

  return (
    <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl flex flex-col p-5 sm:flex-row sm:items-center">
      <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left">
        {/* ===== start company logo ===== */}
        <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full">
          <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full bg-yellow-300">
            {/* <img
              src={logo}
              alt={brandName}
              className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-full w-full scale-75"
            /> */}
            <span class="text-muted-500 font-sans font-medium uppercase text-xl">
              MD
            </span>
          </div>
          <div className="dark:bg-muted-800 absolute z-10 block overflow-hidden rounded-full bg-white h-5 w-5 bottom-0 end-0">
            <div
              className={`relative h-full w-full scale-75 rounded-full ${
                status == "active" ? colors?.bgSuccess : colors?.bgWarning
              }`}></div>
          </div>
        </div>
        {/* ===== end company logo ===== */}

        {/* ===== start company name & joining date ===== */}
        <div>
          <p
            className="font-heading text-sm font-medium leading-normal text-muted-800 dark:text-muted-100"
            tag="h3">
            {brandName}
          </p>
          {/* ===== company name ===== */}
          <p className="font-alt text-xs font-normal leading-none text-muted-400 flex items-end mt-1">
            <i className="me-1 relative top-[-1px]">
              <FiCalendar />
            </i>
            <span>{dayjs(joinedDate).format("DD MMM, YYYY")}</span>
          </p>
        </div>
      </div>
      {/* ===== end company name & joining date ===== */}

      <div className="flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0">
        {/* ===== start project categories ===== */}
        <div className="flex w-full items-center justify-center sm:w-[160px] sm:justify-end">
          {projects?.map((item, index) => (
            <span
              key={index}
              className={`inline-block px-3 font-sans transition-shadow duration-300 py-1 text-[0.65rem] rounded-full bg-${item?.projectType.toLocaleLowerCase()} text-white me-2`}>
              {item?.projectType}
            </span>
          ))}
        </div>
        {/* ===== end project categories ===== */}

        <div className="divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x">
          {/* ===== start no of projects ===== */}
          <div className="flex flex-col gap-1 px-4 text-center">
            <p
              className="font-heading text-base font-semibold leading-normal text-muted-800 dark:text-muted-100"
              tag="h3">
              <span>{projects?.length || 0}</span>
            </p>
            <p className="font-alt text-base font-semibold leading-none text-muted-400 !text-[0.65rem] uppercase">
              <span>Projects</span>
            </p>
          </div>
          {/* ===== end no of projects ===== */}

          {/* ===== start LTV ===== */}

          <div className="flex flex-col gap-1 px-4 text-center">
            <p
              className="font-heading text-base font-semibold leading-normal text-muted-800 dark:text-muted-100"
              tag="h3">
              <span>
                {lifetimeValue?.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                }) || 0}
              </span>
            </p>
            <p className="font-alt text-base font-semibold leading-none text-muted-400 !text-[0.65rem] uppercase">
              <span>LTV</span>
            </p>
          </div>
          {/* ===== end LTV ===== */}

          {/* ===== start monthly income ===== */}

          <div className="flex flex-col gap-1 px-4 text-center">
            <p
              className="font-heading text-base font-semibold leading-normal text-muted-800 dark:text-muted-100"
              tag="h3">
              <span>
                {monthlyIncome?.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                }) || 0}
              </span>
            </p>
            <p className="font-alt text-base font-semibold leading-none text-muted-400 !text-[0.65rem] uppercase">
              <span>Monthly Income</span>
            </p>
          </div>

          {/* ===== end monthly income ===== */}
        </div>
        {/* ===== start team members ===== */}
        <div className="ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0">
          <div className="flex">
            {members?.map((item, index) => (
              <div
                key={index}
                className="dark:bg-muted-800 relative flex shrink-0 items-center justify-center rounded-full bg-white transition-all duration-100 ease-in h-8 w-8 -ms-2 hover:-ms-4 hover:me-2 focus:-ms-4 focus:me-2 tooltip-top-right"
                data-tooltip={`${item?.client?.name} (${item?.role})`}>
                <div
                  className="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full bg-primary-500/20 text-primary-500 !scale-90"
                  tabindex="0">
                  <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                    <img
                      src={item?.client?.image}
                      className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-8 w-8"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted-400 font-sans text-xs">In Team</p>
        </div>
        {/* ===== end team members ===== */}

        {/* ===== start view button ===== */}
        <div className="sm:ms-6">
          <button
            type="button"
            className="relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none text-muted-700 bg-white border-muted-300 dark:text-white dark:bg-muted-700 dark:border-muted-600 dark:hover:enabled:bg-muted-600 hover:enabled:bg-muted-50 dark:active:enabled:bg-muted-700/70 active:enabled:bg-muted-100 rounded-md w-full sm:w-auto">
            View
          </button>
        </div>
        {/* ===== end view button ===== */}
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

export default CompanyList;
