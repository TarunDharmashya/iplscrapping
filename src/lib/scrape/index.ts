import { scrapePoints } from "./pointsTable";
import { scrapeLiveOrUpcoming } from "./live";
import { scrapeSchedule } from "./schedule";
import { getTeams } from "./teams";
import { DashboardPayload } from "./types";

export async function scrapeAll(): Promise<DashboardPayload> {
  const [liveOrUpcoming, points, schedule, teams] = await Promise.all([
    scrapeLiveOrUpcoming(),
    scrapePoints(),
    scrapeSchedule(),
    getTeams()
  ]);
  return { liveOrUpcoming, points, schedule, teams, generatedAt: new Date().toISOString() };
}