import React from "react";
import Image from "next/image";

const MainArticle: React.FC = () => {
  return (
    <div className="lg:col-span-8">
      <div className="mb-4 pb-2">
        <h2 className="newspaper-headline mb-0 font-headline">
          Global Climate Summit Reaches Historic Agreement
        </h2>
      </div>

      <p className="newspaper-lead mb-6">
        After two weeks of intense negotiations, world leaders have reached a
        landmark agreement to limit global warming to 1.5°C above pre-industrial
        levels, with binding commitments to reduce carbon emissions by 50%
        before 2030.
      </p>

      <div className="relative aspect-video mb-6 overflow-hidden border border-[var(--border-color)]">
        <Image
          src="https://source.unsplash.com/random/1200x800/?climate,summit"
          alt="Climate Summit"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm">
          Delegates celebrate as the historic climate agreement is signed at the
          Global Climate Summit.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="newspaper-body mb-4">
            The historic agreement, which was signed by 197 countries, marks a
            turning point in international climate policy. For the first time,
            nations have committed to legally binding carbon reduction targets
            with financial penalties for non-compliance.
          </p>

          <div className="border-l-4 border-[var(--accent-color)] pl-4 my-6 font-serif">
            &ldquo;This is a watershed moment for our planet. We have finally
            moved beyond rhetoric to meaningful action,&rdquo; said UN
            Secretary-General Maria Rodriguez. &ldquo;Future generations will
            remember this as the day we chose survival over catastrophe.&rdquo;
          </div>

          <p className="newspaper-body mb-4">
            The agreement also establishes a $100 billion annual fund to help
            developing nations transition to renewable energy sources and adapt
            to climate impacts already underway. Wealthy nations will contribute
            proportionally to their historical carbon emissions, addressing
            long-standing concerns about climate justice.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line separator - newspaper column style */}
          <div className="absolute top-0 left-0 bottom-0 border-l border-[var(--border-color)] w-0 hidden md:block"></div>
          <div className="md:pl-6">
            <p className="newspaper-body mb-4">
              According to Dr. Eleanor Park, economics professor at Cambridge
              University, the agreement creates necessary policy certainty for
              the market. She expects substantial investment to flow toward
              green technologies in the coming years as a result.
            </p>

            <p className="newspaper-body">
              The agreement includes provisions for regular review and
              strengthening of commitments every five years, as well as a
              transparent monitoring system to track each nation&apos;s
              progress. Critics note that enforcement mechanisms remain
              imperfect, but most climate experts hail the deal as a significant
              improvement over previous frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainArticle;
