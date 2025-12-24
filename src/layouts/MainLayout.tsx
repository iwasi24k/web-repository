import type { ReactNode } from 'react';
import WorldBackground from '../components/background/WorldBackground';
import Header from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col text-void-white font-sans selection:bg-void-purple selection:text-white">
      <WorldBackground />
      <Header />

      <main className="flex-1 pt-16 relative z-10">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;