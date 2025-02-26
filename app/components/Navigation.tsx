import React from "react";

interface NavigationProps {
  transformText: (text: string) => string;
}

const Navigation: React.FC<NavigationProps> = ({ transformText }) => {
  return (
    <div className="flex justify-center border-b-2 border-double border-gray-300 dark:border-gray-700 py-2 space-x-6 text-sm font-medium">
      <span>{transformText("U.S.")}</span>
      <span>{transformText("World")}</span>
      <span>{transformText("Business")}</span>
      <span>{transformText("Arts")}</span>
      <span>{transformText("Opinion")}</span>
      <span>{transformText("Science")}</span>
      <span>{transformText("Health")}</span>
      <span>{transformText("Sports")}</span>
      <span>{transformText("Style")}</span>
      <span>{transformText("Travel")}</span>
    </div>
  );
};

export default Navigation;
