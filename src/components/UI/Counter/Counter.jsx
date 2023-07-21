import React from "react";

export default function Counter(props) {
  return (
    <div className={`flex-1 back rounded-xl p-4 ${props.className}`}>
      <div className=" flex flex-col gap-2 items-start pt-6">
        <h2 className="text-5xl font-semibold">{props.counter}</h2>
        <span className="font-semibold">{props.text}</span>
      </div>
    </div>
  );
}
