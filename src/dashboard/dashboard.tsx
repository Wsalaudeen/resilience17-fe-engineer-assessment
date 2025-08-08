import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Dashboardheader } from "../components/dashboardheader";
import { Dashboardtabs } from "../components/dashboardtabs";
import { useState } from "react";
import Dashboardsummary from "../components/dashboardsummary";
import { dashboardsummarydata } from "../data/dashboardsummarydata";
import { Summarytable } from "../summarytable/summarytable";
import { transactions } from "../data/sampledata";

type TabType = "overview" | "transactions";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <section className="px-9 py-3 bg-[#fcfdfd] min-h-screen flex">
        <div className="w-[30%]">
          <Sidebar />
        </div>
        <div className="w-[70%]">
          <Dashboardheader />
          <Dashboardtabs activeTab={activeTab} onTabChange={setActiveTab} />
          <Dashboardsummary data={dashboardsummarydata} />
          <Summarytable
            searchTerm={searchTerm}
            transactions={transactions}
            isLoading={false}
          />
        </div>
      </section>
    </section>
  );
}
