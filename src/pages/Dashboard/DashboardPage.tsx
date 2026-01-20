import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-slate-900 mb-6">
        Tableau de bord
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/matrix"
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">
            Matrice d’audit
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Accéder à la matrice des risques, objectifs spécifiques et programmes de contrôle.
          </p>
        </Link>

        <Link
          to="/normes-audit"
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">
            Normes d’audit
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Référentiel normatif : ISRS, ISSAI, ISA, COSO et normes ISO.
          </p>
        </Link>
      </div>
    </div>
  );
}
