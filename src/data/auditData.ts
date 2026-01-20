// src/data/auditData.ts
export type Step = {
  id: number;
  action: string;
  methodology: string;
  sources: string;
  expectedResult: string;
};

export type AuditProgram = {
  id: string;
  title: string;
  category: string;
  objectives: string[];
  steps: Step[];
};



// ✅ Ton tableau (mets OS1...OS45 ici)
const programs: AuditProgram[] = [
  // ... (OS1 à OS31)

  // =========================
  // C3 — SYSTÈMES SI (Suite)
  // =========================
 // =========================
// C1 — AUDIT DES RECETTES
// OS1 à OS5
// =========================

// =========================
// C1 — AUDIT DES RECETTES
// OS1 à OS5
// =========================

{
  id: "OS1",
  title: "Vérifier que toutes les recettes sont correctement enregistrées, totalisées et centralisées",
  category: "Recettes",
  objectives: [
    "Les recettes sont correctement évaluées",
    "Les recettes sont correctement enregistrées",
    "Les recettes sont correctement totalisées",
    "Les recettes sont correctement centralisées",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier le cadre contractuel et les règles de gestion des recettes",
      methodology: "Revue documentaire",
      sources: "Contrat de concession / régie, convention de mandat, manuels/procédures recettes",
      expectedResult: "Les règles de gestion (enregistrement, totalisation, centralisation) sont formalisées et cohérentes",
    },
    {
      id: 2,
      action: "Décrire le circuit complet de la recette (péage → système → comptabilité → reporting)",
      methodology: "Walkthrough / entretiens",
      sources: "Schémas SI, procédures, entretiens (caisse, supervision, compta, IT)",
      expectedResult: "Le circuit est compris, documenté et les points de contrôle sont identifiés",
    },
    {
      id: 3,
      action: "Vérifier l’exhaustivité des enregistrements dans le système de péage",
      methodology: "Rapprochement / test d’exhaustivité",
      sources: "Extractions brutes (SGET), rapports trafic, journaux de transactions",
      expectedResult: "Correspondance totale entre passages enregistrés et transactions système",
    },
    {
      id: 4,
      action: "Contrôler la totalisation des recettes journalières (par gare / voie)",
      methodology: "Recalcul arithmétique",
      sources: "Rapports journaliers MTC/ETC, feuilles de caisse, états de clôture",
      expectedResult: "Total journalier recalculé = total déclaré (écarts expliqués)",
    },
    {
      id: 5,
      action: "Vérifier la centralisation des données (local → central) et la complétude de consolidation",
      methodology: "Test de complétude / rapprochement",
      sources: "Logs de transfert, bases locales vs base centrale, rapports consolidation",
      expectedResult: "Toutes les données locales sont centralisées sans pertes ni doublons",
    },
    {
      id: 6,
      action: "Rapprocher recettes système ↔ recettes comptabilisées ↔ recettes reportées",
      methodology: "Rapprochement comptable",
      sources: "Grand-livre, journaux comptables, états de recettes, rapports mensuels",
      expectedResult: "Concordance système / comptabilité / reporting, ou écarts justifiés",
    },
    {
      id: 7,
      action: "Analyser les écarts significatifs et conclure sur la fiabilité globale",
      methodology: "Analyse + jugement professionnel",
      sources: "Synthèse des rapprochements, liste écarts, justifications, mesures correctives",
      expectedResult: "Les écarts sont rares, expliqués et documentés ; fiabilité globale jugée satisfaisante",
    },
  ],
},


{
  id: "OS2",
  title: "Vérifier que les recettes sont correctement évaluées (exactitude) et retracées dans les rapports d’activités mensuels, annuels et notes financières",
  category: "Recettes",
  objectives: [
    "Les recettes sont correctement évaluées conformément aux tarifs et dispositions contractuelles",
    "Les montants des recettes sont exacts et fiables",
    "Les recettes enregistrées sont correctement retracées dans les rapports d’activités mensuels et annuels",
    "Les notes financières reflètent fidèlement les recettes réalisées",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier les règles d’évaluation des recettes applicables",
      methodology: "Revue documentaire",
      sources: "Contrat de concession / régie, convention de mandat, grille tarifaire, procédures internes",
      expectedResult: "Les règles d’évaluation sont clairement définies et conformes aux dispositions contractuelles",
    },
    {
      id: 2,
      action: "Vérifier la cohérence entre les données de trafic et les recettes générées",
      methodology: "Analyse comparative",
      sources: "Données trafic, tarifs contractuels, états de recettes système",
      expectedResult: "Cohérence trafic × tarif = recette attendue",
    },
    {
      id: 3,
      action: "Recalculer les recettes sur un échantillon de périodes ou de tronçons",
      methodology: "Recalcul indépendant",
      sources: "Extractions système, rapports journaliers et mensuels",
      expectedResult: "Les montants recalculés correspondent aux montants déclarés",
    },
    {
      id: 4,
      action: "Vérifier la concordance entre recettes système et rapports d’activités",
      methodology: "Rapprochement",
      sources: "Rapports d’activités mensuels et annuels, données système",
      expectedResult: "Les recettes reportées concordent avec les données sources",
    },
    {
      id: 5,
      action: "Examiner l’exactitude des montants figurant dans les notes financières",
      methodology: "Rapprochement financier",
      sources: "Notes financières, états financiers, balances comptables",
      expectedResult: "Les montants des notes financières sont exacts et justifiés",
    },
    {
      id: 6,
      action: "Identifier et analyser les écarts significatifs ou variations inhabituelles",
      methodology: "Analyse analytique",
      sources: "Rapports comparatifs N/N-1, tableaux d’évolution des recettes",
      expectedResult: "Les écarts sont expliqués, documentés et justifiés",
    },
    {
      id: 7,
      action: "Apprécier la fiabilité globale de l’évaluation et du reporting des recettes",
      methodology: "Jugement professionnel",
      sources: "Synthèse des contrôles réalisés",
      expectedResult: "Le reporting est jugé fiable et fidèle",
    },
  ],
},
// =========================
// 🔽 COLLER ICI LA SUITE : OS3 → OS5
// =========================

{
  id: "OS3",
  title:
    "Vérifier que les recettes collectées lors des grands évènements (Magal, Kazu Rajab, Gamou, etc.) avec dispositif spécial (TPE) ont été correctement enregistrées",
  category: "Recettes",
  objectives: [
    "Les recettes issues des grands évènements sont exhaustives",
    "Les dispositifs spéciaux (TPE, voies dédiées, renforts) sont correctement paramétrés et utilisés",
    "Les encaissements TPE/espèces sont correctement rapprochés et justifiés",
    "Les écarts éventuels sont identifiés, expliqués et documentés",
  ],
  steps: [
    {
      id: 1,
      action:
        "Identifier les évènements concernés, périodes, gares/voies impactées et dispositifs spéciaux mis en place",
      methodology: "Revue documentaire + entretiens",
      sources:
        "Planning évènements, notes internes, décisions, consignes d’exploitation, entretiens (exploitation/caisse)",
      expectedResult:
        "Périmètre des évènements et dispositifs spéciaux clairement défini",
    },
    {
      id: 2,
      action:
        "Vérifier la configuration/paramétrage des TPE et l’organisation d’encaissement spécifique (caisse, contrôle, supervision)",
      methodology: "Inspection + walkthrough",
      sources:
        "Procédures TPE, paramétrages, fiches de poste, schéma d’organisation, observations terrain",
      expectedResult:
        "Dispositif spécial correctement paramétré et sécurisé (rôles, contrôles, traçabilité)",
    },
    {
      id: 3,
      action:
        "Extraire et analyser les recettes de la période évènementielle (par gare/voie/mode paiement) et comparer aux périodes normales",
      methodology: "Analyse comparative",
      sources:
        "États recettes système, états trafic, historiques recettes (périodes comparables), tableaux de bord",
      expectedResult:
        "Variation cohérente et explicable (hausse attendue) ; anomalies détectées",
    },
    {
      id: 4,
      action:
        "Rapprocher les encaissements TPE (journaux TPE, tickets, bordereaux) avec les recettes enregistrées dans le système et/ou la caisse",
      methodology: "Rapprochement / tests substantifs",
      sources:
        "Journaux TPE, bordereaux de remise, tickets, états caisse, états système, relevés bancaires",
      expectedResult:
        "Concordance TPE ↔ caisse ↔ système (écarts expliqués et justifiés)",
    },
    {
      id: 5,
      action:
        "Contrôler l’existence de contrôles spécifiques (supervision, contrôles surprises, validations) et la gestion des incidents",
      methodology: "Test de contrôle / inspection",
      sources:
        "Main courante, rapports d’incidents, PV de contrôle, logs supervision, emails/relances",
      expectedResult:
        "Contrôles spécifiques réalisés et incidents traités avec traçabilité",
    },
    {
      id: 6,
      action:
        "Analyser les écarts significatifs (manquants, doublons, annulations) et conclure sur la fiabilité globale des recettes évènementielles",
      methodology: "Analyse + jugement professionnel",
      sources:
        "Synthèse des rapprochements, liste des écarts, justificatifs, mesures correctives",
      expectedResult:
        "Fiabilité jugée satisfaisante ou points de faiblesse documentés avec recommandations",
    },
  ],
},

{
  id: "OS4",
  title:
    "Vérifier que les annulations/réductions de recettes enregistrées sont réelles, contrôlées, correctement évaluées et justifiées",
  category: "Recettes",
  objectives: [
    "Les annulations/réductions sont autorisées et conformes aux règles",
    "Les opérations sont correctement tracées et validées",
    "Les impacts financiers sont correctement évalués",
    "Les anomalies (abus, excès, profils à risque) sont détectées et traitées",
  ],
  steps: [
    {
      id: 1,
      action:
        "Identifier les règles, cas autorisés et niveaux d’habilitation pour annulations/réductions (qui peut faire quoi)",
      methodology: "Revue documentaire",
      sources:
        "Procédures, matrice d’habilitation, règles SI, notes internes, clauses contractuelles",
      expectedResult:
        "Règles et habilitations formalisées, claires et cohérentes",
    },
    {
      id: 2,
      action:
        "Extraire la liste des annulations/réductions sur la période (par gare/voie, agent, motif, heure) et analyser les volumes/tendances",
      methodology: "Analyse de données / analytique",
      sources:
        "Extractions système (transactions), rapports exceptions, tableaux de bord, logs",
      expectedResult:
        "Vue complète des annulations/réductions et identification des zones à risque",
    },
    {
      id: 3,
      action:
        "Tester sur échantillon la réalité et la justification des annulations/réductions (motif, preuve, cohérence)",
      methodology: "Test sur échantillon / inspection",
      sources:
        "Pièces justificatives, main courante, rapports incidents, tickets, images/vidéos si dispo",
      expectedResult:
        "Annulations/réductions justifiées et conformes (écarts documentés)",
    },
    {
      id: 4,
      action:
        "Vérifier les validations/contrôles (visa hiérarchique, double validation, contrôles supervision) et la traçabilité dans le SI",
      methodology: "Test de contrôle / inspection",
      sources:
        "Workflows de validation, journaux d’audit SI, habilitations, logs supervision",
      expectedResult:
        "Contrôles effectifs et traçabilité complète (qui/quoi/quand/pourquoi)",
    },
    {
      id: 5,
      action:
        "Évaluer l’impact financier et analyser les profils à risque (agents, voies, périodes) + conclure",
      methodology: "Analyse + jugement professionnel",
      sources:
        "Synthèse analyses, reporting, comparatifs, constats terrain, recommandations",
      expectedResult:
        "Impact évalué, risques identifiés et conclusion sur la régularité des annulations/réductions",
    },
  ],
},

{
  id: "OS5",
  title:
    "Vérifier que tous les services post-paid donnent lieu à une facturation au cours de la période appropriée, sont justifiés et correctement évalués",
  category: "Recettes",
  objectives: [
    "Les services post-paid sont exhaustivement identifiés et tracés",
    "Chaque service rendu donne lieu à facturation",
    "La facturation est faite sur la bonne période (cut-off)",
    "Les tarifs appliqués sont conformes et les montants sont exacts",
    "Les encaissements/recouvrements sont suivis et rapprochés",
  ],
  steps: [
    {
      id: 1,
      action:
        "Identifier le périmètre des services post-paid (clients, conventions, modalités de facturation, tarifs, périodicité)",
      methodology: "Revue documentaire",
      sources:
        "Contrats/Conventions clients, grilles tarifaires, procédures facturation, liste clients post-paid",
      expectedResult:
        "Périmètre post-paid et règles de facturation clairement définis",
    },
    {
      id: 2,
      action:
        "Décrire le processus : service rendu → enregistrement → facturation → comptabilisation → recouvrement",
      methodology: "Walkthrough / entretiens",
      sources:
        "Procédures, schémas de flux, entretiens (exploitation, facturation, compta, recouvrement)",
      expectedResult:
        "Processus documenté et points de contrôle identifiés",
    },
    {
      id: 3,
      action:
        "Tester l’exhaustivité : services post-paid rendus ↔ factures émises (sur échantillon ou période ciblée)",
      methodology: "Rapprochement / test d’exhaustivité",
      sources:
        "Logs/prestations, états système, bons/ordres de service, factures, listings clients",
      expectedResult:
        "Toutes les prestations donnent lieu à facturation (écarts expliqués)",
    },
    {
      id: 4,
      action:
        "Tester l’exactitude : recalcul des montants facturés (tarifs, quantités) et contrôle du cut-off (bonne période)",
      methodology: "Recalcul indépendant + test de cut-off",
      sources:
        "Factures, grilles tarifaires, justificatifs de prestation, périodes comptables, états de clôture",
      expectedResult:
        "Montants exacts et facturation rattachée à la bonne période",
    },
    {
      id: 5,
      action:
        "Rapprocher facturation ↔ comptabilisation ↔ encaissements et analyser les impayés / litiges",
      methodology: "Rapprochement comptable + analyse",
      sources:
        "Grand-livre, journaux ventes, balances clients, relevés bancaires, état des impayés, litiges",
      expectedResult:
        "Concordance factures/compta/encaissements ; impayés suivis et expliqués",
    },
    {
      id: 6,
      action:
        "Conclure sur la fiabilité globale de la chaîne post-paid (facturation, exactitude, cut-off, recouvrement)",
      methodology: "Jugement professionnel",
      sources: "Synthèse des contrôles et analyses",
      expectedResult:
        "Conclusion motivée sur la fiabilité et les risques ; recommandations si nécessaire",
    },
  ],
},

// =========================
// 🔽 COLLER ICI LA SUITE : OS6 → OS10
// =========================

// =========================
// 🔽 COLLER ICI LA SUITE : OS6 → OS10
// =========================

{
  id: "OS6",
  title:
    "Vérifier que toutes les factures correspondent à des livraisons de services, font l’objet de contrôle et sont enregistrées dans la bonne période",
  category: "Recettes",
  objectives: [
    "Chaque facture correspond à une prestation réellement délivrée",
    "Les factures sont contrôlées/validées avant comptabilisation",
    "Les factures sont enregistrées dans la bonne période (cut-off)",
    "Les anomalies (doublons, omissions, factures sans justificatif) sont détectées et traitées",
  ],
  steps: [
    {
      id: 1,
      action:
        "Décrire le processus facturation : service rendu → justificatif → facture → validation → comptabilisation",
      methodology: "Walkthrough / entretiens",
      sources:
        "Procédures facturation, schémas de flux, entretiens (exploitation, facturation, compta)",
      expectedResult:
        "Processus compris, contrôles clés identifiés et documentés",
    },
    {
      id: 2,
      action:
        "Identifier les pièces justificatives attendues par type de facture (bon, ticket, rapport, ordre de service, etc.)",
      methodology: "Revue documentaire",
      sources: "Procédures, référentiel pièces, contrats/conventions, checklists",
      expectedResult:
        "Liste des justificatifs exigés formalisée et applicable",
    },
    {
      id: 3,
      action:
        "Tester sur échantillon : facture ↔ justificatif de prestation (existence, cohérence, client, période, montant)",
      methodology: "Test sur échantillon / inspection",
      sources:
        "Factures, bons/ordres de service, états système, rapports d’activité, contrats",
      expectedResult:
        "Factures appuyées par justificatifs valides ; écarts documentés",
    },
    {
      id: 4,
      action:
        "Vérifier les contrôles/validations (visa, contrôle hiérarchique, contrôle comptable) et la traçabilité",
      methodology: "Test de contrôle / inspection",
      sources: "Workflows de validation, emails/visa, journaux SI, parapheurs",
      expectedResult:
        "Contrôles effectifs et traçabilité démontrée avant enregistrement",
    },
    {
      id: 5,
      action:
        "Tester le cut-off : factures proches de la clôture → bonne période de comptabilisation",
      methodology: "Test de cut-off",
      sources:
        "Factures fin de période, journaux comptables, dates prestation, dates émission, clôtures",
      expectedResult:
        "Factures enregistrées dans la période appropriée (écarts justifiés)",
    },
    {
      id: 6,
      action:
        "Conclure sur la conformité des factures (existence, contrôle, cut-off) et proposer des recommandations",
      methodology: "Jugement professionnel",
      sources: "Synthèse des tests, liste anomalies, impacts, actions correctives",
      expectedResult:
        "Conclusion motivée et recommandations opérationnelles",
    },
  ],
},

{
  id: "OS7",
  title: "Vérifier que les paiements de factures sont exhaustifs",
  category: "Recettes",
  objectives: [
    "Les paiements reçus sont complets et correctement enregistrés",
    "Les encaissements sont rapprochés des factures et des relevés bancaires",
    "Les écarts (retards, impayés, trop-perçus) sont identifiés et justifiés",
  ],
  steps: [
    {
      id: 1,
      action:
        "Décrire le processus d’encaissement et de lettrage : paiement → banque/caisse → compta → lettrage clients",
      methodology: "Walkthrough / entretiens",
      sources:
        "Procédures encaissement, entretiens (caisse/banque/compta/recouvrement)",
      expectedResult:
        "Processus compris et points de contrôle documentés",
    },
    {
      id: 2,
      action:
        "Extraire la liste des factures émises et des paiements reçus sur la période (par client, date, mode paiement)",
      methodology: "Revue / extraction",
      sources:
        "Liste factures, balances clients, états de recouvrement, journaux caisse, relevés bancaires",
      expectedResult:
        "Périmètre factures/paiements complet et exploitable",
    },
    {
      id: 3,
      action:
        "Rapprocher paiements reçus ↔ relevés bancaires ↔ encaissements comptabilisés (exhaustivité)",
      methodology: "Rapprochement bancaire / comptable",
      sources: "Relevés bancaires, journaux de banque, grand-livre, bordereaux",
      expectedResult:
        "Tous les encaissements bancaires sont comptabilisés (écarts expliqués)",
    },
    {
      id: 4,
      action:
        "Vérifier le lettrage factures ↔ paiements et analyser les impayés, avoirs, litiges",
      methodology: "Rapprochement + analyse",
      sources:
        "Balance âgée, états impayés, lettrage, notes de crédit/avoirs, correspondances",
      expectedResult:
        "Lettrage fiable ; impayés/litiges correctement suivis et documentés",
    },
    {
      id: 5,
      action:
        "Conclure sur l’exhaustivité des paiements et la qualité du recouvrement",
      methodology: "Jugement professionnel",
      sources: "Synthèse des rapprochements et analyses",
      expectedResult:
        "Conclusion motivée (niveau d’exhaustivité, risques, recommandations)",
    },
  ],
},

{
  id: "OS8",
  title: "Vérifier la cohérence des recettes par rapport aux données de trafic",
  category: "Recettes",
  objectives: [
    "Les recettes sont cohérentes avec le trafic observé et les tarifs",
    "Les anomalies de cohérence (trafic élevé/recette faible, etc.) sont identifiées",
    "Les explications (tarifs, exemptions, gratuités, incidents) sont documentées",
  ],
  steps: [
    {
      id: 1,
      action:
        "Identifier les sources trafic (comptage, classes véhicules, sens) et les règles de tarification applicables",
      methodology: "Revue documentaire",
      sources:
        "États trafic, référentiel classes, grille tarifaire, contrat, procédures",
      expectedResult:
        "Sources trafic et règles tarifaires clairement définies",
    },
    {
      id: 2,
      action:
        "Construire un modèle simple : trafic × tarif = recette théorique (par classe/voie/gare)",
      methodology: "Recalcul / analyse",
      sources: "Données trafic, tarifs, paramètres SI, hypothèses documentées",
      expectedResult:
        "Recette théorique calculée et hypothèses explicites",
    },
    {
      id: 3,
      action:
        "Comparer recette théorique ↔ recette système ↔ recette comptabilisée (écarts par segment)",
      methodology: "Analyse comparative / rapprochement",
      sources:
        "États recettes système, journaux comptables, rapports mensuels, calculs théoriques",
      expectedResult:
        "Écarts identifiés et quantifiés (par gare/voie/classe/période)",
    },
    {
      id: 4,
      action:
        "Analyser les écarts : exemptions, gratuités, annulations, incidents, retards SI, fraude potentielle",
      methodology: "Investigation / analyse des exceptions",
      sources:
        "Listes exemptions, logs incidents, rapports supervision, main courante, justificatifs",
      expectedResult:
        "Écarts expliqués et documentés ; anomalies critiques isolées",
    },
    {
      id: 5,
      action:
        "Conclure sur la cohérence trafic/recettes et définir les actions correctives",
      methodology: "Jugement professionnel",
      sources: "Synthèse analyses, écarts, causes racines, recommandations",
      expectedResult:
        "Conclusion sur la cohérence globale + recommandations ciblées",
    },
  ],
},

{
  id: "OS9",
  title: "Vérifier l’intégrité des données de recettes (doublons, manquants, modifications)",
  category: "Recettes",
  objectives: [
    "Les données de recettes sont complètes et non altérées",
    "Les doublons et manquants sont détectés et traités",
    "Les modifications sont tracées (audit trail) et autorisées",
  ],
  steps: [
    {
      id: 1,
      action:
        "Identifier les champs clés et règles d’unicité (id transaction, ticket, voie, horodatage, montant)",
      methodology: "Revue documentaire + entretiens",
      sources:
        "Dictionnaire de données, schémas SI, règles SI, entretiens IT/supervision",
      expectedResult:
        "Clés d’unicité et règles d’intégrité clairement identifiées",
    },
    {
      id: 2,
      action:
        "Extraire un échantillon/volume significatif de transactions et tester doublons/manquants (requêtes, tris, contrôles)",
      methodology: "Tests de données / analyse",
      sources:
        "Extractions brutes SI, états journaliers, logs, rapports exceptions",
      expectedResult:
        "Doublons/manquants détectés, quantifiés et documentés",
    },
    {
      id: 3,
      action:
        "Vérifier les mécanismes de traçabilité des modifications (audit trail) et les profils habilités",
      methodology: "Test de contrôle / inspection",
      sources:
        "Journaux d’audit SI, habilitations, logs modifications, procédures",
      expectedResult:
        "Modifications tracées, autorisées et justifiées",
    },
    {
      id: 4,
      action:
        "Investiguer les anomalies significatives (causes techniques/organisationnelles) et vérifier les corrections",
      methodology: "Investigation + revue corrective",
      sources:
        "Tickets incidents, rapports IT, preuves correction, reprocessing, logs",
      expectedResult:
        "Causes identifiées et corrections validées",
    },
    {
      id: 5,
      action:
        "Conclure sur l’intégrité des données de recettes et recommander des renforcements",
      methodology: "Jugement professionnel",
      sources: "Synthèse des tests et constats",
      expectedResult:
        "Conclusion motivée sur l’intégrité + recommandations",
    },
  ],
},

{
  id: "OS10",
  title: "Vérifier le bon enchaînement des contrôles et la piste d’audit (recettes → reporting)",
  category: "Recettes",
  objectives: [
    "La piste d’audit est complète de bout en bout (caisse/système → compta → reporting)",
    "Les contrôles clés sont exécutés et tracés",
    "Les écarts sont analysés et documentés",
  ],
  steps: [
    {
      id: 1,
      action:
        "Documenter la piste d’audit complète (données source → transformations → états → compta → reporting)",
      methodology: "Walkthrough / cartographie",
      sources:
        "Procédures, schémas SI, états de sortie, journaux comptables, rapports",
      expectedResult:
        "Piste d’audit formalisée avec points de contrôle identifiés",
    },
    {
      id: 2,
      action:
        "Vérifier l’existence des contrôles de bout en bout (rapprochements, revues, validations) et leurs preuves",
      methodology: "Test de contrôle / inspection",
      sources:
        "Preuves de rapprochement, visa/validation, checklists, logs supervision",
      expectedResult:
        "Contrôles exécutés et preuves conservées",
    },
    {
      id: 3,
      action:
        "Tester sur échantillon la traçabilité : transaction → état recette → écriture comptable → reporting mensuel",
      methodology: "Vouching / rapprochement",
      sources:
        "Transactions brutes, états recettes, journaux comptables, rapport mensuel",
      expectedResult:
        "Traçabilité complète sans rupture (écarts expliqués)",
    },
    {
      id: 4,
      action:
        "Analyser les ruptures de piste d’audit (si existantes) et identifier les contrôles compensatoires",
      methodology: "Analyse des écarts",
      sources:
        "Synthèses, anomalies, incidents, procédures compensatoires",
      expectedResult:
        "Ruptures expliquées ; contrôles compensatoires évalués",
    },
    {
      id: 5,
      action:
        "Conclure sur la robustesse de la piste d’audit et proposer un plan d’amélioration",
      methodology: "Jugement professionnel",
      sources: "Synthèse des tests",
      expectedResult:
        "Conclusion globale + recommandations",
    },
  ],
},

// =========================
// 🔽 COLLER ICI LA SUITE : OS11 → OS15
// =========================
// =========================
// 🔽 COLLER ICI LA SUITE : OS11 → OS15
// =========================

{
  id: "OS11",
  title: "Vérifier la séparation des tâches et les contrôles sur le cycle des recettes",
  category: "Recettes",
  objectives: [
    "Les fonctions incompatibles (encaissement, supervision, comptabilisation, contrôle) sont séparées",
    "Les contrôles compensatoires existent lorsque la séparation est imparfaite",
    "Les habilitations sont cohérentes avec l’organisation et tracées",
  ],
  steps: [
    {
      id: 1,
      action: "Cartographier les rôles/acteurs du cycle recettes et les tâches réalisées",
      methodology: "Entretiens + cartographie",
      sources: "Organigramme, fiches de poste, procédures, entretiens (caisse, supervision, compta, IT)",
      expectedResult: "Rôles et responsabilités clairement identifiés",
    },
    {
      id: 2,
      action: "Identifier les incompatibilités (encaissement vs contrôle, IT vs validation, etc.)",
      methodology: "Analyse des risques",
      sources: "Cartographie, procédures, matrice des tâches",
      expectedResult: "Incompatibilités recensées et évaluées",
    },
    {
      id: 3,
      action: "Vérifier les habilitations/profils SI et leur adéquation (principe du moindre privilège)",
      methodology: "Inspection",
      sources: "Liste habilitations, profils SI, logs accès, procédures gestion des accès",
      expectedResult: "Accès cohérents, contrôlés et justifiés",
    },
    {
      id: 4,
      action: "Vérifier les contrôles compensatoires (revues hiérarchiques, rapprochements, validations)",
      methodology: "Test de contrôle",
      sources: "Preuves de revues, rapprochements, workflows de validation",
      expectedResult: "Contrôles compensatoires effectifs et tracés",
    },
    {
      id: 5,
      action: "Conclure sur la séparation des tâches et risques résiduels",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Conclusion motivée + recommandations",
    },
  ],
},

{
  id: "OS12",
  title: "Vérifier la justification des gratuités, exemptions et passages non facturés",
  category: "Recettes",
  objectives: [
    "Les gratuités/exemptions sont autorisées par le cadre contractuel/réglementaire",
    "Les passages non facturés sont documentés et traçables",
    "Les impacts financiers sont évalués et suivis",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier les catégories d’exemptions/gratuités et la base juridique/contractuelle",
      methodology: "Revue documentaire",
      sources: "Contrat, avenants, textes applicables, décisions, procédures",
      expectedResult: "Catégories autorisées et règles définies",
    },
    {
      id: 2,
      action: "Extraire la liste des passages gratuits/exemptés (par période, gare, classe)",
      methodology: "Extraction / revue",
      sources: "États SI (exemptions), logs, rapports d’exploitation",
      expectedResult: "Liste complète et exploitable",
    },
    {
      id: 3,
      action: "Tester sur échantillon : passage exempté ↔ justificatif ↔ autorisation",
      methodology: "Test sur échantillon / inspection",
      sources: "Justificatifs, ordres de mission, autorisations, décisions",
      expectedResult: "Exemptions justifiées et autorisées",
    },
    {
      id: 4,
      action: "Quantifier l’impact financier et analyser l’évolution (N/N-1, pics inhabituels)",
      methodology: "Analyse analytique",
      sources: "Tableaux d’évolution, états recettes, reporting",
      expectedResult: "Impact évalué et anomalies identifiées",
    },
    {
      id: 5,
      action: "Conclure sur la régularité des gratuités/exemptions et proposer des actions",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Conclusion + recommandations de contrôle",
    },
  ],
},

{
  id: "OS13",
  title: "Vérifier la gestion des recettes en espèces (caisse) et la sécurisation des fonds",
  category: "Recettes",
  objectives: [
    "Les encaissements espèces sont correctement enregistrés et sécurisés",
    "Les remises et versements sont réguliers et rapprochés",
    "Les écarts de caisse sont identifiés, justifiés et traités",
  ],
  steps: [
    {
      id: 1,
      action: "Décrire le processus caisse : encaissement → clôture → remise → versement",
      methodology: "Walkthrough / observation",
      sources: "Procédures caisse, observation terrain, entretiens caissiers/superviseurs",
      expectedResult: "Processus caisse compris et documenté",
    },
    {
      id: 2,
      action: "Vérifier les contrôles de clôture (Z caisse, états fin de poste, contrôle superviseur)",
      methodology: "Test de contrôle / inspection",
      sources: "États de clôture, feuilles de caisse, visas, journaux SI",
      expectedResult: "Clôtures contrôlées et tracées",
    },
    {
      id: 3,
      action: "Rapprocher sur échantillon : encaissements caisse ↔ remises ↔ versements banque",
      methodology: "Rapprochement",
      sources: "Journaux caisse, bordereaux remise, reçus banque, relevés bancaires",
      expectedResult: "Concordance caisse/remise/banque (écarts justifiés)",
    },
    {
      id: 4,
      action: "Analyser les écarts de caisse, annulations, tickets manquants et mesures disciplinaires",
      methodology: "Analyse des exceptions",
      sources: "Rapports d’écarts, logs SI, registres incidents, PV disciplinaires",
      expectedResult: "Écarts investigués et actions correctives définies",
    },
    {
      id: 5,
      action: "Conclure sur la sécurité et la fiabilité de la caisse",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Conclusion motivée + recommandations",
    },
  ],
},

{
  id: "OS14",
  title: "Vérifier la gestion des recettes électroniques (TPE, ETC, paiements digitaux) et leur rapprochement",
  category: "Recettes",
  objectives: [
    "Les paiements électroniques sont correctement enregistrés et rapprochés",
    "Les commissions et frais sont justifiés",
    "Les annulations/remboursements sont autorisés et tracés",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier les canaux électroniques et leurs règles (TPE, ETC, mobile money, etc.)",
      methodology: "Revue documentaire",
      sources: "Contrats prestataires, procédures, paramétrages SI, SLA",
      expectedResult: "Canaux et règles de gestion définis",
    },
    {
      id: 2,
      action: "Extraire les transactions électroniques et les comparer aux états prestataires",
      methodology: "Rapprochement",
      sources: "États SI, états prestataires, journaux de paiement",
      expectedResult: "Concordance SI ↔ prestataire (écarts expliqués)",
    },
    {
      id: 3,
      action: "Rapprocher les encaissements électroniques aux relevés bancaires (net des commissions)",
      methodology: "Rapprochement bancaire",
      sources: "Relevés bancaires, bordereaux prestataires, journaux comptables",
      expectedResult: "Encaissements complets et correctement comptabilisés",
    },
    {
      id: 4,
      action: "Tester sur échantillon les annulations/remboursements et vérifier les autorisations",
      methodology: "Test sur échantillon / inspection",
      sources: "Logs annulations, justificatifs, validations, procédures",
      expectedResult: "Annulations justifiées, tracées et autorisées",
    },
    {
      id: 5,
      action: "Conclure sur la fiabilité des recettes électroniques",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Conclusion + recommandations",
    },
  ],
},

{
  id: "OS15",
  title: "Vérifier la gestion des incidents d’exploitation impactant les recettes (pannes, voies fermées, mode dégradé)",
  category: "Recettes",
  objectives: [
    "Les incidents sont enregistrés et tracés",
    "Les impacts recettes sont estimés et justifiés",
    "Les dispositifs en mode dégradé sont contrôlés",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier les types d’incidents et le dispositif de gestion (main courante, tickets, procédures)",
      methodology: "Revue documentaire + entretiens",
      sources: "Procédures incidents, main courante, tickets IT, rapports exploitation",
      expectedResult: "Dispositif de gestion d’incidents défini et appliqué",
    },
    {
      id: 2,
      action: "Extraire la liste des incidents sur la période et identifier ceux à impact potentiel recettes",
      methodology: "Analyse",
      sources: "Main courante, rapports incidents, logs SI, supervision",
      expectedResult: "Incidents à impact identifiés et qualifiés",
    },
    {
      id: 3,
      action: "Tester sur échantillon : incident ↔ durée ↔ trafic ↔ estimation perte/impact recettes",
      methodology: "Test sur échantillon / analyse",
      sources: "Horodatages, trafic, rapports exploitation, hypothèses d’estimation",
      expectedResult: "Impacts estimés de manière cohérente et documentée",
    },
    {
      id: 4,
      action: "Vérifier les contrôles en mode dégradé (tickets manuels, procédures, validations)",
      methodology: "Inspection / observation",
      sources: "Procédures mode dégradé, tickets, états manuels, visas",
      expectedResult: "Mode dégradé contrôlé et traçable",
    },
    {
      id: 5,
      action: "Conclure sur la maîtrise des incidents et recommandations",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Conclusion motivée + plan d’amélioration",
    },
  ],
},

// =========================
// 🔽 COLLER ICI LA SUITE : OS16 → OS20
// =========================

// =========================
// 🔽 COLLER ICI LA SUITE : OS16 → OS20
// =========================

{
  id: "OS16",
  title: "Vérifier l’existence et l’efficacité des contrôles de supervision des recettes (terrain et back-office)",
  category: "Recettes",
  objectives: [
    "La supervision opérationnelle est organisée et documentée",
    "Les contrôles de supervision couvrent les zones à risque (caisse, fraude, anomalies SI)",
    "Les anomalies détectées sont traitées, tracées et clôturées",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier le dispositif de supervision (rôles, fréquences, checklists, reporting)",
      methodology: "Revue documentaire + entretiens",
      sources: "Procédures supervision, checklists, organigramme, entretiens (superviseurs, chefs de poste)",
      expectedResult: "Dispositif de supervision défini, clair et connu",
    },
    {
      id: 2,
      action: "Vérifier l’existence de contrôles réguliers (surprises, rotations, contrôles de clôture, contrôle tickets)",
      methodology: "Inspection / observation",
      sources: "Rapports de supervision, main courante, feuilles de contrôle, preuves visites",
      expectedResult: "Contrôles réalisés régulièrement et tracés",
    },
    {
      id: 3,
      action: "Analyser les anomalies constatées (écarts, incidents, fraude) et leur traitement",
      methodology: "Analyse des exceptions",
      sources: "Registre anomalies, tickets, PV, actions correctives, sanctions",
      expectedResult: "Anomalies investiguées et actions correctives documentées",
    },
    {
      id: 4,
      action: "Tester sur échantillon : anomalie ↔ action ↔ clôture (délai, preuve, validation)",
      methodology: "Test sur échantillon",
      sources: "Dossiers de traitement, preuves de correction, validations hiérarchiques",
      expectedResult: "Traitement complet, traçable et dans des délais acceptables",
    },
    {
      id: 5,
      action: "Conclure sur l’efficacité de la supervision et proposer des améliorations",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Conclusion motivée + recommandations",
    },
  ],
},

{
  id: "OS17",
  title: "Vérifier la fiabilité du reporting des recettes (mensuel/annuel) et la cohérence inter-documents",
  category: "Recettes",
  objectives: [
    "Les rapports mensuels/annuels reprennent des données justes et cohérentes",
    "Les agrégations et retraitements sont documentés",
    "Les écarts entre documents (rapports, notes financières, états comptables) sont expliqués",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier les rapports officiels produits et les règles de construction (sources, calculs, retraitements)",
      methodology: "Revue documentaire",
      sources: "Rapports mensuels/annuels, notes financières, procédures de reporting, fichiers de calcul",
      expectedResult: "Règles de production du reporting identifiées",
    },
    {
      id: 2,
      action: "Rapprocher les montants reportés aux données sources (SI péage, caisse, banque, comptabilité)",
      methodology: "Rapprochement",
      sources: "États SI, journaux caisse, relevés bancaires, grand-livre",
      expectedResult: "Concordance globale (écarts justifiés)",
    },
    {
      id: 3,
      action: "Vérifier la cohérence inter-documents (rapport mensuel ↔ annuel ↔ notes financières)",
      methodology: "Analyse comparative",
      sources: "Rapports, notes, annexes, tableaux d’agrégation",
      expectedResult: "Cohérence des montants et des périodes (cut-off respecté)",
    },
    {
      id: 4,
      action: "Analyser les écarts significatifs, variations inhabituelles et justifications",
      methodology: "Analyse analytique",
      sources: "Comparatifs N/N-1, tableaux d’évolution, explications management",
      expectedResult: "Écarts expliqués, documentés et plausibles",
    },
    {
      id: 5,
      action: "Conclure sur la fiabilité du reporting et la qualité documentaire",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Reporting jugé fiable ou axes d’amélioration identifiés",
    },
  ],
},

{
  id: "OS18",
  title: "Formuler des recommandations pour améliorer le dispositif de contrôle des recettes",
  category: "Recettes",
  objectives: [
    "Les faiblesses sont consolidées et hiérarchisées",
    "Des recommandations opérationnelles et réalistes sont formulées",
    "Un plan d’action (priorités, responsables, délais) est proposé",
  ],
  steps: [
    {
      id: 1,
      action: "Consolider les constats et faiblesses issues des OS1–OS17",
      methodology: "Analyse transversale",
      sources: "Dossiers de travail, constats, synthèses, écarts relevés",
      expectedResult: "Faiblesses consolidées et structurées",
    },
    {
      id: 2,
      action: "Qualifier les risques associés (fraude, perte de recettes, non-conformité, image)",
      methodology: "Analyse des risques",
      sources: "Constats, impacts, cartographie des risques (si disponible)",
      expectedResult: "Risques priorisés (impact/probabilité)",
    },
    {
      id: 3,
      action: "Définir des recommandations ciblées (quick wins + actions structurantes)",
      methodology: "Benchmark + jugement professionnel",
      sources: "Bonnes pratiques, référentiels, contraintes opérationnelles",
      expectedResult: "Recommandations claires, réalistes et actionnables",
    },
    {
      id: 4,
      action: "Établir un plan d’action (responsables, délais, indicateurs de suivi)",
      methodology: "Construction plan d’action",
      sources: "Organisation interne, retours management, planning",
      expectedResult: "Plan d’action priorisé et suivi",
    },
    {
      id: 5,
      action: "Conclure et formaliser la synthèse des recommandations",
      methodology: "Rédaction / jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Recommandations formalisées et validables",
    },
  ],
},

{
  id: "OS19",
  title: "Évaluer la conception du contrôle interne des recettes (couverture des risques et contrôles clés)",
  category: "Contrôle Interne",
  objectives: [
    "Les risques clés du cycle recettes sont identifiés et couverts",
    "Les contrôles clés existent et sont correctement conçus",
    "Les responsabilités et validations sont formalisées",
  ],
  steps: [
    {
      id: 1,
      action: "Cartographier les risques du cycle recettes (exhaustivité, exactitude, cut-off, fraude, SI)",
      methodology: "Analyse des risques",
      sources: "Procédures, organigramme, retours supervision, incidents, audits antérieurs",
      expectedResult: "Risques clés identifiés et documentés",
    },
    {
      id: 2,
      action: "Identifier les contrôles clés existants (préventifs/détectifs) et leurs propriétaires",
      methodology: "Revue documentaire + entretiens",
      sources: "Procédures, checklists, workflows validation, entretiens",
      expectedResult: "Contrôles clés listés avec responsables et fréquence",
    },
    {
      id: 3,
      action: "Évaluer la conception des contrôles (adéquation, séparation, preuves, traçabilité)",
      methodology: "Test de conception",
      sources: "Procédures, matrices de contrôle, preuves type, paramétrages SI",
      expectedResult: "Contrôles jugés adéquats ou faiblesses identifiées",
    },
    {
      id: 4,
      action: "Identifier les gaps de contrôle (risques non couverts) et contrôles compensatoires",
      methodology: "Analyse",
      sources: "Cartographie risques/contrôles, constats",
      expectedResult: "Gaps identifiés et propositions de contrôles",
    },
    {
      id: 5,
      action: "Conclure sur la conception globale du dispositif de contrôle interne des recettes",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Conclusion sur la couverture et recommandations",
    },
  ],
},

{
  id: "OS20",
  title: "Tester le fonctionnement des contrôles internes (tests d’efficacité opérationnelle)",
  category: "Contrôle Interne",
  objectives: [
    "Les contrôles sont effectivement exécutés comme prévu",
    "Les preuves existent et sont conservées",
    "Les contrôles réduisent les risques de manière effective",
  ],
  steps: [
    {
      id: 1,
      action: "Sélectionner les contrôles clés à tester (sur la base OS19) et définir l’échantillonnage",
      methodology: "Plan de test / échantillonnage",
      sources: "Liste contrôles clés, fréquence, population",
      expectedResult: "Plan de test défini (contrôles, périodes, tailles d’échantillon)",
    },
    {
      id: 2,
      action: "Tester l’exécution des contrôles (existence de preuve : visa, log, rapport, rapprochement)",
      methodology: "Test de contrôle / inspection",
      sources: "Preuves de contrôle, logs SI, rapports de supervision, signatures",
      expectedResult: "Contrôles exécutés et traçables",
    },
    {
      id: 3,
      action: "Tester la qualité des contrôles (pertinence, délai, suivi des anomalies)",
      methodology: "Analyse",
      sources: "Rapports d’écarts, tickets, actions correctives, délais de traitement",
      expectedResult: "Contrôles efficaces, anomalies traitées",
    },
    {
      id: 4,
      action: "Documenter les exceptions et évaluer l’impact sur le risque résiduel",
      methodology: "Analyse des exceptions",
      sources: "Fiches d’anomalies, impacts, évaluations",
      expectedResult: "Exceptions documentées et impacts évalués",
    },
    {
      id: 5,
      action: "Conclure sur l’efficacité opérationnelle du contrôle interne",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Contrôle interne jugé efficace ou perfectible + recommandations",
    },
  ],
},

// =========================
// 🔽 COLLER ICI LA SUITE : OS21 → OS25
// =========================
// =========================
// 🔽 COLLER ICI LA SUITE : OS21 → OS25
// =========================

{
  id: "OS21",
  title: "Évaluer la formalisation et la documentation des procédures de contrôle interne",
  category: "Contrôle Interne",
  objectives: [
    "Les procédures de contrôle interne sont formalisées",
    "Les rôles et responsabilités sont clairement définis",
    "Les procédures sont accessibles et mises à jour",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier l’ensemble des procédures de contrôle interne existantes",
      methodology: "Revue documentaire",
      sources: "Manuels de procédures, notes internes, référentiels",
      expectedResult: "Procédures recensées et structurées",
    },
    {
      id: 2,
      action: "Vérifier la clarté des rôles et responsabilités décrits",
      methodology: "Analyse documentaire",
      sources: "Procédures, organigramme, fiches de poste",
      expectedResult: "Responsabilités clairement définies",
    },
    {
      id: 3,
      action: "Contrôler l’accessibilité et la diffusion des procédures",
      methodology: "Entretiens / observation",
      sources: "Intranet, supports internes, entretiens",
      expectedResult: "Procédures accessibles aux acteurs concernés",
    },
    {
      id: 4,
      action: "Vérifier la mise à jour des procédures (versioning, dates, validations)",
      methodology: "Inspection",
      sources: "Historique des versions, signatures, dates",
      expectedResult: "Procédures à jour et validées",
    },
    {
      id: 5,
      action: "Conclure sur la qualité de la documentation du contrôle interne",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Documentation jugée suffisante ou axes d’amélioration identifiés",
    },
  ],
},

{
  id: "OS22",
  title: "Évaluer la séparation des fonctions clés dans le cycle des recettes",
  category: "Contrôle Interne",
  objectives: [
    "Les fonctions incompatibles sont séparées",
    "Les risques de fraude ou d’erreur sont réduits",
    "Des contrôles compensatoires existent si nécessaire",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier les fonctions clés du cycle recettes (encaissement, enregistrement, contrôle, reporting)",
      methodology: "Analyse organisationnelle",
      sources: "Organigramme, fiches de poste, procédures",
      expectedResult: "Fonctions clés clairement identifiées",
    },
    {
      id: 2,
      action: "Analyser la séparation effective des fonctions",
      methodology: "Revue documentaire + entretiens",
      sources: "Fiches de poste, entretiens, observations terrain",
      expectedResult: "Séparation effective ou conflits identifiés",
    },
    {
      id: 3,
      action: "Identifier les situations de cumul de fonctions à risque",
      methodology: "Analyse des risques",
      sources: "Organisation réelle, constats terrain",
      expectedResult: "Situations à risque recensées",
    },
    {
      id: 4,
      action: "Vérifier l’existence de contrôles compensatoires",
      methodology: "Test de conception",
      sources: "Procédures de supervision, validations hiérarchiques",
      expectedResult: "Contrôles compensatoires effectifs",
    },
    {
      id: 5,
      action: "Conclure sur l’adéquation de la séparation des fonctions",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Séparation satisfaisante ou recommandations formulées",
    },
  ],
},

{
  id: "OS23",
  title: "Évaluer la fiabilité des contrôles manuels du cycle des recettes",
  category: "Contrôle Interne",
  objectives: [
    "Les contrôles manuels sont définis et appliqués",
    "Les contrôles sont documentés et traçables",
    "Les anomalies sont détectées et traitées",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier les contrôles manuels existants",
      methodology: "Revue documentaire",
      sources: "Procédures, checklists, rapports de contrôle",
      expectedResult: "Contrôles manuels identifiés",
    },
    {
      id: 2,
      action: "Vérifier la fréquence et la traçabilité des contrôles",
      methodology: "Inspection",
      sources: "Feuilles de contrôle, signatures, dates",
      expectedResult: "Contrôles réalisés et tracés",
    },
    {
      id: 3,
      action: "Tester un échantillon de contrôles manuels",
      methodology: "Test sur échantillon",
      sources: "Rapports, justificatifs, preuves",
      expectedResult: "Contrôles correctement exécutés",
    },
    {
      id: 4,
      action: "Analyser le traitement des anomalies détectées",
      methodology: "Analyse des exceptions",
      sources: "Registre anomalies, actions correctives",
      expectedResult: "Anomalies corrigées et documentées",
    },
    {
      id: 5,
      action: "Conclure sur la fiabilité des contrôles manuels",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Contrôles manuels jugés fiables ou perfectibles",
    },
  ],
},

{
  id: "OS24",
  title: "Évaluer la fiabilité des contrôles automatisés du système d’information",
  category: "Contrôle Interne",
  objectives: [
    "Les contrôles automatisés sont paramétrés",
    "Les contrôles fonctionnent de manière continue",
    "Les exceptions sont journalisées et suivies",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier les contrôles automatisés intégrés au système",
      methodology: "Revue documentaire + entretiens IT",
      sources: "Spécifications SI, paramétrages, documentation IT",
      expectedResult: "Contrôles automatisés recensés",
    },
    {
      id: 2,
      action: "Vérifier la conception et les règles de déclenchement",
      methodology: "Test de conception",
      sources: "Paramétrage SI, règles métiers",
      expectedResult: "Contrôles correctement paramétrés",
    },
    {
      id: 3,
      action: "Tester le fonctionnement des contrôles automatisés",
      methodology: "Tests applicatifs",
      sources: "Logs, journaux système, résultats de tests",
      expectedResult: "Contrôles fonctionnels et continus",
    },
    {
      id: 4,
      action: "Analyser les exceptions générées par le système",
      methodology: "Analyse des logs",
      sources: "Logs d’erreurs, tickets IT",
      expectedResult: "Exceptions suivies et corrigées",
    },
    {
      id: 5,
      action: "Conclure sur la fiabilité des contrôles automatisés",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Contrôles automatisés jugés fiables ou à renforcer",
    },
  ],
},

{
  id: "OS25",
  title: "Apprécier la maturité globale du dispositif de contrôle interne des recettes",
  category: "Contrôle Interne",
  objectives: [
    "Le dispositif de contrôle interne est cohérent",
    "Les contrôles couvrent les risques majeurs",
    "La maturité globale est évaluée",
  ],
  steps: [
    {
      id: 1,
      action: "Synthétiser les constats issus des OS19 à OS24",
      methodology: "Analyse transversale",
      sources: "Dossiers de travail, constats, évaluations",
      expectedResult: "Synthèse consolidée des forces/faiblesses",
    },
    {
      id: 2,
      action: "Évaluer la couverture des risques par les contrôles existants",
      methodology: "Analyse risques/contrôles",
      sources: "Cartographie des risques, contrôles identifiés",
      expectedResult: "Couverture des risques évaluée",
    },
    {
      id: 3,
      action: "Apprécier la cohérence globale du dispositif",
      methodology: "Jugement professionnel",
      sources: "Organisation, procédures, contrôles",
      expectedResult: "Dispositif cohérent ou axes d’amélioration identifiés",
    },
    {
      id: 4,
      action: "Positionner le niveau de maturité du contrôle interne",
      methodology: "Benchmark / référentiel",
      sources: "Bonnes pratiques, référentiels",
      expectedResult: "Niveau de maturité clairement positionné",
    },
    {
      id: 5,
      action: "Conclure et formuler une appréciation globale",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Appréciation globale du contrôle interne",
    },
  ],
},

// =========================
// 🔽 COLLER ICI LA SUITE : OS26 → OS30
// =========================
// =========================
// 🔽 COLLER ICI LA SUITE : OS26 → OS30
// =========================

{
  id: "OS26",
  title: "Évaluer l’existence et la fiabilité de la cartographie des risques liés aux recettes",
  category: "Contrôle Interne",
  objectives: [
    "Les risques liés aux recettes sont identifiés",
    "La cartographie est formalisée et mise à jour",
    "Les risques majeurs sont hiérarchisés",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier l’existence d’une cartographie des risques",
      methodology: "Revue documentaire",
      sources: "Cartographie des risques, rapports internes, procédures",
      expectedResult: "Cartographie existante et documentée",
    },
    {
      id: 2,
      action: "Analyser la méthodologie d’identification et d’évaluation des risques",
      methodology: "Analyse documentaire",
      sources: "Méthodologie risques, critères impact/probabilité",
      expectedResult: "Méthodologie structurée et cohérente",
    },
    {
      id: 3,
      action: "Vérifier la prise en compte des risques liés aux recettes",
      methodology: "Analyse des risques",
      sources: "Cartographie, constats d’audit, incidents",
      expectedResult: "Risques recettes correctement couverts",
    },
    {
      id: 4,
      action: "Vérifier la mise à jour périodique de la cartographie",
      methodology: "Inspection",
      sources: "Historique des mises à jour, validations",
      expectedResult: "Cartographie à jour",
    },
    {
      id: 5,
      action: "Conclure sur la fiabilité de la cartographie des risques",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Cartographie jugée fiable ou à renforcer",
    },
  ],
},

{
  id: "OS27",
  title: "Évaluer le dispositif de supervision et de contrôle hiérarchique des recettes",
  category: "Contrôle Interne",
  objectives: [
    "La supervision est effective",
    "Les contrôles hiérarchiques sont documentés",
    "Les anomalies sont suivies",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier les niveaux de supervision existants",
      methodology: "Revue organisationnelle",
      sources: "Organigramme, procédures, délégations",
      expectedResult: "Niveaux de supervision identifiés",
    },
    {
      id: 2,
      action: "Vérifier les contrôles réalisés par la hiérarchie",
      methodology: "Inspection",
      sources: "Rapports de contrôle, visas, signatures",
      expectedResult: "Contrôles hiérarchiques tracés",
    },
    {
      id: 3,
      action: "Tester un échantillon de contrôles de supervision",
      methodology: "Test sur échantillon",
      sources: "Dossiers de supervision, preuves",
      expectedResult: "Supervision effective",
    },
    {
      id: 4,
      action: "Analyser le traitement des anomalies détectées",
      methodology: "Analyse",
      sources: "Registre anomalies, plans d’actions",
      expectedResult: "Anomalies suivies et corrigées",
    },
    {
      id: 5,
      action: "Conclure sur l’efficacité de la supervision",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Supervision jugée efficace ou perfectible",
    },
  ],
},

{
  id: "OS28",
  title: "Évaluer la traçabilité et l’archivage des opérations et contrôles liés aux recettes",
  category: "Contrôle Interne",
  objectives: [
    "Les opérations sont tracées",
    "Les contrôles sont archivés",
    "Les preuves sont disponibles et fiables",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier les règles de traçabilité et d’archivage applicables",
      methodology: "Revue documentaire",
      sources: "Procédures d’archivage, règles internes",
      expectedResult: "Règles d’archivage définies",
    },
    {
      id: 2,
      action: "Vérifier la traçabilité des opérations de recettes",
      methodology: "Inspection",
      sources: "Logs système, journaux, pièces justificatives",
      expectedResult: "Traçabilité complète des opérations",
    },
    {
      id: 3,
      action: "Tester l’accessibilité et la conservation des archives",
      methodology: "Test d’accès",
      sources: "Archives physiques/numériques",
      expectedResult: "Archives accessibles et sécurisées",
    },
    {
      id: 4,
      action: "Analyser les risques liés aux pertes ou altérations de données",
      methodology: "Analyse des risques",
      sources: "Incidents, rapports IT, constats",
      expectedResult: "Risques maîtrisés",
    },
    {
      id: 5,
      action: "Conclure sur la fiabilité de la traçabilité et de l’archivage",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Traçabilité et archivage jugés fiables",
    },
  ],
},

{
  id: "OS29",
  title: "Évaluer la communication interne et la sensibilisation au contrôle des recettes",
  category: "Contrôle Interne",
  objectives: [
    "Les acteurs sont sensibilisés aux contrôles",
    "Les règles sont connues et comprises",
    "La communication est formalisée",
  ],
  steps: [
    {
      id: 1,
      action: "Identifier les actions de communication et de formation existantes",
      methodology: "Revue documentaire",
      sources: "Plans de formation, notes internes",
      expectedResult: "Actions de communication recensées",
    },
    {
      id: 2,
      action: "Vérifier la diffusion des règles et procédures",
      methodology: "Inspection",
      sources: "Supports diffusés, emails, intranet",
      expectedResult: "Règles diffusées aux acteurs concernés",
    },
    {
      id: 3,
      action: "Évaluer la compréhension des acteurs opérationnels",
      methodology: "Entretiens",
      sources: "Entretiens agents et superviseurs",
      expectedResult: "Bonne compréhension des règles",
    },
    {
      id: 4,
      action: "Analyser les impacts d’un déficit de communication",
      methodology: "Analyse des risques",
      sources: "Incidents, constats",
      expectedResult: "Risques identifiés",
    },
    {
      id: 5,
      action: "Conclure sur l’efficacité de la communication interne",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Communication jugée efficace ou à renforcer",
    },
  ],
},

{
  id: "OS30",
  title: "Apprécier l’efficacité globale du dispositif de contrôle interne des recettes",
  category: "Contrôle Interne",
  objectives: [
    "Le dispositif est cohérent",
    "Les risques sont globalement maîtrisés",
    "Une conclusion globale est formulée",
  ],
  steps: [
    {
      id: 1,
      action: "Synthétiser l’ensemble des constats des OS21 à OS29",
      methodology: "Analyse transversale",
      sources: "Dossiers de travail, constats",
      expectedResult: "Vision globale consolidée",
    },
    {
      id: 2,
      action: "Identifier les forces et faiblesses majeures",
      methodology: "Analyse critique",
      sources: "Synthèse des contrôles",
      expectedResult: "Forces et faiblesses identifiées",
    },
    {
      id: 3,
      action: "Apprécier le niveau global de maîtrise des risques",
      methodology: "Jugement professionnel",
      sources: "Cartographie risques, contrôles",
      expectedResult: "Maîtrise des risques appréciée",
    },
    {
      id: 4,
      action: "Positionner le dispositif par rapport aux bonnes pratiques",
      methodology: "Benchmark",
      sources: "Référentiels, bonnes pratiques",
      expectedResult: "Positionnement clair",
    },
    {
      id: 5,
      action: "Formuler la conclusion générale sur le contrôle interne",
      methodology: "Jugement professionnel",
      sources: "Synthèse finale",
      expectedResult: "Conclusion globale formulée",
    },
  ],
},

// =========================
// 🔽 COLLER ICI LA SUITE : OS31 → OS35
// =========================
// =========================
// 🔽 COLLER ICI LA SUITE : OS31 → OS35
// =========================

{
  id: "OS31",
  title: "Évaluer la formalisation globale du dispositif de contrôle interne des recettes",
  category: "Contrôle Interne",
  objective:
    "S’assurer que :\n" +
    "- le dispositif de contrôle interne des recettes est formalisé\n" +
    "- les procédures sont documentées et cohérentes\n" +
    "- les responsabilités sont clairement définies",
  steps: [
    {
      id: 1,
      action: "Identifier les documents formalisant le contrôle interne des recettes",
      methodology: "Revue documentaire",
      sources: "Manuels de procédures, notes internes, organigrammes",
      expectedResult: "Dispositif formalisé et documenté",
    },
    {
      id: 2,
      action: "Vérifier la cohérence entre procédures formelles et pratiques réelles",
      methodology: "Entretiens / walkthrough",
      sources: "Entretiens opérationnels, observations terrain",
      expectedResult: "Cohérence globale procédures / pratiques",
    },
    {
      id: 3,
      action: "Analyser la clarté des rôles et responsabilités",
      methodology: "Analyse organisationnelle",
      sources: "Fiches de poste, délégations, procédures",
      expectedResult: "Responsabilités clairement définies",
    },
    {
      id: 4,
      action: "Identifier les zones de faiblesse du dispositif",
      methodology: "Analyse critique",
      sources: "Constats d’audit, incidents, écarts",
      expectedResult: "Faiblesses identifiées et documentées",
    },
    {
      id: 5,
      action: "Conclure sur la formalisation du contrôle interne",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Appréciation globale du dispositif",
    },
  ],
},

{
  id: "OS32",
  title: "Confrontation données de sortie système ↔ recettes réelles",
  category: "Systèmes SI",
  objective:
    "S’assurer que :\n" +
    "- les états de sortie du système concordent avec les recettes réelles\n" +
    "- les contrôles de cohérence sont effectifs\n" +
    "- les écarts sont expliqués et justifiés",
  steps: [
    {
      id: 1,
      action: "Identifier les états de sortie du système et leurs périodicités",
      methodology: "Revue documentaire",
      sources: "États recettes, rapports système",
      expectedResult: "États de sortie clairement identifiés",
    },
    {
      id: 2,
      action: "Vérifier les contrôles internes de validation des états",
      methodology: "Test de contrôle",
      sources: "Workflows, validations, logs",
      expectedResult: "États validés avant diffusion",
    },
    {
      id: 3,
      action: "Rapprocher états système et encaissements réels",
      methodology: "Rapprochement",
      sources: "États système, caisse, banque, comptabilité",
      expectedResult: "Concordance démontrée",
    },
    {
      id: 4,
      action: "Analyser les écarts significatifs",
      methodology: "Analyse des écarts",
      sources: "Rapports d’écarts, justifications",
      expectedResult: "Écarts expliqués et documentés",
    },
    {
      id: 5,
      action: "Conclure sur la fiabilité des sorties système",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Sorties système jugées fiables",
    },
  ],
},

{
  id: "OS33",
  title: "Exhaustivité des transactions prises en compte par le système central",
  category: "Systèmes SI",
  objective:
    "S’assurer que :\n" +
    "- toutes les transactions sont centralisées\n" +
    "- les contrôles d’exhaustivité sont effectifs\n" +
    "- les pertes de données sont détectées",
  steps: [
    {
      id: 1,
      action: "Analyser l’architecture de centralisation des transactions",
      methodology: "Revue documentaire",
      sources: "Architecture SI, schémas de flux",
      expectedResult: "Flux de centralisation maîtrisés",
    },
    {
      id: 2,
      action: "Identifier les contrôles d’exhaustivité existants",
      methodology: "Inspection",
      sources: "Paramétrages SI, logs",
      expectedResult: "Contrôles d’exhaustivité opérationnels",
    },
    {
      id: 3,
      action: "Tester un échantillon de transactions voie ↔ central",
      methodology: "Test sur échantillon",
      sources: "Logs voie, base centrale",
      expectedResult: "Aucune transaction manquante",
    },
    {
      id: 4,
      action: "Analyser les incidents de pertes ou retards",
      methodology: "Analyse des incidents",
      sources: "Rapports incidents IT",
      expectedResult: "Causes identifiées",
    },
    {
      id: 5,
      action: "Conclure sur l’exhaustivité de la centralisation",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Centralisation jugée exhaustive",
    },
  ],
},

{
  id: "OS34",
  title: "Délais de mise à jour des données après transactions",
  category: "Systèmes SI",
  objective:
    "S’assurer que :\n" +
    "- les délais de mise à jour sont maîtrisés\n" +
    "- les retards sont détectés\n" +
    "- l’impact sur le reporting est limité",
  steps: [
    {
      id: 1,
      action: "Identifier les délais théoriques de mise à jour",
      methodology: "Revue documentaire",
      sources: "SLA, documentation technique",
      expectedResult: "Délais théoriques définis",
    },
    {
      id: 2,
      action: "Mesurer les délais réels sur un échantillon",
      methodology: "Analyse des données",
      sources: "Horodatages transactions",
      expectedResult: "Délais réels conformes ou expliqués",
    },
    {
      id: 3,
      action: "Vérifier les alertes en cas de retard",
      methodology: "Test de contrôle",
      sources: "Paramétrage alertes, logs",
      expectedResult: "Alertes effectives",
    },
    {
      id: 4,
      action: "Analyser l’impact des retards sur les recettes",
      methodology: "Analyse d’impact",
      sources: "Reporting, états financiers",
      expectedResult: "Impact maîtrisé",
    },
    {
      id: 5,
      action: "Conclure sur la maîtrise des délais",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Délais jugés acceptables",
    },
  ],
},

{
  id: "OS35",
  title: "Plan de continuité et résilience du système de gestion des transactions",
  category: "Systèmes SI",
  objective:
    "S’assurer que :\n" +
    "- un PCA existe\n" +
    "- des tests sont réalisés\n" +
    "- la reprise d’activité est maîtrisée",
  steps: [
    {
      id: 1,
      action: "Identifier l’existence d’un PCA spécifique",
      methodology: "Revue documentaire",
      sources: "PCA IT, procédures d’urgence",
      expectedResult: "PCA formalisé",
    },
    {
      id: 2,
    action: "Analyser les scénarios couverts par le PCA",
      methodology: "Analyse",
      sources: "Scénarios PCA",
      expectedResult: "Scénarios pertinents couverts",
    },
    {
      id: 3,
      action: "Vérifier la réalisation de tests PCA",
      methodology: "Inspection",
      sources: "PV de tests, rapports IT",
      expectedResult: "Tests PCA réalisés",
    },
    {
      id: 4,
      action: "Analyser les incidents et retours d’expérience",
      methodology: "Analyse",
      sources: "Rapports incidents",
      expectedResult: "Améliorations mises en œuvre",
    },
    {
      id: 5,
      action: "Conclure sur la résilience du système",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Système jugé résilient ou à renforcer",
    },
  ],
},

// =========================
// 🔽 COLLER ICI LA SUITE : OS36 → OS40
// =========================
// =========================
// 🔽 COLLER ICI LA SUITE : OS36 → OS40
// =========================

{
  id: "OS36",
  title: "Sauvegarde, sécurisation et intégrité des données du système de transactions",
  category: "Systèmes SI",
  objective:
    "S’assurer que :\n" +
    "- les données critiques sont sauvegardées régulièrement\n" +
    "- les accès sont sécurisés et maîtrisés\n" +
    "- les restaurations sont testées\n" +
    "- les incidents de sécurité sont suivis",
  steps: [
    {
      id: 1,
      action: "Identifier les données critiques et les politiques de sauvegarde",
      methodology: "Revue documentaire",
      sources: "Politiques IT, procédures backup, cartographie SI",
      expectedResult: "Données critiques et politiques de sauvegarde identifiées",
    },
    {
      id: 2,
      action: "Vérifier la fréquence et la fiabilité des sauvegardes",
      methodology: "Inspection",
      sources: "Logs de sauvegarde, rapports IT",
      expectedResult: "Sauvegardes régulières et conformes",
    },
    {
      id: 3,
      action: "Analyser les contrôles d’accès et habilitations",
      methodology: "Test de contrôle",
      sources: "Listes d’habilitations, paramétrages sécurité",
      expectedResult: "Accès maîtrisés et justifiés",
    },
    {
      id: 4,
      action: "Vérifier l’existence de tests de restauration",
      methodology: "Inspection",
      sources: "PV de tests, rapports de restauration",
      expectedResult: "Capacité de restauration démontrée",
    },
    {
      id: 5,
      action: "Conclure sur la sécurité et l’intégrité des données",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Données jugées sécurisées et intègres",
    },
  ],
},

{
  id: "OS37",
  title: "Fiabilité des intrants et extrants de l’application informatique des recettes",
  category: "Systèmes SI",
  objective:
    "S’assurer que :\n" +
    "- les données en entrée sont complètes et fiables\n" +
    "- les traitements sont cohérents\n" +
    "- les données de sortie sont exactes",
  steps: [
    {
      id: 1,
      action: "Cartographier les flux de données d’entrée et de sortie",
      methodology: "Revue documentaire",
      sources: "Schémas SI, dictionnaire de données",
      expectedResult: "Flux d’intrants et extrants identifiés",
    },
    {
      id: 2,
      action: "Vérifier les contrôles de validation des données en entrée",
      methodology: "Test de contrôle",
      sources: "Règles SI, logs de validation",
      expectedResult: "Erreurs détectées et corrigées",
    },
    {
      id: 3,
      action: "Tester la cohérence intrants → traitements → extrants",
      methodology: "Tests substantifs",
      sources: "Données trafic, règles tarifaires, états recettes",
      expectedResult: "Cohérence globale démontrée",
    },
    {
      id: 4,
      action: "Analyser les anomalies et rejets",
      methodology: "Analyse des exceptions",
      sources: "Logs erreurs, rapports anomalies",
      expectedResult: "Anomalies expliquées et corrigées",
    },
    {
      id: 5,
      action: "Conclure sur la fiabilité globale du système",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Système jugé fiable",
    },
  ],
},

{
  id: "OS38",
  title: "Conformité RH : contrats, salaires, charges sociales et droits des travailleurs",
  category: "Audit administratif",
  objective:
    "S’assurer que :\n" +
    "- les obligations légales et conventionnelles RH sont respectées\n" +
    "- les dossiers du personnel sont complets\n" +
    "- la paie et les charges sont conformes",
  steps: [
    {
      id: 1,
      action: "Identifier les obligations légales et conventionnelles RH",
      methodology: "Revue documentaire",
      sources: "Contrats, conventions, textes applicables",
      expectedResult: "Obligations RH identifiées",
    },
    {
      id: 2,
      action: "Vérifier l’existence de procédures RH formalisées",
      methodology: "Test de conception",
      sources: "Procédures RH, manuels internes",
      expectedResult: "Procédures RH formalisées",
    },
    {
      id: 3,
      action: "Tester la conformité des dossiers du personnel",
      methodology: "Test sur échantillon",
      sources: "Dossiers RH, bulletins de paie",
      expectedResult: "Dossiers complets et conformes",
    },
    {
      id: 4,
      action: "Vérifier le respect des droits des travailleurs",
      methodology: "Entretiens / inspection",
      sources: "Registres congés, planning, entretiens",
      expectedResult: "Droits respectés",
    },
    {
      id: 5,
      action: "Conclure sur la conformité RH",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Conformité RH jugée satisfaisante",
    },
  ],
},

{
  id: "OS39",
  title: "Conformité aux exigences administratives et contractuelles",
  category: "Audit administratif",
  objective:
    "S’assurer que :\n" +
    "- les exigences du contrat sont respectées\n" +
    "- un dispositif de suivi contractuel existe\n" +
    "- les manquements sont identifiés",
  steps: [
    {
      id: 1,
      action: "Identifier les obligations administratives du contrat",
      methodology: "Revue documentaire",
      sources: "Contrat, cahier des charges, avenants",
      expectedResult: "Obligations contractuelles identifiées",
    },
    {
      id: 2,
      action: "Vérifier l’existence d’un dispositif de suivi contractuel",
      methodology: "Test de conception",
      sources: "Tableaux de suivi, responsabilités",
      expectedResult: "Dispositif de suivi opérationnel",
    },
    {
      id: 3,
      action: "Tester la conformité des obligations administratives",
      methodology: "Test de conformité",
      sources: "Documents justificatifs, reporting",
      expectedResult: "Conformité démontrée ou écarts justifiés",
    },
    {
      id: 4,
      action: "Analyser les impacts des manquements",
      methodology: "Analyse d’impact",
      sources: "Synthèse écarts, pénalités",
      expectedResult: "Impacts évalués",
    },
    {
      id: 5,
      action: "Conclure sur la conformité administrative",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Conformité administrative appréciée",
    },
  ],
},

{
  id: "OS40",
  title: "Respect des obligations de reporting contractuel",
  category: "Audit administratif",
  objective:
    "S’assurer que :\n" +
    "- les reportings exigés sont produits\n" +
    "- les délais et formats sont respectés\n" +
    "- les manquements sont suivis",
  steps: [
    {
      id: 1,
      action: "Identifier les obligations de reporting contractuel",
      methodology: "Revue documentaire",
      sources: "Contrat, cahier des charges",
      expectedResult: "Obligations de reporting identifiées",
    },
    {
      id: 2,
      action: "Vérifier l’existence d’un calendrier et processus de reporting",
      methodology: "Test de conception",
      sources: "Calendrier, procédures internes",
      expectedResult: "Processus de reporting formalisé",
    },
    {
      id: 3,
      action: "Rapprocher obligations ↔ reportings transmis",
      methodology: "Rapprochement",
      sources: "Rapports transmis, accusés de réception",
      expectedResult: "Reporting complet et conforme",
    },
    {
      id: 4,
      action: "Analyser les retards ou manquements",
      methodology: "Analyse",
      sources: "Synthèse écarts, correspondances",
      expectedResult: "Manquements expliqués",
    },
    {
      id: 5,
      action: "Conclure sur le respect des obligations de reporting",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Respect du reporting jugé satisfaisant",
    },
  ],
},

// =========================
// 🔽 COLLER ICI LA SUITE : OS41 → OS45
// =========================
// =========================
// 🔽 COLLER ICI LA SUITE : OS41 → OS45
// =========================

{
  id: "OS41",
  title:
    "Respect des dispositions légales, réglementaires et conventionnelles dans l’exécution du contrat",
  category: "Audit administratif",
  objective:
    "S’assurer que :\n" +
    "- les textes applicables sont identifiés et respectés\n" +
    "- un dispositif de conformité et de veille existe\n" +
    "- les non-conformités et risques sont détectés, analysés et traités",
  steps: [
    {
      id: 1,
      action: "Identifier les exigences légales/réglementaires applicables et zones de risques",
      methodology: "Revue documentaire",
      sources:
        "Textes applicables, clauses contractuelles, constats antérieurs, obligations",
      expectedResult: "Exigences identifiées et zones de risques documentées",
    },
    {
      id: 2,
      action: "Vérifier l’existence d’un dispositif interne de conformité et de veille",
      methodology: "Entretiens + test de conception",
      sources:
        "Procédures conformité, registre de veille, responsables conformité, organigramme",
      expectedResult: "Dispositif de conformité/veille opérationnel et formalisé",
    },
    {
      id: 3,
      action: "Tester la conformité des pratiques effectives au regard des textes",
      methodology: "Tests de conformité / inspection",
      sources: "Pièces justificatives, décisions, actes administratifs, contrôles terrain",
      expectedResult: "Conformité démontrée ou écarts documentés et justifiés",
    },
    {
      id: 4,
      action: "Analyser les non-conformités et évaluer les risques (juridiques/financiers)",
      methodology: "Analyse d’impact",
      sources: "Synthèse écarts, incidents, correspondances, recommandations",
      expectedResult: "Risques évalués et plans d’actions proposés",
    },
    {
      id: 5,
      action: "Conclure sur le respect du cadre légal/réglementaire et des obligations",
      methodology: "Jugement professionnel",
      sources: "Synthèse des contrôles",
      expectedResult: "Appréciation globale du respect et risques résiduels identifiés",
    },
  ],
},

{
  id: "OS42",
  title: "Suivi des indicateurs de performance contractuels (KPI)",
  category: "Audit organisationnel",
  objective:
    "S’assurer que :\n" +
    "- les KPI contractuels sont définis, suivis et pilotés\n" +
    "- les données sources utilisées sont fiables\n" +
    "- les écarts objectifs/réalisations sont analysés et font l’objet d’actions",
  steps: [
    {
      id: 1,
      action: "Identifier les KPI contractuels, seuils, périodicités et responsabilités",
      methodology: "Revue documentaire",
      sources:
        "Contrat, cahier des charges, annexes KPI, procédures de suivi, organigramme",
      expectedResult: "KPI et modalités de suivi clairement identifiés",
    },
    {
      id: 2,
      action: "Vérifier l’existence d’un dispositif de suivi (tableaux de bord, processus, validations)",
      methodology: "Test de conception",
      sources: "Tableaux de bord KPI, procédures, workflow validation, comptes rendus",
      expectedResult: "Dispositif de suivi KPI formalisé et opérationnel",
    },
    {
      id: 3,
      action: "Rapprocher les KPI avec les données sources et tester la fiabilité des calculs",
      methodology: "Rapprochement / tests substantifs",
      sources: "Données exploitation, SI, finances, logs, bases de données",
      expectedResult: "KPI calculés sur données fiables (écarts justifiés)",
    },
    {
      id: 4,
      action: "Analyser les écarts objectifs ↔ réalisations et les actions correctives mises en œuvre",
      methodology: "Analyse",
      sources: "Rapports KPI, plans d’actions, décisions, PV réunions",
      expectedResult: "Écarts analysés et actions correctives tracées",
    },
    {
      id: 5,
      action: "Conclure sur l’effectivité du pilotage par la performance",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Appréciation de l’efficacité du pilotage KPI",
    },
  ],
},

{
  id: "OS43",
  title: "Qualité de la gestion du personnel dédié à l’exploitation",
  category: "Audit organisationnel",
  objective:
    "S’assurer que :\n" +
    "- les effectifs/compétences sont adaptés\n" +
    "- la formation, supervision et continuité de service sont assurées\n" +
    "- les dysfonctionnements RH opérationnels sont identifiés et traités",
  steps: [
    {
      id: 1,
      action: "Analyser l’organigramme opérationnel, les effectifs et fonctions critiques",
      methodology: "Revue documentaire",
      sources:
        "Organigramme, effectifs, fiches de poste (péage, supervision, IT), rapports RH",
      expectedResult: "Fonctions critiques et besoins RH identifiés",
    },
    {
      id: 2,
      action: "Évaluer les dispositifs RH opérationnels (recrutement, formation, évaluation, discipline)",
      methodology: "Entretiens + test de conception",
      sources: "Procédures RH, plan de formation, évaluations, sanctions",
      expectedResult: "Dispositif RH cohérent et appliqué",
    },
    {
      id: 3,
      action: "Comparer effectifs théoriques ↔ effectifs réels ↔ charge de travail",
      methodology: "Analyse comparative",
      sources: "Plannings, pointage, tableaux effectifs, statistiques activité",
      expectedResult: "Adéquation effectifs/charge (écarts documentés)",
    },
    {
      id: 4,
      action: "Vérifier la continuité de service (remplacements, astreintes, couverture horaires)",
      methodology: "Inspection / analyse",
      sources: "Plannings, registre remplacements, rapports incidents, notes internes",
      expectedResult: "Continuité assurée ; risques de rupture identifiés",
    },
    {
      id: 5,
      action: "Conclure sur la qualité de la gestion du personnel d’exploitation",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Appréciation globale et recommandations",
    },
  ],
},

{
  id: "OS44",
  title:
    "Adéquation de l’organigramme, des effectifs, des compétences et de la répartition des responsabilités",
  category: "Audit organisationnel",
  objective:
    "S’assurer que :\n" +
    "- l’organisation est adaptée aux missions\n" +
    "- les effectifs/compétences sont suffisants\n" +
    "- les rôles et responsabilités sont clairement définis et séparés",
  steps: [
    {
      id: 1,
      action: "Revoir l’organigramme, les fiches de poste et la matrice de compétences",
      methodology: "Revue documentaire",
      sources:
        "Organigrammes, fiches de poste, matrices compétences, descriptions missions",
      expectedResult: "Organisation formalisée et lisible",
    },
    {
      id: 2,
      action: "Analyser la cohérence organisation ↔ missions (doublons, dépendances critiques)",
      methodology: "Analyse organisationnelle",
      sources: "Processus, responsabilités, organigramme, dépendances SI",
      expectedResult: "Dysfonctionnements organisationnels identifiés",
    },
    {
      id: 3,
      action: "Comparer charge de travail ↔ effectifs/compétences (adéquation profils/postes)",
      methodology: "Analyse comparative + entretiens",
      sources: "Volumes d’activité, plannings, effectifs réels, entretiens managers",
      expectedResult: "Adéquation démontrée ou insuffisances documentées",
    },
    {
      id: 4,
      action: "Vérifier la séparation des responsabilités clés et contrôles compensatoires",
      methodology: "Test de conception / observation",
      sources: "Fiches de poste, procédures contrôle, validations hiérarchiques",
      expectedResult: "Séparation respectée ou contrôles compensatoires efficaces",
    },
    {
      id: 5,
      action: "Conclure et proposer les ajustements nécessaires",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Ajustements proposés et appréciation globale",
    },
  ],
},

{
  id: "OS45",
  title: "Disponibilité et affectation des moyens matériels et logistiques",
  category: "Audit organisationnel",
  objective:
    "S’assurer que :\n" +
    "- les moyens matériels/logistiques critiques sont disponibles\n" +
    "- la maintenance/gestion est organisée\n" +
    "- les contraintes matérielles affectant la performance sont identifiées",
  steps: [
    {
      id: 1,
      action: "Identifier et recenser les moyens critiques nécessaires à l’exploitation",
      methodology: "Revue documentaire",
      sources: "Inventaires, budgets logistiques, plans maintenance, contrats",
      expectedResult: "Moyens critiques identifiés et recensés",
    },
    {
      id: 2,
      action: "Vérifier les procédures de gestion des équipements et la maintenance préventive",
      methodology: "Test de conception",
      sources: "Procédures maintenance, contrats prestataires, planning interventions",
      expectedResult: "Maintenance organisée et responsabilités définies",
    },
    {
      id: 3,
      action: "Analyser la disponibilité réelle et les pannes/incidents récurrents",
      methodology: "Inspection / analyse",
      sources: "Tickets, rapports pannes, taux disponibilité, historiques incidents",
      expectedResult: "Disponibilité suffisante ; pannes expliquées et suivies",
    },
    {
      id: 4,
      action: "Évaluer l’adéquation des moyens ↔ besoins opérationnels (goulots/ruptures)",
      methodology: "Analyse comparative + entretiens",
      sources: "Volumétrie, besoins par poste, retours terrain, observations",
      expectedResult: "Contraintes identifiées et plans d’amélioration proposés",
    },
    {
      id: 5,
      action: "Conclure sur la capacité opérationnelle et les contraintes matérielles",
      methodology: "Jugement professionnel",
      sources: "Synthèse",
      expectedResult: "Appréciation globale et recommandations",
    },
  ],
},

// =========================
// ✅ FIN (OS41 → OS45)
// =========================



];

// ✅ Export par défaut (optionnel si tu en as besoin ailleurs)
export default programs;

// ✅ EXPORT NOMMÉ attendu par ControlProgramPage.tsx
export const ALL_PROGRAMS: Record<string, AuditProgram> = Object.fromEntries(
  programs.map((p) => [p.id, p])
) as Record<string, AuditProgram>;
