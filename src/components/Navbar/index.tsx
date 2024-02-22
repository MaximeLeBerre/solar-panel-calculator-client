import SolsticeLogo from "../../assets/logo/logo.svg";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
export const Navbar = () => {
  return (
    <div className="bg-[#140F2E] h-full w-full p-4 gap-[3rem] flex flex-col">
      <div className="flex items-end gap-3">
        <img src={SolsticeLogo} alt="Solstice logo" className="h-[40px]" />
        <h3 className="font-bold">Solstice Energie</h3>
      </div>
      <div className="flex flex-col gap-4">
        <p className="uppercase text-white/60 text-xs">Menu Principal</p>
        <div className="flex flex-col gap-2">
          <div className=" bg-[#CF6D12] rounded-md p-2.5 flex justify-start items-center gap-2 cursor-pointer">
            <Squares2X2Icon className="w-[24px] h-[24px]" />
            <p>Dashboard</p>
          </div>
          <div className="rounded-md p-2.5 flex justify-start items-center gap-2 cursor-pointer">
            <DocumentTextIcon className="w-[24px] h-[24px]" />
            <p>Audit</p>
          </div>
        </div>
      </div>
    </div>
  );
};
