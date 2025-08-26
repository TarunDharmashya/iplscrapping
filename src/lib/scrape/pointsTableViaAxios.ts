import axios from "axios";
import * as cheerio from "cheerio";
import staticPointsTable from "./Static/pointsTable.json";

export const getPointsTableAxios = async () => {
  try {
    const response = await axios.get(
      "https://scores.iplt20.com/ipl/mc/template-standings.js?v=1.10",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
          Accept: "*/*",
          Referer: "https://www.iplt20.com/",
        },
      }
    );

    // Extract HTML string from the Angular template
    const raw = response.data as string;
    // remove the Angular wrapper: angular.module(...$templateCache.put('livescores', 'HTML...'));
    const html = raw.replace(/^.*\$templateCache\.put\('livescores',\s*'/, "")
                    .replace(/'\);\s*}\s*\]\);?$/, "");

    // Load into cheerio
    const $ = cheerio.load(html);

    const tableData: any[] = [];

    $("#pointsdata tr").each((_, row) => {
      const cells = $(row).find("td");
      if (cells.length > 0) {
        tableData.push({
          position: $(cells[0]).text().trim(),
          team: $(cells[2]).text().trim(), // contains TeamCode
          matches: $(cells[3]).text().trim(),
          wins: $(cells[4]).text().trim(),
          losses: $(cells[5]).text().trim(),
          nr: $(cells[6]).text().trim(),
          nrr: $(cells[7]).text().trim(),
          for: $(cells[8]).text().trim(),
          against: $(cells[9]).text().trim(),
          points: $(cells[10]).text().trim(),
        });
      }
    });

    console.log("✅ Points Table:", tableData);
    return tableData.length ? tableData : staticPointsTable;
  } catch (error) {
    console.error("❌ Error fetching points table:", error);
    return [];
  }
};
