import React from "react";

export default function Button(props) {
  return (
    <button
      className={`py-2 px-8 text-center rounded-md ${props.className} hover:brightness-75 transition duration-150 text-white text-[12px] font-medium`}
    >
      {props.value}
    </button>
  );
}
