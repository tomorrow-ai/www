import React from "react";

interface Story {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface LowerStoriesProps {
  stories: Story[];
  transformText: (text: string) => string;
}

const LowerStories: React.FC<LowerStoriesProps> = ({
  stories,
  transformText,
}) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8 border-t border-gray-300 dark:border-gray-700 pt-6">
      {stories.map((story) => (
        <div key={story.id}>
          <h3 className="text-lg font-bold mb-2">
            {transformText(story.title)}
          </h3>
          <div className="h-36 bg-gray-200 dark:bg-gray-800 mb-2 flex items-center justify-center">
            <div className="text-gray-500 dark:text-gray-400">
              {story.image}
            </div>
          </div>
          <p className="text-sm">{transformText(story.description)}</p>
        </div>
      ))}
    </div>
  );
};

export default LowerStories;
