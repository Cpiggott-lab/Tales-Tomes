// Cleans up a book key by removing "/works/" and trimming whitespace without the book does not return anything.
export function normalizeKey(key) {
  if (typeof key !== "string") return "";
  return key.replace("/works/", "").trim();
}
