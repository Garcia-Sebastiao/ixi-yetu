import Link from "next/link";
import { useCallback } from "react";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Link className="text-black" href="/system/">
        O Crisvan ainda não fez uma tela de login. Clique aqui para ter acesso
        ao sistema.
      </Link>
    </main>
  );
}
