import type { LegendIconType } from "@/lib/data";

const AMBER = "#D9A441";
const TEAL = "#4FA39B";

export default function LegendIcon({ type }: { type: LegendIconType }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", className: "mb-4" };

  switch (type) {
    case "core":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke={AMBER} strokeWidth="1.6" />
        </svg>
      );
    case "state":
      return (
        <svg {...common}>
          <path d="M12 3 L21 19 L3 19 Z" fill="none" stroke={TEAL} strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "ui":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" fill="none" stroke={AMBER} strokeWidth="1.6" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path
            d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
            fill="none"
            stroke={TEAL}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "tools":
      return (
        <svg {...common}>
          <line x1="12" y1="3" x2="12" y2="21" stroke={AMBER} strokeWidth="1.6" />
          <line x1="3" y1="12" x2="21" y2="12" stroke={AMBER} strokeWidth="1.6" />
        </svg>
      );
  }
}
