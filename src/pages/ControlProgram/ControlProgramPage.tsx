// src/pages/ControlProgram/ControlProgramPage.tsx

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ALL_PROGRAMS } from "../../data/auditData";

export default function ControlProgramPage() {
  const { osId } = useParams<{ osId: string }>();
  const navigate = useNavigate();

  const program = osId ? ALL_PROGRAMS[osId] : undefined;

  // Gestion des constats (stockage local)
  const [findings, setFindings] = useState<Record<number, string>>(() => {
    const saved = localStorage.getItem(`findings_${osId}`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    if (osId) {
      localStorage.setItem(`findings_${osId}`, JSON.stringify(findings));
    }
  }, [findings, osId]);

  // =========================
  // CAS 1 — OS inexistant
  // =========================
  if (!program) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-xl font-bold text-red-600 mb-4">
          OS non configuré
        </h2>
        <p className="text-slate-500 mb-6">
          Le programme pour <strong>{osId}</strong> n'est pas encore défini dans auditData.ts
        </p>
        <button
          onClick={() => navigate("/matrix")}
          className="bg-slate-800 text-white px-6 py-2 rounded-lg"
        >
          Retour à la matrice
        </button>
      </div>
    );
  }

  // =========================
  // RENDU NORMAL
  // =========================
  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      <button
        onClick={() => navigate("/matrix")}
        className="mb-6 text-blue-600 flex items-center gap-2 font-semibold hover:underline"
      >
        ← Retour à la Matrice d'Audit
      </button>

      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* =========================
            EN-TÊTE
        ========================= */}
        <div className="p-8 bg-[#1e293b] text-white">
          <h1 className="text-2xl font-bold mb-4">
            {program.id} — {program.title}
          </h1>

          <div className="bg-white/10 p-4 rounded-xl border border-white/10">
            <h3 className="text-blue-300 text-xs font-bold uppercase mb-2 tracking-widest">
              Objectifs de contrôle
            </h3>

            {program.objectives && program.objectives.length > 0 ? (
              <ul className="text-sm space-y-1 list-disc ml-5 text-slate-200">
                {program.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm italic text-slate-300">
                Objectifs non renseignés
              </p>
            )}
          </div>
        </div>

        {/* =========================
            TABLEAU DES PROGRAMMES
        ========================= */}
        <div className="overflow-x-auto">
          {!program.steps || program.steps.length === 0 ? (
            <div className="p-6 text-center text-orange-600 font-semibold">
              ⚠️ Programme défini mais étapes de contrôle non encore configurées.
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-[11px] uppercase text-slate-500 font-bold">
                  <th className="p-4 border-r w-12 text-center">N°</th>
                  <th className="p-4 border-r w-1/4">Test / Action</th>
                  <th className="p-4 border-r w-1/6">Méthodologie</th>
                  <th className="p-4 border-r w-1/6">Sources</th>
                  <th className="p-4 border-r w-1/6 text-green-700">
                    Résultat attendu
                  </th>
                  <th className="p-4 bg-blue-50 text-blue-800">
                    Constats (saisie libre)
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {program.steps.map((step) => (
                  <tr
                    key={step.id}
                    className="hover:bg-slate-50 transition-all align-top"
                  >
                    <td className="p-4 text-center font-bold text-slate-400 border-r">
                      {step.id}
                    </td>

                    <td className="p-4 text-sm font-medium border-r">
                      {step.action}
                    </td>

                    <td className="p-4 text-xs text-slate-600 border-r">
                      {step.methodology}
                    </td>

                    <td className="p-4 text-xs text-slate-500 italic border-r">
                      {step.sources}
                    </td>

                    <td className="p-4 text-xs text-green-700 font-medium border-r bg-green-50/20">
                      {step.expectedResult}
                    </td>

                    <td className="p-2 bg-blue-50/10">
                      <textarea
                        className="w-full h-24 p-2 text-xs border-none bg-transparent focus:bg-white rounded outline-none transition-all resize-none shadow-inner"
                        placeholder="Notez vos observations..."
                        value={findings[step.id] || ""}
                        onChange={(e) =>
                          setFindings({
                            ...findings,
                            [step.id]: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
