export interface Match {
  matchId: string;
  team1: string;
  team2: string;
  team1Name: string;
  team2Name: string;
  date: string;   // ISO
  time: string;   // e.g., "19:30"
  venue: string;
  status?: "upcoming" | "live" | "completed";
}

export interface PointsTableEntry {
  position: number;
  team: string;
  matches: number;
  wins: number;
  losses: number;
  nr: number;
  nrr: number;
  for:string;
  against: string;
  points: number;
  recentForm: string[]; // e.g., "WWLWL"
}

export interface Team {
  team: string; // team code to full name mapping 
  teamName: string;
}

export interface DashboardPayload {
  liveOrUpcoming: Match[] | null;
  points: PointsTableEntry[];
  schedule: Match[];
  teams: Team[];
  generatedAt: string; // ISO
}