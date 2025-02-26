import React from "react";

interface Story {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface LeadStoryProps {
  story: Story;
  content: string;
  transformText: (text: string) => string;
}

const LeadStory: React.FC<LeadStoryProps> = ({
  story,
  content,
  transformText,
}) => {
  return (
    <div className="col-span-8">
      <h2 className="text-3xl font-bold mb-2">{transformText(story.title)}</h2>
      <p className="text-lg font-medium mb-3">
        {transformText(story.description)}
      </p>
      <div className="h-64 bg-gray-200 dark:bg-gray-800 mb-3 flex items-center justify-center">
        <div className="text-gray-500 dark:text-gray-400">{story.image}</div>
      </div>
      <p className="mb-2 whitespace-pre-line">{transformText(content)}</p>
    </div>
  );
};

export default LeadStory;
