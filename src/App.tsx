import "./App.css";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex h-full w-full">
      <div className="w-[15%] h-full min-w-[220px]">
        <Navbar />
      </div>
      <div className="w-full flex flex-col p-2.5">
        <TopBar />
        <div className="h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
