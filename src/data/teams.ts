// Centralized, independently editable roster data. Ready to be swapped for a database.
// All entries are placeholders until official data is provided.
export type Member = {
  nickname: string;
  realName?: string;
  role: string; // in-game role
  position: string; // role in the team
  bio: string;
  photo?: string;
  social?: string;
};

const slot = (role: string, position: string): Member => ({
  nickname: "TBA",
  role,
  position,
  bio: "Placeholder — official player info coming soon.",
});

const lineup = (): Member[] => [
  slot("Tank", "Starter"),
  slot("DPS", "Starter"),
  slot("DPS", "Starter"),
  slot("Support", "Starter"),
  slot("Support", "Starter"),
  slot("Flex", "Sixth Player"),
  slot("Staff", "Coach"),
  slot("Staff", "Manager"),
];

export const pcRoster: Member[] = lineup();
export const consoleRoster: Member[] = lineup();

export const staff: Member[] = [
  "Founder",
  "Owner",
  "Management",
  "Administrators",
  "Moderators",
  "Coaches",
  "Content Creators",
].map((p) => ({ nickname: "TBA", role: "Staff", position: p, bio: "Placeholder — to be announced." }));

export type Achievement = { event: string; result: string; date: string };
export const pcAchievements: Achievement[] = [
  { event: "Tournament name (placeholder)", result: "Result TBA", date: "—" },
];
export const consoleAchievements: Achievement[] = [
  { event: "Tournament name (placeholder)", result: "Result TBA", date: "—" },
];
