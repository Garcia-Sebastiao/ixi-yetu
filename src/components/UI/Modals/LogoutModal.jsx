"use client";

import React from "react";
import LinkButton from "../Button/LinkButton";

export default function LogoutModal({ isOpen, onRequestClose }) {
  return (
    <div
      className={`w-[200px] flex flex-col p-4 gap-2 bg-white shadow-sm rounded-md absolute top-20 right-16 transition duration-150 ${
        isOpen ? "flex opacity-100" : "opacity-0 hidden"
      }`}
    >
      <LinkButton
        value="Profile"
        href="/system/"
        className="text-black bg-[#00FA9C15]"
      />
      <LinkButton value="Sair" href="/system/" className="bg-[#F24D54]" />
    </div>
  );
}
