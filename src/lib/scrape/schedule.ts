import axios from "axios";
import * as cheerio from "cheerio";
import staticScheduledMatches from "./Static/scheduledMatches.json";
import { Match } from "./types";

export async function scrapeSchedule(): Promise<Match[]> {
  try {
    const res = await axios.get("https://www.iplt20.com/matches/schedule", {
      headers: { "User-Agent": process.env.SCRAPE_USER_AGENT ?? "Mozilla/5.0" },
      timeout: 10000,
    });
    const $ = cheerio.load(res.data);

    const list: Match[] = [];
    $(".schedule-list .match").each((_i, el) => {
      const id = $(el).attr("data-id") ?? crypto.randomUUID();
      const teams: [string, string] = [
        $(el).find(".team-a").text().trim(),
        $(el).find(".team-b").text().trim(),
      ] as [string, string];
      const date = new Date().toISOString(); // replace with parsed
      const venue = $(el).find(".venue").text().trim();
      list.push({
        matchId: id,
        team1: $(el).find(".team-a").text().trim(),
        team2: $(el).find(".team-b").text().trim(),
        team1Name: $(el).find(".team-a").text().trim(),
        team2Name: $(el).find(".team-b").text().trim(),
        date,
        venue,
        time: date.split("T")[1].substring(0, 5)  //HH:MM;
      });
    });

    return list.length ? list : staticScheduledMatches;
  } catch {
    return staticScheduledMatches;
  }
}