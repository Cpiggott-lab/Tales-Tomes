//Shorten the returned value to a maximum of set characters. Just helps with displaying random long titles.
export function truncateText(text, maxLength = 30) {
  if (!text || typeof text !== "string") {
    return "";
  }
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

export function truncateAuthor(authors, maxLength = 30) {
  if (!Array.isArray(authors) || authors.length === 0) {
    return "Unknown Author";
  }
  const first = authors[0];

  if (first.length > maxLength) {
    return first.slice(0, maxLength) + "...";
  }
  return first;
}
