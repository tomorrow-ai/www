import React from "react";

interface HeaderProps {
  currentTime: string;
  formattedDate: string;
  transformText: (text: string) => string;
}

const Header: React.FC<HeaderProps> = ({
  currentTime,
  formattedDate,
  transformText,
}) => {
  return (
    <div className="border-black dark:border-gray-700">
      <h1 className="text-center font-bold text-5xl mb-1">
        {transformText("vecnews")}
      </h1>
      <div className="flex justify-between text-sm">
        <div>{transformText(currentTime)}</div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center text-sm">
          {transformText(formattedDate)}
        </div>
        <div>{transformText("54°F Partly Cloudy")}</div>
      </div>
    </div>
  );
};

export default Header;
