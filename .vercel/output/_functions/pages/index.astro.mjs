import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, F as Fragment } from '../chunks/astro/server_Xkj7_IYx.mjs';
import 'piccolore';
import { f as fetchPage, $ as $$Base, l as lexicalNodeToHtml } from '../chunks/Base_njw7ilXC.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const PAYLOAD_CMS_URL = "http://127.0.0.1:3000";
  let pageData = null;
  try {
    pageData = await fetchPage("home");
  } catch (e) {
    console.warn("[Home Page] Failed to fetch home page data from Payload CMS, using static fallback.", e);
  }
  const metaTitle = pageData?.meta?.title || pageData?.title || "Software That Fits. Software You Own. | Insightive";
  const metaDescription = pageData?.meta?.description || "Fit-built software engineered for how you work and handed over with full ownership. Advisory and Build, from a single process to the platform your business runs on.";
  const layout = pageData?.layout || [];
  const hasDynamicLayout = layout.length > 0;
  const scales = [
    {
      no: "I",
      name: "Process Build",
      misfit: "One workflow stitched across three, four, five tools. One team bending its process to a near-fit SaaS.",
      example: "A campaign ops tool that replaces the five-tool stitch. A pipeline shaped to how your sales team actually sells.",
      duration: "2–8 weeks"
    },
    {
      no: "II",
      name: "System Build",
      misfit: "An operational system that runs a department: rented, near-fit and taxing every day it stays.",
      example: "An ATS processing thousands of CVs daily, integrated with your ERP. Order management shaped to your fulfilment.",
      duration: "2–6 months"
    },
    {
      no: "III",
      name: "Platform Build",
      misfit: "The platform the business runs on. The customisation quote on your desk has seven figures on it.",
      example: "A property management platform built around your portfolio. An ERP replacement that finally matches the operation.",
      duration: "6–18 months"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": metaTitle, "description": metaDescription, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`${hasDynamicLayout ? layout.map((block) => {
    const { blockType } = block;
    if (blockType === "heroBlock" || blockType === "homeHero") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      return renderTemplate`${maybeRenderHead()}<section class="on-dark hero" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <p class="eyebrow fade-up" data-astro-cid-j7pv25f6>${block.eyebrow || "Fit-built software · No lock-in"}</p> ${titleHtml ? renderTemplate`<h1 class="fade-up" data-astro-cid-j7pv25f6>${unescapeHTML(titleHtml)}</h1>` : renderTemplate`<h1 class="fade-up" data-astro-cid-j7pv25f6>
Software that <span class="serif-em" data-astro-cid-j7pv25f6>fits</span>.<br data-astro-cid-j7pv25f6>
Software you <span class="serif-em tick" data-astro-cid-j7pv25f6>own</span>.
</h1>`} <p class="lede fade-up" data-astro-cid-j7pv25f6>${block.subtitle || block.lede}</p> <div class="hero-ctas fade-up" data-astro-cid-j7pv25f6> <a${addAttribute(block.primaryCtaLink || "/contact?service=build", "href")} class="btn btn-primary" data-astro-cid-j7pv25f6> ${block.primaryCtaLabel || "Book a Fit Assessment"} </a> <a${addAttribute(block.secondaryCtaLink || "/thesis", "href")} class="btn btn-ghost" data-astro-cid-j7pv25f6> ${block.secondaryCtaLabel || "Read the Thesis"} </a> </div> </div> <div class="hero-art" aria-hidden="true" data-astro-cid-j7pv25f6> <span class="blk b1" style="--dx:-26px;--dy:-22px;--d:0s" data-astro-cid-j7pv25f6></span> <span class="blk b2" style="--dx:30px;--dy:-24px;--d:.08s" data-astro-cid-j7pv25f6></span> <span class="blk b3" style="--dx:34px;--dy:6px;--d:.16s" data-astro-cid-j7pv25f6></span> <span class="blk b4" style="--dx:-26px;--dy:26px;--d:.12s" data-astro-cid-j7pv25f6></span> <span class="blk b5 cyan" style="--dx:4px;--dy:34px;--d:.2s" data-astro-cid-j7pv25f6></span> <span class="blk b6" style="--dx:30px;--dy:26px;--d:.24s" data-astro-cid-j7pv25f6></span> </div> </section>`;
    }
    if (blockType === "editorialSplit") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode);
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      const contentHtml = block.content?.root ? lexicalNodeToHtml(block.content.root) : "";
      return renderTemplate`<section${addAttribute(`section ${block.tinted ? "tinted" : ""}`, "class")} data-astro-cid-j7pv25f6> <div class="container split" data-astro-cid-j7pv25f6> <div class="split-head" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>${block.eyebrow}</p> ${titleHtml && renderTemplate`<h2 data-astro-cid-j7pv25f6>${unescapeHTML(titleHtml)}</h2>`} ${block.desc && renderTemplate`<p class="section-sub" data-astro-cid-j7pv25f6>${block.desc}</p>`} </div> <div class="split-body" data-astro-cid-j7pv25f6> ${contentHtml && renderTemplate`<div class="editorial-content" data-astro-cid-j7pv25f6>${unescapeHTML(contentHtml)}</div>`} ${block.ctaLink && renderTemplate`<a${addAttribute(block.ctaLink, "href")} class="link-quiet" data-astro-cid-j7pv25f6>${block.ctaLabel} →</a>`} </div> </div> </section>`;
    }
    if (blockType === "homeScales") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      return renderTemplate`<section class="section spectrum" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-j7pv25f6>${block.eyebrow}</p>`} ${titleHtml && renderTemplate`<h2 data-astro-cid-j7pv25f6>${unescapeHTML(titleHtml)}</h2>`} ${block.desc && renderTemplate`<p class="section-sub" data-astro-cid-j7pv25f6>${block.desc}</p>`} <div class="scale-grid fade-up" data-astro-cid-j7pv25f6> ${block.scales?.map((s) => renderTemplate`<article class="scale-card" data-astro-cid-j7pv25f6> <div class="scale-top" data-astro-cid-j7pv25f6> <span class="scale-no" data-astro-cid-j7pv25f6>${s.no}</span> <span class="scale-duration" data-astro-cid-j7pv25f6>${s.duration}</span> </div> <h3 data-astro-cid-j7pv25f6>${s.name}</h3> <p class="scale-misfit" data-astro-cid-j7pv25f6>${s.misfit}</p> <hr class="rule" data-astro-cid-j7pv25f6> <p class="scale-example" data-astro-cid-j7pv25f6>${s.example}</p> </article>`)} </div> ${block.note?.root && renderTemplate`<p class="spectrum-note" data-astro-cid-j7pv25f6>${unescapeHTML(lexicalNodeToHtml(block.note.root))}</p>`} </div> </section>`;
    }
    if (blockType === "homeServices") {
      return renderTemplate`<section class="section" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>${block.eyebrow || "What we do"}</p> <h2 data-astro-cid-j7pv25f6>${block.title || "Two services. One belief: software must fit."}</h2> <p class="svc-principle" data-astro-cid-j7pv25f6>${block.principle}</p> <div class="svc-grid fade-up" data-astro-cid-j7pv25f6> ${block.paths?.map((p) => renderTemplate`<a class="svc-card"${addAttribute(p.ctaLink, "href")} data-astro-cid-j7pv25f6> <div class="svc-ico" data-astro-cid-j7pv25f6> ${p.icon?.url && renderTemplate`<img${addAttribute(p.icon.url.startsWith("http") ? p.icon.url : `${PAYLOAD_CMS_URL}${p.icon.url}`, "src")}${addAttribute(p.icon.alt || "", "alt")} loading="lazy" data-astro-cid-j7pv25f6>`} </div> <p class="svc-label" data-astro-cid-j7pv25f6>${p.label}</p> <h3 data-astro-cid-j7pv25f6>${p.title}</h3> <p data-astro-cid-j7pv25f6>${p.description}</p> <span class="svc-cta" data-astro-cid-j7pv25f6>${p.ctaLabel}</span> </a>`)} </div> </div> </section>`;
    }
    if (blockType === "sectionCta") {
      return renderTemplate`<section class="on-dark section closer" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-j7pv25f6>${block.eyebrow}</p>`} <h2 data-astro-cid-j7pv25f6>${unescapeHTML(block.title)}</h2> <p class="closer-sub" data-astro-cid-j7pv25f6>${block.body}</p> <a${addAttribute(block.ctaLink, "href")} class="btn btn-primary" data-astro-cid-j7pv25f6>${block.ctaLabel}</a> </div> </section>`;
    }
    return null;
  }) : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`   <section class="on-dark hero" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <p class="eyebrow fade-up" data-astro-cid-j7pv25f6>Fit-built software · No lock-in</p> <h1 class="fade-up" data-astro-cid-j7pv25f6>
Software that <span class="serif-em" data-astro-cid-j7pv25f6>fits</span>.<br data-astro-cid-j7pv25f6>
Software you <span class="serif-em tick" data-astro-cid-j7pv25f6>own</span>.
</h1> <p class="lede fade-up" data-astro-cid-j7pv25f6>
We don't adapt your business to off-the-shelf tools. We build software engineered
            precisely for how you work and hand it over with full ownership. No licence tax.
            No dependency on us to keep it running.
</p> <div class="hero-ctas fade-up" data-astro-cid-j7pv25f6> <a href="/contact?service=build" class="btn btn-primary" data-astro-cid-j7pv25f6>Book a Fit Assessment</a> <a href="/thesis" class="btn btn-ghost" data-astro-cid-j7pv25f6>Read the Thesis</a> </div> </div> <div class="hero-art" aria-hidden="true" data-astro-cid-j7pv25f6> <span class="blk b1" style="--dx:-26px;--dy:-22px;--d:0s" data-astro-cid-j7pv25f6></span> <span class="blk b2" style="--dx:30px;--dy:-24px;--d:.08s" data-astro-cid-j7pv25f6></span> <span class="blk b3" style="--dx:34px;--dy:6px;--d:.16s" data-astro-cid-j7pv25f6></span> <span class="blk b4" style="--dx:-26px;--dy:26px;--d:.12s" data-astro-cid-j7pv25f6></span> <span class="blk b5 cyan" style="--dx:4px;--dy:34px;--d:.2s" data-astro-cid-j7pv25f6></span> <span class="blk b6" style="--dx:30px;--dy:26px;--d:.24s" data-astro-cid-j7pv25f6></span> </div> </section>  <section class="section" data-astro-cid-j7pv25f6> <div class="container split" data-astro-cid-j7pv25f6> <div class="split-head" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>The problem</p> <h2 data-astro-cid-j7pv25f6>You're paying a tax you've stopped noticing.</h2> </div> <div class="split-body" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>
It rarely looks like a software problem. It looks like a sales team contorting its
              pipeline into a CRM's objects. A marketing team running one campaign across five
              subscriptions and three automation glues. A spreadsheet layer quietly patching the
              gaps between systems, maintained by the one person who understands it.
</p> <p data-astro-cid-j7pv25f6>
We call it <strong data-astro-cid-j7pv25f6>the near-fit tax</strong>: the recurring cost (in hours, errors,
              workarounds and licence fees) of running your business on software that almost
              fits. It compounds. And because it arrives as a hundred small workarounds rather
              than one invoice, it never gets challenged.
</p> <p data-astro-cid-j7pv25f6>
The disease is the same at every scale: <em data-astro-cid-j7pv25f6>process bending to software</em>.
              So is the cure.
</p> </div> </div> </section>  <section class="section spectrum" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>The cure, at every scale</p> <h2 data-astro-cid-j7pv25f6>Process. System. <span class="serif-em" data-astro-cid-j7pv25f6>Platform.</span></h2> <p class="section-sub" data-astro-cid-j7pv25f6>
Fit-built software isn't only the million-dollar replatform. It starts wherever the
            misfit hurts most and it's sized by the problem, not by your company.
</p> <div class="scale-grid fade-up" data-astro-cid-j7pv25f6> ${scales.map((s) => renderTemplate`<article class="scale-card" data-astro-cid-j7pv25f6> <div class="scale-top" data-astro-cid-j7pv25f6> <span class="scale-no" data-astro-cid-j7pv25f6>${s.no}</span> <span class="scale-duration" data-astro-cid-j7pv25f6>${s.duration}</span> </div> <h3 data-astro-cid-j7pv25f6>${s.name}</h3> <p class="scale-misfit" data-astro-cid-j7pv25f6>${s.misfit}</p> <hr class="rule" data-astro-cid-j7pv25f6> <p class="scale-example" data-astro-cid-j7pv25f6>${s.example}</p> </article>`)} </div> <p class="spectrum-note" data-astro-cid-j7pv25f6>
Every build, at every scale, ends the same way: code, data, infrastructure and
            documentation handed over. <span class="tick" data-astro-cid-j7pv25f6>Owned outright.</span> </p> </div> </section>  <section class="section tinted" data-astro-cid-j7pv25f6> <div class="container split" data-astro-cid-j7pv25f6> <div class="split-head" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>Why now</p> <h2 data-astro-cid-j7pv25f6>The economics of fit just changed.</h2> </div> <div class="split-body" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>
For twenty years, software built to fit was a rich company's privilege. Off-the-shelf
              solved the common 80% at a fraction of the cost; bespoke was reserved for enterprises
              with IT budgets in the tens of millions.
</p> <p data-astro-cid-j7pv25f6>
AI-augmented delivery broke that math. Small senior teams now ship in months what
              traditionally took years. The build that was out of reach on a mid-market budget in
              2022 is, in 2026, cheaper than five years of renting a near-fit.
</p> <blockquote data-astro-cid-j7pv25f6>
The question is no longer "can we afford to build?" It's "can we afford not to own?"
</blockquote> <a href="/thesis" class="link-quiet" data-astro-cid-j7pv25f6>The full argument, in the Thesis →</a> </div> </div> </section>  <section class="section" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>What we do</p> <h2 data-astro-cid-j7pv25f6>Two services. One belief: <span class="serif-em" data-astro-cid-j7pv25f6>software must fit.</span></h2> <p class="svc-principle" data-astro-cid-j7pv25f6>
We sell no software and carry no vendor margin. Either we help you decide
            or we build what you'll own. Nothing in between.
</p> <div class="svc-grid fade-up" data-astro-cid-j7pv25f6> <a class="svc-card" href="/services/advisory" data-astro-cid-j7pv25f6> <div class="svc-ico" aria-hidden="true" data-astro-cid-j7pv25f6><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-j7pv25f6><circle cx="8" cy="16" r="3" stroke="currentColor" stroke-width="1" data-astro-cid-j7pv25f6></circle><circle cx="24" cy="8" r="3" stroke="currentColor" stroke-width="1" data-astro-cid-j7pv25f6></circle><circle cx="24" cy="24" r="3" stroke="currentColor" stroke-width="1" data-astro-cid-j7pv25f6></circle><line x1="11" y1="15" x2="21" y2="9" stroke="currentColor" stroke-width="1" data-astro-cid-j7pv25f6></line><line x1="11" y1="17" x2="21" y2="23" stroke="currentColor" stroke-width="1" data-astro-cid-j7pv25f6></line></svg></div> <p class="svc-label" data-astro-cid-j7pv25f6>01 — Advisory</p> <h3 data-astro-cid-j7pv25f6>Decide what fits.</h3> <p data-astro-cid-j7pv25f6>
Before you commit to the wrong platform (or the wrong build) we map where your
                technology and your process diverge and return one defensible call: stay, extend
                or build. With numbers your board can act on. No platform allegiance.
</p> <span class="svc-cta" data-astro-cid-j7pv25f6>How Advisory works →</span> </a> <a class="svc-card" href="/services/build" data-astro-cid-j7pv25f6> <div class="svc-ico" aria-hidden="true" data-astro-cid-j7pv25f6><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-j7pv25f6><rect x="4" y="22" width="24" height="6" stroke="currentColor" stroke-width="1" data-astro-cid-j7pv25f6></rect><rect x="7" y="14" width="18" height="6" stroke="currentColor" stroke-width="1" data-astro-cid-j7pv25f6></rect><rect x="10" y="6" width="12" height="6" stroke="currentColor" stroke-width="1" data-astro-cid-j7pv25f6></rect></svg></div> <p class="svc-label" data-astro-cid-j7pv25f6>02 — Build</p> <h3 data-astro-cid-j7pv25f6>Process · System · Platform.</h3> <p data-astro-cid-j7pv25f6>
Small, senior, AI-augmented teams build the software your process actually needs,
                from a single workflow tool in weeks to the platform your business runs on. Working
                software every two weeks. Full handover at the end.
</p> <span class="svc-cta" data-astro-cid-j7pv25f6>How Build works →</span> </a> </div> </div> </section>  <section class="on-dark section closer" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Stop renting software that <span class="serif-em" data-astro-cid-j7pv25f6>almost</span> fits.</h2> <p class="closer-sub" data-astro-cid-j7pv25f6>
A Fit Assessment is a focused two-week engagement: we map what you have, diagnose
            what's broken and return a recommendation you can defend, whether or not you
            build with us.
</p> <a href="/contact?service=build" class="btn btn-primary" data-astro-cid-j7pv25f6>Book a Fit Assessment</a> </div> </section> ` })}`}` })} `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/index.astro", void 0);
const $$file = "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
