"use client";

import React from "react";
import Image from "next/image";
import Main from "@/components/UI/Main/Main";
import Message from "@/components/UI/Messages/Message";
import Background from "@/components/UI/Background/Background";
import LogoutModal from "@/components/UI/Modals/LogoutModal";

import { useState } from "react";

import {
  logo,
} from "@/assets";
import Link from "next/link";
import Title from "@/components/UI/Title/Title";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";

export default function Home() {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  return (
    <Main>
      <Background />
      <div className="w-full flex flex-col gap-[107px] items-center justify-center">
        <Image src={logo} alt="Ixi Yetu" />

        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-[6px]">
            <h2 className="text-2xl font-bold text-white">
              Seja bem vindo a IxiYetu.
            </h2>

            <p className="text-font-color">
              Entre com seus dados para continuar.
            </p>
          </div>

          <form className="flex w-full max-w-[450px] flex-col items-center gap-y-6" action="">
            <Input placeholder="Nome de usuário" type="text" />
            <Input placeholder="Código de acesso" type="password" />
            <Button value="Entrar" className="bg-[#FF9D0525] w-full text-base py-4" />
          </form>
        </div>
      </div>
    </Main>
  );
}
