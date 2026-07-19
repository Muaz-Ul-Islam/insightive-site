import { d as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML, b as addAttribute, m as maybeRenderHead, e as renderScript, j as defineScriptVars, r as renderComponent, f as renderSlot, k as renderHead } from './astro/server_Xkj7_IYx.mjs';
import 'piccolore';
/* empty css                                  */
import 'clsx';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2, _b, _c, _d;
const $$Astro$3 = createAstro("https://insightive.io");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SEO;
  const { title, description, type = "website", schema = [] } = Astro2.props;
  const canonical = new URL(Astro2.url.pathname.replace(/\/$/, "") || "/", Astro2.site);
  const ogImage = new URL("/og-image.png", Astro2.site);
  const isHome = Astro2.url.pathname === "/" || Astro2.url.pathname === "";
  const pathSegments = Astro2.url.pathname.replace(/^\/|\/$/g, "").split("/").filter(Boolean);
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Insightive Software",
    url: "https://insightive.io",
    logo: "https://insightive.io/brand/mark-royal.svg",
    description: "Fit-built software engineered for how you work and handed over with full ownership. No licence tax, no vendor lock-in.",
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    areaServed: [
      "United Arab Emirates",
      "Saudi Arabia",
      "Qatar",
      "Kuwait",
      "Bahrain",
      "Oman",
      "United States",
      "Canada"
    ],
    sameAs: [
      "https://www.linkedin.com/showcase/insightive-software",
      "https://www.instagram.com/insightive.io/",
      "https://www.facebook.com/insightivesoftware"
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Insightive",
      legalName: "Insightive L.L.C-FZ",
      url: "https://insightive.ltd"
    }
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Insightive Software",
    url: "https://insightive.io",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: "https://insightive.io/insights?q={search_term_string}" },
      "query-input": "required name=search_term_string"
    }
  };
  const breadcrumb = pathSegments.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://insightive.io" },
      ...pathSegments.map((seg, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " "),
        item: `https://insightive.io/${pathSegments.slice(0, i + 1).join("/")}`
      }))
    ]
  } : null;
  return renderTemplate(_d || (_d = __template$2(["<title>", '</title><meta name="description"', '><link rel="canonical"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type"', '><meta property="og:url"', '><meta property="og:site_name" content="Insightive Software"><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><script type="application/ld+json">', "<\/script>", "", "", ""])), title, addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(type, "content"), addAttribute(canonical, "content"), addAttribute(ogImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), unescapeHTML(JSON.stringify(organization)), isHome && renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(website))), !isHome && breadcrumb && renderTemplate(_b || (_b = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(breadcrumb))), schema.map((s) => renderTemplate(_c || (_c = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({ "@context": "https://schema.org", ...s })))));
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/components/SEO.astro", void 0);

const PAYLOAD_CMS_URL = "http://127.0.0.1:3000";
function resolveLink(linkObj) {
  if (!linkObj) return "#";
  if (linkObj.type === "custom") {
    return linkObj.url || "#";
  }
  if (linkObj.type === "reference" && linkObj.reference) {
    const relation = linkObj.reference.relationTo;
    const ref = linkObj.reference.value;
    if (typeof ref === "string") {
      return "#";
    }
    const slug = ref?.slug;
    if (relation === "pages") {
      return slug === "home" || slug === "index" ? "/" : `/${slug}`;
    }
    if (relation === "posts") {
      return `/insights/${slug}`;
    }
  }
  return "#";
}
async function fetchGlobal(slug) {
  const url = `${PAYLOAD_CMS_URL}/api/globals/${slug}?depth=1`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload global "${slug}": status ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(`[Payload CMS Client] Error fetching global "${slug}":`, error);
    throw error;
  }
}
let cachedSiteSettings = null;
async function fetchSiteSettings() {
  if (cachedSiteSettings) return cachedSiteSettings;
  try {
    cachedSiteSettings = await fetchGlobal("site-settings");
    return cachedSiteSettings;
  } catch (error) {
    console.warn("[Payload CMS Client] Failed to fetch site settings global. Falling back to env defaults.", error);
    return null;
  }
}
async function fetchPage(slug) {
  const url = `${PAYLOAD_CMS_URL}/api/pages?where[slug][equals]=${slug}&depth=2`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload page "${slug}": status ${res.status}`);
    }
    const data = await res.json();
    return data.docs?.[0] || null;
  } catch (error) {
    console.error(`[Payload CMS Client] Error fetching page "${slug}":`, error);
    throw error;
  }
}
async function fetchOpenRoles() {
  const url = `${PAYLOAD_CMS_URL}/api/roles?where[roleStatus][equals]=open&depth=1`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload open roles: status ${res.status}`);
    }
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error(`[Payload CMS Client] Error fetching open roles:`, error);
    return [];
  }
}
async function fetchPosts() {
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
async function fetchPostBySlug(slug) {
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
async function fetchIndustries() {
  const url = `${PAYLOAD_CMS_URL}/api/industries?depth=1&limit=100&sort=order&where[_status][equals]=published`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload industries: status ${res.status}`);
    }
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error("[Payload CMS Client] Error fetching industries:", error);
    return [];
  }
}
async function fetchIndustryBySlug(slug) {
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
async function fetchPartners() {
  const url = `${PAYLOAD_CMS_URL}/api/partners?depth=1&limit=100&sort=order`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload partners: status ${res.status}`);
    }
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error("[Payload CMS Client] Error fetching partners:", error);
    return [];
  }
}
async function fetchWork() {
  const url = `${PAYLOAD_CMS_URL}/api/work?depth=2&limit=100&sort=order`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch Payload work items: status ${res.status}`);
    }
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error("[Payload CMS Client] Error fetching work items:", error);
    return [];
  }
}
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function lexicalNodeToHtml(node, opts) {
  if (!node) return "";
  if (node.type === "text") {
    let content = escapeHtml(node.text || "");
    const fmt = node.format || 0;
    if (fmt & 1) content = `<strong>${content}</strong>`;
    if (fmt & 2) {
      content = opts?.italicClass ? `<span class="${opts.italicClass}">${content}</span>` : `<em>${content}</em>`;
    }
    if (fmt & 8) content = `<u>${content}</u>`;
    if (fmt & 4) content = `<del>${content}</del>`;
    return content;
  }
  if (node.type === "upload") {
    const media = node.value;
    if (!media) return "";
    let src = media.url || "";
    if (src && src.startsWith("/")) {
      src = `${PAYLOAD_CMS_URL}${src}`;
    }
    const alt = media.alt || "";
    return `<figure class="rich-text-image"><img src="${src}" alt="${alt}" /></figure>`;
  }
  if (node.type === "block") {
    const fields = node.fields;
    if (!fields) return "";
    const blockType = fields.blockType;
    if (blockType === "banner") {
      const bannerContent = lexicalNodeToHtml(fields.content?.root, opts);
      return `<div class="banner banner-${fields.style || "info"}">${bannerContent}</div>`;
    }
    if (blockType === "code") {
      const escapedCode = escapeHtml(fields.code || "");
      return `<pre class="language-${fields.language || "text"}"><code>${escapedCode}</code></pre>`;
    }
    if (blockType === "mediaBlock") {
      const media = fields.media;
      if (!media) return "";
      let src = media.url || "";
      if (src && src.startsWith("/")) {
        src = `${PAYLOAD_CMS_URL}${src}`;
      }
      const alt = media.alt || "";
      return `<figure class="media-block"><img src="${src}" alt="${alt}" /></figure>`;
    }
    return "";
  }
  if (node.children) {
    const children = node.children.map((child) => lexicalNodeToHtml(child, opts)).join("");
    switch (node.type) {
      case "root":
        return children;
      case "paragraph":
        return children ? `<p>${children}</p>` : "";
      case "heading": {
        const tag = node.tag || "h2";
        return `<${tag}>${children}</${tag}>`;
      }
      case "list":
        return node.listType === "number" ? `<ol>${children}</ol>` : `<ul>${children}</ul>`;
      case "listitem":
        return `<li>${children}</li>`;
      case "link": {
        const href = node.fields?.url || "#";
        const rel = node.fields?.newTab ? ' target="_blank" rel="noopener noreferrer"' : "";
        return `<a href="${href}"${rel}>${children}</a>`;
      }
      default:
        return children;
    }
  }
  return "";
}

const $$Astro$2 = createAstro("https://insightive.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const PAYLOAD_CMS_URL = "http://127.0.0.1:3000";
  let headerData = null;
  try {
    headerData = await fetchGlobal("header");
  } catch (e) {
    console.warn("[Header] Failed to fetch header data from Payload CMS, using static fallback.", e);
  }
  const logoUrl = headerData?.logo?.url ? headerData.logo.url.startsWith("http") ? headerData.logo.url : `${PAYLOAD_CMS_URL}${headerData.logo.url}` : "/brand/lockup-compact.svg";
  const logoAlt = headerData?.logo?.alt || "Insightive Software";
  const nav = headerData?.navItems?.map((item) => ({
    href: resolveLink(item.link),
    label: item.link.label
  })) || [
    { href: "/thesis", label: "Thesis" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/insights", label: "Insights" },
    { href: "/careers", label: "Careers" }
  ];
  const ctaLabel = headerData?.ctaLabel || "Book a Fit Assessment";
  const ctaLink = headerData?.ctaLink || "/contact";
  const path = Astro2.url.pathname;
  const isActive = (href) => path === href || path.startsWith(href + "/");
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-3ef6ksr2> <div class="container bar" data-astro-cid-3ef6ksr2> <a href="/" class="logo" aria-label="Insightive Software — home" data-astro-cid-3ef6ksr2> <img${addAttribute(logoUrl, "src")}${addAttribute(logoAlt, "alt")} width="351" height="78" data-astro-cid-3ef6ksr2> </a> <nav aria-label="Main" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ${nav.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(item.href, "href")}${addAttribute(["nav-link", { active: isActive(item.href) }], "class:list")} data-astro-cid-3ef6ksr2>${item.label}</a> </li>`)} </ul> </nav> <a${addAttribute(ctaLink, "href")} class="btn btn-primary cta" data-astro-cid-3ef6ksr2>${ctaLabel}</a> <button class="menu-btn" aria-label="Open menu" aria-expanded="false" data-menu-btn data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span><span data-astro-cid-3ef6ksr2></span> </button> </div> <div class="mobile-nav" data-mobile-nav hidden data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ${nav.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2><a${addAttribute(item.href, "href")} data-astro-cid-3ef6ksr2>${item.label}</a></li>`)} <li data-astro-cid-3ef6ksr2><a${addAttribute(ctaLink, "href")} data-astro-cid-3ef6ksr2>${ctaLabel}</a></li> </ul> </div> </header>  ${renderScript($$result, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/components/Header.astro", void 0);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const siteSettings = await fetchSiteSettings();
  const showCookies = !!(siteSettings?.ga4Id || siteSettings?.metaPixelId || "" || "");
  let footerData = null;
  try {
    footerData = await fetchGlobal("footer");
  } catch (e) {
    console.warn("[Footer] Failed to fetch footer data from Payload CMS, using static fallback.", e);
  }
  const tagline = footerData?.tagline || "Software that fits. Software you own.";
  const location = footerData?.location || "UAE based. Working with clients across the GCC and North America.";
  const whatsappUrl = footerData?.whatsappUrl || "https://wa.me/+971586978728";
  const siteLinks = footerData?.siteLinks?.map((item) => ({
    label: item.link.label,
    url: resolveLink(item.link)
  })) || [
    { label: "The Thesis", url: "/thesis" },
    { label: "Industries", url: "/industries" },
    { label: "Work", url: "/work" },
    { label: "Insights", url: "/insights" },
    { label: "Careers", url: "/careers" },
    { label: "Contact", url: "/contact" }
  ];
  const servicesLinks = footerData?.servicesLinks?.map((item) => ({
    label: item.link.label,
    url: resolveLink(item.link)
  })) || [
    { label: "Advisory", url: "/services/advisory" },
    { label: "Build", url: "/services/build" },
    { label: "Partners", url: "/partners" }
  ];
  const socialLinks = footerData?.socialLinks?.map((item) => ({
    label: item.link.label,
    url: resolveLink(item.link)
  })) || [
    { label: "LinkedIn", url: "https://www.linkedin.com/showcase/insightive-software" },
    { label: "Instagram", url: "https://www.instagram.com/insightive.io/" },
    { label: "Facebook", url: "https://www.facebook.com/insightivesoftware" }
  ];
  const legalLinks = footerData?.legalLinks?.map((item) => ({
    label: item.link.label,
    url: resolveLink(item.link)
  })) || [
    { label: "Privacy", url: "/privacy-policy" },
    { label: "Terms", url: "/terms-of-service" },
    { label: "Billing", url: "/billing-policy" }
  ];
  const copyrightTextRaw = footerData?.copyrightText || "© {year} Insightive Software. All rights reserved.";
  const copyrightText = copyrightTextRaw.replace("{year}", String(year));
  return renderTemplate`${maybeRenderHead()}<footer class="on-dark site-footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="grid" data-astro-cid-sz7xmlte> <div class="brand-col" data-astro-cid-sz7xmlte> <p class="tag" data-astro-cid-sz7xmlte>${tagline}</p> <p class="loc" data-astro-cid-sz7xmlte>${location}</p> <a class="link-quiet"${addAttribute(whatsappUrl, "href")} data-astro-cid-sz7xmlte>WhatsApp Us</a> </div> <nav aria-label="Footer — site" data-astro-cid-sz7xmlte> <h2 class="col-h" data-astro-cid-sz7xmlte>Site</h2> <ul data-astro-cid-sz7xmlte> ${siteLinks.map((item) => renderTemplate`<li data-astro-cid-sz7xmlte><a class="link-quiet"${addAttribute(item.url, "href")} data-astro-cid-sz7xmlte>${item.label}</a></li>`)} </ul> </nav> <nav aria-label="Footer — services" data-astro-cid-sz7xmlte> <h2 class="col-h" data-astro-cid-sz7xmlte>Services</h2> <ul data-astro-cid-sz7xmlte> ${servicesLinks.map((item) => renderTemplate`<li data-astro-cid-sz7xmlte><a class="link-quiet"${addAttribute(item.url, "href")} data-astro-cid-sz7xmlte>${item.label}</a></li>`)} </ul> </nav> <nav aria-label="Footer — social" data-astro-cid-sz7xmlte> <h2 class="col-h" data-astro-cid-sz7xmlte>Follow</h2> <ul data-astro-cid-sz7xmlte> ${socialLinks.map((item) => renderTemplate`<li data-astro-cid-sz7xmlte><a class="link-quiet"${addAttribute(item.url, "href")} data-astro-cid-sz7xmlte>${item.label}</a></li>`)} </ul> </nav> </div> <hr class="rule" data-astro-cid-sz7xmlte> <div class="legal" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>${copyrightText}</p> <ul data-astro-cid-sz7xmlte> ${legalLinks.map((item) => renderTemplate`<li data-astro-cid-sz7xmlte><a class="link-quiet"${addAttribute(item.url, "href")} data-astro-cid-sz7xmlte>${item.label}</a></li>`)} ${showCookies && renderTemplate`<li data-astro-cid-sz7xmlte><button type="button" class="cookie-btn" data-consent-reopen aria-haspopup="dialog" data-astro-cid-sz7xmlte>Cookies</button></li>`} </ul> </div> </div> </footer> `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://insightive.io");
const $$ConsentBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ConsentBanner;
  const { ga4, metaPixel } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="consent-banner" class="consent-banner on-dark" role="dialog" aria-label="Cookie consent" aria-live="polite" hidden data-astro-cid-2effgw6e> <p class="consent-text" data-astro-cid-2effgw6e>\nWe use cookies for analytics and advertising measurement (Google Analytics and the Meta pixel).\n    Nothing loads until you accept. See our <a href="/privacy-policy" data-astro-cid-2effgw6e>Privacy Policy</a>.\n</p> <div class="consent-actions" data-astro-cid-2effgw6e> <button type="button" class="btn btn-ghost" data-consent="decline" data-astro-cid-2effgw6e>Decline</button> <button type="button" class="btn btn-primary" data-consent="accept" data-astro-cid-2effgw6e>Accept</button> </div> </div>  <script>(function(){', "\n  (function () {\n    var KEY = 'insightive-consent';\n    var banner = document.getElementById('consent-banner');\n    var loaded = false;\n    function loadAnalytics() {\n      if (loaded) return;\n      loaded = true;\n      if (ga4) {\n        window.dataLayer = window.dataLayer || [];\n        window.gtag = function () { dataLayer.push(arguments); };\n        gtag('js', new Date());\n        gtag('config', ga4);\n        var g = document.createElement('script');\n        g.async = true;\n        g.src = 'https://www.googletagmanager.com/gtag/js?id=' + ga4;\n        document.head.appendChild(g);\n      }\n      if (metaPixel) {\n        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');\n        fbq('init', metaPixel);\n        fbq('track', 'PageView');\n      }\n    }\n    function show() { if (banner) banner.hidden = false; }\n    function choose(value) {\n      try { localStorage.setItem(KEY, value); } catch (e) {}\n      if (value === 'granted') loadAnalytics();\n      if (banner) banner.hidden = true;\n    }\n    var saved = null;\n    try { saved = localStorage.getItem(KEY); } catch (e) {}\n    if (saved === 'granted') loadAnalytics();\n    else if (saved !== 'denied') show();\n\n    if (banner) {\n      banner.querySelectorAll('[data-consent]').forEach(function (b) {\n        b.addEventListener('click', function () {\n          choose(b.getAttribute('data-consent') === 'accept' ? 'granted' : 'denied');\n        });\n      });\n    }\n    document.querySelectorAll('[data-consent-reopen]').forEach(function (el) {\n      el.addEventListener('click', function (e) { e.preventDefault(); show(); });\n    });\n  })();\n})();<\/script>"])), maybeRenderHead(), defineScriptVars({ ga4, metaPixel }));
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/components/ConsentBanner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://insightive.io");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { title, description, type, schema } = Astro2.props;
  const siteSettings = await fetchSiteSettings();
  const ga4 = siteSettings?.ga4Id || "";
  const metaPixel = siteSettings?.metaPixelId || "";
  return renderTemplate(_a || (_a = __template([`<html lang="en" data-astro-cid-5hce7sga> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><script>document.documentElement.classList.add('js')</script><link rel="icon" href="/favicon.ico" sizes="32x32"><link rel="icon" href="/favicon-32.png" type="image/png"><link rel="preload" href="/fonts/TSSAFAA-Regular.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/TSSAFAA-Medium.woff2" as="font" type="font/woff2" crossorigin><meta name="theme-color" content="#13141E">`, "", '</head> <body data-astro-cid-5hce7sga> <a class="skip" href="#main" data-astro-cid-5hce7sga>Skip to main content</a> ', ' <main id="main" data-astro-cid-5hce7sga> ', " </main> ", " ", " <script>\n      (function () {\n        var els = document.querySelectorAll('.fade-up, .eyebrow, .tick, .hero-art');\n        if (!els.length) return;\n        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\n        if (reduce || !('IntersectionObserver' in window)) {\n          els.forEach(function (el) { el.classList.add('is-visible'); });\n          return;\n        }\n        var io = new IntersectionObserver(function (entries) {\n          entries.forEach(function (e) {\n            if (e.isIntersecting) {\n              e.target.classList.add('is-visible');\n              io.unobserve(e.target);\n            }\n          });\n        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });\n        els.forEach(function (el) { io.observe(el); });\n      })();\n    </script> </body> </html> "])), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "type": type, "schema": schema, "data-astro-cid-5hce7sga": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-5hce7sga": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5hce7sga": true }), (ga4 || metaPixel) && renderTemplate`${renderComponent($$result, "ConsentBanner", $$ConsentBanner, { "ga4": ga4, "metaPixel": metaPixel, "data-astro-cid-5hce7sga": true })}`);
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/layouts/Base.astro", void 0);

export { $$Base as $, fetchOpenRoles as a, fetchIndustryBySlug as b, fetchIndustries as c, fetchPostBySlug as d, fetchPosts as e, fetchPage as f, fetchPartners as g, fetchWork as h, lexicalNodeToHtml as l };
