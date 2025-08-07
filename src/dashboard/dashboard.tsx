import { Sidebar } from "../components/sidebar";
import { Dashboardheader } from "../components/dashboardheader";

export function Dashboard() {
  return (
    <section className="px-9 py-3 bg-[#fcfdfd] min-h-screen flex">
      <div className="w-[30%]">
        <Sidebar />
      </div>
      <div className="w-[70%]">
        <Dashboardheader />
      </div>
    </section>
  );
}
