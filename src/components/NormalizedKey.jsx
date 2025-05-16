export function normalizeKey(key) {
  if (typeof key === "string" && key.startsWith("/works/")) {
    return key.replace("/works/", "");
  }

  return key;
}
