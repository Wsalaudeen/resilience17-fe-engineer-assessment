import { SummaryCard } from "./summarycard";
import type { DashboardSummary } from "../types";

interface DashboardsummaryProps {
  data: DashboardSummary;
}

export default function Dashboardsummary({ data }: DashboardsummaryProps) {
  return (
    <section>
      <h2 className="text-[20px] font-bold text-[#1b2528] font-Public mb-4">
        Summary
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Total Balance"
          amount={`$${data.totalBalance.toLocaleString()}`}
          percentage={`${data.balanceChange > 0 ? "+" : ""}${
            data.balanceChange
          }%`}
        />

        <SummaryCard
          title="Total Credits"
          amount={`$${data.totalCredits.toLocaleString()}`}
          percentage={`${data.creditsChange > 0 ? "+" : ""}${
            data.creditsChange
          }%`}
        />
        <SummaryCard
          title="Total Debits"
          amount={`$${data.totalDebits.toLocaleString()}`}
          percentage={`${data.debitsChange > 0 ? "+" : ""}${
            data.debitsChange
          }%`}
        />

        <SummaryCard
          title="Expenses"
          amount={`${data.transactionCount.toLocaleString()}`}
          percentage={`${data.transactionChange > 0 ? "+" : ""}${
            data.transactionChange
          }%`}
        />
      </div>
    </section>
  );
}
