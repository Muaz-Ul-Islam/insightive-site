import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_Xkj7_IYx.mjs';
import 'piccolore';
import { f as fetchPage, e as fetchPosts, $ as $$Base, l as lexicalNodeToHtml } from '../chunks/Base_njw7ilXC.mjs';
import { g as getCollection } from '../chunks/_astro_content_CQPFckIl.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let pageData = null;
  let cmsPosts = [];
  try {
    pageData = await fetchPage("insights");
    cmsPosts = await fetchPosts();
  } catch (e) {
    console.warn("[Insights Index Page] Failed to fetch insights data from Payload CMS, falling back to local content.", e);
  }
  const allLocal = await getCollection("insights", ({ data }) => !data.draft);
  const essaysLocal = allLocal.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  const essays = cmsPosts.length > 0 ? cmsPosts.map((p) => ({
    id: p.slug,
    slug: p.slug,
    category: p.categories?.[0]?.title || "Uncategorized",
    title: p.title,
    dek: p.dek,
    byline: p.bylined ? p.populatedAuthors?.[0]?.name || "Insightive Software" : "Insightive Software",
    draft: p._status === "draft",
    publishDate: p.publishedAt ? new Date(p.publishedAt) : /* @__PURE__ */ new Date()
  })).sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime()) : essaysLocal.map((e) => ({
    id: e.id.replace(/\.md$/, ""),
    slug: e.id.replace(/\.md$/, ""),
    category: e.data.category,
    title: e.data.title,
    dek: e.data.dek,
    byline: e.data.bylined ? e.data.author : "Insightive Software",
    draft: e.data.draft,
    publishDate: e.data.publishDate
  }));
  const categories = ["Ownership Economics", "Process Fit", "Decision Frameworks", "Field Notes", "Industry Deep Dives"];
  const present = categories.filter((c) => essays.some((e) => e.category === c));
  const metaTitle = pageData?.meta?.title || pageData?.title || "Insights — The Economics of Software That Fits | Insightive";
  const metaDescription = pageData?.meta?.description || "Essays on the near-fit tax, ownership economics, process fit and the decision frameworks for build vs. buy, from operators who've built and exited.";
  const layout = pageData?.layout || [];
  const hasDynamicLayout = layout.length > 0;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": metaTitle, "description": metaDescription, "data-astro-cid-er3pmupq": true }, { "default": async ($$result2) => renderTemplate`${hasDynamicLayout ? layout.map((block) => {
    const { blockType } = block;
    if (blockType === "insightsHero") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em tick" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      return renderTemplate`${maybeRenderHead()}<section class="section" data-astro-cid-er3pmupq> <div class="container" data-astro-cid-er3pmupq> <p class="eyebrow" data-astro-cid-er3pmupq>${block.eyebrow}</p> ${titleHtml ? renderTemplate`<h1 data-astro-cid-er3pmupq>${unescapeHTML(titleHtml)}</h1>` : renderTemplate`<h1 data-astro-cid-er3pmupq>The argument, <span class="serif-em tick" data-astro-cid-er3pmupq>essay by essay</span>.</h1>`} <p class="sub" data-astro-cid-er3pmupq>${block.subtitle}</p> <div class="cat-row" role="group" aria-label="Filter essays by category" data-astro-cid-er3pmupq> <button class="cat-chip active" data-filter="all" aria-pressed="true" data-astro-cid-er3pmupq>All</button> ${present.map((c) => renderTemplate`<button class="cat-chip"${addAttribute(c, "data-filter")} aria-pressed="false" data-astro-cid-er3pmupq>${c}</button>`)} </div> </div> </section>`;
    }
    return null;
  }) : renderTemplate`<!-- Fallback Static Hero -->
    <section class="section" data-astro-cid-er3pmupq> <div class="container" data-astro-cid-er3pmupq> <p class="eyebrow" data-astro-cid-er3pmupq>Insights</p> <h1 data-astro-cid-er3pmupq>The argument, <span class="serif-em tick" data-astro-cid-er3pmupq>essay by essay</span>.</h1> <p class="sub" data-astro-cid-er3pmupq>
Ownership economics, process fit and the frameworks for deciding what to build,
          written to be useful whether or not you ever work with us.
</p> <div class="cat-row" role="group" aria-label="Filter essays by category" data-astro-cid-er3pmupq> <button class="cat-chip active" data-filter="all" aria-pressed="true" data-astro-cid-er3pmupq>All</button> ${present.map((c) => renderTemplate`<button class="cat-chip"${addAttribute(c, "data-filter")} aria-pressed="false" data-astro-cid-er3pmupq>${c}</button>`)} </div> </div> </section>`}<section class="container essay-grid" data-astro-cid-er3pmupq> ${essays.map((e) => renderTemplate`<a class="essay-card"${addAttribute(e.category, "data-category")}${addAttribute(`/insights/${e.slug}`, "href")} data-astro-cid-er3pmupq> <p class="e-meta" data-astro-cid-er3pmupq> <span class="e-cat" data-astro-cid-er3pmupq>${e.category}</span> ${e.draft && renderTemplate`<span class="e-draft" data-astro-cid-er3pmupq>Draft · pending review</span>`} </p> <h2 data-astro-cid-er3pmupq>${e.title}</h2> <p class="e-dek" data-astro-cid-er3pmupq>${e.dek}</p> <p class="e-byline" data-astro-cid-er3pmupq>${e.byline}</p> </a>`)} <p class="no-match" hidden data-astro-cid-er3pmupq>No essays in this category yet.</p> </section> ` })} ${renderScript($$result, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/insights/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/insights/index.astro", void 0);
const $$file = "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/insights/index.astro";
const $$url = "/insights";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
