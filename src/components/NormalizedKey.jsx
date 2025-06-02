
export function normalizeKey(key) {
  const isString = typeof key === "string";

  if (!isString) {
    return "";
  }

  const cleanedKey = key.replace("/works/", "");
  const trimmedKey = cleanedKey.trim();

  return trimmedKey;
}
