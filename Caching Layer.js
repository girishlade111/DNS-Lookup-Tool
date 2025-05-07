async function cachedLookup(query) {
  const key = `dns:${query}`;
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);
  
  const result = await performLookup(query);
  await redis.setex(key, 300, JSON.stringify(result)); // 5min TTL
  return result;
}