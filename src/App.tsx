import { Header } from "./components/header";
import { Dashboard } from "./dashboard/dashboard";
import "./index.css";

function App() {
  return (
    <section className="min-h-screen bg-[#FCFDFD] ">
      <Header />
      <section>
        <Dashboard />
      </section>
    </section>
  );
}

export default App;
