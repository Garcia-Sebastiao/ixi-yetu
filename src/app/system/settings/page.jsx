"use client";

import React from "react";
import Image from "next/image";
import Main from "@/components/UI/Main/Main";
import Task from "@/components/UI/Tasks/Task";
import Button from "@/components/UI/Button/Button";
import LinkButton from "@/components/UI/Button/LinkButton";
import Background from "@/components/UI/Background/Background";
import LogoutModal from "@/components/UI/Modals/LogoutModal";

import { useState } from "react";

import {
  calendarIcon,
  chartIcon,
  configIcon,
  documentIcon,
  homeIcon,
  logo,
  messageIcon,
  searchIcon,
  userImage,
} from "@/assets";
import Link from "next/link";
import Title from "@/components/UI/Title/Title";
import { UserListRow } from "./components/User/UserTableRow/UserListRow";

export default function Home() {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  return (
    <Main>
      <LogoutModal isOpen={openLogoutModal} />
      <aside className="flex flex-[0.21] flex-col gap-[30px] rounded-2xl items-center p-5 bg-card-color">
        <div>
          <Image src={logo} className="text-white" alt="IXI YETU" />
        </div>

        <nav className="flex flex-col w-full justify-between h-full">
          <ul className="flex flex-col items-startw-full gap-3">
            <li className="">
              <Link
                className="text-xs flex p-3 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/"
              >
                <Image src={homeIcon} alt="Inicio"></Image>
                Inicio
              </Link>
            </li>

            <li className="">
              <Link
                className="text-xs flex p-3 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/tasks/"
              >
                <Image src={documentIcon} alt="Tarefas"></Image>
                Tarefas
              </Link>
            </li>

            <li className="">
              <Link
                className="text-xs flex p-3 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/messages/"
              >
                <Image src={messageIcon} alt="Mensagens"></Image>
                Mensagens
              </Link>
            </li>

            <li className="">
              <Link
                className="text-xs flex p-3 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/calendar/"
              >
                <Image src={calendarIcon} alt="Caledário de eventos"></Image>
                Caledário de eventos
              </Link>
            </li>

            <li className="">
              <Link
                className="text-xs flex p-3 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/dashboard/"
              >
                <Image src={chartIcon} alt="Report & analaytics"></Image>
                Report & analaytics
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col items-startw-full gap-3">
            <li className="">
              <Link
                className="text-xs flex p-3 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/config/"
              >
                <Image src={configIcon} alt="Configurações"></Image>
                Configurações
              </Link>
            </li>

            <li className="">
              <Link
                className="text-xs flex p-3 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/"
              >
                <Image src={homeIcon} alt="Inicio"></Image>
                Ajuda
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <section className="flex flex-col gap-[40px] overflow-x-auto pr-8 main flex-1">
        <header className="w-full flex justify-between items-center">
          <form className="w-1/2" action="">
            <div className="flex items-center bg-card-color gap-3 rounded-md py-3 px-4 bg-">
              <Image src={searchIcon} alt="Procurar" />
              <input
                type="search"
                className="w-full text-xs bg-transparent outline-none"
                placeholder="Pesquisar.."
              />
            </div>
          </form>

          <button
            onClick={() => setOpenLogoutModal(!openLogoutModal)}
            className="flex items-center gap-4"
          >
            <div className="flex flex-col items-end">
              <h3 className="text-sm">Garcia Pedro</h3>
              <small className="text-[10px] text-[#ffffff70]">
                Administrador
              </small>
            </div>

            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Image
                className="w-full h-full rounded-full object-cover origin-center"
                src={userImage}
                alt="User"
              />
            </div>
          </button>
        </header>

        <div className="w-full flex flex-col gap-8">
          <div>
            <Title value="Usuários cadastrados " />
            <span className="pt-3 text-font-color text-sm">
              Listamos aqui todos os usuários cadastrados na plataforma.
            </span>
          </div>

          <ul className="flex flex-col w-full gap-y-4">
            {Array(6)
              .fill()
              .map((_, index) => (
                <UserListRow
                  key={index}
                  order="1"
                  name="Crisvan dos Santos"
                  id="478465"
                  accessCode="23a34b734"
                  date="20/05/2022"
                />
              ))}
          </ul>
        </div>
      </section>
      <Background />
    </Main>
  );
}
