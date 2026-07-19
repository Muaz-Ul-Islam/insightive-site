import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../../chunks/astro/server_Xkj7_IYx.mjs';
import 'piccolore';
import { b as fetchIndustryBySlug, l as lexicalNodeToHtml, c as fetchIndustries, $ as $$Base } from '../../chunks/Base_njw7ilXC.mjs';
import { g as getCollection, r as renderEntry } from '../../chunks/_astro_content_CQPFckIl.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://insightive.io");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let cmsInd = null;
  let localInd = null;
  try {
    cmsInd = await fetchIndustryBySlug(slug);
  } catch (e) {
    console.warn(`[Industries/${slug}] Failed to fetch from CMS, trying local markdown.`, e);
  }
  if (!cmsInd) {
    try {
      const localIndustries = await getCollection("industries");
      const match = localIndustries.find((i) => i.id.replace(/\.md$/, "") === slug);
      if (match) localInd = match;
    } catch (e) {
      console.warn(`[Industries/${slug}] Failed to fetch local markdown.`, e);
    }
  }
  if (!cmsInd && !localInd) {
    return Astro2.redirect("/404");
  }
  let LocalContent = null;
  if (localInd) {
    const { Content } = await renderEntry(localInd);
    LocalContent = Content;
  }
  const name = cmsInd?.name ?? localInd?.data?.name ?? "";
  const dek = cmsInd?.dek ?? localInd?.data?.dek ?? "";
  const rawMisfits = cmsInd?.misfits ?? localInd?.data?.misfits ?? [];
  const rawBuilds = cmsInd?.builds ?? localInd?.data?.builds ?? [];
  const misfits = rawMisfits.map(
    (m) => typeof m === "string" ? m : m.misfit ?? m.value ?? String(m)
  );
  const builds = rawBuilds.map(
    (b) => typeof b === "string" ? b : b.build ?? b.value ?? String(b)
  );
  const rawFaq = cmsInd?.faq ?? localInd?.data?.faq ?? [];
  const faq = rawFaq.map((f) => ({
    q: f.question ?? f.q ?? "",
    a: f.answer ?? f.a ?? ""
  }));
  let proseHtml = "";
  if (cmsInd?.content?.root) {
    proseHtml = lexicalNodeToHtml(cmsInd.content.root);
  }
  let rawOthers = [];
  if (cmsInd) {
    const related = cmsInd.relatedIndustries || [];
    rawOthers = related.filter((r) => r && typeof r === "object");
    if (rawOthers.length === 0) {
      try {
        const allCms = await fetchIndustries();
        rawOthers = allCms.filter((i) => i.slug !== slug).slice(0, 3);
      } catch (e) {
        console.warn("Failed to fetch fallback related industries from CMS", e);
      }
    }
  } else {
    try {
      const allLocal = await getCollection("industries");
      rawOthers = allLocal.filter((i) => i.id.replace(/\.md$/, "") !== slug).sort((a, b) => a.data.order - b.data.order).slice(0, 3);
    } catch (e) {
      console.warn("Failed to get local related industries", e);
    }
  }
  const others = rawOthers.map((o) => {
    if (o.data) return o;
    return {
      ...o,
      data: {
        name: o.name || "",
        dek: o.dek || ""
      }
    };
  });
  function indSlug(o) {
    return o.slug ?? o.id?.replace(/\.md$/, "") ?? "";
  }
  const metaTitle = `${name} \u2014 Fit-Built Software | Insightive`;
  const metaDescription = dek;
  const schema = faq.length ? [
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    }
  ] : [];
  console.log("Industries DYNAMIC PAGE LOADED !");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": metaTitle, "description": metaDescription, "schema": schema, "data-astro-cid-zn3acpsv": true }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<section class="section" data-astro-cid-zn3acpsv> <div class="container" data-astro-cid-zn3acpsv> <p class="eyebrow" data-astro-cid-zn3acpsv>Industries · ${name}</p> <h1 data-astro-cid-zn3acpsv>${name}</h1> <p class="sub" data-astro-cid-zn3acpsv>${dek}</p> </div> </section> ${(misfits.length > 0 || builds.length > 0) && renderTemplate`<section class="container ind-grid fade-up" data-astro-cid-zn3acpsv> <div data-astro-cid-zn3acpsv> <h2 class="col-head" data-astro-cid-zn3acpsv>The misfit pattern</h2> <ul class="misfits" data-astro-cid-zn3acpsv> ${misfits.map((m) => renderTemplate`<li data-astro-cid-zn3acpsv>${m}</li>`)} </ul> </div> <div data-astro-cid-zn3acpsv> <h2 class="col-head" data-astro-cid-zn3acpsv>What we build here</h2> <ul class="builds" data-astro-cid-zn3acpsv> ${builds.map((b) => renderTemplate`<li data-astro-cid-zn3acpsv>${b}</li>`)} </ul> </div> </section>`}<section class="section" data-astro-cid-zn3acpsv> <div class="container" data-astro-cid-zn3acpsv> <div class="prose ind-prose" data-astro-cid-zn3acpsv> ${proseHtml ? renderTemplate`<div data-astro-cid-zn3acpsv>${unescapeHTML(proseHtml)}</div>` : LocalContent ? renderTemplate`${renderComponent($$result2, "LocalContent", LocalContent, { "data-astro-cid-zn3acpsv": true })}` : null} </div> </div> </section> ${faq.length > 0 && renderTemplate`<section class="section faq-section" data-astro-cid-zn3acpsv> <div class="container" data-astro-cid-zn3acpsv> <p class="eyebrow" data-astro-cid-zn3acpsv>Common questions</p> <div class="faq-list fade-up" data-astro-cid-zn3acpsv> ${faq.map((f) => renderTemplate`<div class="faq-item" data-astro-cid-zn3acpsv> <h2 class="faq-q" data-astro-cid-zn3acpsv>${f.q}</h2> <p class="faq-a" data-astro-cid-zn3acpsv>${f.a}</p> </div>`)} </div> </div> </section>`}${others.length > 0 && renderTemplate`<section class="section related" data-astro-cid-zn3acpsv> <div class="container" data-astro-cid-zn3acpsv> <p class="eyebrow" data-astro-cid-zn3acpsv>Other industries we build for</p> <ul class="related-list" data-astro-cid-zn3acpsv> ${others.map((o) => renderTemplate`<li data-astro-cid-zn3acpsv> <a${addAttribute(`/industries/${indSlug(o)}`, "href")} data-astro-cid-zn3acpsv> <span class="rl-title" data-astro-cid-zn3acpsv>${o.data.name}</span> <span class="rl-dek" data-astro-cid-zn3acpsv>${o.data.dek}</span> </a> </li>`)} </ul> </div> </section>`}<section class="section on-dark" data-astro-cid-zn3acpsv> <div class="container" data-astro-cid-zn3acpsv> <h2 data-astro-cid-zn3acpsv>Recognize the pattern?</h2> <p class="cta-sub" data-astro-cid-zn3acpsv>
A two-week Fit Assessment maps your specific misfit, prices it and returns the
        call: stay, extend or build.
</p> <a href="/contact?service=build" class="btn btn-primary" data-astro-cid-zn3acpsv>Book a Fit Assessment</a> </div> </section> ` })} `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/industries/[slug].astro", void 0);

const $$file = "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/industries/[slug].astro";
const $$url = "/industries/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
