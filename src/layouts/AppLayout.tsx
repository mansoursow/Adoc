// src/layouts/AppLayout.tsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar'; // Pas d'accolades ici !
import adocLogo from "../assets/adoc-logo.PNG";


export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 shadow-sm justify-between">
  <div className="flex items-center gap-3">
    <img
      src={adocLogo}
      alt="ADOC"
      className="h-9 w-auto"
    />
    <span className="text-slate-700 font-semibold">ADOC</span>
  </div>

  <span className="text-slate-500 font-medium">
    Projet : <span className="text-slate-900 font-bold">ADS 2026</span>
  </span>
</header>

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}