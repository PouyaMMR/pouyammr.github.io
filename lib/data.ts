export type LegendIconType = "core" | "state" | "ui" | "map" | "tools";

export interface SkillCategory {
  id: string;
  icon: LegendIconType;
  name: string;
  sub: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "core",
    icon: "core",
    name: "Core",
    sub: "Language & framework",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    id: "state",
    icon: "state",
    name: "State & Data",
    sub: "Flow control",
    skills: [
      "Redux",
      "Redux-Toolkit",
      "Redux-Thunk",
      "Redux-Saga",
      "Zustand",
      "React Query",
      "RESTful APIs",
    ],
  },
  {
    id: "ui",
    icon: "ui",
    name: "UI & Styling",
    sub: "Surface & motion",
    skills: [
      "SCSS",
      "Styled-Components",
      "Bootstrap",
      "Material UI",
      "Ant Design",
      "Framer Motion",
    ],
  },
  {
    id: "map",
    icon: "map",
    name: "Mapping & Visualization",
    sub: "Geospatial",
    skills: ["Mapbox GL JS", "Leaflet"],
  },
  {
    id: "tools",
    icon: "tools",
    name: "Tooling & Workflow",
    sub: "Build & document",
    skills: ["Git", "Storybook", "CI/CD", "Agile"],
  },
];

export interface Waypoint {
  id: string;
  index: string;
  role: string;
  org: string;
  when: string;
  location: string;
  tag?: string;
  bullets?: string[];
  stats?: { num: string; label: string }[];
  variant?: "origin" | "current";
}

export const waypoints: Waypoint[] = [
  {
    id: "hamrah-mechanic",
    index: "01",
    role: "Front-end Developer Intern",
    org: "Hamrah-Mechanic",
    when: "Jan 2020 – Aug 2020",
    location: "8 months · Tehran, Iran",
    bullets: [
      "Helped migrate the company site from jQuery to Next.js",
      "Built reusable components used across the project",
      "Designed the site footer with Next.js and Bootstrap",
      "Optimized HTTP requests sent to the server",
      "Tested modular components inside Storybook",
    ],
  },
  {
    id: "chapter-one",
    index: "02",
    role: "Front-end Developer",
    org: "Chapter One Ventures & Private Equity",
    when: "Oct 2020 – Mar 2023",
    location: "Tehran, Iran",
    bullets: [
      "Built Chapterpitch, a freelancing platform, on Next.js, TypeScript, Redux & SCSS — shipped July 2022",
      "Built ChapterAds, an automated 360° marketing platform, on Next.js, MUI, TypeScript, Redux & SCSS",
      "Built the dashboard and project manager for both platforms solo",
      "Mentored teammates on TypeScript and Redux-Saga",
      "Ran technical interviews for incoming engineers",
      "Led the company website's migration from jQuery to Next.js",
    ],
  },
  {
    id: "snappfood",
    index: "03",
    role: "Front-end Developer",
    org: "Snappfood (FoodRo)",
    when: "Jul 2023 – Present",
    location: "Tehran, Iran",
    tag: "Current",
    variant: "current",
    bullets: [
      "Building and shipping FoodRo, a social dine-out and restaurant-aggregator app, nationwide",
      "Coordinating across Snapp Group teams to resolve cross-team conflicts and bugs",
      "Introduced code reviews and pair-programming sessions for the team",
      "Maintaining CI/CD pipelines with the infrastructure team",
      "Integrated Google Analytics, Yandex Metrica, WebEngage, and Luna (FoodRo's in-house analytics)",
      "Managing infrastructure migrations with near-zero disruption to users",
    ],
  },
];

export interface Language {
  name: string;
  level: string;
  bars: number; // filled out of 4
}

export const languages: Language[] = [
  { name: "Farsi", level: "Native", bars: 4 },
  { name: "English", level: "Full Pro.", bars: 3 },
  { name: "German", level: "Semi-Pro.", bars: 2 },
];

export const workingStyle: string[] = [
  "Agile Methodologies",
  "Decision-Making",
  "Coordination",
  "Crisis Management",
  "Leadership",
  "Consulting",
  "Constructive Criticism",
  "Responsibility",
];

export const interests: string[] = [
  "Board Games",
  "Reading Books",
  "Translation",
  "Listening to Music",
  "Learning New Things",
  "Working Out at the Gym",
];

export const navLinks: { href: string; label: string }[] = [
  { href: "#profile", label: "Profile" },
  { href: "#stack", label: "Stack" },
  { href: "#route", label: "Route" },
  { href: "#notes", label: "Field Notes" },
];

export const contactCoords: { key: string; value: string; href?: string }[] = [
  { key: "Email", value: "pouyammr@outlook.com", href: "mailto:pouyammr@outlook.com" },
  { key: "GitHub", value: "@pouyammr", href: "https://github.com/pouyammr" },
  { key: "LinkedIn", value: "@pouyammr", href: "https://www.linkedin.com/in/pouyammr" },
  { key: "Based In", value: "Tehran, Iran" },
];
