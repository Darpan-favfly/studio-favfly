"use client";

import ContextProvider from "@/contexts/contextProvider";

const Provider = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default Provider;
