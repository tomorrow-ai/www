import React from "react";
import Image from "next/image";

const Headlines: React.FC = () => {
  return (
    <div className="lg:col-span-4">
      <div className="border-l border-[var(--border-color)] pl-6">
        {/* Headlines Section */}
        <div className="bg-white p-5">
          <div className="space-y-4">
            <div className="border-b border-[var(--border-color)] pb-3">
              <div className="relative w-full h-24 mb-3 overflow-hidden">
                <Image
                  src="https://source.unsplash.com/random/600x400/?mars,rover"
                  alt="Mars Rover"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-bold text-base mb-1">
                Space Agency Announces Plans for New Mars Rover
              </h4>
              <p className="text-sm text-[var(--muted-color)]">
                The mission is set to launch in 2026 with advanced sample
                collection capabilities.
              </p>
            </div>

            <div className="border-b border-[var(--border-color)] pb-3">
              <h4 className="font-bold text-base mb-1">
                Tech Companies Rally Behind New Privacy Standards
              </h4>
              <p className="text-sm text-[var(--muted-color)]">
                Industry leaders have pledged to implement stricter data
                protection measures.
              </p>
            </div>

            <div className="border-b border-[var(--border-color)] pb-3">
              <h4 className="font-bold text-base mb-1">
                Renewable Energy Sector Sees Record Investment
              </h4>
              <p className="text-sm text-[var(--muted-color)]">
                Global capital flowing into clean energy reached $580 billion in
                the first quarter.
              </p>
            </div>

            <div className="border-b border-[var(--border-color)] pb-3">
              <h4 className="font-bold text-base mb-1">
                Major Urban Centers Adopt Smart City Technologies
              </h4>
              <p className="text-sm text-[var(--muted-color)]">
                IoT sensors and AI systems are being deployed to improve traffic
                flow and reduce emissions.
              </p>
            </div>

            <div className="pb-1">
              <h4 className="font-bold text-base mb-1">
                Ocean Conservation Efforts Show Promising Results
              </h4>
              <p className="text-sm text-[var(--muted-color)]">
                Marine protected areas report 30% increase in biodiversity over
                five years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headlines;
