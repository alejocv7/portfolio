export const THEMES = {
  blue: {
    variant: "blue" as const,
    text: "text-accent-blue",
    bg: "bg-accent-blue/10",
    border: "border-accent-blue/20",
    bullet: "bg-accent-blue",
    hover: "hover:bg-accent-blue/15 hover:border-accent-blue/50",
  },
  purple: {
    variant: "purple" as const,
    text: "text-accent-purple",
    bg: "bg-accent-purple/10",
    border: "border-accent-purple/20",
    bullet: "bg-accent-purple",
    hover: "hover:bg-accent-purple/15 hover:border-accent-purple/50",
  },
  emerald: {
    variant: "emerald" as const,
    text: "text-accent-emerald",
    bg: "bg-accent-emerald/10",
    border: "border-accent-emerald/20",
    bullet: "bg-accent-emerald",
    hover: "hover:bg-accent-emerald/15 hover:border-accent-emerald/50",
  },
} as const;

export type CategoryColor = keyof typeof THEMES;
export type Theme = (typeof THEMES)[keyof typeof THEMES];

export const CATEGORY_MAP: Record<string, keyof typeof THEMES> = {
  "Backend Development": "blue",
  "Cloud & DevOps": "purple",
  "Data & Streaming": "emerald",
};

export const getThemeVariant = (category: string): CategoryColor =>
  CATEGORY_MAP[category] || "blue";

export const getTheme = (category: string) => THEMES[getThemeVariant(category)];
