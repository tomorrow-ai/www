import React from "react";
import Image from "next/image";

const SmallArticle: React.FC = () => {
  return (
    <div className="lg:col-span-1 hidden lg:block">
      <article className="border border-[var(--border-color)] p-3 bg-white h-full">
        <div className="relative aspect-square mb-2 overflow-hidden">
          <Image
            src="https://source.unsplash.com/random/400x400/?technology,innovation"
            alt="Tech Innovation"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="font-bold text-sm mb-1 font-headline">
          Breakthrough in Quantum Computing Promises New Era
        </h3>
        <p className="text-[var(--text-color)] text-xs">
          Scientists have achieved stable quantum entanglement at room
          temperature, potentially revolutionizing computing power and security.
        </p>
      </article>
    </div>
  );
};

export default SmallArticle;
