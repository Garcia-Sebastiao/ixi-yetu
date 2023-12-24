import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";

export default function SelectGroundData() {
  return (
    <div className="flex w-full max-w-[465px] flex-col gap-y-20 items-center">
      <span>Nesta fase vamos colher os dados da propriedade.</span>

      <form
        action="/system/grounds/add-ground/upload-image"
        className="w-full flex flex-col items-center gap-4"
      >
        <Input type="text" placeholder="Província" />
        <Input type="text" placeholder="Município" />
        <Input placeholder="Bairro/Distrito..." />
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
