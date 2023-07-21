"use client";

import React, { useState } from "react";
import Image from "next/image";
import Row from "@/components/UI/Input/Row";
import Main from "@/components/UI/Main/Main";
import Button from "@/components/UI/Button/Button";
import LinkButton from "@/components/UI/Button/LinkButton";
import Background from "@/components/UI/Background/Background";

import {
  calendarIcon,
  chartIcon,
  configIcon,
  docIcon,
  documentIcon,
  homeIcon,
  logo,
  messageIcon,
  searchIcon,
  userImage,
} from "@/assets";
import Link from "next/link";
import Counter from "@/components/UI/Counter/Counter";
import Title from "@/components/UI/Title/Title";
import Input from "@/components/UI/Input/Input";
import LogoutModal from "@/components/UI/Modals/LogoutModal";

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
                className="text-[12px] flex p-2 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/"
              >
                <Image src={homeIcon} alt="Inicio"></Image>
                Inicio
              </Link>
            </li>

            <li className="">
              <Link
                className="text-[12px] flex p-2 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/"
              >
                <Image src={documentIcon} alt="Tarefas"></Image>
                Tarefas
              </Link>
            </li>

            <li className="">
              <Link
                className="text-[12px] flex p-2 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/"
              >
                <Image src={messageIcon} alt="Mensagens"></Image>
                Mensagens
              </Link>
            </li>

            <li className="">
              <Link
                className="text-[12px] flex p-2 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/"
              >
                <Image src={calendarIcon} alt="Caledário de eventos"></Image>
                Caledário de eventos
              </Link>
            </li>

            <li className="">
              <Link
                className="text-[12px] flex p-2 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/"
              >
                <Image src={chartIcon} alt="Report & analaytics"></Image>
                Report & analaytics
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col items-startw-full gap-3">
            <li className="">
              <Link
                className="text-[12px] flex p-2 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/"
              >
                <Image src={configIcon} alt="Configurações"></Image>
                Configurações
              </Link>
            </li>

            <li className="">
              <Link
                className="text-[12px] flex p-2 bg-linksBg rounded-md items-center hover:bg-[#D7F8F140] focus:bg-menuActive transition duration-150 hover:cursor-pointer gap-3"
                href="/system/"
              >
                <Image src={homeIcon} alt="Inicio"></Image>
                Inicio
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <section className="flex flex-col gap-[40px] overflow-x-auto pr-8 main flex-1">
        <header className="w-full flex justify-between items-center">
          <form className="w-1/2" action="">
            <div className="flex items-center bg-card-color gap-3 rounded-md py-2 px-4 bg-">
              <Image src={searchIcon} alt="Procurar" />
              <input
                type="search"
                className="w-full text-[12px] bg-transparent outline-none"
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

            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Image
                className="w-full h-full rounded-full object-cover origin-center"
                src={userImage}
                alt="User"
              />
            </div>
          </button>
        </header>

        <div className="flex w-full flex-col gap-2">
          <Title value="Faça um novo registo de território" />

          <span className="text-sm text-font-color">
            Observe o resumo de atividades desta semana.
          </span>

          <form
            className="flex w-full gap-4 flex-col mt-4 items-start"
            action=""
          >
            <Row>
              <Input type="text" placeholder="Nome do proprietario" />
              <Input type="text" placeholder="Nome do proprietario" />
            </Row>
            <Row>
              <Input type="text" placeholder="Nome do proprietario" />
              <Input type="text" placeholder="Nome do proprietario" />
            </Row>
            <Row>
              <Input type="text" placeholder="Nome do proprietario" />
              <Input type="text" placeholder="Nome do proprietario" />
            </Row>
            <Row>
              <Input type="text" placeholder="Nome do proprietario" />
              <Input type="text" placeholder="Nome do proprietario" />
            </Row>

            <div className="flex items-start w-full gap-4 ">
              <div className="flex-1 bg-card-color rounded-md">
                <div className="p-4">
                  <label
                    htmlFor="upload"
                    className="flex text-sm items-center gap-2"
                  >
                    <Image src={docIcon} alt="upload document" />
                    Selecionar documentos
                  </label>

                  <input id="upload" type="file" className="hidden" />
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <span className="text-sm">Documentos Escolhidos</span>
              </div>
            </div>

            <Button value="Registrar" className="bg-[#00FA9C25] mt-4" />
          </form>
        </div>
      </section>
      <Background />
    </Main>
  );
}
