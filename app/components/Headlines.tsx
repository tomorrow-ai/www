import React from "react";
import Image from "next/image";

const Headlines: React.FC = () => {
  return (
    <div className="lg:col-span-4">
      <div className="border-l border-[var(--border-color)] pl-4">
        <div className="space-y-5">
          {/* Headline 1 */}
          <div className="pb-4 border-b border-[var(--border-color)]">
            <h3 className="font-bold text-lg mb-1 font-headline">
              Tech Leaders Pledge $1 Billion for AI Safety Research
            </h3>
            <p className="text-sm text-[var(--text-color)]">
              A coalition of major tech companies announced a joint initiative
              to fund responsible AI development.
            </p>
          </div>

          {/* Headline 2 */}
          <div className="pb-4 border-b border-[var(--border-color)]">
            <h3 className="font-bold text-lg mb-1 font-headline">
              Global Shipping Routes Disrupted by Red Sea Conflict
            </h3>
            <p className="text-sm text-[var(--text-color)]">
              Major carriers are rerouting vessels around Africa, causing delays
              and increased costs.
            </p>
          </div>

          {/* Headline 3 */}
          <div className="pb-4 border-b border-[var(--border-color)]">
            <h3 className="font-bold text-lg mb-1 font-headline">
              Central Banks Signal Potential Rate Cuts in Coming Months
            </h3>
            <p className="text-sm text-[var(--text-color)]">
              Inflation appears to be cooling across major economies, opening
              the door for monetary easing.
            </p>
          </div>

          {/* Headline 4 */}
          <div className="pb-4 border-b border-[var(--border-color)]">
            <h3 className="font-bold text-lg mb-1 font-headline">
              New Study Links Air Pollution to Cognitive Decline
            </h3>
            <p className="text-sm text-[var(--text-color)]">
              Researchers found that long-term exposure to particulate matter
              can accelerate brain aging.
            </p>
          </div>

          {/* Headline 5 */}
          <div>
            <h3 className="font-bold text-lg mb-1 font-headline">
              Olympic Committee Finalizes Rules for AI-Assisted Training
            </h3>
            <p className="text-sm text-[var(--text-color)]">
              Athletes will be allowed to use certain AI tools for performance
              analysis but not for physical enhancement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headlines;
