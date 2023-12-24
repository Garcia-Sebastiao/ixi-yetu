import { visibilityIcon } from "@/assets";
import Image from "next/image";

export function UserListRow({ order, name, id, accessCode, date }) {
  return (
    <li className="w-full grid place-items-center place-content-center grid-cols-6 gap-x-[76px] bg-[#72A1FE10] py-5 px-6 rounded-md">
      <div className="col-span-1">
        <div className="flex items-center justify-center rounded-md bg-[#FF9D0525] w-9 h-9">
          <span className="text-sm font-medium">{order}</span>
        </div>
      </div>

      <div className="col-span-1">
        <span className="font-medium text-sm">{name}</span>
      </div>

      <div className="col-span-1">
        <span className="font-medium text-sm">ID do usuário: {id}</span>
      </div>

      <div className="col-span-1">
        <span className="font-medium text-sm">
          Codigo de Acesso: {accessCode}
        </span>
      </div>

      <div className="col-span-1 flex flex-col items-center">
        <span className="font-medium text-sm">Adicionado</span>
        <span className="font-medium text-sm">{String(date)}</span>
      </div>

      <div className="col-span-1">
        <button className="flex items-center justify-center rounded-md bg-[#FF9D0525] transition-all duration-150 hover:brightness-75 w-9 h-9">
          <Image src={visibilityIcon} alt="hide/show" />
        </button>
      </div>
    </li>
  );
}
