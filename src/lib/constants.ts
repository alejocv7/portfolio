export type CategoryColor = "blue" | "purple" | "emerald";

export const CATEGORY_COLORS: Record<string, CategoryColor> = {
  "Backend Development": "blue",
  "Cloud & DevOps": "purple",
  "Data & Streaming": "emerald",
};

export const getCategoryColor = (category: string): CategoryColor => {
  return CATEGORY_COLORS[category] || "blue";
};

export const CATEGORY_THEMES = {
  blue: {
    text: "text-accent-blue",
    bg: "bg-accent-blue/10",
    border: "border-accent-blue/20",
    bullet: "bg-accent-blue",
    hover: "hover:bg-accent-blue/15 hover:border-accent-blue/50",
    badge:
      "bg-accent-blue/10 text-accent-blue border-accent-blue/20 hover:border-accent-blue/50 hover:bg-accent-blue/15",
  },
  purple: {
    text: "text-accent-purple",
    bg: "bg-accent-purple/10",
    border: "border-accent-purple/20",
    bullet: "bg-accent-purple",
    hover: "hover:bg-accent-purple/15 hover:border-accent-purple/50",
    badge:
      "bg-accent-purple/10 text-accent-purple border-accent-purple/20 hover:border-accent-purple/50 hover:bg-accent-purple/15",
  },
  emerald: {
    text: "text-accent-emerald",
    bg: "bg-accent-emerald/10",
    border: "border-accent-emerald/20",
    bullet: "bg-accent-emerald",
    hover: "hover:bg-accent-emerald/15 hover:border-accent-emerald/50",
    badge:
      "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20 hover:border-accent-emerald/50 hover:bg-accent-emerald/15",
  },
} as const;
