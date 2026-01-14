export const THEMES = {
  blue: {
    variant: "blue" as const,
    text: "text-accent-blue",
    bg: "bg-accent-blue/10",
    border: "border-accent-blue/20",
    bullet: "bg-accent-blue",
    hover: "hover:bg-accent-blue/15 hover:border-accent-blue/50",
    badge:
      "bg-accent-blue/10 text-accent-blue border-accent-blue/20 hover:border-accent-blue/50 hover:bg-accent-blue/15",
  },
  purple: {
    variant: "purple" as const,
    text: "text-accent-purple",
    bg: "bg-accent-purple/10",
    border: "border-accent-purple/20",
    bullet: "bg-accent-purple",
    hover: "hover:bg-accent-purple/15 hover:border-accent-purple/50",
    badge:
      "bg-accent-purple/10 text-accent-purple border-accent-purple/20 hover:border-accent-purple/50 hover:bg-accent-purple/15",
  },
  emerald: {
    variant: "emerald" as const,
    text: "text-accent-emerald",
    bg: "bg-accent-emerald/10",
    border: "border-accent-emerald/20",
    bullet: "bg-accent-emerald",
    hover: "hover:bg-accent-emerald/15 hover:border-accent-emerald/50",
    badge:
      "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20 hover:border-accent-emerald/50 hover:bg-accent-emerald/15",
  },
} as const;

export type CategoryColor = keyof typeof THEMES;

export type Theme = (typeof THEMES)[keyof typeof THEMES];

export const CATEGORY_MAP: Record<string, Theme> = {
  "Backend Development": THEMES.blue,
  "Cloud & DevOps": THEMES.purple,
  "Data & Streaming": THEMES.emerald,
};

export const getTheme = (category: string) =>
  CATEGORY_MAP[category] || THEMES.blue;
