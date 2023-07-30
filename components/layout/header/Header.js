import Breadcrumbs from "./Breadcrumbs";
import RightMenu from "./RightMenu";
import SearchBar from "./search/SearchBar";

const Header = () => {
  return (
    <div className="px-4 lg:px-10 xl:max-w-[calc(100%_-_80px)] lg:ms-[80px] sticky top-0 z-50 mb-5 flex h-16 items-center gap-2 border-b border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800">
      {/* ===== Breadcrumbs ===== */}
      <Breadcrumbs />

      {/* ===== Search bar ===== */}
      <SearchBar />

      {/* ===== Right menu ===== */}
      <RightMenu />
    </div>
  );
};

export default Header;
