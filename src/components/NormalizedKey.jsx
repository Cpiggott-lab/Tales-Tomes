// Cleans up a book key by removing "/works/" and trimming whitespace.
// If the key is not a string, it returns an empty string.
export function normalizeKey(key) {
  const isString = typeof key === "string";

  if (!isString) {
    return "";
  }

  const cleanedKey = key.replace("/works/", "");
  const trimmedKey = cleanedKey.trim();

  return trimmedKey;
}
