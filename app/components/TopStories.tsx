import React from "react";
import Image from "next/image";

const TopStories: React.FC = () => {
  return (
    <section className="newspaper-section py-4">
      <div className="newspaper-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Article 1 */}
          <article className="border border-[var(--border-color)] p-4 bg-white">
            <div className="relative aspect-video mb-3 overflow-hidden">
              <Image
                src="https://source.unsplash.com/random/800x600/?medical,research"
                alt="Medical Breakthrough"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 font-headline">
              Revolutionary Cancer Treatment Shows 90% Success Rate in Trials
            </h3>
            <p className="text-[var(--text-color)]">
              A groundbreaking immunotherapy treatment has demonstrated
              unprecedented success in clinical trials, with 90% of late-stage
              patients showing complete remission after six months of treatment.
            </p>
          </article>

          {/* Article 2 */}
          <article className="border border-[var(--border-color)] p-4 bg-white">
            <div className="relative aspect-video mb-3 overflow-hidden">
              <Image
                src="https://source.unsplash.com/random/800x600/?mars,space"
                alt="Space Mission"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 font-headline">
              International Mars Mission Discovers Evidence of Ancient Water
              Systems
            </h3>
            <p className="text-[var(--text-color)]">
              The International Mars Exploration Team has uncovered compelling
              evidence of extensive river systems that once flowed across the
              Martian surface, significantly increasing the likelihood that the
              planet once harbored life.
            </p>
          </article>

          {/* Article 3 */}
          <article className="border border-[var(--border-color)] p-4 bg-white">
            <div className="relative aspect-video mb-3 overflow-hidden">
              <Image
                src="https://source.unsplash.com/random/800x600/?economy,conference"
                alt="Economic Summit"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 font-headline">
              Global Economic Forum Addresses Wealth Inequality Crisis
            </h3>
            <p className="text-[var(--text-color)]">
              The World Economic Forum has announced a new global initiative to
              tackle wealth inequality, including proposed reforms to
              international tax systems and increased investment in education
              and healthcare in developing regions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TopStories;
