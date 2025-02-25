import React from "react";
import Image from "next/image";

const Subscription: React.FC = () => {
  return (
    <section className="py-12 bg-[var(--headline-color)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://source.unsplash.com/random/1920x1080/?newspaper,press"
          alt="Newspaper Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="newspaper-container text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
          Never Miss a Story
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Subscribe to VECNEWS for unlimited access to quality journalism. First
          month free, then $4.99 per month.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[var(--accent-color)] text-white px-6 py-3 font-bold text-lg">
            Subscribe Now
          </button>
          <button className="border-2 border-white text-white px-6 py-3 font-bold text-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
