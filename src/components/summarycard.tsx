import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

type SummaryCardProps = {
  title: string;
  amount: string;
  percentage: string;
};

export const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  amount,
  percentage,
}) => {
  return (
    <div
      className="bg-[rgba(52,97,111,0.09)]
        p-4 rounded-2xl  w-full max-w-sm sm:max-w-full border-none border-[rgba(73,101,110,0.2)] font-Public cursor-pointer "
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[#1B2528] text-[17px] font-bold">{title}</h3>
        <FiMoreHorizontal className="w-6 h-6 text-[#1B2528]" />
      </div>
      <h2 className="text-[#1B2528] text-[24px] font-bold">{amount}</h2>
      <p className="text-[#3E7383] font-medium  text-[13px] mt-1">
        {percentage}
      </p>
    </div>
  );
};
