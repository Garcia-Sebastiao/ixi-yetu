import React from "react";

export default function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={`w-full py-2 px-4 placeholder:text-white rounded-md bg-card-color text-sm text-white focus:outline-none focus:sm ${props.className}`}
    />
  );
}
