const PAYLOAD_CMS_URL = import.meta.env.PAYLOAD_CMS_URL || 'http://127.0.0.1:3000';

export interface PayloadLink {
  type: 'reference' | 'custom';
  newTab?: boolean | null;
  url?: string | null;
  label: string;
  reference?: {
    relationTo: 'pages' | 'posts';
    value: string | {
      id: string;
      slug: string;
      title: string;
    };
  } | null;
}

export interface PayloadFooter {
  tagline: string;
  location: string;
  whatsappUrl: string;
  siteLinks?: { link: PayloadLink }[] | null;
  servicesLinks?: { link: PayloadLink }[] | null;
  socialLinks?: { link: PayloadLink }[] | null;
  legalLinks?: { link: PayloadLink }[] | null;
  copyrightText: string;
}

export interface PayloadMedia {
  id: number | string;
  url?: string | null;
  alt?: string | null;
  filename?: string | null;
  mimeType?: string | null;
}

export interface PayloadHeader {
  logo?: PayloadMedia | null;
  navItems?: { link: PayloadLink }[] | null;
  ctaLabel?: string | null;
  ctaLink?: string | null;
}

export interface PayloadSiteSettings {
  siteName: string;
  siteUrl: string;
  orgDescription: string;
  contactEmail: string;
  whatsappUrl: string;
  ga4Id?: string | null;
  metaPixelId?: string | null;
}

export interface PayloadRole {
  id: string | number;
  title: string;
  department: string;
  location: string;
  description: any;
  roleStatus: 'open' | 'closed';
  slug: string;
}

/**
 * Resolves a Payload link object to its corresponding URL string
 */
export function resolveLink(linkObj: PayloadLink | null | undefined): string {
  if (!linkObj) return '#';
  if (linkObj.type === 'custom') {
    return linkObj.url || '#';
  }
  if (linkObj.type === 'reference' && linkObj.reference) {
    const relation = linkObj.reference.relationTo;
    const ref = linkObj.reference.value;
    if (typeof ref === 'string') {
      // Reference is not populated, return placeholder
      return '#';
    }
    const slug = ref?.slug;
    if (relation === 'pages') {
      return slug === 'home' || slug === 'index' ? '/' : `/${slug}`;
    }
    if (relation === 'posts') {
      return `/insights/${slug}`;
    }
  }
  return '#';
}

/**
 * Fetches a global from the Payload CMS API
 */
export async function fetchGlobal<T>(slug: string): Promise<T> {
  const url = `${PAYLOAD_CMS_URL}/api/globals/${slug}?depth=1`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload global "${slug}": status ${res.status}`);
    }
    return await res.json() as T;
  } catch (error) {
    console.error(`[Payload CMS Client] Error fetching global "${slug}":`, error);
    throw error;
  }
}

let cachedSiteSettings: PayloadSiteSettings | null = null;

/**
 * Fetches site settings (with caching) from the Payload CMS API
 */
export async function fetchSiteSettings(): Promise<PayloadSiteSettings | null> {
  if (cachedSiteSettings) return cachedSiteSettings;
  try {
    cachedSiteSettings = await fetchGlobal<PayloadSiteSettings>('site-settings');
    return cachedSiteSettings;
  } catch (error) {
    console.warn('[Payload CMS Client] Failed to fetch site settings global. Falling back to env defaults.', error);
    return null;
  }
}

/**
 * Fetches a page by slug from the Payload CMS API
 */
export async function fetchPage<T = any>(slug: string): Promise<T | null> {
  const url = `${PAYLOAD_CMS_URL}/api/pages?where[slug][equals]=${slug}&depth=2`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload page "${slug}": status ${res.status}`);
    }
    const data = await res.json();
    return (data.docs?.[0] as T) || null;
  } catch (error) {
    console.error(`[Payload CMS Client] Error fetching page "${slug}":`, error);
    throw error;
  }
}

/**
 * Fetches all active/open roles from Payload CMS API
 */
export async function fetchOpenRoles(): Promise<PayloadRole[]> {
  const url = `${PAYLOAD_CMS_URL}/api/roles?where[roleStatus][equals]=open&depth=1`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload open roles: status ${res.status}`);
    }
    const data = await res.json();
    return (data.docs || []) as PayloadRole[];
  } catch (error) {
    console.error(`[Payload CMS Client] Error fetching open roles:`, error);
    return []; // Return empty array on error to allow graceful build/run
  }
}

/**
 * Fetches all posts from Payload CMS API
 */
export async function fetchPosts(): Promise<any[]> {
  const url = `${PAYLOAD_CMS_URL}/api/posts?depth=2&limit=100`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload posts: status ${res.status}`);
    }
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error(`[Payload CMS Client] Error fetching posts:`, error);
    return [];
  }
}

/**
 * Fetches a single post by slug from Payload CMS API
 */
export async function fetchPostBySlug(slug: string): Promise<any | null> {
  const url = `${PAYLOAD_CMS_URL}/api/posts?where[slug][equals]=${slug}&depth=2`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload post by slug "${slug}": status ${res.status}`);
    }
    const data = await res.json();
    return data.docs?.[0] || null;
  } catch (error) {
    console.error(`[Payload CMS Client] Error fetching post by slug "${slug}":`, error);
    return null;
  }
}

// ── Industries ──────────────────────────────────────────────────────────────

/**
 * Fetches all published industries from Payload CMS, sorted by `order`.
 */
export async function fetchIndustries(): Promise<any[]> {
  const url = `${PAYLOAD_CMS_URL}/api/industries?depth=1&limit=100&sort=order&where[_status][equals]=published`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload industries: status ${res.status}`);
    }
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error('[Payload CMS Client] Error fetching industries:', error);
    return [];
  }
}

/**
 * Fetches a single industry by slug from Payload CMS.
 */
export async function fetchIndustryBySlug(slug: string): Promise<any | null> {
  const url = `${PAYLOAD_CMS_URL}/api/industries?where[slug][equals]=${slug}&depth=1&limit=1`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload industry by slug "${slug}": status ${res.status}`);
    }
    const data = await res.json();
    return data.docs?.[0] || null;
  } catch (error) {
    console.error(`[Payload CMS Client] Error fetching industry by slug "${slug}":`, error);
    return null;
  }
}

// ── Partners ────────────────────────────────────────────────────────────────

/**
 * Fetches all partners from Payload CMS, sorted by `order`.
 */
export async function fetchPartners(): Promise<any[]> {
  const url = `${PAYLOAD_CMS_URL}/api/partners?depth=1&limit=100&sort=order`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload partners: status ${res.status}`);
    }
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error('[Payload CMS Client] Error fetching partners:', error);
    return [];
  }
}

// ── Work ─────────────────────────────────────────────────────────────────────

/**
 * Fetches all work items from Payload CMS, sorted by `order`.
 */
export async function fetchWork(): Promise<any[]> {
  const url = `${PAYLOAD_CMS_URL}/api/work?depth=2&limit=100&sort=order`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload work items: status ${res.status}`);
    }
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error('[Payload CMS Client] Error fetching work items:', error);
    return [];
  }
}

// ── Lexical Rich Text Utilities (server-side, for Astro templates) ──────────


function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Converts a Lexical JSON node tree to an HTML string.
 * @param node  The Lexical node (usually `richText.root`)
 * @param opts  Optional: `italicClass` maps italic text to a `<span class="...">` instead of `<em>`.
 */
export function lexicalNodeToHtml(
  node: any,
  opts?: { italicClass?: string },
): string {
  if (!node) return '';

  // Leaf text node
  if (node.type === 'text') {
    let content = escapeHtml(node.text || '');
    const fmt = node.format || 0;
    if (fmt & 1) content = `<strong>${content}</strong>`;          // bold
    if (fmt & 2) {                                                  // italic
      content = opts?.italicClass
        ? `<span class="${opts.italicClass}">${content}</span>`
        : `<em>${content}</em>`;
    }
    if (fmt & 8) content = `<u>${content}</u>`;                     // underline
    if (fmt & 4) content = `<del>${content}</del>`;                 // strikethrough
    return content;
  }

  // Upload node (images)
  if (node.type === 'upload') {
    const media = node.value;
    if (!media) return '';
    let src = media.url || '';
    if (src && src.startsWith('/')) {
      src = `${PAYLOAD_CMS_URL}${src}`;
    }
    const alt = media.alt || '';
    return `<figure class="rich-text-image"><img src="${src}" alt="${alt}" /></figure>`;
  }

  // Block node (Banner, Code, MediaBlock)
  if (node.type === 'block') {
    const fields = node.fields;
    if (!fields) return '';
    const blockType = fields.blockType;
    if (blockType === 'banner') {
      const bannerContent = lexicalNodeToHtml(fields.content?.root, opts);
      return `<div class="banner banner-${fields.style || 'info'}">${bannerContent}</div>`;
    }
    if (blockType === 'code') {
      const escapedCode = escapeHtml(fields.code || '');
      return `<pre class="language-${fields.language || 'text'}"><code>${escapedCode}</code></pre>`;
    }
    if (blockType === 'mediaBlock') {
      const media = fields.media;
      if (!media) return '';
      let src = media.url || '';
      if (src && src.startsWith('/')) {
        src = `${PAYLOAD_CMS_URL}${src}`;
      }
      const alt = media.alt || '';
      return `<figure class="media-block"><img src="${src}" alt="${alt}" /></figure>`;
    }
    return '';
  }

  // Branch nodes – recurse into children
  if (node.children) {
    const children = node.children
      .map((child: any) => lexicalNodeToHtml(child, opts))
      .join('');

    switch (node.type) {
      case 'root':
        return children;
      case 'paragraph':
        return children ? `<p>${children}</p>` : '';
      case 'heading': {
        const tag = node.tag || 'h2';
        return `<${tag}>${children}</${tag}>`;
      }
      case 'list':
        return node.listType === 'number'
          ? `<ol>${children}</ol>`
          : `<ul>${children}</ul>`;
      case 'listitem':
        return `<li>${children}</li>`;
      case 'link': {
        const href = node.fields?.url || '#';
        const rel = node.fields?.newTab
          ? ' target="_blank" rel="noopener noreferrer"'
          : '';
        return `<a href="${href}"${rel}>${children}</a>`;
      }
      default:
        return children;
    }
  }

  return '';
}

/**
 * Extracts plain text (no HTML) from a Lexical JSON node tree.
 */
export function lexicalToPlainText(node: any): string {
  if (!node) return '';
  if (node.type === 'text') return node.text || '';
  if (node.children)
    return node.children.map((c: any) => lexicalToPlainText(c)).join('');
  return '';
}
