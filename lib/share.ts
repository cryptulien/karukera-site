export function ogImage(path: string, alt: string) {
  return {
    url: path,
    width: 1200,
    height: 630,
    alt,
    type: "image/jpeg",
  };
}
