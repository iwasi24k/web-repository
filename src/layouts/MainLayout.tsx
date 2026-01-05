import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col text-void-white font-sans selection:bg-void-purple selection:text-white">

      <main className="flex-1 relative">
        <Outlet />
      </main>

      <Header />
    </div>
  );
};

export default MainLayout;
