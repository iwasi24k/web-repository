import type { ReactNode } from 'react';
import Header from './Header';
import Background from '../components/ui/Background';
import {BackgroundBlocks} from '../components/ui/BackgroundBlocks';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col text-void-white font-sans selection:bg-void-purple selection:text-white">
      <Background />
      <BackgroundBlocks />
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;