export type Episode = {
  number: string;
  title: string;
};

// Single source of truth for the season-one lineup.
// Used by /episodes and the home-page season preview.
export const EPISODES: Episode[] = [
  { number: "01", title: "This Is Echo Room" },
  { number: "02", title: "Cities Make Us Lonelier, Not More Connected" },
  { number: "03", title: "Moving Countries Rewires Who You Are" },
  {
    number: "04",
    title: "Quitting a Stable Job Isn't Brave. It's Just a Different Risk.",
  },
  {
    number: "05",
    title:
      "AI Won't Replace You, But It Will Expose What You Weren't Doing Well",
  },
  {
    number: "06",
    title: "Most People Don't Want Advice. They Want Permission.",
  },
  {
    number: "07",
    title: "Hustle Culture Is Mostly Sold By People Who Already Made It",
  },
  {
    number: "08",
    title:
      "Most Startups Don't Fail Because of the Idea; They Fail Because of the Founder",
  },
];

export const RELEASE_LABEL = "SEP 2026";
