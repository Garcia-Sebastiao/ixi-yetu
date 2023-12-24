import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";

export default function Home() {
  return (
    <div className="flex w-full max-w-[465px] flex-col gap-y-6 items-center">
      <h3 className="font-semibold text-xl text-center">
        Digite o NIF ou o Número do Bilhete de Identidade, para prosseguir.
      </h3>

      <form action="add-ground/select-ground-data" className="w-full flex flex-col items-center gap-4">
        <Input placeholder="NIF ou Bilhete de Identidade" />
        <div className="flex w-full items-center gap-x-4">
          <Button value="Cancelar" className="bg-red-500 font-semibold w-full py-4" />
          <Button value="Continuar" className="bg-[#00A86978] font-semibold w-full py-4" />
        </div>
      </form>
    </div>
  );
}
