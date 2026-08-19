import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export type Category = "residentiel" | "commercial" | "renovation";

export const categories: { id: Category | "tous"; label: string }[] = [
  { id: "tous", label: "Tous" },
  { id: "residentiel", label: "Résidentiel" },
  { id: "commercial", label: "Commercial" },
  { id: "renovation", label: "Rénovation" },
];

export type Project = {
  slug: string;
  title: string;
  place: string;
  year: string;
  surface: string;
  category: Category;
  image: string;
  intro: string;
  detail: string;
  materials: string[];
};

export const projects: Project[] = [
  {
    slug: "appartement-haussmann",
    title: "Appartement Haussmann",
    place: "Paris VIIe",
    year: "2025",
    surface: "184 m²",
    category: "residentiel",
    image: project1,
    intro: "Les moulures conservées, les volumes libérés.",
    detail:
      "Le plan a été redessiné autour de la lumière du sud. Cloisons déposées, enfilade rétablie, parquet point de Hongrie restauré lame par lame. Les rangements disparaissent dans l'épaisseur des murs pour rendre au séjour sa pleine mesure.",
    materials: ["Chêne massif", "Enduit à la chaux", "Bouclé écru"],
  },
  {
    slug: "boutique-joaillerie",
    title: "Boutique de joaillerie",
    place: "Bordeaux",
    year: "2024",
    surface: "62 m²",
    category: "commercial",
    image: project2,
    intro: "Une lumière calibrée pour la matière précieuse.",
    detail:
      "Chaque vitrine est un meuble dessiné sur mesure : laiton brossé, verre extra-clair, éclairage linéaire intégré à 3000 K. Le parcours client se resserre puis s'ouvre sur le comptoir en pierre monolithique.",
    materials: ["Laiton brossé", "Micro-béton", "Travertin"],
  },
  {
    slug: "mas-en-pierre",
    title: "Mas en pierre",
    place: "Luberon",
    year: "2024",
    surface: "240 m²",
    category: "renovation",
    image: project3,
    intro: "La pierre laissée nue, le reste apaisé.",
    detail:
      "Reprise complète du bâti ancien : maçonneries dégagées, embrasures approfondies, sols en pierre de Bourgogne. Les menuiseries en chêne clair ont été dessinées puis exécutées en atelier, à la mesure de chaque ouverture.",
    materials: ["Pierre de Bourgogne", "Chêne clair", "Lin naturel"],
  },
  {
    slug: "cuisine-sur-mesure",
    title: "Cuisine sur mesure",
    place: "Neuilly-sur-Seine",
    year: "2025",
    surface: "38 m²",
    category: "residentiel",
    image: project4,
    intro: "Un seul geste, du sol au plafond.",
    detail:
      "Façades pleine hauteur en chêne rift, îlot monolithique en pierre pâle, tout l'électroménager intégré. Les poignées ont été supprimées au profit de gorges usinées ; l'éclairage se cache sous les caissons hauts.",
    materials: ["Chêne rift", "Pierre pâle", "Acier noirci"],
  },
  {
    slug: "lounge-hotelier",
    title: "Lounge hôtelier",
    place: "Lyon",
    year: "2023",
    surface: "310 m²",
    category: "commercial",
    image: project5,
    intro: "L'anthracite comme silence.",
    detail:
      "Un salon d'accueil pensé pour la fin de journée : murs en enduit anthracite, tasseaux de chêne, luminaire sculptural sur mesure. L'assise est basse, l'acoustique traitée, la lumière indirecte.",
    materials: ["Enduit anthracite", "Chêne fumé", "Cuir pleine fleur"],
  },
  {
    slug: "suite-parentale",
    title: "Suite parentale",
    place: "Genève",
    year: "2023",
    surface: "46 m²",
    category: "renovation",
    image: project6,
    intro: "Une chambre réduite à l'essentiel.",
    detail:
      "Tête de lit murale en chêne intégrant tablettes et liseuses en laiton. Le voilage filtre la lumière du matin ; les rangements ont été redistribués pour dégager entièrement le mur d'entrée.",
    materials: ["Chêne clair", "Laiton satiné", "Lin lavé"],
  },
];
