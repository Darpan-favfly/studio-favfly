"use client";

import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { useContext } from "react";
import { ContextProvider } from "../../contexts/contextProvider";

const ContactButtons = ({ data }) => {
  const { updateClientLastContact } = useContext(ContextProvider);

  const { _id, phoneNumber, whatsappNumber, name } = data;

  const text = `Hi, ${name}`;

  return (
    <div className="flex items-center gap-2">
      {/* ===== whatsapp button ===== */}

      {/* ===== desktop ===== */}
      <div className="hidden lg:block">
        <Link
          href={`https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`}
          target="_blank"
          onClick={() => updateClientLastContact(_id)}
          className="is-button rounded is-button-default w-full">
          <BsWhatsapp className="icon h-4 w-4" />
          <span>Whatsapp</span>
        </Link>
      </div>
      {/* ===== tablet or phone ===== */}
      <div className="lg:hidden">
        <Link
          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`}
          target="_blank"
          onClick={() => updateClientLastContact(_id)}
          className="is-button rounded is-button-default w-full">
          <BsWhatsapp className="icon h-4 w-4" />
          <span>Whatsapp</span>
        </Link>
      </div>

      {/* ===== call button ===== */}
      <Link
        href={`tel:${phoneNumber}`}
        onClick={() => updateClientLastContact(_id)}
        className="is-button rounded is-button-default w-full">
        <FiPhone className="icon h-4 w-4" />
        <span>Talk</span>
      </Link>
    </div>
  );
};

export default ContactButtons;
