// Common types
export interface Story {
  id: string;
  title: string;
  description: string;
  image: string;
}

// Case transformation types
export type CaseType =
  | "normal"
  | "uppercase"
  | "lowercase"
  | "titlecase"
  | "sentencecase";

// Mock data for different sections
export const leadStory: Story = {
  id: "lead-1",
  title: "Economy Shows Signs of Recovery as Job Market Expands",
  description:
    "New data indicates a substantial increase in hiring across multiple sectors, with analysts suggesting a stronger-than-expected recovery might be underway.",
  image: "Main Article Image",
};

export const leadStoryContent = `Economic indicators released yesterday point to a strengthening
job market, with unemployment numbers dropping to their lowest
point in 18 months. Experts are cautiously optimistic about
continued growth through the remainder of the year.

"We're seeing positive trends across multiple
industries," said Jane Smith, chief economist at Capital
Research. "This broad-based growth suggests the recovery has
deeper roots than previous upturns."`;

export const rightColumnStories: Story[] = [
  {
    id: "right-1",
    title: "Global Climate Summit Ends with New Commitments",
    description:
      "Nations agreed to strengthen emissions targets after two weeks of intense negotiations, though some environmental groups expressed concerns about enforcement mechanisms.",
    image: "Image",
  },
  {
    id: "right-2",
    title: "Tech Innovation Prize Awarded for Breakthrough in Renewable Energy",
    description:
      "A team of researchers has developed a new type of solar panel that significantly improves energy capture efficiency while reducing manufacturing costs.",
    image: "",
  },
];

export const lowerStories: Story[] = [
  {
    id: "lower-1",
    title: "New Theater Season Begins with Record Attendance",
    description:
      "After a challenging period, theaters are reporting sold-out performances and renewed interest in live productions.",
    image: "Image",
  },
  {
    id: "lower-2",
    title: "Restaurant Review: New Downtown Bistro Delights",
    description:
      "Chef Maria Rodriguez brings innovative approaches to classic cuisine, creating a dining experience that balances comfort and excitement.",
    image: "Image",
  },
  {
    id: "lower-3",
    title: "Sports Analysis: Championship Series Preview",
    description:
      "Team statistics and key matchups that could determine the outcome of this year's highly anticipated championship series.",
    image: "Image",
  },
]; 