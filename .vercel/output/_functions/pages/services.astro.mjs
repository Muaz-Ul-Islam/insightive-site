import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_Xkj7_IYx.mjs';
import 'piccolore';
import { f as fetchPage, $ as $$Base, l as lexicalNodeToHtml } from '../chunks/Base_njw7ilXC.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const PAYLOAD_CMS_URL = "http://127.0.0.1:3000";
  let pageData = null;
  try {
    pageData = await fetchPage("services");
  } catch (e) {
    console.warn("[Services Page] Failed to fetch services page data from Payload CMS, using static fallback.", e);
  }
  const metaTitle = pageData?.meta?.title || pageData?.title || "Services — Advisory & Build | Insightive";
  const metaDescription = pageData?.meta?.description || "Two services: Advisory (decide what fits: stay, extend or build) and Build (fit-built software at Process, System and Platform scale). Owned outright.";
  const layout = pageData?.layout || [];
  const hasDynamicLayout = layout.length > 0;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": metaTitle, "description": metaDescription, "data-astro-cid-52q5xhqt": true }, { "default": async ($$result2) => renderTemplate`${hasDynamicLayout ? layout.map((block) => {
    const { blockType } = block;
    if (blockType === "heroBlock" || blockType === "servicesHero") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em tick" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      return renderTemplate`${maybeRenderHead()}<section class="section svc-hero" data-astro-cid-52q5xhqt> <div class="container" data-astro-cid-52q5xhqt> <p class="eyebrow" data-astro-cid-52q5xhqt>${block.eyebrow || "Our services"}</p> ${titleHtml ? renderTemplate`<h1 data-astro-cid-52q5xhqt>${unescapeHTML(titleHtml)}</h1>` : renderTemplate`<h1 data-astro-cid-52q5xhqt>Two paths. <span class="serif-em tick" data-astro-cid-52q5xhqt>Both start here.</span></h1>`} <p class="sub" data-astro-cid-52q5xhqt>${block.subtitle}</p> </div> </section>`;
    }
    if (blockType === "servicesPaths") {
      return renderTemplate`<section class="container paths" data-astro-cid-52q5xhqt> ${block.paths?.map((p) => {
        const isAdvisory = p.ctaLink?.toLowerCase().includes("advisory") || p.label?.toLowerCase().includes("advisory");
        return renderTemplate`<a class="path-card"${addAttribute(p.ctaLink, "href")} data-astro-cid-52q5xhqt> <div class="svc-ico" aria-hidden="true" data-astro-cid-52q5xhqt> ${p.icon?.url ? renderTemplate`<img${addAttribute(p.icon.url.startsWith("http") ? p.icon.url : `${PAYLOAD_CMS_URL}${p.icon.url}`, "src")}${addAttribute(p.icon.alt || "", "alt")} loading="lazy" data-astro-cid-52q5xhqt>` : isAdvisory ? renderTemplate`<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-52q5xhqt> <circle cx="8" cy="16" r="3" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></circle> <circle cx="24" cy="8" r="3" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></circle> <circle cx="24" cy="24" r="3" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></circle> <line x1="11" y1="15" x2="21" y2="9" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></line> <line x1="11" y1="17" x2="21" y2="23" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></line> </svg>` : renderTemplate`<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-52q5xhqt> <rect x="4" y="22" width="24" height="6" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></rect> <rect x="7" y="14" width="18" height="6" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></rect> <rect x="10" y="6" width="12" height="6" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></rect> </svg>`} </div> <p class="svc-label" data-astro-cid-52q5xhqt>${p.label}</p> <h2 data-astro-cid-52q5xhqt>${p.title}</h2> <p data-astro-cid-52q5xhqt>${p.description}</p> <span class="svc-cta" data-astro-cid-52q5xhqt>${p.ctaLabel}</span> </a>`;
      })} </section>`;
    }
    if (blockType === "sectionCta") {
      return renderTemplate`<section class="section" data-astro-cid-52q5xhqt> <div class="container undecided" data-astro-cid-52q5xhqt> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-52q5xhqt>${block.eyebrow}</p>`} <h2 data-astro-cid-52q5xhqt>${unescapeHTML(block.title)}</h2> <p data-astro-cid-52q5xhqt>${block.body}</p> <a${addAttribute(block.ctaLink, "href")} class="btn btn-primary" data-astro-cid-52q5xhqt>${block.ctaLabel}</a> </div> </section>`;
    }
    return null;
  }) : renderTemplate`<!-- Fallback Static Layout -->
    <section class="section svc-hero" data-astro-cid-52q5xhqt> <div class="container" data-astro-cid-52q5xhqt> <p class="eyebrow" data-astro-cid-52q5xhqt>Our services</p> <h1 data-astro-cid-52q5xhqt>Two paths. <span class="serif-em tick" data-astro-cid-52q5xhqt>Both start here.</span></h1> <p class="sub" data-astro-cid-52q5xhqt>
If you're still deciding what to fix, buy or build, start with Advisory.
          If you know what needs to be built, start with Build. Both end the same way:
          a decision or a system you own.
</p> </div> </section>

    <section class="container paths" data-astro-cid-52q5xhqt> <a class="path-card" href="/services/advisory" data-astro-cid-52q5xhqt> <div class="svc-ico" aria-hidden="true" data-astro-cid-52q5xhqt> <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-52q5xhqt> <circle cx="8" cy="16" r="3" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></circle> <circle cx="24" cy="8" r="3" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></circle> <circle cx="24" cy="24" r="3" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></circle> <line x1="11" y1="15" x2="21" y2="9" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></line> <line x1="11" y1="17" x2="21" y2="23" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></line> </svg> </div> <p class="svc-label" data-astro-cid-52q5xhqt>01 — Advisory</p> <h2 data-astro-cid-52q5xhqt>Decide what fits.</h2> <p data-astro-cid-52q5xhqt>
A two-to-four-week diagnosis of where your technology and your process diverge,
          returned as one defensible call (stay, extend or build) with the financial model
          your board can act on. Five domains. No platform allegiance. No implementation
          hours to protect.
</p> <span class="svc-cta" data-astro-cid-52q5xhqt>How Advisory works →</span> </a> <a class="path-card" href="/services/build" data-astro-cid-52q5xhqt> <div class="svc-ico" aria-hidden="true" data-astro-cid-52q5xhqt> <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-52q5xhqt> <rect x="4" y="22" width="24" height="6" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></rect> <rect x="7" y="14" width="18" height="6" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></rect> <rect x="10" y="6" width="12" height="6" stroke="currentColor" stroke-width="1" data-astro-cid-52q5xhqt></rect> </svg> </div> <p class="svc-label" data-astro-cid-52q5xhqt>02 — Build</p> <h2 data-astro-cid-52q5xhqt>Process · System · Platform.</h2> <p data-astro-cid-52q5xhqt>
Fit-built software at three scales, from a single workflow tool in weeks to the
          platform your business runs on. Small senior AI-augmented teams, working software
          every two weeks and a total handover: code, data, infrastructure, documentation.
</p> <span class="svc-cta" data-astro-cid-52q5xhqt>How Build works →</span> </a> </section>

    <section class="section" data-astro-cid-52q5xhqt> <div class="container undecided" data-astro-cid-52q5xhqt> <h2 data-astro-cid-52q5xhqt>Not sure which way to go?</h2> <p data-astro-cid-52q5xhqt>
If you're still shaping the question, start with Advisory. We'll get you to the
          answer. If you have the answer and need it built, start with Build. If you're truly
          not sure, book a discovery call and we'll figure it out together.
</p> <a href="/contact?service=advisory" class="btn btn-primary" data-astro-cid-52q5xhqt>Book a Discovery Call</a> </div> </section>`}` })} `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/services/index.astro", void 0);
const $$file = "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
