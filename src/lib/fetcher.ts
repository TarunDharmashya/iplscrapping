export async function getDashboardData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/scrape`, {
    // SSR/SSG fetch (server) — revalidate every 60s:
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to load dashboard");
  return res.json();
}