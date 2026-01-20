// src/components/layout/Sidebar.tsx
import { Link } from 'react-router-dom';

// Il faut bien "export default function"
export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 shadow-xl">
      <div className="text-xl font-bold mb-10 border-b border-slate-700 pb-4">
        AUDIT MATRIX
      </div>
      <nav className="flex flex-col gap-4">
        <Link 
          to="/" 
          className="p-3 hover:bg-slate-800 rounded-lg transition-colors font-medium"
        >
          Dashboard
        </Link>
        <Link 
          to="/matrix" 
          className="p-3 hover:bg-blue-600 bg-blue-700 rounded-lg transition-colors font-bold text-white shadow-sm"
        >
          Matrice d'Audit
        </Link>
      </nav>
    </aside>
  );
}