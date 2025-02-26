import { CaseType } from "./types";

// Function to transform text based on selected case
export const transformText = (text: string, caseType: CaseType): string => {
  switch (caseType) {
    case "uppercase":
      return text.toUpperCase();
    case "lowercase":
      return text.toLowerCase();
    case "titlecase":
      return text
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    case "sentencecase":
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
};

// Get font size multiplier
export const getFontSizeClass = (fontSize: string): string => {
  switch (fontSize) {
    case "small":
      return "text-sm";
    case "medium":
      return "text-base";
    case "large":
      return "text-lg";
    case "x-large":
      return "text-xl";
    default:
      return "text-base";
  }
};

// Get theme classes
export const getThemeClasses = (theme: string): string => {
  return theme === "dark"
    ? "bg-gray-900 text-white"
    : "bg-white text-gray-900";
}; 