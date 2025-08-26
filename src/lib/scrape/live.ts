
import axios from "axios";
import * as cheerio from "cheerio";
import staticUpcommingMatches from "./Static/upcomingMatches.json";

export async function scrapeLiveOrUpcoming() {
  try {
    const res = await axios.get("https://www.iplt20.com/", {
      headers: { "User-Agent": process.env.SCRAPE_USER_AGENT ?? "Mozilla/5.0" },
      timeout: 1000,
    });
    const $ = cheerio.load(res.data);

    const card = $(".match-list .match-card").first();
    if (!card.length) throw new Error("No match card found");

    const id = card.attr("data-match-id") ?? crypto.randomUUID();
    const teams: [string, string] = [
      card.find(".team.home .name").text().trim(),
      card.find(".team.away .name").text().trim(),
    ] as [string, string];

    const date = new Date().toISOString(); // Replace by parsed data
    const venue = card.find(".venue").text().trim() || "TBD";
    const statusText = card.find(".status").text().toLowerCase();
    const status = statusText.includes("live")
      ? "live"
      : statusText.includes("completed")
      ? "completed"
      : "upcoming";

    return staticUpcommingMatches;
  } catch {
    // fallback dummy
    return staticUpcommingMatches;
  }
}