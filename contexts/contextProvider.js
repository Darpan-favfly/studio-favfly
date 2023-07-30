import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import client from "@/utils/sanity/sanityClient";

const toastOptions = {
  duration: 4000,
  position: "bottom-center",
};

const ContextProviderSection = (props) => {
  // =============== Update Client Last Contacted details ===============
  const updateClientLastContact = async (_id) => {
    try {
      const today = new Date();

      const response = await client
        .patch(_id) // Document ID to patch
        .set({ lastContacted: today }) // Shallow merge
        .commit();

      toast.success(`Updated last contacted date `, toastOptions);
    } catch (error) {
      console.log(error.code);
      toast.error(`Error: ${error.code}`, toastOptions);
    }
  };

  return (
    <ContextProvider.Provider value={{ updateClientLastContact }}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default ContextProviderSection;

// ===== export context =====
export const ContextProvider = createContext();
