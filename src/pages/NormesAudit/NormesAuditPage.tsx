    // src/pages/NormesAudit/NormesAuditPage.tsx
import { useNavigate } from "react-router-dom";

export default function NormesAuditPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow border border-slate-200">
        
        {/* Header */}
        <div className="p-6 bg-slate-800 text-white rounded-t-2xl">
          <h1 className="text-2xl font-bold">
            Proposition de reformulation – Notes sur les normes
          </h1>
          <p className="text-slate-300 mt-2 text-sm">
            Référentiel normatif applicable à la mission d’audit
          </p>
        </div>

        {/* Contenu */}
        <div className="p-6 space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="font-bold text-lg mb-2">
              1. Choix du référentiel normatif applicable à la mission
            </h2>
            <p>
              La détermination du référentiel normatif applicable constitue un élément
              fondamental de la méthodologie de la mission. Elle doit être définie de
              manière cohérente avec la nature des travaux attendus, le contexte du
              secteur public, les obligations contractuelles liant les parties, ainsi
              que le niveau d’assurance et de jugement professionnel requis.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">
              2. Recours principal aux Normes internationales de services connexes (ISRS)
            </h2>
            <p>
              Les travaux sont proposés comme étant menés principalement sur la base
              des Normes internationales de services connexes (ISRS), et plus
              particulièrement dans l’esprit de la norme ISRS 4400 relative aux
              missions de procédures convenues.
            </p>

            <p className="mt-3">
              Toutefois, la présente mission se distingue d’une mission de procédures
              convenues au sens strict, dans la mesure où elle requiert également
              l’émission de jugements professionnels et d’opinions structurées portant
              notamment sur :
            </p>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>La fiabilité et la sincérité des recettes ;</li>
              <li>La conformité aux dispositions contractuelles et réglementaires ;</li>
              <li>L’efficacité des dispositifs de contrôle interne et de gouvernance.</li>
            </ul>

            <p className="mt-3">
              Dès lors, le recours aux ISRS s’inscrit comme un socle méthodologique
              principal, sans être exclusif ni restrictif, et est complété par d’autres
              référentiels normatifs adaptés à la nature et aux objectifs de la mission.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">
              3. Mobilisation complémentaire des normes ISSAI
            </h2>
            <p>
              Compte tenu de l’inscription de la mission dans le secteur public et de
              son objet portant sur la gestion de recettes publiques, les Normes
              internationales des institutions supérieures de contrôle des finances
              publiques (ISSAI) constituent un cadre de référence complémentaire
              essentiel.
            </p>

            <p className="mt-3">
              Les ISSAI offrent un référentiel spécifiquement conçu pour les audits du
              secteur public, intégrant les dimensions de conformité, de performance,
              de gouvernance et de reddition des comptes.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">
              4. Apport méthodologique des Normes internationales d’audit (ISA)
            </h2>
            <p>
              Bien que la mission ne relève pas d’un audit de certification des états
              financiers au sens de la norme ISA 200, certains principes issus des
              Normes internationales d’audit (ISA) peuvent être mobilisés à titre
              complémentaire et méthodologique.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">
              5. Intégration des référentiels COSO et ISO
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>COSO – contrôle interne et gestion des risques</li>
              <li>ISO 31000 – management des risques</li>
              <li>ISO 9001 – qualité des processus</li>
              <li>ISO 27001 – sécurité des systèmes d’information</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">
              6. Conclusion normative
            </h2>
            <p>
              La mission sera conduite sur la base d’une approche normative combinée,
              structurée et prudente, garantissant la rigueur méthodologique, la clarté
              du niveau d’assurance et la crédibilité des conclusions formulées.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-slate-50 rounded-b-2xl flex justify-end">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
          >
            ← Retour au dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
