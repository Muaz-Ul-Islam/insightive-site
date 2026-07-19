import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_Xkj7_IYx.mjs';
import 'piccolore';
import { f as fetchPage, g as fetchPartners, $ as $$Base, l as lexicalNodeToHtml } from '../chunks/Base_njw7ilXC.mjs';
import { p as partners } from '../chunks/partners_C_DrOQ5E.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Partners = createComponent(async ($$result, $$props, $$slots) => {
  const PAYLOAD_CMS_URL = "http://127.0.0.1:3000";
  let pageData = null;
  let cmsPartners = [];
  try {
    pageData = await fetchPage("partners");
    cmsPartners = await fetchPartners();
  } catch (e) {
    console.warn("[Partners Page] Failed to fetch data from Payload CMS, using static fallback.", e);
  }
  const metaTitle = pageData?.meta?.title || pageData?.title || "Partners — Our Delivery Network | Insightive";
  const metaDescription = pageData?.meta?.description || "Trusted delivery partners for work Insightive doesn't run in-house. An Advisory recommendation can point to Devsinc for Shopify, ThisWayUP for Amazon, Unity Retail for logistics or Synarc for marketing. The advice stays independent and carries no margin.";
  const layout = pageData?.layout || [];
  const hasDynamicLayout = layout.length > 0;
  const partnerList = cmsPartners.length > 0 ? cmsPartners.map((p) => ({
    id: p.slug || p.id,
    name: p.name,
    capability: p.capability,
    blurb: p.blurb,
    url: p.url,
    logo: p.logo?.url ? p.logo.url.startsWith("/") ? `${PAYLOAD_CMS_URL}${p.logo.url}` : p.logo.url : null,
    mark: p.mark?.url ? p.mark.url.startsWith("/") ? `${PAYLOAD_CMS_URL}${p.mark.url}` : p.mark.url : null,
    logoReady: p.logoReady ?? false
  })) : partners;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": metaTitle, "description": metaDescription, "data-astro-cid-6odhiasn": true }, { "default": async ($$result2) => renderTemplate`${hasDynamicLayout ? layout.map((block) => {
    const { blockType } = block;
    if (blockType === "sectionProse") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em tick" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      const contentHtml = block.content?.root ? lexicalNodeToHtml(block.content.root) : "";
      const isHero = block.eyebrow?.toLowerCase() === "partners";
      return renderTemplate`${maybeRenderHead()}<section${addAttribute(["section", { tinted: block.tinted, band: !isHero }], "class:list")} data-astro-cid-6odhiasn> <div class="container" data-astro-cid-6odhiasn> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-6odhiasn>${block.eyebrow}</p>`} ${isHero ? titleHtml ? renderTemplate`<h1 data-astro-cid-6odhiasn>${unescapeHTML(titleHtml)}</h1>` : renderTemplate`<h1 data-astro-cid-6odhiasn>${block.title || ""}</h1>` : titleHtml ? renderTemplate`<h2 data-astro-cid-6odhiasn>${unescapeHTML(titleHtml)}</h2>` : renderTemplate`<h2 data-astro-cid-6odhiasn>${block.title || ""}</h2>`} ${contentHtml && renderTemplate`<div${addAttribute(isHero ? "sub" : "band-lead", "class")} data-astro-cid-6odhiasn>${unescapeHTML(contentHtml)}</div>`} </div> </section>`;
    }
    if (blockType === "editorialSplit") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      const contentHtml = block.content?.root ? lexicalNodeToHtml(block.content.root) : "";
      return renderTemplate`<section${addAttribute(`section ${block.tinted ? "tinted" : ""} band`, "class")} data-astro-cid-6odhiasn> <div class="container" data-astro-cid-6odhiasn> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-6odhiasn>${block.eyebrow}</p>`} ${titleHtml && renderTemplate`<h2 data-astro-cid-6odhiasn>${unescapeHTML(titleHtml)}</h2>`} ${contentHtml && renderTemplate`<div class="band-lead" data-astro-cid-6odhiasn>${unescapeHTML(contentHtml)}</div>`} </div> </section>`;
    }
    if (blockType === "partnersList") {
      return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-6odhiasn": true }, { "default": async ($$result3) => renderTemplate`${partnerList.map((p, i) => renderTemplate`<section${addAttribute(["section", "partner", { tinted: i % 2 === 1 }], "class:list")}${addAttribute(p.id, "id")} data-astro-cid-6odhiasn> <div class="container partner-row" data-astro-cid-6odhiasn> <div class="pmark" data-astro-cid-6odhiasn> ${p.logoReady ? renderTemplate`<img${addAttribute(p.mark || p.logo, "src")}${addAttribute(`${p.name} logo`, "alt")} loading="lazy" decoding="async" data-astro-cid-6odhiasn>` : renderTemplate`<span data-astro-cid-6odhiasn>${p.name}</span>`} </div> <div class="pinfo" data-astro-cid-6odhiasn> <p class="eyebrow" data-astro-cid-6odhiasn>${p.capability}</p> <h2 data-astro-cid-6odhiasn>${p.name}</h2> <p data-astro-cid-6odhiasn>${p.blurb}</p> ${p.url ? renderTemplate`<a class="plink"${addAttribute(p.url, "href")} target="_blank" rel="noopener" data-astro-cid-6odhiasn>Visit ${p.name} →</a>` : renderTemplate`<span class="plink-muted" data-astro-cid-6odhiasn>Website link coming soon</span>`} </div> </div> </section>`)}` })}`;
    }
    if (blockType === "sectionCta") {
      return renderTemplate`<section class="section on-dark" data-astro-cid-6odhiasn> <div class="container" data-astro-cid-6odhiasn> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-6odhiasn>${block.eyebrow}</p>`} <h2 data-astro-cid-6odhiasn>${unescapeHTML(block.title)}</h2> <p class="cta-sub" data-astro-cid-6odhiasn>${block.body}</p> <a${addAttribute(block.ctaLink, "href")} class="btn btn-primary" data-astro-cid-6odhiasn>${block.ctaLabel}</a> </div> </section>`;
    }
    return null;
  }) : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-6odhiasn": true }, { "default": async ($$result3) => renderTemplate` <section class="section" data-astro-cid-6odhiasn> <div class="container" data-astro-cid-6odhiasn> <p class="eyebrow" data-astro-cid-6odhiasn>Partners</p> <h1 data-astro-cid-6odhiasn>Trusted partners for the work we <span class="serif-em tick" data-astro-cid-6odhiasn>don't run in-house</span>.</h1> <p class="sub" data-astro-cid-6odhiasn>
Insightive advises and builds. When a recommendation points to execution we don't do
            in-house, like commerce channels, marketplaces, logistics or marketing, we name a
            delivery partner we trust. The advice that led there stays independent and carries no
            margin. Building software stays ours.
</p> </div> </section> <section class="section tinted band" data-astro-cid-6odhiasn> <div class="container" data-astro-cid-6odhiasn> <p class="eyebrow" data-astro-cid-6odhiasn>Delivery partners</p> <h2 data-astro-cid-6odhiasn>We route the execution, never the advice.</h2> <p class="band-lead" data-astro-cid-6odhiasn>
These are the partners we bring in for capabilities we deliberately do not keep
            in-house. Each is named against the Advisory domain it serves. We take no referral
            margin, so the recommendation always stands on its own.
</p> </div> </section> ${partners.map((p, i) => renderTemplate`<section${addAttribute(["section", "partner", { tinted: i % 2 === 1 }], "class:list")}${addAttribute(p.id, "id")} data-astro-cid-6odhiasn> <div class="container partner-row" data-astro-cid-6odhiasn> <div class="pmark" data-astro-cid-6odhiasn> ${p.logoReady ? renderTemplate`<img${addAttribute(p.mark || p.logo, "src")}${addAttribute(`${p.name} logo`, "alt")} loading="lazy" decoding="async" data-astro-cid-6odhiasn>` : renderTemplate`<span data-astro-cid-6odhiasn>${p.name}</span>`} </div> <div class="pinfo" data-astro-cid-6odhiasn> <p class="eyebrow" data-astro-cid-6odhiasn>${p.capability}</p> <h2 data-astro-cid-6odhiasn>${p.name}</h2> <p data-astro-cid-6odhiasn>${p.blurb}</p> ${p.url ? renderTemplate`<a class="plink"${addAttribute(p.url, "href")} target="_blank" rel="noopener" data-astro-cid-6odhiasn>Visit ${p.name} →</a>` : renderTemplate`<span class="plink-muted" data-astro-cid-6odhiasn>Website link coming soon</span>`} </div> </div> </section>`)}<section class="section band" data-astro-cid-6odhiasn> <div class="container" data-astro-cid-6odhiasn> <p class="eyebrow" data-astro-cid-6odhiasn>A note on partnership</p> <h2 data-astro-cid-6odhiasn>Two kinds of partner, kept <span class="serif-em" data-astro-cid-6odhiasn>distinct</span>.</h2> <p class="band-lead" data-astro-cid-6odhiasn> <strong data-astro-cid-6odhiasn>Delivery partners</strong>, above, execute work we don't run in-house. They
            come out of an Advisory recommendation and we name them, with no margin to us.
</p> <p class="band-lead" data-astro-cid-6odhiasn> <strong data-astro-cid-6odhiasn>Technology partnerships</strong> are a different thing: the platforms we build
            our own solutions on, the cloud and infrastructure providers behind what we deliver.
            As we formalise those, they will sit here as exactly that, the foundation we build on
            rather than a service we hand off. We keep the line clear so you always know what
            Insightive does itself and what it delivers through others.
</p> </div> </section> <section class="section on-dark" data-astro-cid-6odhiasn> <div class="container" data-astro-cid-6odhiasn> <p class="eyebrow" data-astro-cid-6odhiasn>How it works</p> <h2 data-astro-cid-6odhiasn>Need execution as well as a <span class="serif-em" data-astro-cid-6odhiasn>decision</span>?</h2> <p class="cta-sub" data-astro-cid-6odhiasn>
Start with Advisory. We map the work, return the call and bring in the right partner
            where it is needed: named, labeled and independent of the recommendation.
</p> <a href="/services/advisory" class="btn btn-primary" data-astro-cid-6odhiasn>See Advisory</a> </div> </section> ` })}`}` })} `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/partners.astro", void 0);
const $$file = "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/partners.astro";
const $$url = "/partners";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Partners,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
