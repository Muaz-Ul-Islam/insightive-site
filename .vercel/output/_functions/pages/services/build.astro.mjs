import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../../chunks/astro/server_Xkj7_IYx.mjs';
import 'piccolore';
import { f as fetchPage, $ as $$Base, l as lexicalNodeToHtml } from '../../chunks/Base_njw7ilXC.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Build = createComponent(async ($$result, $$props, $$slots) => {
  let pageData = null;
  try {
    pageData = await fetchPage("services/build");
    if (!pageData) {
      pageData = await fetchPage("build");
    }
  } catch (e) {
    console.warn("[Build Page] Failed to fetch build page data from Payload CMS, using static fallback.", e);
  }
  const metaTitle = pageData?.meta?.title || pageData?.title || "Build \u2014 Process \xB7 System \xB7 Platform | Insightive";
  const metaDescription = pageData?.meta?.description || "Fit-built software at three scales: a single workflow in weeks, an operational system in months, or the platform your business runs on. Owned outright: code, data, roadmap.";
  const schema = [
    {
      "@type": "Service",
      name: "Build \u2014 Process \xB7 System \xB7 Platform",
      serviceType: "Fit-Built Software Development",
      provider: { "@type": "Organization", name: "Insightive Software", url: "https://insightive.io" },
      areaServed: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "United States", "Canada"],
      description: "Fit-built software at three scales: Process (weeks), System (months), Platform (quarters). AI-augmented delivery, full ownership at handover."
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: 'What does "full ownership" include at handover?',
          acceptedAnswer: {
            "@type": "Answer",
            text: "The complete production codebase in your repositories, infrastructure in your cloud accounts, architecture documentation, QA test suites, deployment runbooks and knowledge transfer sessions. No licence fees, no per-user pricing, no dependency on Insightive to keep it running."
          }
        },
        {
          "@type": "Question",
          name: "How can custom-built software be affordable for mid-market companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI-augmented delivery: small senior teams orchestrate AI agents for volume work while keeping human judgment on decisions. This ships in months what traditionally took years, typically cheaper over five years than renting near-fit SaaS."
          }
        },
        {
          "@type": "Question",
          name: "What is a Process Build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Process Build is a fit-built tool for a single workflow or team (typically replacing several stitched SaaS tools or a near-fit subscription) delivered in 2\u20138 weeks and owned outright."
          }
        }
      ]
    }
  ];
  const layout = pageData?.layout || [];
  const hasDynamicLayout = layout.length > 0;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": metaTitle, "description": metaDescription, "schema": schema, "data-astro-cid-eeeiwkxu": true }, { "default": async ($$result2) => renderTemplate`${hasDynamicLayout ? layout.map((block) => {
    const { blockType } = block;
    if (blockType === "heroBlock" || blockType === "buildHero") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em tick" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      const ctaLabel = block.primaryCtaLabel || block.ctaLabel;
      const ctaLink = block.primaryCtaLink || block.ctaLink;
      return renderTemplate`${maybeRenderHead()}<section class="section build-hero" data-astro-cid-eeeiwkxu> <div class="container" data-astro-cid-eeeiwkxu> <p class="eyebrow" data-astro-cid-eeeiwkxu>${block.eyebrow}</p> ${titleHtml ? renderTemplate`<h1 data-astro-cid-eeeiwkxu>${unescapeHTML(titleHtml)}</h1>` : renderTemplate`<h1 data-astro-cid-eeeiwkxu>Sized by the misfit.<br data-astro-cid-eeeiwkxu><span class="serif-em tick" data-astro-cid-eeeiwkxu>Not by your company.</span></h1>`} <p class="sub" data-astro-cid-eeeiwkxu>${block.subtitle}</p> ${ctaLabel && renderTemplate`<a${addAttribute(ctaLink || "/contact?service=build", "href")} class="btn btn-primary" data-astro-cid-eeeiwkxu> ${ctaLabel} </a>`} </div> </section>`;
    }
    if (blockType === "buildScales") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      return renderTemplate`<section class="section tinted" data-astro-cid-eeeiwkxu> <div class="container" data-astro-cid-eeeiwkxu> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-eeeiwkxu>${block.eyebrow}</p>`} ${titleHtml && renderTemplate`<h2 data-astro-cid-eeeiwkxu>${unescapeHTML(titleHtml)}</h2>`} <div class="scales" data-astro-cid-eeeiwkxu> ${block.scales?.map((s) => renderTemplate`<article class="scale" data-astro-cid-eeeiwkxu> <div class="scale-head" data-astro-cid-eeeiwkxu> <span class="s-no" data-astro-cid-eeeiwkxu>${s.no}</span> <h3 data-astro-cid-eeeiwkxu>${s.name}</h3> <div class="s-meta" data-astro-cid-eeeiwkxu> <span data-astro-cid-eeeiwkxu>${s.duration}</span> <span data-astro-cid-eeeiwkxu>${s.team}</span> </div> </div> <div class="scale-cols" data-astro-cid-eeeiwkxu> <div data-astro-cid-eeeiwkxu> <p class="col-label" data-astro-cid-eeeiwkxu>The misfit</p> <p data-astro-cid-eeeiwkxu>${s.misfit}</p> </div> <div data-astro-cid-eeeiwkxu> <p class="col-label" data-astro-cid-eeeiwkxu>What you end with</p> <p data-astro-cid-eeeiwkxu>${s.outcome}</p> </div> <div data-astro-cid-eeeiwkxu> <p class="col-label" data-astro-cid-eeeiwkxu>Examples</p> <ul data-astro-cid-eeeiwkxu> ${s.examples?.map((e) => renderTemplate`<li data-astro-cid-eeeiwkxu>${e.example}</li>`)} </ul> </div> </div> </article>`)} </div> ${block.scalesNote && renderTemplate`<p class="scales-note" data-astro-cid-eeeiwkxu>${block.scalesNote}</p>`} </div> </section>`;
    }
    if (blockType === "sectionSteps") {
      const titleNode = block.title?.root;
      let titleHtml = "";
      if (titleNode) {
        const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em" });
        titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
      }
      return renderTemplate`<section${addAttribute(`section ${block.darkBackground ? "on-dark" : ""}`, "class")} data-astro-cid-eeeiwkxu> <div class="container" data-astro-cid-eeeiwkxu> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-eeeiwkxu>${block.eyebrow}</p>`} ${titleHtml && renderTemplate`<h2 data-astro-cid-eeeiwkxu>${unescapeHTML(titleHtml)}</h2>`} <div class="phases" data-astro-cid-eeeiwkxu> ${block.steps?.map((step) => renderTemplate`<div class="phase" data-astro-cid-eeeiwkxu> <p class="phase-meta" data-astro-cid-eeeiwkxu>${step.meta}</p> <h3 data-astro-cid-eeeiwkxu>${step.name}</h3> <p data-astro-cid-eeeiwkxu>${step.body}</p> </div>`)} </div> </div> </section>`;
    }
    if (blockType === "buildSplit") {
      return renderTemplate`<section class="section on-dark" data-astro-cid-eeeiwkxu> <div class="container split2" data-astro-cid-eeeiwkxu> ${block.columns?.map((col) => {
        const titleNode = col.title?.root;
        let titleHtml = "";
        if (titleNode) {
          const parsed = lexicalNodeToHtml(titleNode, { italicClass: "serif-em" });
          titleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
        }
        return renderTemplate`<div data-astro-cid-eeeiwkxu> ${col.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-eeeiwkxu>${col.eyebrow}</p>`} ${titleHtml && renderTemplate`<h2 data-astro-cid-eeeiwkxu>${unescapeHTML(titleHtml)}</h2>`} <p class="dark-body" data-astro-cid-eeeiwkxu>${col.body}</p> </div>`;
      })} </div> </section>`;
    }
    if (blockType === "sectionCta") {
      return renderTemplate`<section class="section" data-astro-cid-eeeiwkxu> <div class="container" data-astro-cid-eeeiwkxu> ${block.eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-eeeiwkxu>${block.eyebrow}</p>`} <h2 data-astro-cid-eeeiwkxu>${unescapeHTML(block.title)}</h2> <p class="cta-sub" data-astro-cid-eeeiwkxu>${block.body}</p> <a${addAttribute(block.ctaLink, "href")} class="btn btn-primary" data-astro-cid-eeeiwkxu>${block.ctaLabel}</a> </div> </section>`;
    }
    return null;
  }) : renderTemplate`<!-- Fallback Static Layout -->
    <!-- Hero -->
    <section class="section build-hero" data-astro-cid-eeeiwkxu> <div class="container" data-astro-cid-eeeiwkxu> <p class="eyebrow" data-astro-cid-eeeiwkxu>02 — Build</p> <h1 data-astro-cid-eeeiwkxu>Sized by the misfit.<br data-astro-cid-eeeiwkxu><span class="serif-em tick" data-astro-cid-eeeiwkxu>Not by your company.</span></h1> <p class="sub" data-astro-cid-eeeiwkxu>
Your business runs on software. Shouldn't the software fit the business? We build
          what your process actually needs, at whichever scale it hurts: one workflow, one
          system or the platform itself. Delivered in months, not years. Owned outright.
</p> <a href="/contact?service=build" class="btn btn-primary" data-astro-cid-eeeiwkxu>Book a Fit Assessment</a> </div> </section>

    <!-- Scales -->
    <section class="section tinted" data-astro-cid-eeeiwkxu> <div class="container" data-astro-cid-eeeiwkxu> <p class="eyebrow" data-astro-cid-eeeiwkxu>Three scales</p> <h2 data-astro-cid-eeeiwkxu>Process. System. <span class="serif-em" data-astro-cid-eeeiwkxu>Platform.</span></h2> <div class="scales" data-astro-cid-eeeiwkxu> ${[
    {
      no: "I",
      name: "Process Build",
      duration: "2\u20138 weeks",
      team: "2\u20133 senior",
      misfit: "One workflow stitched across three to five tools. One team bending its process to a near-fit SaaS. The duct tape works, but somebody maintains it daily.",
      outcome: "One owned tool that replaces the stitch. The workflow runs the way the team actually works: no glue, no swivel-chair, no per-seat fees.",
      examples: [
        "Campaign operations tool replacing a five-tool marketing stitch",
        "Sales pipeline shaped to how the team actually sells, not a CRM's object model",
        "The operational spreadsheet layer, replaced by software that owns its data"
      ]
    },
    {
      no: "II",
      name: "System Build",
      duration: "2\u20136 months",
      team: "3\u20135 senior",
      misfit: "An operational system that runs a department: rented, near-fit and taxing the operation every day it stays. The customisation quote rivals the cost of building.",
      outcome: "An owned system shaped to the department's real process. The operations tax drops in the first quarter.",
      examples: [
        "ATS processing thousands of CVs daily, integrated with your ERP",
        "Order management, inventory orchestration, fulfilment routing, shaped to your flow",
        "A painful SaaS tool replaced outright with a fit-built alternative you own"
      ]
    },
    {
      no: "III",
      name: "Platform Build",
      duration: "6\u201318 months",
      team: "4\u20138 senior",
      misfit: "The platform the business runs on no longer matches the business. Every department has its workaround. The vendor's roadmap is not your roadmap.",
      outcome: "The platform your operation actually needs: multi-site, integrated, owned outright. Your roadmap, your data, your asset on the balance sheet.",
      examples: [
        "Property management platform built around your portfolio and tenants",
        "ERP extension or replacement designed around your supply chain",
        "Industry-vertical platform where no vendor fits your market"
      ]
    }
  ].map((s) => renderTemplate`<article class="scale" data-astro-cid-eeeiwkxu> <div class="scale-head" data-astro-cid-eeeiwkxu> <span class="s-no" data-astro-cid-eeeiwkxu>${s.no}</span> <h3 data-astro-cid-eeeiwkxu>${s.name}</h3> <div class="s-meta" data-astro-cid-eeeiwkxu> <span data-astro-cid-eeeiwkxu>${s.duration}</span> <span data-astro-cid-eeeiwkxu>${s.team}</span> </div> </div> <div class="scale-cols" data-astro-cid-eeeiwkxu> <div data-astro-cid-eeeiwkxu> <p class="col-label" data-astro-cid-eeeiwkxu>The misfit</p> <p data-astro-cid-eeeiwkxu>${s.misfit}</p> </div> <div data-astro-cid-eeeiwkxu> <p class="col-label" data-astro-cid-eeeiwkxu>What you end with</p> <p data-astro-cid-eeeiwkxu>${s.outcome}</p> </div> <div data-astro-cid-eeeiwkxu> <p class="col-label" data-astro-cid-eeeiwkxu>Examples</p> <ul data-astro-cid-eeeiwkxu> ${s.examples.map((e) => renderTemplate`<li data-astro-cid-eeeiwkxu>${e}</li>`)} </ul> </div> </div> </article>`)} </div> <p class="scales-note" data-astro-cid-eeeiwkxu>
Not sure which scale you're at? That's exactly what the two-week
<strong data-astro-cid-eeeiwkxu>Fit Assessment</strong> answers, before you commit to anything.
</p> </div> </section>

    <!-- Delivery -->
    <section class="section" data-astro-cid-eeeiwkxu> <div class="container" data-astro-cid-eeeiwkxu> <p class="eyebrow" data-astro-cid-eeeiwkxu>How we deliver</p> <h2 data-astro-cid-eeeiwkxu>Four phases. <span class="serif-em" data-astro-cid-eeeiwkxu>No big-bang reveal.</span></h2> <div class="phases" data-astro-cid-eeeiwkxu> ${[
    { name: "Fit Assessment", time: "2 weeks", body: "Discovery, scoping, architecture at proposal level. You get a written diagnosis whether or not we proceed." },
    { name: "Design & Architecture", time: "2\u20134 weeks", body: "Detailed technical design: a package you can review, approve or take elsewhere." },
    { name: "Build", time: "scale-dependent", body: "Small senior AI-augmented team. Two-week sprints. Working software shipping every sprint, no big-bang reveal." },
    { name: "Handover", time: "2\u20134 weeks", body: "Code to your repositories, infrastructure to your cloud, documentation and knowledge transfer. Optional 3\u20136 month support tail." }
  ].map((p, i) => renderTemplate`<div class="phase" data-astro-cid-eeeiwkxu> <p class="phase-meta" data-astro-cid-eeeiwkxu>Phase ${i + 1} · ${p.time}</p> <h3 data-astro-cid-eeeiwkxu>${p.name}</h3> <p data-astro-cid-eeeiwkxu>${p.body}</p> </div>`)} </div> </div> </section>

    <!-- Team / ownership (dark) -->
    <section class="section on-dark" data-astro-cid-eeeiwkxu> <div class="container split2" data-astro-cid-eeeiwkxu> <div data-astro-cid-eeeiwkxu> <p class="eyebrow" data-astro-cid-eeeiwkxu>The team model</p> <h2 data-astro-cid-eeeiwkxu>Small. Senior. <span class="serif-em" data-astro-cid-eeeiwkxu>AI-augmented.</span></h2> <p class="dark-body" data-astro-cid-eeeiwkxu>
No junior army, no offshore pyramid. Every engineer is senior and orchestrates AI
            agents daily: the agents handle the volume, the engineers handle the judgment.
            That's where the timeline compression comes from and why a team of four ships
            what bigger teams can't.
</p> </div> <div data-astro-cid-eeeiwkxu> <p class="eyebrow" data-astro-cid-eeeiwkxu>The handover</p> <h2 data-astro-cid-eeeiwkxu>Owned <span class="serif-em" data-astro-cid-eeeiwkxu>outright</span>.</h2> <p class="dark-body" data-astro-cid-eeeiwkxu>
Code in your repositories. Infrastructure in your cloud. Documentation, test
            suites, runbooks and knowledge transfer included. No licence fees, no per-user
            pricing, no Insightive dependency. If we disappeared the day after handover,
            your software wouldn't notice.
</p> </div> </div> </section>

    <!-- CTA -->
    <section class="section" data-astro-cid-eeeiwkxu> <div class="container" data-astro-cid-eeeiwkxu> <h2 data-astro-cid-eeeiwkxu>Start where it hurts.</h2> <p class="cta-sub" data-astro-cid-eeeiwkxu>
A Fit Assessment is two weeks: we map the misfit, price it and return a
          recommendation you can act on, at whichever scale it lands.
</p> <a href="/contact?service=build" class="btn btn-primary" data-astro-cid-eeeiwkxu>Book a Fit Assessment</a> </div> </section>`}` })} `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/services/build.astro", void 0);

const $$file = "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/services/build.astro";
const $$url = "/services/build";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Build,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
