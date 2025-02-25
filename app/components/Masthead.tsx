import React from "react";

interface MastheadProps {
  currentDate: string;
}

const Masthead: React.FC<MastheadProps> = ({ currentDate }) => {
  return (
    <header className="border-b-4 border-black pt-6 pb-4 px-8">
      <div className="newspaper-container">
        {/* Top header bar with date and edition info */}
        <div className="grid grid-cols-3 mb-3 text-xs">
          <div className="uppercase tracking-widest text-[var(--muted-color)] text-left">
            Morning Edition
          </div>
          <div className="uppercase tracking-widest text-[var(--muted-color)] text-center font-medium">
            {currentDate}
          </div>
          <div className="uppercase tracking-widest text-[var(--muted-color)] text-right">
            Independent News
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-center tracking-tight mb-2 font-headline">
            VEC<span className="text-[var(--accent-color)]">NEWS</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Masthead;
