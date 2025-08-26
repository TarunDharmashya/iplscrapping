import { NextResponse } from "next/server";
import { scrapeAll } from "@/lib/scrape";
import { getCache, setCache } from "@/lib/cache";

export const runtime = "nodejs";

export async function GET() {
  const CACHE_KEY = "DASHBOARD";
  const cached = getCache(CACHE_KEY);
  if (cached) return NextResponse.json(cached);

  try {
    const data = await scrapeAll();
    setCache(CACHE_KEY, data, 60_000); // 60s TTL
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "s-maxage=30, stale-while-revalidate=120",
      },
    });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to fetch/scrape" },
      { status: 500 }
    );
  }
}