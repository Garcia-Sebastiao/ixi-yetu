"use client";

import React from "react";
import Image from "next/image";
import Main from "@/components/UI/Main/Main";
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
import Counter from "@/components/UI/Counter/Counter";
import Title from "@/components/UI/Title/Title";

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

        <div className="w-full flex flex-col gap-7">
          <div>
            <Title value="Seja bem vindo de volta!" />
            <span className="pt-3 text-font-color text-sm">
              Observe o resumo de atividades desta semana.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <LinkButton
              href="/system/"
              value="Novo registro"
              className="bg-third-color w-1/4"
            />
            <LinkButton
              href="/system/"
              value="Novo registro"
              className="bg-[#FF9D0525] w-1/4"
            />
          </div>

          <div className="w-full flex items-center gap-10">
            <Counter
              counter="34"
              text="Novos registros"
              className="bg-[#00FA9C34]"
            />
            <Counter
              counter="150"
              text="Passagens de territórios"
              className="bg-[#FFE50025]"
            />
            <Counter
              counter="184"
              text="Balaço Total"
              className="bg-[#D7F8F125]"
            />
          </div>

          <div className="w-full p-4 bg-card-color rounded-xl">
            <Title value="Registros recentes" />

            <table className="table-auto mt-4 text-left w-full">
              <thead>
                <tr>
                  <th className="text-sm font-semibold py-2">Id</th>
                  <th className="text-sm font-semibold py-2">Nome</th>
                  <th className="text-sm font-semibold py-2">
                    Localização do território
                  </th>
                  <th className="text-sm font-semibold py-2">
                    Dimensões do território
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 text-font-color text-sm font-light">
                    VA0347300934LA
                  </td>
                  <td className="py-2 text-font-color text-sm font-light">
                    Garcia Pedro
                  </td>
                  <td className="py-2 text-font-color text-sm font-light">
                    São Paulo
                  </td>
                  <td className="py-2 text-font-color text-sm font-light">
                    50 x 60
                  </td>
                </tr>

                <tr>
                  <td className="py-2 text-font-color text-sm font-light">
                    VA0347300934LA
                  </td>
                  <td className="py-2 text-font-color text-sm font-light">
                    Garcia Pedro
                  </td>
                  <td className="py-2 text-font-color text-sm font-light">
                    São Paulo
                  </td>
                  <td className="py-2 text-font-color text-sm font-light">
                    50 x 60
                  </td>
                </tr>

                <tr>
                  <td className="py-2 text-font-color text-sm font-light">
                    VA0347300934LA
                  </td>
                  <td className="py-2 text-font-color text-sm font-light">
                    Garcia Pedro
                  </td>
                  <td className="py-2 text-font-color text-sm font-light">
                    São Paulo
                  </td>
                  <td className="py-2 text-font-color text-sm font-light">
                    50 x 60
                  </td>
                </tr>

                <tr>
                  <td className="py-2 text-font-color text-sm font-light">
                    VA0347300934LA
                  </td>
                  <td className="py-2 text-font-color text-sm font-light">
                    Garcia Pedro
                  </td>
                  <td className="py-2 text-font-color text-sm font-light">
                    São Paulo
                  </td>
                  <td className="py-2 text-font-color text-sm font-light">
                    50 x 60
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <LinkButton
            href="/system/grounds/"
            value="Ver todos"
            className="bg-[#00FA9C25] w-32 float-right"
          />
        </div>
      </section>
      <Background />
    </Main>
  );
}
