import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_Xkj7_IYx.mjs';
import 'piccolore';
import { f as fetchPage, h as fetchWork, $ as $$Base, l as lexicalNodeToHtml } from '../chunks/Base_njw7ilXC.mjs';
import { g as getCollection } from '../chunks/_astro_content_CQPFckIl.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  let pageData = null;
  let cmsWork = [];
  try {
    pageData = await fetchPage("work");
    cmsWork = await fetchWork();
  } catch (e) {
    console.warn("[Work Page] Failed to fetch data from Payload CMS, using static fallback.", e);
  }
  const metaTitle = pageData?.meta?.title || pageData?.title || "Work \u2014 Outcomes, Not Logos | Insightive";
  const metaDescription = pageData?.meta?.description || "Selected fit-built software outcomes across recruitment, commerce and operations, anonymized until clients say otherwise. Industry, misfit, result.";
  const layout = pageData?.layout || [];
  const hasDynamicLayout = layout.length > 0;
  const localWork = await getCollection("work");
  const localWorkSorted = localWork.sort((a, b) => a.data.order - b.data.order);
  const workItems = cmsWork.length > 0 ? cmsWork.map((w) => ({
    title: w.title,
    industry: w.customIndustry || (typeof w.industry === "object" ? w.industry?.name : w.industry),
    scale: w.scale,
    misfit: w.misfit,
    outcome: w.outcome
  })) : localWorkSorted.map((w) => ({
    title: w.data.title,
    industry: w.data.industry,
    scale: w.data.scale,
    misfit: w.data.misfit,
    outcome: w.data.outcome
  }));
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": metaTitle, "description": metaDescription, "data-astro-cid-jljc7dey": true }, { "default": async ($$result2) => renderTemplate`${hasDynamicLayout ? layout.map((block) => {
    const { blockType } = block;
    if (blockType === "sectionProse") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em tick" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      const contentHtml = block.content?.root ? lexicalNodeToHtml(block.content.root) : "";
      const isNoteOnly = !block.eyebrow && !titleHtml;
      if (isNoteOnly) {
        return renderTemplate`${maybeRenderHead()}<section class="section" data-astro-cid-jljc7dey> <div class="container" data-astro-cid-jljc7dey> ${contentHtml && renderTemplate`<div class="work-note" data-astro-cid-jljc7dey>${unescapeHTML(contentHtml)}</div>`} </div> </section>`;
      }
      return renderTemplate`<section class="section" data-astro-cid-jljc7dey> <div class="container" data-astro-cid-jljc7dey> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-jljc7dey>${block.eyebrow}</p>`} ${titleHtml ? renderTemplate`<h1 data-astro-cid-jljc7dey>${unescapeHTML(titleHtml)}</h1>` : null} ${contentHtml && renderTemplate`<div class="sub" data-astro-cid-jljc7dey>${unescapeHTML(contentHtml)}</div>`} </div> </section>`;
    }
    if (blockType === "workList") {
      return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-jljc7dey": true }, { "default": async ($$result3) => renderTemplate` <section class="container work-list" data-astro-cid-jljc7dey> ${workItems.map((w) => renderTemplate`<article class="work-card" data-astro-cid-jljc7dey> <div class="work-meta" data-astro-cid-jljc7dey> <span class="w-industry" data-astro-cid-jljc7dey>${w.industry}</span> <span class="w-scale" data-astro-cid-jljc7dey>${w.scale}</span> </div> <h2 data-astro-cid-jljc7dey>${w.title}</h2> <div class="work-cols" data-astro-cid-jljc7dey> <div data-astro-cid-jljc7dey> <p class="col-label" data-astro-cid-jljc7dey>The misfit</p> <p data-astro-cid-jljc7dey>${w.misfit}</p> </div> <div data-astro-cid-jljc7dey> <p class="col-label" data-astro-cid-jljc7dey>The outcome</p> <p data-astro-cid-jljc7dey>${w.outcome}</p> </div> </div> </article>`)} </section> ` })}`;
    }
    return null;
  }) : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-jljc7dey": true }, { "default": async ($$result3) => renderTemplate`  <section class="section" data-astro-cid-jljc7dey> <div class="container" data-astro-cid-jljc7dey> <p class="eyebrow" data-astro-cid-jljc7dey>Work</p> <h1 data-astro-cid-jljc7dey>Outcomes, not <span class="serif-em tick" data-astro-cid-jljc7dey>logos</span>.</h1> <p class="sub" data-astro-cid-jljc7dey>
Selected engagements, anonymized. We publish the misfit and the result, not the
            client's name, until they say otherwise. Named case studies are added as
            permissions land.
</p> </div> </section> <section class="container work-list" data-astro-cid-jljc7dey> ${workItems.map((w) => renderTemplate`<article class="work-card" data-astro-cid-jljc7dey> <div class="work-meta" data-astro-cid-jljc7dey> <span class="w-industry" data-astro-cid-jljc7dey>${w.industry}</span> <span class="w-scale" data-astro-cid-jljc7dey>${w.scale} Build</span> </div> <h2 data-astro-cid-jljc7dey>${w.title}</h2> <div class="work-cols" data-astro-cid-jljc7dey> <div data-astro-cid-jljc7dey> <p class="col-label" data-astro-cid-jljc7dey>The misfit</p> <p data-astro-cid-jljc7dey>${w.misfit}</p> </div> <div data-astro-cid-jljc7dey> <p class="col-label" data-astro-cid-jljc7dey>The outcome</p> <p data-astro-cid-jljc7dey>${w.outcome}</p> </div> </div> </article>`)} </section> <section class="section" data-astro-cid-jljc7dey> <div class="container" data-astro-cid-jljc7dey> <p class="work-note" data-astro-cid-jljc7dey>
Want the detail behind any of these: architecture, team shape, delivery timeline?
<a class="link-quiet" href="/contact" data-astro-cid-jljc7dey>Ask us directly</a>. We walk qualified
            prospects through the full anatomy.
</p> </div> </section> ` })}`}` })} `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/work.astro", void 0);

const $$file = "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
