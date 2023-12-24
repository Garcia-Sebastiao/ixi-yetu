import Background from "@/components/UI/Background/Background";
import { Steps } from "@/components/layout/Steps/Steps";

export default function AddGroundLayout({ children }) {
  return (
    <div className="w-full overflow-hidden flex h-screen relative">
      <Background />
      <div className="flex justify-center w-full gap-y-[95px] items-center flex-col">
        <div className="flex w-full items-center flex-col">
          <Steps />
          {children}
        </div>
      </div>
    </div>
  );
}
