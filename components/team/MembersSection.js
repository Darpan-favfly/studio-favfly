const MembersSection = () => {
  return (
    <>
      <MemberItem />
      <MemberItem />
      <MemberItem />
      <MemberItem />
    </>
  );
};

const MemberItem = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="mx-auto w-full max-w-4xl">
        <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md">
          <div className="divide-muted-200 dark:divide-muted-700 grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="flex flex-col p-8">
              <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full mx-auto">
                <div className="rounded-full flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300">
                  <img
                    src="https://tairo.cssninja.io/img/avatars/10.svg"
                    className="h-20 w-20 max-h-full max-w-full object-cover shadow-sm dark:border-transparent"
                  />
                </div>
                <div className="h-8 w-8 bottom-0 end-0 dark:bg-muted-800 absolute z-10 block overflow-hidden rounded-full bg-white">
                  <img
                    src="https://tairo.cssninja.io/img/stacks/reactjs.svg"
                    className="relative h-full w-full scale-90 rounded-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="mx-auto mb-4 max-w-xs text-center">
                <h2 className="font-heading text-base font-medium leading-normal mt-4">
                  Kendra W. has invited you to the{" "}
                  <span className="text-primary-500">
                    Banking Solution Website
                  </span>{" "}
                  project.
                </h2>
              </div>
              <div className="mx-auto max-w-sm">
                <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md shadow-muted-300/30 dark:shadow-muted-800/30 shadow-xl p-6">
                  <h3 className="font-heading text-xs font-medium leading-normal text-muted-400 mb-2 !text-[0.65rem] uppercase">
                    Message from Kendra
                  </h3>
                  <p className="font-alt text-xs font-normal leading-normal text-muted-500 dark:text-muted-400">
                    Hey Maya, It would be really cool if you could give us a
                    hand on this project. There are a lot of tasks popping out
                    every day and I feel the team is getting a bit overwhelmed.
                    We'd love to have you on board.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <div
                    className="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full"
                    data-tooltip="Melany L.">
                    <div className="rounded-full flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300">
                      <img
                        src="/img/avatars/25.svg"
                        className="h-8 w-8 max-h-full max-w-full object-cover shadow-sm dark:border-transparent"
                      />
                    </div>
                  </div>
                  <div
                    className="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full bg-indigo-500/20 text-indigo-500"
                    data-tooltip="Oliver D.">
                    <div className="rounded-full flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300">
                      <span className="text-sm font-heading text-center font-medium uppercase">
                        OD
                      </span>
                    </div>
                  </div>
                  <div
                    className="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full"
                    data-tooltip="Hermann M.">
                    <div className="rounded-full flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300">
                      <img
                        src="/img/avatars/16.svg"
                        className="h-8 w-8 max-h-full max-w-full object-cover shadow-sm dark:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <p className="font-sans text-xs font-normal leading-normal text-muted-400">
                    And 5 others are members of this project
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    className="is-button rounded is-button-default w-full"
                    data-v-71bb21a6="">
                    Decline
                  </button>
                  <button
                    type="button"
                    className="is-button rounded bg-primary-500 dark:bg-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-primary-500/50 dark:hover:enabled:shadow-primary-800/20 focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500 w-full"
                    data-v-71bb21a6="">
                    Accept
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col p-8">
                <p
                  className="font-heading text-base font-medium leading-normal mt-4"
                  tag="h2">
                  Additional Instructions
                </p>
                <p className="font-sans text-xs font-normal leading-normal text-muted-500 dark:text-muted-400 max-w-xs">
                  Please read the following instructions carefully before
                  accepting the invitation.
                </p>
                <div className="mt-6">
                  <ul className="space-y-6">
                    <li className="flex gap-3">
                      <div className="border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-xl">
                        {/* className="icon text-success-500 h-4 w-4" */}
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-medium leading-normal">
                          Project Summary
                        </h3>
                        <p className="font-sans text-xs font-normal leading-normal text-muted-500 dark:text-muted-400 max-w-[210px]">
                          Please read the project summary. You'll find it in
                          your inbox
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-xl">
                        {/* className="icon text-success-500 h-4 w-4" */}
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-medium leading-normal">
                          UI Review
                        </h3>
                        <p className="font-sans text-xs font-normal leading-normal text-muted-500 dark:text-muted-400 max-w-[210px]">
                          Please review the latest wireframes the team has
                          provided
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-xl">
                        {/* className="icon text-success-500 h-4 w-4" */}
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-medium leading-normal">
                          Schedule
                        </h3>
                        <p className="font-sans text-xs font-normal leading-normal text-muted-500 dark:text-muted-400 max-w-[210px]">
                          Please schedule a meeting with the team so they can
                          ramp you up.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersSection;
