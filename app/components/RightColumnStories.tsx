import React from "react";

interface Story {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface RightColumnStoriesProps {
  stories: Story[];
  transformText: (text: string) => string;
}

const RightColumnStories: React.FC<RightColumnStoriesProps> = ({
  stories,
  transformText,
}) => {
  return (
    <div className="col-span-4 border-l border-gray-300 dark:border-gray-700 pl-6">
      {stories.map((story) => (
        <div key={story.id} className="mb-6">
          <h3 className="text-lg font-bold mb-2">
            {transformText(story.title)}
          </h3>
          {story.image && (
            <div className="h-32 bg-gray-200 dark:bg-gray-800 mb-2 flex items-center justify-center">
              <div className="text-gray-500 dark:text-gray-400">
                {story.image}
              </div>
            </div>
          )}
          <p className="text-sm">{transformText(story.description)}</p>
        </div>
      ))}
    </div>
  );
};

export default RightColumnStories;
