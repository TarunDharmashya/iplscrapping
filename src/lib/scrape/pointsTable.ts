// import puppeteer from "puppeteer";
import staticPointsTable from "./Static/pointsTable.json";

export async function scrapePoints() {
  try {
    // const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
    // const page = await browser.newPage();

    let pointsData: any = null;

    // page.on("response", async (response) => {
    //   try {
    //     if (response.request().resourceType() === "xhr") {
    //       const data = await response.json();
    //       if (data?.pointsTableData) {
    //         console.log("✅ Found points table JSON from:", response.url());
    //         pointsData = data.pointsTableData;
    //       }
    //     }
    //   } catch { 
    //     // ignore JSON parse errors
    //   }
    // });

    // await page.goto("https://www.iplt20.com/matches/points-table", {
    //   waitUntil: "networkidle2",
    // });

    // // wait for network requests
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    // await browser.close();

    return pointsData?.length ? pointsData : staticPointsTable;
  } catch (error) {
    console.error("❌ Error fetching points table with Puppeteer:", error);
    return [];
  }
}
