import React from "react";
import Button from "../Button/Button";

export default function Task({ title, author, date, to, state }) {
  return (
    <div className="bg-card-color w-full rounded-lg p-5 flex items-center justify-between">
      <div  className="flex flex-col items-start gap-2">
        <h2 className="text-xl font-medium text-primary-color">{title}</h2>
        <span className="text-sm text-white">
          De: {author} Para: {to}
        </span>
        <span className="text-sm text-white">Data: {date}</span>
      </div>

      {state ? <Button value="Concluir" className="bg-[#00FA9C25]"/> : <span className="text-sm text-third-color brightness-75">Concluída</span>}
    </div>
  );
}
