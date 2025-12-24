import type { ReactNode } from 'react';
import Header from './Header';
import {WorldBlocksLayer} from "../components/world/WorldBlocksLayer"

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col text-void-white font-sans selection:bg-void-purple selection:text-white">
      <WorldBlocksLayer />
      <Header />

      <main className="flex-1 relative z-10">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;