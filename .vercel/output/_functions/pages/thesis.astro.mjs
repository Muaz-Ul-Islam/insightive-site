import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_Xkj7_IYx.mjs';
import 'piccolore';
import { f as fetchPage, $ as $$Base, l as lexicalNodeToHtml } from '../chunks/Base_njw7ilXC.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Thesis = createComponent(async ($$result, $$props, $$slots) => {
  let pageData = null;
  try {
    pageData = await fetchPage("thesis");
  } catch (e) {
    console.warn("[Thesis Page] Failed to fetch thesis page data from Payload CMS, using static fallback.", e);
  }
  const metaTitle = pageData?.meta?.title || pageData?.title || "The Thesis — Software That Fits. Software You Own. | Insightive";
  const metaDescription = pageData?.meta?.description || "Businesses shouldn't bend to software. The full argument: the near-fit tax, the anatomy of lock-in and why AI-augmented delivery made fit-built software affordable at every scale.";
  const schema = [
    {
      "@type": "Article",
      headline: pageData?.title || "The Thesis: Software That Fits. Software You Own.",
      author: { "@type": "Organization", name: "Insightive Software" },
      publisher: { "@type": "Organization", name: "Insightive Software", url: "https://insightive.io" },
      datePublished: pageData?.publishedAt || "2026-06-10",
      dateModified: pageData?.updatedAt || "2026-06-10"
    }
  ];
  const layout = pageData?.layout || [];
  const hasDynamicLayout = layout.length > 0;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": metaTitle, "description": metaDescription, "type": "article", "schema": schema, "data-astro-cid-rgkt3ysr": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article data-astro-cid-rgkt3ysr> <!-- ============ HERO RENDERER ============ --> ${hasDynamicLayout ? layout.map((block) => {
    if (block.blockType !== "thesisHero") return null;
    const titleNode = block.title?.root;
    let titleHtml = "";
    if (titleNode) {
      const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em tick" });
      titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
    }
    return renderTemplate`<header class="on-dark thesis-hero" data-astro-cid-rgkt3ysr> <div class="container" data-astro-cid-rgkt3ysr> <p class="eyebrow" data-astro-cid-rgkt3ysr>${block.eyebrow || "The thesis"}</p> ${titleHtml ? renderTemplate`<h1 data-astro-cid-rgkt3ysr>${unescapeHTML(titleHtml)}</h1>` : renderTemplate`<h1 data-astro-cid-rgkt3ysr>Businesses shouldn't bend<br data-astro-cid-rgkt3ysr>to <span class="serif-em tick" data-astro-cid-rgkt3ysr>software</span>.</h1>`} <p class="standfirst" data-astro-cid-rgkt3ysr>${block.standfirst}</p> <p class="meta" data-astro-cid-rgkt3ysr>${block.meta}</p> </div> </header>`;
  }) : renderTemplate`<!-- ============ STATIC HERO FALLBACK ============ -->
      <header class="on-dark thesis-hero" data-astro-cid-rgkt3ysr> <div class="container" data-astro-cid-rgkt3ysr> <p class="eyebrow" data-astro-cid-rgkt3ysr>The thesis</p> <h1 data-astro-cid-rgkt3ysr>
Businesses shouldn't bend<br data-astro-cid-rgkt3ysr>to <span class="serif-em tick" data-astro-cid-rgkt3ysr>software</span>.
</h1> <p class="standfirst" data-astro-cid-rgkt3ysr>
Every company we meet is paying for the same mistake: somewhere along the way,
            the tools stopped serving the process and the process started serving the tools.
            This is the argument for the other way around, argued properly, with numbers.
</p> <p class="meta" data-astro-cid-rgkt3ysr>Insightive Software · Published June 2026 · 9 min read</p> </div> </header>`} <!-- ============ BODY / LAYOUT CONTENT ============ --> ${hasDynamicLayout ? layout.some((b) => b.blockType === "sectionProse" || b.blockType === "thesisInfo" || b.blockType === "thesisCta") && renderTemplate`<div class="container thesis-body" data-astro-cid-rgkt3ysr> ${layout.map((block) => {
    const { blockType } = block;
    if (blockType === "sectionProse" || blockType === "thesisInfo") {
      return renderTemplate`<div class="prose" data-astro-cid-rgkt3ysr> <div data-astro-cid-rgkt3ysr>${unescapeHTML(lexicalNodeToHtml(block.content?.root))}</div> </div>`;
    }
    if (blockType === "thesisCta") {
      const textNode = block.text?.root;
      return renderTemplate`<div class="thesis-cta" data-astro-cid-rgkt3ysr> <hr class="rule" data-astro-cid-rgkt3ysr> ${textNode && renderTemplate`<div class="cta-row-text" data-astro-cid-rgkt3ysr>${unescapeHTML(lexicalNodeToHtml(textNode))}</div>`} <div class="cta-row" data-astro-cid-rgkt3ysr> <a${addAttribute(block.primaryCtaLink || "/contact?service=build", "href")} class="btn btn-primary" data-astro-cid-rgkt3ysr> ${block.primaryCtaLabel || "Book a Fit Assessment"} </a> <a${addAttribute(block.secondaryCtaLink || "/services", "href")} class="btn btn-ghost" data-astro-cid-rgkt3ysr> ${block.secondaryCtaLabel || "See the services"} </a> </div> </div>`;
    }
    return null;
  })} </div>` : renderTemplate`<!-- ============ STATIC BODY FALLBACK ============ -->
      <div class="container thesis-body" data-astro-cid-rgkt3ysr> <div class="prose" data-astro-cid-rgkt3ysr> <h2 data-astro-cid-rgkt3ysr>I. The misfit is everywhere, not just in the big systems</h2> <p data-astro-cid-rgkt3ysr>
When people hear "software that doesn't fit," they picture the seven-figure ERP
            that never matched the operation. That happens. But the misfit is far more ordinary
            than that and far more expensive in aggregate.
</p> <p data-astro-cid-rgkt3ysr>
It's the sales team that redesigned its pipeline to match a CRM's object model
            instead of the other way around. It's the marketing team running a single campaign
            across five subscriptions, three automation glues and a shared spreadsheet that
            reconciles what the tools can't. It's the operations manager who is, in practice,
            a human API between systems that were never meant to work together.
</p> <p data-astro-cid-rgkt3ysr>
Each of these looks like a workflow quirk. Together they are a structural condition:
<strong data-astro-cid-rgkt3ysr>process bending to software</strong>. And the cost of that condition has a name.
</p> <aside class="defbox" id="near-fit-tax" data-astro-cid-rgkt3ysr> <p class="defbox-term" data-astro-cid-rgkt3ysr>Definition · the near-fit tax</p> <p data-astro-cid-rgkt3ysr> <strong data-astro-cid-rgkt3ysr>The near-fit tax</strong> is the recurring cost (in hours, errors,
              workarounds, licence fees and forgone decisions) of running a business on
              software that almost fits its process. It compounds annually, arrives as a
              hundred small workarounds rather than one invoice and is therefore almost
              never challenged.
</p> </aside> <h2 data-astro-cid-rgkt3ysr>II. Why near-fit became the default</h2> <p data-astro-cid-rgkt3ysr>
Nobody chooses misfit. They choose the rational option of their era. For twenty
            years, off-the-shelf SaaS was that rational option: it solved the common 80% of a
            problem at a fraction of the cost of building and the remaining 20% was absorbed
            by the organization, quietly, in workarounds.
</p> <p data-astro-cid-rgkt3ysr>
The vendors built an economy on that arrangement. Per-seat pricing that scales with
            your success. Customisation quotes that approach the cost of building from scratch.
            Data held in formats designed to make leaving harder than staying. None of this is
            a scandal; it's the business model working as designed. But it means the 20% you
            absorbed never shrinks. It grows with you and the exit gets more expensive every year.
</p> <blockquote data-astro-cid-rgkt3ysr>
Renting almost-right software is the only purchase a company makes where the
            product's misfit becomes the customer's job to fix.
</blockquote> <figure class="essay-figure" data-astro-cid-rgkt3ysr> <div class="essay-figure-art" aria-hidden="true" data-astro-cid-rgkt3ysr><svg viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg" data-astro-cid-rgkt3ysr><rect width="760" height="200" fill="#F5F4EF" data-astro-cid-rgkt3ysr></rect><text x="40" y="30" style="font-family:var(--mono),monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;fill:#0066CC" data-astro-cid-rgkt3ysr>Near-fit tax: year-on-year compounding</text><line x1="60" y1="172" x2="700" y2="172" stroke="#0066CC" stroke-opacity="0.3" stroke-width="1" data-astro-cid-rgkt3ysr></line><rect x="88" y="158" width="54" height="14" fill="#BA7517" fill-opacity="0.45" data-astro-cid-rgkt3ysr></rect><rect x="174" y="141" width="54" height="31" fill="#BA7517" fill-opacity="0.55" data-astro-cid-rgkt3ysr></rect><rect x="260" y="118" width="54" height="54" fill="#BA7517" fill-opacity="0.65" data-astro-cid-rgkt3ysr></rect><rect x="346" y="89" width="54" height="83" fill="#BA7517" fill-opacity="0.75" data-astro-cid-rgkt3ysr></rect><rect x="432" y="53" width="54" height="119" fill="#BA7517" fill-opacity="0.85" data-astro-cid-rgkt3ysr></rect><rect x="518" y="12" width="54" height="160" fill="#BA7517" fill-opacity="0.9" data-astro-cid-rgkt3ysr></rect><text x="103" y="188" text-anchor="middle" style="font-family:var(--mono),monospace;font-size:9px;fill:#45474F" data-astro-cid-rgkt3ysr>Y1</text><text x="189" y="188" text-anchor="middle" style="font-family:var(--mono),monospace;font-size:9px;fill:#45474F" data-astro-cid-rgkt3ysr>Y2</text><text x="275" y="188" text-anchor="middle" style="font-family:var(--mono),monospace;font-size:9px;fill:#45474F" data-astro-cid-rgkt3ysr>Y3</text><text x="361" y="188" text-anchor="middle" style="font-family:var(--mono),monospace;font-size:9px;fill:#45474F" data-astro-cid-rgkt3ysr>Y4</text><text x="447" y="188" text-anchor="middle" style="font-family:var(--mono),monospace;font-size:9px;fill:#45474F" data-astro-cid-rgkt3ysr>Y5</text><text x="533" y="188" text-anchor="middle" style="font-family:var(--mono),monospace;font-size:9px;fill:#45474F" data-astro-cid-rgkt3ysr>Y6</text></svg></div> <figcaption data-astro-cid-rgkt3ysr>The near-fit tax compounds. Workarounds that felt manageable in year one are structural by year three.</figcaption> </figure> <h2 data-astro-cid-rgkt3ysr>III. What changed: the economics of fit</h2> <p data-astro-cid-rgkt3ysr>
Until recently, the alternative, software built to fit, was a rich company's
            privilege. Bespoke meant years of delivery and enterprise IT budgets. For everyone
            else, near-fit was simply the only seat at the table.
</p> <p data-astro-cid-rgkt3ysr>
AI-augmented delivery broke that math. Small senior teams, orchestrating AI agents
            for the volume work while keeping human judgment on the decisions, now ship in
            months what traditionally took years. The build that was out of reach on a
            mid-market budget in 2022 is, in 2026, routinely cheaper than five years of renting
            a near-fit, before counting the tax itself.
</p> <p data-astro-cid-rgkt3ysr>
This is the part most companies haven't priced in yet: the build-vs-buy equation
            they last calculated years ago has flipped and the spreadsheet they used is stale.
</p> <h2 data-astro-cid-rgkt3ysr>IV. Fit at every scale: Process, System, Platform</h2> <p data-astro-cid-rgkt3ysr>
The second thing that changed is scale. Fit-built software no longer starts at the
            platform level. It starts wherever the misfit hurts most:
</p> <p data-astro-cid-rgkt3ysr> <strong data-astro-cid-rgkt3ysr>Process:</strong> one workflow, one team, weeks. The campaign ops tool that
            replaces a five-tool stitch. The pipeline shaped to how your sales team actually sells.<br data-astro-cid-rgkt3ysr> <strong data-astro-cid-rgkt3ysr>System:</strong> an operational system that runs a department, months. The
            ATS that processes thousands of CVs a day against your ERP. Order management shaped
            to your fulfilment.<br data-astro-cid-rgkt3ysr> <strong data-astro-cid-rgkt3ysr>Platform:</strong> the thing the business runs on, quarters. The property
            platform built around your portfolio, not a vendor's template.
</p> <p data-astro-cid-rgkt3ysr>
Size the engagement by the misfit, not by your company. Most companies should start
            small: one process, one team, one owned tool, then let the result argue for the next one.
</p> <figure class="essay-figure" data-astro-cid-rgkt3ysr> <div class="essay-figure-art" aria-hidden="true" data-astro-cid-rgkt3ysr><svg viewBox="0 0 760 160" xmlns="http://www.w3.org/2000/svg" data-astro-cid-rgkt3ysr><rect width="760" height="160" fill="#F5F4EF" data-astro-cid-rgkt3ysr></rect><text x="40" y="28" style="font-family:var(--mono),monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;fill:#0066CC" data-astro-cid-rgkt3ysr>Fit-built: three scales of misfit</text><rect x="40" y="50" width="160" height="48" fill="none" stroke="#0066CC" stroke-opacity="0.45" stroke-width="1" data-astro-cid-rgkt3ysr></rect><rect x="260" y="50" width="200" height="48" fill="none" stroke="#0066CC" stroke-opacity="0.45" stroke-width="1" data-astro-cid-rgkt3ysr></rect><rect x="540" y="50" width="180" height="48" fill="#0066CC" fill-opacity="0.85" data-astro-cid-rgkt3ysr></rect><text x="120" y="80" text-anchor="middle" style="font-family:var(--sans),sans-serif;font-size:14px;fill:#45474F" data-astro-cid-rgkt3ysr>Process</text><text x="360" y="80" text-anchor="middle" style="font-family:var(--sans),sans-serif;font-size:14px;fill:#45474F" data-astro-cid-rgkt3ysr>System</text><text x="630" y="80" text-anchor="middle" style="font-family:var(--sans),sans-serif;font-size:14px;fill:#F5F4EF" data-astro-cid-rgkt3ysr>Platform</text><text x="120" y="116" text-anchor="middle" style="font-family:var(--mono),monospace;font-size:10px;fill:#45474F" data-astro-cid-rgkt3ysr>2–8 weeks</text><text x="360" y="116" text-anchor="middle" style="font-family:var(--mono),monospace;font-size:10px;fill:#45474F" data-astro-cid-rgkt3ysr>2–6 months</text><text x="630" y="116" text-anchor="middle" style="font-family:var(--mono),monospace;font-size:10px;fill:#45474F" data-astro-cid-rgkt3ysr>6–18 months</text></svg></div> <figcaption data-astro-cid-rgkt3ysr>Fit-built software starts wherever the misfit hurts most. Not every problem needs a platform.</figcaption> </figure> <h2 data-astro-cid-rgkt3ysr>V. What ownership actually means</h2> <p data-astro-cid-rgkt3ysr>
"You own it" is easy to say. Here is what we mean, concretely: the code lives in
            your repositories. The infrastructure runs in your cloud accounts. The documentation,
            architecture records and test suites are handed over with it. There is no licence
            fee, no per-user pricing and no dependency on us to keep it running. If we
            disappeared the day after handover, your software wouldn't notice.
</p> <aside class="defbox" id="fit-built" data-astro-cid-rgkt3ysr> <p class="defbox-term" data-astro-cid-rgkt3ysr>Definition · fit-built software</p> <p data-astro-cid-rgkt3ysr> <strong data-astro-cid-rgkt3ysr>Fit-built software</strong> is software engineered around an organization's
              existing process (rather than a market's average process) and handed over with
              full ownership of code, data, infrastructure and roadmap.
</p> </aside> <p data-astro-cid-rgkt3ysr>
That last clause is the discipline. A build partner who keeps a hook in your system
            (a licence, a proprietary layer, a hosting dependency) has rebuilt the landlord
            relationship with extra steps. Ownership is only real when the handover is total.
</p> <h2 data-astro-cid-rgkt3ysr>VI. The decision in front of you</h2> <p data-astro-cid-rgkt3ysr>
None of this means everything should be built. Plenty of near-fit software is good
            enough and the honest answer is often "stay." The point is that <em data-astro-cid-rgkt3ysr>the question
            deserves real numbers</em>: what the current misfit costs you per year, what closing
            it would cost once and which way the five-year math points. That's a two-week
            diagnosis, not a leap of faith.
</p> <p data-astro-cid-rgkt3ysr>
The question is no longer <em data-astro-cid-rgkt3ysr>"can we afford to build?"</em> It's
<em data-astro-cid-rgkt3ysr>"can we afford not to own?"</em> And for the first time, it has a defensible,
            calculable answer.
</p> </div> <!-- CTA rail --> <div class="thesis-cta" data-astro-cid-rgkt3ysr> <hr class="rule" data-astro-cid-rgkt3ysr> <p data-astro-cid-rgkt3ysr>
Want the answer for your own stack? A Fit Assessment is two weeks: we map what you
            have, price the misfit and return the call: stay, extend or build.
</p> <div class="cta-row" data-astro-cid-rgkt3ysr> <a href="/contact?service=build" class="btn btn-primary" data-astro-cid-rgkt3ysr>Book a Fit Assessment</a> <a href="/services" class="btn btn-ghost" data-astro-cid-rgkt3ysr>See the services</a> </div> </div> </div>`} </article> ` })} `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/thesis.astro", void 0);
const $$file = "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/thesis.astro";
const $$url = "/thesis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Thesis,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
