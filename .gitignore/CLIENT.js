const CLIENT = {
  // ============================================================
  // IDENTITÉ
  // ============================================================
  nom: "Sanit'Energies",
  nom_court: "Sanit'Energies",
  slogan: "Plombier-chauffagiste 24h/24 en Haute-Savoie",
  siret: "91969285500027",
  domaine: "sanitenergies.com",
  url: "https://www.sanitenergies.com",

  // ============================================================
  // CONTACT
  // ============================================================
  tel_principal: "04 50 55 33 40",
  tel_mobile: "06 61 17 89 62",
  tel_principal_href: "tel:0450553340",
  tel_mobile_href: "tel:0661178962",
  email: "contact@sanitenergies.com",
  adresse: "193 Avenue de Chamonix",
  code_postal: "74170",
  ville: "Saint-Gervais-les-Bains",
  lieu_dit: "Le Fayet",
  adresse_complete: "193 Avenue de Chamonix, 74170 Saint-Gervais-les-Bains",
  horaires: "Lundi-Vendredi 8h-18h | Urgences 24h/24 - 7j/7",
  disponibilite: "24h/24 - 7j/7 pour les dépannages",

  // ============================================================
  // CERTIFICATIONS & CONFIANCE
  // ============================================================
  certifications: ["RGE"],
  avis_google: {
    note: 5.0,
    nombre: 12,
    lien: "https://www.google.com/maps/contrib/117376401844275664889"
  },
  annee_creation: 2022, // à confirmer avec le client

  // ============================================================
  // SERVICES PRIORITAIRES (forte marge / fort CA)
  // ============================================================
  services_prioritaires: [
    {
      slug: "depannage-plomberie",
      titre: "Dépannage plomberie",
      titre_court: "Dépannage",
      description: "Intervention rapide pour toute urgence plomberie : fuite d'eau, chaudière en panne, chauffe-eau hors service. Disponible 24h/24 et 7j/7 sur tout le bassin de Saint-Gervais et Chamonix.",
      urgence: true,
      sous_services: [
        { slug: "depannage-fuite-eau", titre: "Fuite d'eau urgence" },
        { slug: "depannage-chaudiere", titre: "Dépannage chaudière" },
        { slug: "depannage-chauffe-eau", titre: "Dépannage chauffe-eau" }
      ]
    },
    {
      slug: "pompe-a-chaleur",
      titre: "Pompe à chaleur",
      titre_court: "PAC",
      description: "Installation de pompes à chaleur air/air et air/eau. Entreprise certifiée RGE : vos travaux sont éligibles aux aides MaPrimeRénov et CEE. Économisez jusqu'à 70% sur votre facture de chauffage.",
      urgence: false,
      argument_cle: "Certifié RGE - Éligible MaPrimeRénov",
      sous_services: [
        { slug: "pompe-a-chaleur-air-air", titre: "Pompe à chaleur air/air" },
        { slug: "pompe-a-chaleur-air-eau", titre: "Pompe à chaleur air/eau" },
        { slug: "entretien-maintenance-pac", titre: "Entretien et maintenance PAC" }
      ]
    },
    {
      slug: "debouchage-canalisation",
      titre: "Débouchage canalisation",
      titre_court: "Débouchage",
      description: "Débouchage de WC, éviers, douches et canalisations bouchées. Intervention rapide avec matériel professionnel. Hydrocurage haute pression pour les obstructions les plus tenaces.",
      urgence: true,
      sous_services: [
        { slug: "debouchage-wc-toilettes", titre: "Débouchage WC et toilettes" },
        { slug: "debouchage-evier-douche", titre: "Débouchage évier et douche" },
        { slug: "hydrocurage-canalisation", titre: "Hydrocurage canalisation" }
      ]
    },
    {
      slug: "desembouage",
      titre: "Désembouage",
      titre_court: "Désembouage",
      description: "Désembouage de vos circuits de chauffage, radiateurs et planchers chauffants. Amélioration des performances, réduction de la consommation énergétique et prolongation de la durée de vie de vos équipements.",
      urgence: false,
      sous_services: [
        { slug: "desembouage-radiateurs", titre: "Désembouage radiateurs" },
        { slug: "desembouage-plancher-chauffant", titre: "Désembouage plancher chauffant" },
        { slug: "diagnostic-analyse-eau", titre: "Diagnostic et analyse eau" }
      ]
    },
    {
      slug: "energies-renouvelables",
      titre: "Énergies renouvelables",
      titre_court: "ENR",
      description: "Installation de systèmes solaires thermiques pour l'eau chaude et le chauffage. Optimisation énergétique pour réduire vos consommations. Certifié RGE pour l'accès aux aides de l'État.",
      urgence: false,
      argument_cle: "Certifié RGE - Aides de l'État disponibles",
      sous_services: [
        { slug: "chauffe-eau-solaire", titre: "Chauffe-eau solaire" },
        { slug: "solaire-thermique", titre: "Solaire thermique" },
        { slug: "plancher-chauffant", titre: "Plancher chauffant" }
      ]
    }
  ],

  // ============================================================
  // SERVICES SECONDAIRES
  // ============================================================
  services_secondaires: [
    {
      slug: "installation-plomberie",
      titre: "Installation plomberie",
      sous_services: [
        { slug: "salle-de-bain", titre: "Salle de bain complète" },
        { slug: "chaudiere-gaz-fioul", titre: "Chaudière gaz et fioul" },
        { slug: "ballon-thermodynamique", titre: "Ballon thermodynamique" }
      ]
    },
    {
      slug: "maintenance-contrats",
      titre: "Contrats de maintenance",
      sous_services: [
        { slug: "contrat-entretien-chaudiere", titre: "Contrat entretien chaudière" },
        { slug: "contrat-entretien-pac", titre: "Contrat entretien PAC" },
        { slug: "contrat-maintenance-plomberie", titre: "Contrat maintenance plomberie" }
      ]
    }
  ],

  // ============================================================
  // ZONES D'INTERVENTION - PAGES LOCALES
  // ============================================================
  zones: [
    { slug: "plombier-saint-gervais", ville: "Saint-Gervais-les-Bains", priorite: 1 },
    { slug: "plombier-le-fayet", ville: "Le Fayet", priorite: 1 },
    { slug: "plombier-megeve", ville: "Megève", priorite: 1 },
    { slug: "plombier-chamonix", ville: "Chamonix", priorite: 1 },
    { slug: "plombier-passy", ville: "Passy", priorite: 1 },
    { slug: "plombier-combloux", ville: "Combloux", priorite: 2 },
    { slug: "plombier-demi-quartier", ville: "Demi-Quartier", priorite: 2 },
    { slug: "plombier-praz-sur-arly", ville: "Praz-sur-Arly", priorite: 2 },
    { slug: "plombier-mont-arbois", ville: "Mont-d'Arbois", priorite: 2 },
    { slug: "plombier-argentiere", ville: "Argentière", priorite: 2 },
    { slug: "plombier-plateau-assy", ville: "Plateau d'Assy", priorite: 2 },
    { slug: "plombier-servoz", ville: "Servoz", priorite: 3 },
    { slug: "plombier-les-houches", ville: "Les Houches", priorite: 3 },
    { slug: "plombier-les-carroz", ville: "Les Carroz", priorite: 3 },
    { slug: "plombier-samoens", ville: "Samoëns", priorite: 3 },
    { slug: "plombier-flaine", ville: "Flaine", priorite: 3 }
  ],

  // ============================================================
  // SEO
  // ============================================================
  seo: {
    title_default: "Sanit'Energies - Plombier Chauffagiste Saint-Gervais | Dépannage 24h/24",
    description_default: "Plombier chauffagiste à Saint-Gervais-les-Bains. Dépannage 24h/24, pompe à chaleur, désembouage, débouchage. Certifié RGE. Intervention rapide sur Megève, Chamonix, Passy.",
    mots_cles_prioritaires: [
      "plombier saint-gervais-les-bains",
      "dépannage plomberie 24h saint-gervais",
      "pompe à chaleur saint-gervais",
      "désembouage haute-savoie",
      "débouchage canalisation megève",
      "plombier chauffagiste chamonix",
      "plombier urgence le fayet",
      "installation pac megève",
      "désembouage chamonix",
      "plombier rge haute-savoie"
    ],
    schema_type: "Plumber",
    gmb: "https://www.google.com/maps/contrib/117376401844275664889"
  },

  // ============================================================
  // DESIGN
  // ============================================================
  design: {
    couleur_principale: "#0057B8",    // bleu logo
    couleur_urgence: "#E85D04",       // orange/rouge logo - CTAs urgence
    couleur_fond_section: "#1a2d4f",  // bleu foncé sections
    couleur_texte: "#1a1a2e",
    couleur_blanc: "#ffffff",
    couleur_gris: "#f5f6f8",
    logo: "logo-024.jpg",             // fond noir - à détourer
    sticky_cta: true,
    sticky_tel: "06 61 17 89 62",     // mobile en priorité pour le sticky
    sticky_tel_href: "tel:0661178962"
  },

  // ============================================================
  // TEMPLATE DE BASE
  // ============================================================
  template: "BTP" // template le plus proche dans ta bibliothèque
};
