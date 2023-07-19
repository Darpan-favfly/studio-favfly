import dayjs from "dayjs";

const ProjectList = ({ data }) => {
  return (
    <>
      <div className="space-y-2 pt-6">
        {data?.map((item, index) => (
          <ProjectListItem key={index} data={item} show={index == 0} />
        ))}
      </div>
    </>
  );
};

const ProjectListItem = ({ data, show }) => {
  const {
    renewDate,
    status,
    projectType,
    company,
    initialStartDate,
    closedDate,
    startDate,
  } = data;

  const colors = {
    bgSuccess: "bg-green-500",
    bgWarning: "bg-red-500",
  };

  return (
    <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 w-full border bg-white transition-all duration-300 rounded-md relative px-2 py-6 sm:py-4">
      <div className="flex w-full flex-col sm:flex-row sm:items-center">
        <div className="relative mb-4 flex grow items-center gap-2 px-6 sm:mb-0 sm:px-2 h-10">
          <span
            className={`text-muted-400 absolute font-sans text-xs font-medium uppercase sm:-top-10 sm:start-2 ${
              show ? "hidden sm:block" : "hidden"
            } `}>
            Project
          </span>
          <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-12 w-12 rounded-full bg-primary-500/20 text-primary-500">
            <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
              <img
                src="https://tairo.cssninja.io/img/avatars/25.svg"
                className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-12 w-12"
                alt=""
              />
            </div>

            <div className="dark:bg-muted-800 absolute z-10 block overflow-hidden rounded-full bg-white h-4 w-4 bottom-0 end-0">
              <div
                className={`relative h-full w-full scale-75 rounded-full ${
                  status == "active" ? colors?.bgSuccess : colors?.bgWarning
                }`}></div>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm font-medium leading-tight text-muted-700 dark:text-muted-100">
              <span>{projectType}</span>
            </h4>
            <p className="font-alt text-xs font-normal leading-tight text-muted-500 dark:text-muted-400">
              <span>{company?.brandName}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2 w-full sm:w-40">
            <span
              className={`text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0 ${
                show ? "" : "sm:hidden"
              }`}>
              Initial Start Date
            </span>
            <span className="text-muted-500 dark:text-muted-400 font-sans text-sm">
              {dayjs(initialStartDate).format("DD MMM, YYYY")}
            </span>
          </div>
          <div className="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2 w-full sm:w-40">
            <span
              className={`text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0 ${
                show ? "" : "sm:hidden"
              }`}>
              Start date
            </span>
            <span className="text-muted-500 dark:text-muted-400 font-sans text-sm">
              {dayjs(startDate).format("DD MMM, YYYY")}
            </span>
          </div>
          <div className="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2 w-full sm:w-40">
            <span
              className={`text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0 ${
                show ? "" : "sm:hidden"
              }`}>
              Renew date
            </span>
            <span className="text-muted-500 dark:text-muted-400 font-sans text-sm">
              {dayjs(renewDate).format("DD MMM, YYYY")}
            </span>
          </div>
          <div className="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2 w-full sm:w-40">
            <span
              className={`text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0 ${
                show ? "" : "sm:hidden"
              }`}>
              Close date
            </span>
            <span className="text-muted-500 dark:text-muted-400 font-sans text-sm">
              {dayjs(closedDate).format("DD MMM, YYYY")}
            </span>
          </div>
          <div className="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2 w-full sm:w-16">
            <span
              className={`text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0 ${
                show ? "" : "sm:hidden"
              }`}>
              Plan
            </span>
            <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1 text-[0.65rem] rounded-full bg-success-100 text-success-500 border-success-100 dark:border-success-500 dark:text-success-500 border dark:bg-transparent capitalize">
              Surge
            </span>
          </div>

          <div className="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2">
            <span
              className={`text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0 ${
                show ? "" : "sm:hidden"
              }`}>
              action
            </span>
            <button
              type="button"
              className="relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none text-muted-500 bg-muted-200 border-muted-200 dark:text-white dark:bg-muted-700/40 dark:border-muted-700/40 dark:hover:enabled:bg-muted-700/60 hover:enabled:bg-muted-100 dark:active:enabled:border-muted-800 dark:active:enabled:bg-muted-800 active:enabled:bg-muted-200/50 rounded-md">
              <span>View</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
