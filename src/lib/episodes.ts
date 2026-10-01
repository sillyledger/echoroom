export type PlannedEpisode = { number: number; title: string };

// Roadmap only. Anything already published in the RSS feed is hidden automatically
// (by episode number), so nothing here ever needs to be removed.
export const PLANNED_EPISODES: PlannedEpisode[] = [
  { number: 1, title: "This is Echo Room" },
  { number: 2, title: "Cities make us lonelier, not more connected" },
  { number: 3, title: "Moving countries rewires who you are" },
  { number: 4, title: "Quitting a stable job isn't brave. It's just a different risk." },
  { number: 5, title: "AI won't replace you, but it will expose what you weren't doing well" },
  { number: 6, title: "Most people don't want advice. They want permission." },
  { number: 7, title: "Hustle culture is mostly sold by people who already made it" },
  { number: 8, title: "Most startups don't fail because of the idea; they fail because of the founder" },
];
