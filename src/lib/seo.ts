// Meta description builder for pages that have no description field.
// The previous approach sliced the raw body at 155 characters, which cut words
// and sentences mid-flight and produced descriptions under 120 characters on
// short posts. This version works on sentences and never ends on a function word.

const TAIL_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'of', 'to', 'in', 'on', 'for', 'with', 'at', 'by',
  'from', 'as', 'is', 'are', 'was', 'were', 'be', 'than', 'that', 'which', 'this',
  'these', 'those', 'its', 'their', 'it', 'but', 'not', 'into', 'over', 'under',
]);

export function stripMarkdown(body: string): string {
  return (body || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_>`]/g, ' ')
    .replace(/^\s*Data summary:\s*/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function trimToWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const at = cut.lastIndexOf(' ');
  let out = at > 60 ? cut.slice(0, at) : cut;
  const words = out.split(' ');
  while (words.length > 1 && TAIL_WORDS.has(words[words.length - 1].toLowerCase().replace(/[^a-z]/g, ''))) {
    words.pop();
  }
  out = words.join(' ').replace(/[,;:\-–—]$/, '');
  return out;
}

/**
 * Build a 120-155 character description from the first sentences of a body.
 * Falls back to the title when the body has no usable prose.
 */
export function metaDescription(body: string, title = ''): string {
  const text = stripMarkdown(body);
  if (!text) return title;
  const parts = sentences(text);
  let out = '';
  for (const s of parts) {
    const next = out ? `${out} ${s}` : s;
    if (next.length > 155) {
      // Too long for the window: if we are still short, fill up to 155 on a word
      // boundary so the description lands inside 120-155 instead of under 120.
      out = out.length < 120 ? trimToWord(next, 155) : out;
      break;
    }
    out = next;
    if (out.length >= 120) break;
  }
  if (!out) out = trimToWord(text, 155);
  if (out.length > 155) out = trimToWord(out, 155);
  return out.trim();
}


/**
 * Append the brand to a page title only when the result stays inside 60
 * characters; long editorial titles would otherwise be truncated by search.
 */
export function pageTitle(title: string, brand = 'LanDeng'): string {
  const suffix = ` — ${brand}`;
  return title.length + suffix.length <= 60 ? `${title}${suffix}` : title;
}
