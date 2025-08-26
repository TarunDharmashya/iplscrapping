import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  return [
    { url: `${base}/`, changeFrequency: "hourly", priority: 1.0 },
    { url: `${base}/points-table`, changeFrequency: "hourly", priority: 0.8 },
    { url: `${base}/schedule`, changeFrequency: "daily", priority: 0.7 },
  ];
}