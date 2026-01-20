// src/pages/Matrix/MatrixPage.tsx
import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';

interface AuditOS {
  id: string;
  category: string;
  title: string;
  planification: string;
  evaluationCI: string;
  realisation: string;
  conclusion: string;
}

export default function MatrixPage() {
  const navigate = useNavigate();

  // Initialisation : on essaie de charger les données sauvegardées, sinon tableau vide
  const [data, setData] = useState<AuditOS[]>(() => {
    const saved = localStorage.getItem('audit_matrix_data');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Tous');

  // Sauvegarde automatique dès que "data" change
  useEffect(() => {
    localStorage.setItem('audit_matrix_data', JSON.stringify(data));
  }, [data]);

  // LOGIQUE DE FILTRE ET RECHERCHE
  const filteredData = useMemo(() => {
    return data.filter(os => {
      const matchesSearch = 
        os.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        os.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        os.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filterCategory === 'Tous' || os.category.includes(filterCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [data, searchTerm, filterCategory]);

  const categories = useMemo(() => {
    const cats = data.map(os => os.category.split(' – ')[0]).filter(c => c !== "");
    return ['Tous', ...Array.from(new Set(cats))];
  }, [data]);

  // FONCTIONS DE GESTION
  const downloadTemplate = () => {
    const template = [{ ID: "OS1", Categorie: "C1 – Recettes", Objectif: "...", Planification: "...", Evaluation_CI: "...", Realisation: "...", Conclusion: "..." }];
    const ws = XLSX.utils.json_to_sheet(template);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Modele");
    XLSX.writeFile(wb, "Format_Ideal_Audit.xlsx");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const bstr = event.target?.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const rawData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) as any[];
      setData(rawData.map((row, i) => ({
        id: row.ID || `OS${i + 1}`,
        category: row.Categorie || "",
        title: row.Objectif || "",
        planification: row.Planification || "",
        evaluationCI: row.Evaluation_CI || "",
        realisation: row.Realisation || "",
        conclusion: row.Conclusion || ""
      })));
    };
    reader.readAsBinaryString(file);
  };

  const addNewRow = () => {
    const nextIdNum = data.length > 0 ? Math.max(...data.map(d => parseInt(d.id.replace('OS', '')) || 0)) + 1 : 1;
    setData([...data, { id: `OS${nextIdNum}`, category: "", title: "", planification: "", evaluationCI: "", realisation: "", conclusion: "" }]);
  };

  const deleteRow = (id: string) => {
    if (window.confirm(`Supprimer ${id} ?`)) setData(data.filter(os => os.id !== id));
  };

  const handleUpdate = (id: string, field: keyof AuditOS, value: string) => {
    setData(prev => prev.map(os => os.id === id ? { ...os, [field]: value } : os));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Matrice d'Audit</h1>
          <p className="text-slate-500 text-sm italic">Vos modifications sont sauvegardées automatiquement.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={downloadTemplate} className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-50 shadow-sm transition-all">📥 Modèle</button>
          <label className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs font-semibold cursor-pointer shadow-sm">
            📤 Importer <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
      </div>

      {/* Barre de Recherche et Filtres */}
      <div className="flex flex-col sm:flex-row gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Rechercher par texte ou OS..." 
            className="w-full pl-4 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select 
          className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat === 'Tous' ? 'Toutes Catégories' : `Catégorie ${cat}`}</option>
          ))}
        </select>
      </div>

      {/* Tableau */}
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1200px]">
            <thead>
              <tr className="bg-[#1e293b] text-white text-[10px] uppercase tracking-widest font-bold">
                <th className="p-4 w-20 border-r border-slate-700 text-center sticky left-0 bg-[#1e293b] z-10">ID</th>
                <th className="p-4 w-40 border-r border-slate-700">Catégorie</th>
                <th className="p-4 w-64 border-r border-slate-700">Objectif Spécifique</th>
                <th className="p-4 border-r border-slate-700">Planification</th>
                <th className="p-4 border-r border-slate-700">Éval. CI</th>
                <th className="p-4 border-r border-slate-700">Réalisation</th>
                <th className="p-4 border-r border-slate-700">Conclusion</th>
                <th className="p-4 w-16 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredData.map((os) => (
                <tr key={os.id} className="hover:bg-blue-50/20 transition-colors group">
                  <td className="p-2 border-r border-slate-100 text-center sticky left-0 bg-white z-10">
                    <button onClick={() => navigate(`/os/${os.id}/program`)} className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-md text-xs">{os.id}</button>
                  </td>
                  {['category', 'title', 'planification', 'evaluationCI', 'realisation', 'conclusion'].map((field) => (
                    <td key={field} className="p-1 border-r border-slate-100">
                      <textarea
                        value={(os as any)[field]}
                        onChange={(e) => handleUpdate(os.id, field as keyof AuditOS, e.target.value)}
                        className="w-full min-h-[90px] p-2 text-[11px] bg-transparent border-none focus:bg-white focus:ring-2 focus:ring-blue-100 rounded resize-none outline-none transition-all"
                      />
                    </td>
                  ))}
                  <td className="p-2 text-center">
                    <button onClick={() => deleteRow(os.id)} className="text-slate-300 hover:text-red-600 p-2">
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <button onClick={addNewRow} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:text-blue-600 hover:border-blue-400 hover:bg-white transition-all text-sm font-bold">
            + Ajouter une ligne manuellement
          </button>
        </div>
      </div>
    </div>
  );
}   