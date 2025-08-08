interface DashboardTabsProps {
  activeTab: "overview" | "transactions";
  onTabChange: (tab: "overview" | "transactions") => void;
}

export function Dashboardtabs({ activeTab, onTabChange }: DashboardTabsProps) {
  return (
    <div
      className="border-b-[1.5px] border-[#49656E]/[0.2]
 mb-6 font-Public"
    >
      <nav className="flex items-baseline space-x-8">
        <button
          onClick={() => onTabChange("overview")}
          className={`py-2 px-1 border-b-2 font-medium text-[15px] transition-colors cursor-pointer ${
            activeTab === "overview"
              ? "border-[#437D8E] text-[#437D8E]"
              : "border-transparent text-[#15272D]/[0.62] hover:text-[#15272D]/[0.62]"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => onTabChange("transactions")}
          className={`py-2 px-1 border-b-2 font-medium text-[15px] transition-colors cursor-pointer  ${
            activeTab === "transactions"
              ? "border-[#437D8E] text-[#437D8E]"
              : "border-transparent text-[#15272D]/[0.62] hover:text-[#15272D]/[0.62]"
          }`}
        >
          Transactions
        </button>
      </nav>
    </div>
  );
}
