import React from "react";
import Image from "next/image";

const FeatureStories: React.FC = () => {
  return (
    <section className="newspaper-section py-4">
      <div className="newspaper-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border border-[var(--border-color)] p-6 bg-white">
            <div className="relative aspect-video mb-4 overflow-hidden">
              <Image
                src="https://source.unsplash.com/random/900x600/?fashion,factory"
                alt="Fast Fashion Industry"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-2xl font-headline mb-3">
              The Hidden Cost of Fast Fashion
            </h3>
            <p className="text-[var(--text-color)] mb-4">
              As sustainable fashion gains momentum, our investigation reveals
              the environmental and social impact of the fast fashion industry.
              From water pollution to labor exploitation, we examine the true
              cost behind those $10 t-shirts and what consumers can do to make
              more ethical choices.
            </p>
            <div className="flex justify-end">
              <button className="bg-[var(--accent-color)] text-white px-4 py-2 font-medium">
                Read Full Story
              </button>
            </div>
          </div>

          <div className="border border-[var(--border-color)] p-6 bg-white">
            <div className="relative aspect-video mb-4 overflow-hidden">
              <Image
                src="https://source.unsplash.com/random/900x600/?digital,nomad"
                alt="Digital Nomad Working"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-2xl font-headline mb-3">
              Inside the Digital Nomad Revolution
            </h3>
            <p className="text-[var(--text-color)] mb-4">
              As remote work becomes the new normal, countries around the world
              are competing to attract digital nomads with special visas and
              incentives. We profile professionals who have embraced this
              lifestyle and explore how it&apos;s reshaping economies,
              communities, and the future of work.
            </p>
            <div className="flex justify-end">
              <button className="bg-[var(--accent-color)] text-white px-4 py-2 font-medium">
                Read Full Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStories;
