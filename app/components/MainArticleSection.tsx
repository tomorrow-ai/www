import React from "react";
import Image from "next/image";

const MainArticleSection: React.FC = () => {
  return (
    <div className="lg:col-span-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main Featured Article - with image */}
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 font-headline leading-tight">
            Trump Administration Breaks With Musk Directive About Email Replies
          </h2>
          <div className="relative aspect-video mb-3 overflow-hidden">
            <Image
              src="https://source.unsplash.com/random/800x600/?trump,musk"
              alt="Trump and Musk"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-base mb-2">
            The response to Elon Musk's "What did you do last week?" email to
            federal employees suggests that there may be limits to how far he
            can push them.
          </p>
          <p className="text-xs text-[var(--muted-color)]">5 MIN READ</p>
        </div>

        {/* Secondary Article - no image */}
        <div className="md:col-span-1">
          <h2 className="text-xl md:text-2xl font-bold mb-3 font-headline leading-tight">
            Acting I.R.S. Commissioner Is Expected to Announce His Retirement
          </h2>
          <p className="text-base mb-2">
            Doug O'Donnell, a 40-year veteran of the I.R.S., was elevated last
            month, after the last commissioner stepped down at the start of
            President Trump's term.
          </p>
          <p className="text-xs text-[var(--muted-color)]">2 MIN READ</p>
        </div>
      </div>

      {/* Bottom row with just headlines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 border-t border-[var(--border-color)] pt-4">
        <div>
          <h3 className="text-lg font-bold font-headline">
            Judge Questions Constitutionality of Musk's Cost-Cutting Operation
          </h3>
          <p className="text-xs text-[var(--muted-color)] mt-1">2 MIN READ</p>
        </div>
        <div>
          <h3 className="text-lg font-bold font-headline">
            Government Watchdog Moves to Protect Probationary Federal Workers
          </h3>
          <p className="text-xs text-[var(--muted-color)] mt-1">3 MIN READ</p>
        </div>
      </div>
    </div>
  );
};

export default MainArticleSection;
