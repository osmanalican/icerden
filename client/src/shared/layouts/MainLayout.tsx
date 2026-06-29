import { Outlet } from 'react-router-dom';
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />

      <main className="pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
