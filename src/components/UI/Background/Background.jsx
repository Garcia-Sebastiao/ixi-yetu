import React from "react";
import Image from "next/image";
import { background } from "@/assets";

export default function Background() {
  return (
    <div className="absolute -z-10 top-0 flex items-center justify-center left-0 w-full h-screen">
      <Image className="object-cover object-center w-full h-full" src={background} alt="" />
    </div>
  );
}
