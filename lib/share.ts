export function ogImage(path: string, alt: string, type = "image/jpeg") {
  return {
    url: path,
    width: 1200,
    height: 630,
    alt,
    type,
  };
}
