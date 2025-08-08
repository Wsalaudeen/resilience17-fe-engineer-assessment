import { FiChevronDown, FiMoreHorizontal } from "react-icons/fi";
import walletImage1 from "../../public/assets/wallet1.svg";
import walletImage2 from "../../public/assets/wallet2.svg";
import walletImage3 from "../../public/assets/wallet3.svg";
import walletImage4 from "../../public/assets/wallet4.svg";

export function Dashboardheader() {
  return (
    <div className="mb-6 bg-[#fcfdfd] font-Public">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <h1 className="text-[30px] font-bold text-[#1b2528] ">
            Wallet Ledger
          </h1>
          <button className="flex items-center gap-2 font-bold text-[#1b2528] cursor-pointer">
            <FiChevronDown className="h-6 w-12" />
          </button>
          <div className="flex items-center gap-2 bg-[rgba(52,97,111,0.09)] px-2 py-1 rounded-2xl">
            <div className="w-2 h-2 bg-[#087A2E] rounded-full"></div>
            <span className="text-[15px] text-[#1b2528] cursor-pointer">
              Active
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-[18px] py-2 bg-[#4b8b9f] text-[#020303] rounded-2xl hover:bg-[#4b8b9f] transition-colors cursor-pointer">
            Share
          </button>
          <button className="p-2 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer border-[1.5px] border-[rgba(73,101,110,0.2)]">
            <FiMoreHorizontal className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          <img
            src={walletImage1}
            alt="Ava"
            className="w-8 h-8 rounded-full ring-2 ring-white"
          />
          <img
            src={walletImage2}
            alt="Liam"
            className="w-8 h-8 rounded-full ring-2 ring-white"
          />
          <img
            src={walletImage3}
            alt="Noah"
            className="w-8 h-8 rounded-full ring-2 ring-white"
          />
          <img
            src={walletImage4}
            alt="Emma"
            className="w-8 h-8 rounded-full ring-2 ring-white"
          />
        </div>
        <span className="text-[14px] text-[rgba(21,39,45,0.62)]">
          Ava, Liam, Noah +12 others
        </span>
      </div>
    </div>
  );
}
