export type ThemeVariant = "blue" | "purple" | "emerald";

export const THEME = {
  blue: {
    text: "text-accent-blue",
    bg: "bg-accent-blue/10",
    border: "border-accent-blue/20",
    bullet: "bg-accent-blue",
    hover: "hover:bg-accent-blue/15 hover:border-accent-blue/50",
  },
  purple: {
    text: "text-accent-purple",
    bg: "bg-accent-purple/10",
    border: "border-accent-purple/20",
    bullet: "bg-accent-purple",
    hover: "hover:bg-accent-purple/15 hover:border-accent-purple/50",
  },
  emerald: {
    text: "text-accent-emerald",
    bg: "bg-accent-emerald/10",
    border: "border-accent-emerald/20",
    bullet: "bg-accent-emerald",
    hover: "hover:bg-accent-emerald/15 hover:border-accent-emerald/50",
  },
} as const;

export const getThemeAccent = (variant: ThemeVariant = "blue") =>
  THEME[variant];
