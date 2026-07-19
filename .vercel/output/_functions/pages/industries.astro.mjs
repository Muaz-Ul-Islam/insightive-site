import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_Xkj7_IYx.mjs';
import 'piccolore';
import { f as fetchPage, c as fetchIndustries, l as lexicalNodeToHtml, $ as $$Base } from '../chunks/Base_njw7ilXC.mjs';
import { g as getCollection } from '../chunks/_astro_content_CQPFckIl.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let pageData = null;
  let cmsIndustries = [];
  try {
    pageData = await fetchPage("industries");
  } catch (e) {
    console.warn("[Industries] Failed to fetch industries page copy from Payload CMS.", e);
  }
  try {
    cmsIndustries = await fetchIndustries();
  } catch (e) {
    console.warn("[Industries] Failed to fetch industries from Payload CMS.", e);
  }
  const hasCmsIndustries = cmsIndustries.length > 0;
  const localIndustries = hasCmsIndustries ? [] : (await getCollection("industries")).sort((a, b) => a.data.order - b.data.order);
  const industries = hasCmsIndustries ? cmsIndustries.filter((ind) => ind.isVisible !== false) : localIndustries;
  const layout = pageData?.layout || [];
  const heroBlock = layout.find((b) => b.blockType === "heroBlock" || b.blockType === "industryHero");
  let heroTitleHtml = "";
  if (heroBlock?.title?.root) {
    const raw = lexicalNodeToHtml(heroBlock.title.root, { italicClass: "serif-em tick" });
    heroTitleHtml = raw.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
  }
  const heroEyebrow = heroBlock?.eyebrow ?? "Industries";
  const heroSubtitle = heroBlock?.subtitle ?? "The near-fit tax shows up wherever vendors template a market's average process onto your specific one. These are the industries where we've seen the misfit up close and built what fixed it.";
  const metaTitle = pageData?.meta?.title || pageData?.title || "Industries — Where the Misfit Hurts | Insightive";
  const metaDescription = pageData?.meta?.description || "Fit-built software for retail and commerce, real estate, HR and talent, healthcare and education, where rented near-fit systems tax the operation hardest.";
  const PAYLOAD_CMS_URL = "http://127.0.0.1:3000";
  function getSlug(ind) {
    return ind.slug ?? ind.id?.replace(/\.md$/, "") ?? "";
  }
  function getIcon(ind) {
    const icon = ind.icon;
    if (icon && typeof icon === "object" && icon.url) {
      const src = icon.url.startsWith("http") ? icon.url : `${PAYLOAD_CMS_URL}${icon.url}`;
      const alt = icon.alt || "";
      return `<img src="${src}" alt="${alt}" loading="lazy" />`;
    }
    return "";
  }
  function getName(ind) {
    return ind.name ?? ind.data?.name ?? "";
  }
  function getDek(ind) {
    return ind.dek ?? ind.data?.dek ?? "";
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": metaTitle, "description": metaDescription, "data-astro-cid-nfnem337": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section" data-astro-cid-nfnem337> <div class="container" data-astro-cid-nfnem337> <p class="eyebrow" data-astro-cid-nfnem337>${heroEyebrow}</p> ${heroTitleHtml ? renderTemplate`<h1 data-astro-cid-nfnem337>${unescapeHTML(heroTitleHtml)}</h1>` : renderTemplate`<h1 data-astro-cid-nfnem337>Every industry bends <span class="serif-em tick" data-astro-cid-nfnem337>differently</span>.</h1>`} <p class="sub" data-astro-cid-nfnem337>${heroSubtitle}</p> </div> </section> <section class="container ind-list" data-astro-cid-nfnem337> ${industries.map((ind) => {
    const slug = getSlug(ind);
    return renderTemplate`<a class="ind-card"${addAttribute(`/industries/${slug}`, "href")} data-astro-cid-nfnem337> <span class="ind-ico" aria-hidden="true" data-astro-cid-nfnem337>${unescapeHTML(getIcon(ind))}</span> <h2 data-astro-cid-nfnem337>${getName(ind)}</h2> <p data-astro-cid-nfnem337>${getDek(ind)}</p> <span class="ind-cta" data-astro-cid-nfnem337>The misfit pattern →</span> </a>`;
  })} </section> <section class="section" data-astro-cid-nfnem337> <div class="container" data-astro-cid-nfnem337> <p class="ind-note" data-astro-cid-nfnem337>
Operating somewhere else? The thesis doesn't care about verticals: if your process
        is bending to software, <a class="link-quiet" href="/contact" data-astro-cid-nfnem337>start a conversation</a>.
</p> </div> </section> ` })} `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/industries/index.astro", void 0);
const $$file = "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/industries/index.astro";
const $$url = "/industries";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
