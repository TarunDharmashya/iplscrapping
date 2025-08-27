// import chromium from 'chrome-aws-lambda';
// import puppeteer from 'puppeteer-core';
// import puppeteer from "puppeteer";
import staticPointsTable from "./Static/pointsTable.json";

export async function scrapePoints() {
  return staticPointsTable;
}
// This is not working as expected due to dynamic content loading
// export async function scrapePoints() {
  // try {
    // const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
    // const page = await browser.newPage();

    // let pointsData: any = null;

    // page.on("response", async (response) => {
    //   try {
    //     if (response.request().resourceType() === "xhr") {
    //       const data = await response.json();
    //       if (data?.pointsTableData) {
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

  //   return pointsData?.length ? pointsData : staticPointsTable;
  // } catch (error) {
  //   console.error("Error fetching points table with Puppeteer:", error);
  //   return [];
  // }
// }

// This is not working as expected due to dynamic content loading
// export async function scrapePointsTable() {
//   const url = 'https://www.iplt20.com/points-table/men';
//   let browser = null;
//   try {
//     // Use chrome-aws-lambda executablePath on Vercel, fallback to puppeteer for local
//     let executablePath = await chromium.executablePath;
//     if (!executablePath) {
//       // @ts-ignore
//       executablePath = require('puppeteer').executablePath();
//     }
//     browser = await puppeteer.launch({
//       args: chromium.args,
//       executablePath,
//       headless: chromium.headless,
//     });
//   const page = await browser.newPage();
//   await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

//   // Wait for the points table to load
//   await page.waitForSelector('.ih-pt-tab', { timeout: 60000 });

//     // Scrape the table header
//     const headers = await page.evaluate(() => {
//       const ths = Array.from(document.querySelectorAll('.ih-pt-tab th'));
//       return ths.map(th => (th as HTMLElement).innerText.trim());
//     });

//     // Scrape the table rows
//     const rows = await page.evaluate(() => {
//       const trs = Array.from(document.querySelectorAll('#pointsdata tr'));
//       return trs.map(tr => {
//         const tds = Array.from(tr.querySelectorAll('td'));
//         return tds.map(td => td.innerText.trim());
//       }).filter(row => row.length > 0);
//     });

//     // Map rows to objects using headers
//     const pointsTable = rows.map(row => {
//       const obj: Record<string, string> = {};
//       headers.forEach((header, idx) => {
//         obj[header] = row[idx] || '';
//       });
//       return obj;
//     });
//     console.log('Scraped Points Table:', pointsTable);
//     return pointsTable;
//   } catch (error) {
//     console.error('Scraping error:', error);
//     return [];
//   } finally {
//     if (browser) await browser.close();
//   }
// }
