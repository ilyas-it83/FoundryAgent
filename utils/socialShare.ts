export function getTwitterShareUrl(title: string, url: string): string {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
}

export function getFacebookShareUrl(url: string): string {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
}

export function getRedditShareUrl(title: string, url: string): string {
  return `https://reddit.com/submit?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
}
