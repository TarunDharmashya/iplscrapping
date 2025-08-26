const store = new Map<string, { value: unknown; expiresAt: number }>();

export function getCache<T>(key: string): T | null {
  const hit = store.get(key);
  if (!hit) return null;
  if (Date.now() > hit.expiresAt) {
    store.delete(key);
    return null;
  }
  return hit.value as T;
}

export function setCache(key: string, value: unknown, ttlMs = 60_000) {
  store.set(key, { value, expiresAt: Date.now() + ttlMs });
}