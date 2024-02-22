import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const TopBar = () => {
  return (
    <div className="w-full flex justify-end px-2.5">
      <div className="flex gap-3 items-center p-3">
        <div className="rounded-full h-8 w-8 bg-[#CF6D12]"></div>
        <p className="text-sm">Maxime LE BERRE</p>
        <ChevronDownIcon className="w-[24px] h-[24px]" />
      </div>
    </div>
  );
};
