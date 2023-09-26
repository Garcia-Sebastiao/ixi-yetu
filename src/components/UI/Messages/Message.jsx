import React from "react";
import Image from "next/image";
import { timeIcon } from "@/assets";

export default function Message({ title, description, time }) {
  return (
    <div className="w-full px-4 py-6 rounded-xl bg-card-color flex items-end justify-between">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-medium text-primary-color">{title}</h2>
        <span className="text-sm text-white">{description}</span>
      </div>

      <div className="flex items-center gap-2">
        <Image className="w-6" src={timeIcon} alt="Time" />
        <span className="text-xs text-[#D7F8F1]">{time}</span>
      </div>
    </div>
  );
}
