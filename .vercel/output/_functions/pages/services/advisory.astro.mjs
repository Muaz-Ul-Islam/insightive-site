import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../../chunks/astro/server_Xkj7_IYx.mjs';
import 'piccolore';
import { f as fetchPage, $ as $$Base, l as lexicalNodeToHtml } from '../../chunks/Base_njw7ilXC.mjs';
import { p as partners } from '../../chunks/partners_C_DrOQ5E.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Advisory = createComponent(async ($$result, $$props, $$slots) => {
  const PAYLOAD_CMS_URL = "http://127.0.0.1:3000";
  let pageData = null;
  try {
    pageData = await fetchPage("services/advisory");
    if (!pageData) {
      pageData = await fetchPage("advisory");
    }
  } catch (e) {
    console.warn("[Advisory Page] Failed to fetch advisory page data from Payload CMS, using static fallback.", e);
  }
  const metaTitle = pageData?.meta?.title || pageData?.title || "Advisory — Decide What Fits | Insightive";
  const metaDescription = pageData?.meta?.description || "Vendor-neutral advisory for operators and boards. One defensible recommendation (stay, extend or build) backed by numbers. No platforms to sell.";
  const schema = [
    {
      "@type": "Service",
      name: "Advisory",
      serviceType: "Technology Strategy & Advisory",
      provider: { "@type": "Organization", name: "Insightive Software", url: "https://insightive.io" },
      areaServed: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "United States", "Canada"],
      description: "Vendor-neutral technology advisory: one defensible recommendation (stay, extend or build) backed by a financial model."
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a technology advisory engagement deliver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A written recommendation (stay, extend or build) backed by a TCO and ROI model over 3- and 5-year horizons, a roadmap if the answer is build or extend, plus an AI opportunity note. Defensible to a board or PE sponsor."
          }
        },
        {
          "@type": "Question",
          name: "How long does the diagnosis take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Diagnose runs 1–4 weeks (stakeholder interviews, systems inventory, real cost analysis). Decide takes a further 1–2 weeks and ends with the written recommendation."
          }
        },
        {
          "@type": "Question",
          name: "Are you tied to any platform or vendor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We have no platform allegiance and no implementation hours to protect. When the right answer is to stay on your current stack, that is the recommendation you get."
          }
        }
      ]
    }
  ];
  const layout = pageData?.layout || [];
  const hasDynamicLayout = layout.length > 0;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": metaTitle, "description": metaDescription, "schema": schema, "data-astro-cid-sminsivl": true }, { "default": async ($$result2) => renderTemplate`${hasDynamicLayout ? layout.map((block) => {
    const { blockType } = block;
    if (blockType === "heroBlock" || blockType === "advisoryHero") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em tick" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      const ctaLabel = block.primaryCtaLabel || block.ctaLabel;
      const ctaLink = block.primaryCtaLink || block.ctaLink;
      return renderTemplate`${maybeRenderHead()}<section class="section adv-hero" data-astro-cid-sminsivl> <div class="container" data-astro-cid-sminsivl> <p class="eyebrow" data-astro-cid-sminsivl>${block.eyebrow}</p> ${titleHtml ? renderTemplate`<h1 data-astro-cid-sminsivl>${unescapeHTML(titleHtml)}</h1>` : renderTemplate`<h1 data-astro-cid-sminsivl>Decide what <span class="serif-em tick" data-astro-cid-sminsivl>fits</span>.</h1>`} <p class="sub" data-astro-cid-sminsivl>${block.subtitle}</p> ${ctaLabel && renderTemplate`<a${addAttribute(ctaLink || "/contact?service=advisory", "href")} class="btn btn-primary" data-astro-cid-sminsivl> ${ctaLabel} </a>`} </div> </section>`;
    }
    if (blockType === "sectionProse") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      return renderTemplate`<section${addAttribute(`section ${block.tinted ? "tinted" : ""}`, "class")} data-astro-cid-sminsivl> <div class="container prose-wrap" data-astro-cid-sminsivl> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-sminsivl>${block.eyebrow}</p>`} ${titleHtml && renderTemplate`<h2 data-astro-cid-sminsivl>${unescapeHTML(titleHtml)}</h2>`} <div class="prose" data-astro-cid-sminsivl> <div data-astro-cid-sminsivl>${unescapeHTML(lexicalNodeToHtml(block.content?.root))}</div> </div> ${block.ctaLabel && renderTemplate`<a${addAttribute(block.ctaLink || "/contact?service=advisory", "href")} class="btn btn-primary" data-astro-cid-sminsivl> ${block.ctaLabel} </a>`} </div> </section>`;
    }
    if (blockType === "advisoryDomains") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      return renderTemplate`<section class="section" data-astro-cid-sminsivl> <div class="container" data-astro-cid-sminsivl> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-sminsivl>${block.eyebrow}</p>`} ${titleHtml && renderTemplate`<h2 data-astro-cid-sminsivl>${unescapeHTML(titleHtml)}</h2>`} <div class="domain-list" data-astro-cid-sminsivl> ${block.domains?.map((d, i) => renderTemplate`<div class="domain" data-astro-cid-sminsivl> <span class="d-no" data-astro-cid-sminsivl>${String(i + 1).padStart(2, "0")}</span> <div data-astro-cid-sminsivl> <h3 data-astro-cid-sminsivl>${d.name}</h3> <p data-astro-cid-sminsivl>${d.body}</p> ${d.partners && d.partners.length > 0 ? renderTemplate`<div class="d-partners" data-astro-cid-sminsivl> <span class="d-partners-label" data-astro-cid-sminsivl>Delivered with</span> ${d.partners.map((p) => {
        const partnerObj = typeof p === "object" ? p : null;
        if (!partnerObj) return null;
        const pId = partnerObj.slug || partnerObj.id;
        const pLogo = partnerObj.logo?.url ? partnerObj.logo.url.startsWith("/") ? `${PAYLOAD_CMS_URL}${partnerObj.logo.url}` : partnerObj.logo.url : null;
        const logoReady = partnerObj.logoReady ?? false;
        return renderTemplate`<a class="plogo"${addAttribute(`/partners#${pId}`, "href")}${addAttribute(`${partnerObj.name}: ${partnerObj.capability}. See on the partners page.`, "aria-label")} data-astro-cid-sminsivl> ${logoReady && pLogo ? renderTemplate`<img${addAttribute(pLogo, "src")}${addAttribute(`${partnerObj.name} logo`, "alt")} loading="lazy" decoding="async" data-astro-cid-sminsivl>` : partnerObj.name} </a>`;
      })} </div>` : partners.filter((p) => p.domain === d.name).length > 0 && renderTemplate`<div class="d-partners" data-astro-cid-sminsivl> <span class="d-partners-label" data-astro-cid-sminsivl>Delivered with</span> ${partners.filter((p) => p.domain === d.name).map((p) => renderTemplate`<a class="plogo"${addAttribute(`/partners#${p.id}`, "href")}${addAttribute(`${p.name}: ${p.capability}. See on the partners page.`, "aria-label")} data-astro-cid-sminsivl> ${p.logoReady ? renderTemplate`<img${addAttribute(p.logo, "src")}${addAttribute(`${p.name} logo`, "alt")} loading="lazy" decoding="async" data-astro-cid-sminsivl>` : p.name} </a>`)} </div>`} </div> </div>`)} </div> ${block.boundaryNote && renderTemplate`<p class="boundary" data-astro-cid-sminsivl>${block.boundaryNote}</p>`} </div> </section>`;
    }
    if (blockType === "sectionSteps") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      return renderTemplate`<section${addAttribute(`section ${block.darkBackground ? "on-dark" : ""}`, "class")} data-astro-cid-sminsivl> <div class="container" data-astro-cid-sminsivl> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-sminsivl>${block.eyebrow}</p>`} ${titleHtml && renderTemplate`<h2 data-astro-cid-sminsivl>${unescapeHTML(titleHtml)}</h2>`} <div class="steps" data-astro-cid-sminsivl> ${block.steps?.map((step) => renderTemplate`<div class="step" data-astro-cid-sminsivl> <p class="step-meta" data-astro-cid-sminsivl>${step.meta}</p> <h3 data-astro-cid-sminsivl>${step.name}</h3> <p data-astro-cid-sminsivl>${step.body}</p> </div>`)} </div> </div> </section>`;
    }
    return null;
  }) : renderTemplate`<!-- Fallback Static Layout -->
    <!-- Hero -->
    <section class="section adv-hero" data-astro-cid-sminsivl> <div class="container" data-astro-cid-sminsivl> <p class="eyebrow" data-astro-cid-sminsivl>01 — Advisory</p> <h1 data-astro-cid-sminsivl>Decide what <span class="serif-em tick" data-astro-cid-sminsivl>fits</span>.</h1> <p class="sub" data-astro-cid-sminsivl>
Get the defensible answer before you commit to the wrong platform or the wrong
          build. We map where your technology is breaking down, diagnose fit-to-process and
          return the call: <strong data-astro-cid-sminsivl>stay, extend or build</strong>, with the numbers your
          board can act on. No platform allegiance. No implementation hours to protect.
</p> <a href="/contact?service=advisory" class="btn btn-primary" data-astro-cid-sminsivl>Book a Discovery Call</a> </div> </section>

    <!-- The appeal -->
    <section class="section tinted" data-astro-cid-sminsivl> <div class="container prose-wrap" data-astro-cid-sminsivl> <p class="eyebrow" data-astro-cid-sminsivl>Why this exists</p> <h2 data-astro-cid-sminsivl>Most technology decisions are made with a vendor in the room.</h2> <div class="prose" data-astro-cid-sminsivl> <p data-astro-cid-sminsivl>
The platform vendor has a licence to sell. The implementation partner has hours to
            bill. The internal champion has a preference to defend. What's missing is the party
            whose only deliverable is the right answer.
</p> <p data-astro-cid-sminsivl>
That's the role we take. The engagement ends with a written recommendation you can
            defend to a board, a sponsor or yourself, plus four honest exits: act on the
            document alone, transition into a Build, keep us on as advisor, or get referred to
            the right partner when the scope sits outside our depth.
</p> </div> </div> </section>

    <!-- Domains -->
    <section class="section" data-astro-cid-sminsivl> <div class="container" data-astro-cid-sminsivl> <p class="eyebrow" data-astro-cid-sminsivl>What we advise on</p> <h2 data-astro-cid-sminsivl>Six domains. <span class="serif-em" data-astro-cid-sminsivl>Deliberately narrow.</span></h2> <div class="domain-list" data-astro-cid-sminsivl> ${[
    {
      name: "Software & Platform Strategy",
      body: "Build vs buy. Stack rationalisation. Architecture decisions. Platform replacement assessments. Technical debt audits."
    },
    {
      name: "Process Fit Diagnosis",
      body: "Where your teams bend to their tools: the CRM contortions, the five-tool stitches, the spreadsheet layer. We price the misfit and name the fix."
    },
    {
      name: "AI Strategy & Opportunity Assessment",
      body: "Where AI actually belongs in your business. What to build AI-native, what to add AI to later, what to leave alone. The honest answer."
    },
    {
      name: "Technology Due Diligence",
      body: "For PE firms, boards and investors evaluating technology in an acquisition, investment or roll-up. Independent, fast, defensible."
    },
    {
      name: "Commerce Ecosystem Strategy",
      body: "Stack audits and architecture for D2C and mid-market commerce operators: Shopify, 3PL, analytics, attribution. Implementation, where needed, runs through named partners; we stay on the architecture and the assessment."
    },
    {
      name: "Marketing, Brand & Automation Strategy",
      body: "CRM, email, attribution, automation. Where HubSpot or Klaviyo is the right call and where a bespoke stack makes more sense."
    }
  ].map((d, i) => renderTemplate`<div class="domain" data-astro-cid-sminsivl> <span class="d-no" data-astro-cid-sminsivl>${String(i + 1).padStart(2, "0")}</span> <div data-astro-cid-sminsivl> <h3 data-astro-cid-sminsivl>${d.name}</h3> <p data-astro-cid-sminsivl>${d.body}</p> ${partners.filter((p) => p.domain === d.name).length > 0 && renderTemplate`<div class="d-partners" data-astro-cid-sminsivl> <span class="d-partners-label" data-astro-cid-sminsivl>Delivered with</span> ${partners.filter((p) => p.domain === d.name).map((p) => renderTemplate`<a class="plogo"${addAttribute(`/partners#${p.id}`, "href")}${addAttribute(`${p.name}: ${p.capability}. See on the partners page.`, "aria-label")} data-astro-cid-sminsivl> ${p.logoReady ? renderTemplate`<img${addAttribute(p.logo, "src")}${addAttribute(`${p.name} logo`, "alt")} loading="lazy" decoding="async" data-astro-cid-sminsivl>` : p.name} </a>`)} </div>`} </div> </div>`)} </div> <p class="boundary" data-astro-cid-sminsivl>
We don't advise on ERP back-office beyond our platform expertise, HR or real-estate
          systems beyond software selection, or generic "digital transformation roadmaps."
          When your question sits outside these six domains, we say so and refer you well.
</p> </div> </section>

    <!-- Partner model -->
    <section class="section tinted" data-astro-cid-sminsivl> <div class="container prose-wrap" data-astro-cid-sminsivl> <p class="eyebrow" data-astro-cid-sminsivl>How delivery works</p> <h2 data-astro-cid-sminsivl>We sell no software. We advise <span class="serif-em" data-astro-cid-sminsivl>or we build.</span></h2> <div class="prose" data-astro-cid-sminsivl> <p data-astro-cid-sminsivl>
When an advisory engagement ends in <strong data-astro-cid-sminsivl>software to be built</strong>, that is
            Insightive's own work, one hundred percent. No subcontracted builds, no white-labels.
</p> <p data-astro-cid-sminsivl>
When the recommendation calls for execution outside our build scope (commerce
            platform implementation, Amazon marketplace operations, logistics and warehousing,
            growth and marketing) we engage partners who are experts in exactly that and we
            name them against the relevant advisory domain above. Today those partners are
<strong data-astro-cid-sminsivl>Devsinc</strong> (Shopify), <strong data-astro-cid-sminsivl>ThisWayUP</strong> (Amazon marketing),
<strong data-astro-cid-sminsivl>Unity Retail</strong> (logistics and warehousing) and
<strong data-astro-cid-sminsivl>Synarc</strong> (digital marketing and retail intelligence).
            Partner-delivered work is always labeled as partner-delivered; the advice that
            led to it stays independent, because we take no margin disguised as a recommendation.
</p> <p data-astro-cid-sminsivl>
That's the whole model. We never sell you software. Either we help you decide
            or we build what you'll own.
</p> </div> </div> </section>

    <!-- Process -->
    <section class="section on-dark" data-astro-cid-sminsivl> <div class="container" data-astro-cid-sminsivl> <p class="eyebrow" data-astro-cid-sminsivl>How it runs</p> <h2 data-astro-cid-sminsivl>Diagnose. Decide. <span class="serif-em" data-astro-cid-sminsivl>Close or continue.</span></h2> <div class="steps" data-astro-cid-sminsivl> <div class="step" data-astro-cid-sminsivl> <p class="step-meta" data-astro-cid-sminsivl>Step 1 · 1–4 weeks</p> <h3 data-astro-cid-sminsivl>Diagnose</h3> <p data-astro-cid-sminsivl>Stakeholder interviews, systems inventory, real cost analysis. We map what's breaking down and what it costs you per year.</p> </div> <div class="step" data-astro-cid-sminsivl> <p class="step-meta" data-astro-cid-sminsivl>Step 2 · 1–2 weeks</p> <h3 data-astro-cid-sminsivl>Decide</h3> <p data-astro-cid-sminsivl>The written recommendation: stay, extend or build, backed by TCO and ROI across 3- and 5-year horizons. One answer, not a three-option deck.</p> </div> <div class="step" data-astro-cid-sminsivl> <p class="step-meta" data-astro-cid-sminsivl>Step 3 · your choice</p> <h3 data-astro-cid-sminsivl>Close or continue</h3> <p data-astro-cid-sminsivl>Take the document and act on it. Transition into a Build. Keep us on as advisor. Or get handed to the right partner, cleanly.</p> </div> </div> </div> </section>

    <!-- Who -->
    <section class="section" data-astro-cid-sminsivl> <div class="container prose-wrap" data-astro-cid-sminsivl> <p class="eyebrow" data-astro-cid-sminsivl>Who this is for</p> <h2 data-astro-cid-sminsivl>Operators with a decision on the desk.</h2> <div class="prose" data-astro-cid-sminsivl> <p data-astro-cid-sminsivl>
A founder deciding whether the stack survives the next stage of growth. An
            SME operator with a customisation quote that feels wrong. A board or PE sponsor
            who needs an independent read on technology before money moves. If you're holding
            a decision like that, the diagnosis pays for itself in clarity alone.
</p> </div> <a href="/contact?service=advisory" class="btn btn-primary" data-astro-cid-sminsivl>Book a Discovery Call</a> </div> </section>`}` })} `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/services/advisory.astro", void 0);
const $$file = "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/services/advisory.astro";
const $$url = "/services/advisory";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Advisory,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
