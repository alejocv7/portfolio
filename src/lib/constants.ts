export type CategoryColor = "blue" | "purple" | "emerald";

export const CATEGORY_COLORS: Record<string, CategoryColor> = {
  "Backend Development": "blue",
  "Cloud & DevOps": "purple",
  "Data & Streaming": "emerald",
};

export const getCategoryColor = (category: string): CategoryColor => {
  return CATEGORY_COLORS[category] || "blue";
};
