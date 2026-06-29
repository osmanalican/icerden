import { Outlet } from 'react-router-dom';
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-zinc-950">
      <Header />

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
