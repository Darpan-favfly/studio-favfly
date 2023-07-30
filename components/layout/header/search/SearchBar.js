import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex w-6/12 items-center justify-between mx-auto">
      <div className="w-full">
        <div className="relative flex w-full items-center gap-2">
          <div className="relative w-full">
            <div className="group/nui-input relative">
              <input
                id="ninja-input-13"
                type="text"
                className="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded-xl !bg-muted-100 dark:!bg-muted-700 focus:!bg-white dark:focus:!bg-muted-900"
                placeholder="Search"
              />
              <div className="text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75 h-10 w-10">
                <FiSearch className="icon h-[1.15rem] w-[1.15rem]" />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="bg-primary-500 absolute end-1 top-1 inline-flex h-8 items-center justify-center px-4 font-sans text-sm text-white rounded-lg">
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
