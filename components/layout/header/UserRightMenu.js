const UserRightMenu = () => {
  return (
    <div className="divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-64 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none">
      <div className="p-6 text-center">
        <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full">
          <img
            className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            alt=""
          />
        </div>
        <div className="mt-3">
          <h6 className="font-heading text-muted-800 text-sm font-medium dark:text-white">
            Maya Rosselini
          </h6>
          <p className="text-muted-400 mb-4 font-sans text-xs">maya@tairo.io</p>
          <a
            href="/layouts/profile-edit"
            className="is-button rounded-xl is-button-default w-full">
            Manage Account
          </a>
        </div>
      </div>

      <div className="p-6">
        <button
          type="button"
          className="is-button rounded-xl is-button-default w-full">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserRightMenu;
