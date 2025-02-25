import React from "react";

// Import components
import Masthead from "./components/Masthead";
import MainArticleSection from "./components/MainArticleSection";
import Headlines from "./components/Headlines";
import TopStories from "./components/TopStories";
import FeatureStories from "./components/FeatureStories";
import Subscription from "./components/Subscription";

export default function Home() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen">
      {/* Newspaper Masthead */}
      <Masthead currentDate={currentDate} />

      {/* Main Headline Section */}
      <section className="newspaper-section py-8">
        <div className="newspaper-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Article Section */}
            <MainArticleSection />

            {/* Sidebar Headlines */}
            <Headlines />
          </div>
        </div>
      </section>

      {/* Articles Grid Section - Combined Top Stories and Feature Stories */}
      <div className="bg-[var(--body-color)] pt-2 pb-8">
        {/* Top Stories */}
        <TopStories />

        {/* Feature Stories */}
        <FeatureStories />
      </div>

      {/* Subscribe Section */}
      <Subscription />
    </main>
  );
}
