import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
export const Audit = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[100px] p-3 flex items-center gap-5">
        <div className="h-full grow rounded-3xl p-3 relative overflow-hidden bg-gradient-to-r from-[#CF6D12]/[.1]  via-[#140F2E] via-60% to-[#140F2E]">
          <div>
            <p>Step 1</p>
          </div>
        </div>
        <ArrowLongRightIcon className="w-[24px] h-[24px]" />
        <div className="h-full grow rounded-3xl p-3 relative overflow-hidden bg-gradient-to-r from-[#CF6D12]/[.1]  via-[#140F2E] via-60% to-[#140F2E]">
          <p>Step 2</p>
        </div>
        <ArrowLongRightIcon className="w-[24px] h-[24px]" />
        <div className="h-full grow rounded-3xl p-3 relative overflow-hidden bg-gradient-to-r from-[#CF6D12]/[.1]  via-[#140F2E] via-60% to-[#140F2E]">
          <p>Step 3</p>
        </div>
        <ArrowLongRightIcon className="w-[24px] h-[24px]" />
        <div className="h-full grow rounded-3xl p-3 relative overflow-hidden bg-gradient-to-r from-[#CF6D12]/[.1]  via-[#140F2E] via-60% to-[#140F2E]">
          <p>Step 4</p>
        </div>
      </div>
      <p>Audit</p>
    </div>
  );
};
