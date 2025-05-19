export function normalizeKey(key) {
  if (typeof key !== "string") return "";
  return key.replace("/works/", "").trim();
}
