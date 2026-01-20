// src/components/layout/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const linkBase =
    "p-3 rounded-lg transition-colors font-medium";
  const linkActive =
    "bg-blue-700 text-white shadow-sm font-bold";
  const linkInactive =
    "hover:bg-slate-800 text-white";

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 shadow-xl">
      <div className="text-xl font-bold mb-10 border-b border-slate-700 pb-4">
        AUDIT MATRIX
      </div>

      <nav className="flex flex-col gap-4">
        {/* Dashboard */}
        <Link
          to="/"
          className={`${linkBase} ${
            location.pathname === "/" ? linkActive : linkInactive
          }`}
        >
          Dashboard
        </Link>

        {/* Matrice */}
        <Link
          to="/matrix"
          className={`${linkBase} ${
            location.pathname.startsWith("/matrix")
              ? linkActive
              : linkInactive
          }`}
        >
          Matrice d’Audit
        </Link>

        {/* ✅ Normes d'audit */}
        <Link
          to="/normes-audit"
          className={`${linkBase} ${
            location.pathname.startsWith("/normes-audit")
              ? linkActive
              : linkInactive
          }`}
        >
          Normes d’audit
        </Link>
      </nav>
    </aside>
  );
}
