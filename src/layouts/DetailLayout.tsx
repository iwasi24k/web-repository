import { Outlet } from "react-router-dom";
import DetailBackground from "../components/world/details/DetailBackground";

const DetailLayout = () => {
  return (
    <section className="relative min-h-screen">
      {/* Detail 専用背景 */}
      <DetailBackground />

      <main className="relative z-10 flex-1">
        <Outlet />
      </main>
    </section>
  );
};

export default DetailLayout;
