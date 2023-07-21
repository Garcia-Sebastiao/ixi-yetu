import React from "react";
import Link from "next/link";

export default function LinkButton(props) {
  return (
    <Link
      href={props.href}
      className={`py-2 px-4 rounded-md text-center ${props.className} hover:brightness-75 transition duration-150 text-white text-[12px] font-medium`}
    >
      {props.value}
    </Link>
  );
}
