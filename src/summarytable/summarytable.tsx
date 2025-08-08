import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import type { Transaction } from "../types";

type SortColumn = "date" | "remark" | "amount" | "currency" | "type";

interface SummarytableProps {
  transactions: Transaction[];
  searchTerm: string;
  isLoading: boolean;
}

export const Summarytable = ({
  searchTerm,
  transactions,
}: SummarytableProps) => {
  const [sortColumn, setSortColumn] = useState<SortColumn>("date");
  const [direction, setDirection] = useState<"asc" | "des">("asc");

  const toggleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setDirection((prev) => (prev === "asc" ? "des" : "asc"));
    } else {
      setSortColumn(column);
      setDirection("asc");
    }
  };

  const safeTransactions: Transaction[] = Array.isArray(transactions)
    ? transactions
    : [];

  const filteredTransactions = safeTransactions.filter(
    ({ date, remark, amount, currency, type }) => {
      const search = searchTerm.toLowerCase();
      return (
        remark.toLowerCase().includes(search) ||
        amount.toString().includes(search) ||
        currency.toLowerCase().includes(search) ||
        type.toLowerCase().includes(search) ||
        date.toLowerCase().includes(search)
      );
    }
  );

  const sortedData = [...(filteredTransactions ?? [])].sort((a, b) => {
    const valA = a[sortColumn];
    const valB = b[sortColumn];

    if (sortColumn === "date") {
      const dateA = new Date(valA as string).getTime();
      const dateB = new Date(valB as string).getTime();
      return direction === "asc" ? dateA - dateB : dateB - dateA;
    }

    if (typeof valA === "number" && typeof valB === "number") {
      return direction === "asc" ? valA - valB : valB - valA;
    }

    return direction === "asc"
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  const formatAmount = (amount: number) => {
    const isNegative = amount < 0;
    const absoluteAmount = Math.abs(amount);
    const formattedAmount = absoluteAmount.toLocaleString("en-US");
    return isNegative ? `-$${formattedAmount}` : `$${formattedAmount}`;
  };

  const renderSortIcon = (column: SortColumn) =>
    sortColumn === column ? (
      direction === "asc" ? (
        <TiArrowSortedDown size={18} />
      ) : (
        <IoMdArrowDropup size={18} />
      )
    ) : (
      <TiArrowSortedDown size={18} className="opacity-30" />
    );

  return (
    <section>
      <table className="w-full table-fixed border-separate border-spacing-y-3 border-spacing-x-3 font-Public">
        <thead className="mt-4">
          <tr className="text-left text-[#15272D9E] font-medium text-[15px]">
            <th
              className="w-[55%] cursor-pointer"
              onClick={() => toggleSort("date")}
            >
              <div className="flex items-center gap-1">
                Date
                {renderSortIcon("date")}
              </div>
            </th>
            <th
              className="w-[15%] cursor-pointer"
              onClick={() => toggleSort("remark")}
            >
              <div className="flex items-center gap-1">
                Remark
                {renderSortIcon("remark")}
              </div>
            </th>
            <th
              className="w-[10%] cursor-pointer"
              onClick={() => toggleSort("amount")}
            >
              <div className="flex items-center gap-1">
                Amount
                {renderSortIcon("amount")}
              </div>
            </th>
            <th
              className="w-[10%] cursor-pointer"
              onClick={() => toggleSort("currency")}
            >
              <div className="flex items-center gap-1">
                Currency
                {renderSortIcon("currency")}
              </div>
            </th>
            <th
              className="w-[10%] cursor-pointer"
              onClick={() => toggleSort("type")}
            >
              <div className="flex items-center gap-1">
                Type
                {renderSortIcon("type")}
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedData.map(({ id, date, remark, amount, currency, type }) => (
            <tr
              key={id}
              className="text-[15px] text-[#1B2528] text-left last:[&>td]:border-b-0"
            >
              <td className="border-b-[1.5px] border-[#49656E33] py-3">
                {date}
              </td>
              <td className="border-b-[1.5px] border-[#49656E33] py-3">
                {remark}
              </td>
              <td className="border-b-[1.5px] border-[#49656E33] py-3">
                {formatAmount(amount)}
              </td>
              <td className="border-b-[1.5px] border-[#49656E33] py-3">
                {currency}
              </td>
              <td className="border-b-[1.5px] border-[#49656E33] py-3">
                <div className="flex items-center gap-2 bg-[#34616F17] w-fit px-3 py-1 rounded-full">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      type.toLowerCase() === "debit"
                        ? "bg-[#C6381B]"
                        : "bg-[#087A2E]"
                    }`}
                  ></div>
                  {type}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
