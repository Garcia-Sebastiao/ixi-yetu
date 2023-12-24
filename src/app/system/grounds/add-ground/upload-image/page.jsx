import { imageIcon } from "@/assets";
import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import Image from "next/image";

export default function UploadGroundImage() {
  return (
    <div className="flex w-full max-w-[472px] flex-col gap-y-8 items-center">
      <h3 className="text-xl font-semibold text-white text-center">
        Carregar imagem do espaço.
      </h3>

      <form
        action="add-ground/select-ground-data"
        className="w-full flex flex-col items-center gap-y-16"
      >
        <div className="w-full h-64 outline-dashed flex items-center justify-center bg-[#FFFFFF04] backdrop-blur-md rounded-md relative outline-4 outline-[#ffffff50]">
          <input
            type="file"
            className="w-full absolute top-0 h-full opacity-0"
          />

          <div className="flex flex-col gap-y-4 items-center">
            <Image src={imageIcon} alt="" />
            <span className="text-sm font-medium">Arraste uma imagem para aqui ou clique em:</span>
            <Button value="Carregar" className="bg-[#FF9D0548] px-14"  />
          </div>
        </div>

        <div className="flex w-full items-center gap-x-4">
          <Button
            value="Cancelar"
            className="bg-red-500 font-semibold w-full py-4"
          />
          <Button
            value="Continuar"
            className="bg-[#00A86978] font-semibold w-full py-4"
          />
        </div>
      </form>
    </div>
  );
}
