import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, F as Fragment } from '../chunks/astro/server_Xkj7_IYx.mjs';
import 'piccolore';
import { f as fetchPage, a as fetchOpenRoles, l as lexicalNodeToHtml, $ as $$Base } from '../chunks/Base_njw7ilXC.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const ENDPOINT = "http://127.0.0.1:3000/api/careers";
const MAX_CV_BYTES = 4 * 1024 * 1024;
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
function CareersForm() {
  const [status, setStatus] = useState("idle");
  const [errorText, setErrorText] = useState("Something went wrong. Please try again, or reach us on WhatsApp.");
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const file = data.get("cv");
    if (file && file.size > MAX_CV_BYTES) {
      setErrorText("That CV is over 4MB. Please upload a smaller PDF or Word file.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      let cv = null;
      if (file && file.size > 0) {
        cv = { filename: file.name, contentType: file.type, content: await fileToBase64(file) };
      }
      const payload = {
        name: data.get("name"),
        email: data.get("email"),
        discipline: data.get("discipline"),
        links: data.get("links"),
        message: data.get("message"),
        cv
      };
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setErrorText("Something went wrong. Please try again, or reach us on WhatsApp.");
        setStatus("error");
      }
    } catch {
      setErrorText("Something went wrong. Please try again, or reach us on WhatsApp.");
      setStatus("error");
    }
  }
  if (status === "sent") {
    return /* @__PURE__ */ jsxs("div", { className: "form-done", children: [
      /* @__PURE__ */ jsx("h3", { children: "Got it." }),
      /* @__PURE__ */ jsx("p", { children: "Thanks for sending your work. If there is a fit we will be in touch and strong profiles stay on file for when the right role opens." })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit, className: "contact-form careers-form", children: [
    /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("span", { children: "Name" }),
      /* @__PURE__ */ jsx("input", { name: "name", type: "text", required: true, autoComplete: "name" })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("span", { children: "Email" }),
      /* @__PURE__ */ jsx("input", { name: "email", type: "email", required: true, autoComplete: "email" })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("span", { children: "What you do" }),
      /* @__PURE__ */ jsx("input", { name: "discipline", type: "text", required: true, placeholder: "e.g. Full-stack engineer, AI/ML, Product design" })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("span", { children: "Portfolio or LinkedIn" }),
      /* @__PURE__ */ jsx("input", { name: "links", type: "url", placeholder: "https://" })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("span", { children: "The hardest thing you've done" }),
      /* @__PURE__ */ jsx("textarea", { name: "message", rows: 5, required: true, placeholder: "Tell us what you owned and what it took." })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("span", { children: "CV (PDF or Word, up to 4MB)" }),
      /* @__PURE__ */ jsx("input", { name: "cv", type: "file", accept: ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document", required: true })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-primary", disabled: status === "sending", children: status === "sending" ? "Sending…" : "Send your work" }),
    status === "error" && /* @__PURE__ */ jsx("p", { className: "form-error", children: errorText })
  ] });
}

const $$Careers = createComponent(async ($$result, $$props, $$slots) => {
  const PAYLOAD_CMS_URL = "http://127.0.0.1:3000";
  let pageData = null;
  try {
    pageData = await fetchPage("careers");
  } catch (e) {
    console.warn("[Careers Page] Failed to fetch careers page data from Payload CMS, using static fallback.", e);
  }
  let openRoles = [];
  try {
    openRoles = await fetchOpenRoles();
  } catch (e) {
    console.warn("[Careers Page] Failed to fetch open roles from Payload CMS, using empty fallback.", e);
  }
  const metaTitle = pageData?.meta?.title || pageData?.title || "Careers — Own Outcomes, Orchestrate AI | Insightive";
  const metaDescription = pageData?.meta?.description || "Own outcomes, orchestrate AI agents, build at the edge of your craft. Remote-first, global. Insightive hires senior operators.";
  const introBlock = pageData?.layout?.find((b) => b.blockType === "careersIntro");
  const pillarsBlock = pageData?.layout?.find((b) => b.blockType === "careersPillars");
  const stagesBlock = pageData?.layout?.find((b) => b.blockType === "careersStages");
  const rolesBlock = pageData?.layout?.find((b) => b.blockType === "careersOpenRoles");
  const applyBlock = pageData?.layout?.find((b) => b.blockType === "careersApply");
  const formBlock = pageData?.layout?.find((b) => b.blockType === "formBlock");
  const formStructure = formBlock?.form;
  const introEyebrow = introBlock?.eyebrow || "Join Insightive";
  const introTitleNode = introBlock?.title?.root;
  let introTitleHtml = "";
  if (introTitleNode) {
    const parsed = lexicalNodeToHtml(introTitleNode, { italicClass: "serif-em tick" });
    introTitleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
  }
  const introSubtitle = introBlock?.subtitle || "You own the work. AI agents are your team. Location doesn't matter. Outcomes do.";
  const primaryCtaLabel = introBlock?.primaryCtaLabel || "See Open Roles";
  const primaryCtaLink = introBlock?.primaryCtaLink || "#roles";
  const secondaryCtaLabel = introBlock?.secondaryCtaLabel || "Introduce Yourself";
  const secondaryCtaLink = introBlock?.secondaryCtaLink || "#apply";
  const iconSvgs = {
    ownedOutcomes: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><circle cx="12" cy="12" r="2" fill="currentColor" fill-opacity="0.9"/></svg>`,
    aiAgents: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="7" width="10" height="10" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><line x1="10" y1="7" x2="10" y2="3" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><line x1="14" y1="7" x2="14" y2="3" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><line x1="10" y1="17" x2="10" y2="21" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><line x1="14" y1="17" x2="14" y2="21" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><line x1="7" y1="10" x2="3" y2="10" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><line x1="7" y1="14" x2="3" y2="14" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><line x1="17" y1="10" x2="21" y2="10" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><line x1="17" y1="14" x2="21" y2="14" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/></svg>`,
    accountability: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3 L19 6 V12 C19 16 12 21 12 21 C12 21 5 16 5 12 V6 Z" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><polyline points="8.5,12 11,14.5 15.5,10" stroke="currentColor" stroke-opacity="0.8" stroke-width="1"/></svg>`,
    noBillable: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><line x1="12" y1="7" x2="12" y2="12" stroke="currentColor" stroke-opacity="0.8" stroke-width="1"/><line x1="12" y1="12" x2="16" y2="14" stroke="currentColor" stroke-opacity="0.8" stroke-width="1"/></svg>`,
    remote: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/><path d="M12 3 C9.5 6 9.5 18 12 21 M12 3 C14.5 6 14.5 18 12 21" stroke="currentColor" stroke-opacity="0.5" stroke-width="1"/></svg>`
  };
  const pillarsEyebrow = pillarsBlock?.eyebrow || "How we work";
  const pillarsTitleNode = pillarsBlock?.title?.root;
  let pillarsTitleHtml = "";
  if (pillarsTitleNode) {
    const parsed = lexicalNodeToHtml(pillarsTitleNode, { italicClass: "serif-em" });
    pillarsTitleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
  }
  const fallbackPillars = [
    {
      title: "Owned outcomes.",
      body: "You're not hired to work on tickets. You're hired to own a piece of what the client gets, from the first conversation to the final handover. Credit if it ships well. Accountability if it doesn't. Either way, it's yours.",
      icon: iconSvgs.ownedOutcomes
    },
    {
      title: "AI agents are your team.",
      body: "You won't wait on juniors to get work done. You'll orchestrate AI agents for coding, research, documentation, delivery prep. The agents handle the volume. You handle the judgment. That's why our small teams ship what bigger teams can't.",
      icon: iconSvgs.aiAgents
    },
    {
      title: "Accountability, not hierarchy.",
      body: `No "escalate to someone else." No "that's not my scope." If it's in your lane, it's yours. If you see the direction going wrong, you're expected to say so, even when the call isn't yours to make.`,
      icon: iconSvgs.accountability
    },
    {
      title: "No billable-hour incentives.",
      body: "We're paid to solve problems, not to stay on them. Engagements end when the outcome is delivered. We don't optimise for engagement length and neither should you.",
      icon: iconSvgs.noBillable
    },
    {
      title: "Where you work doesn't matter.",
      body: "Our work is remote. Our clients are global. We don't care where your desk is or what time zone you operate from. What matters is what you ship, what calls you make and what outcomes you own.",
      icon: iconSvgs.remote
    }
  ];
  const pillarsList = pillarsBlock?.pillars?.map((p) => {
    let iconHtml = "";
    const icon = p.icon;
    if (icon && typeof icon === "object" && icon.url) {
      const src = icon.url.startsWith("http") ? icon.url : `${PAYLOAD_CMS_URL}${icon.url}`;
      const alt = icon.alt || "";
      iconHtml = `<img src="${src}" alt="${alt}" loading="lazy" />`;
    } else if (typeof icon === "string" && iconSvgs[icon]) {
      iconHtml = iconSvgs[icon];
    } else {
      iconHtml = iconSvgs.ownedOutcomes;
    }
    return {
      title: p.title,
      body: p.body,
      iconHtml
    };
  }) || fallbackPillars.map((p) => ({
    title: p.title,
    body: p.body,
    iconHtml: p.icon
  }));
  const stagesEyebrow = stagesBlock?.eyebrow || "How we hire";
  const stagesTitleNode = stagesBlock?.title?.root;
  let stagesTitleHtml = "";
  if (stagesTitleNode) {
    const parsed = lexicalNodeToHtml(stagesTitleNode, { italicClass: "serif-em" });
    stagesTitleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
  }
  const fallbackStages = [
    { name: "Intro", time: "30 min", body: "We learn what you've built and how you think." },
    { name: "Work Review", time: "60 min", body: "You walk us through the hardest thing you've done." },
    { name: "Craft Session", time: "90 min", body: "A practical, real-world scoped problem. No trivia, no whiteboard puzzles." },
    { name: "Team Fit", time: "45 min", body: "You meet the people you'd actually work with." }
  ];
  const stagesList = stagesBlock?.stages?.map((s) => ({
    name: s.name,
    time: s.time,
    body: s.body
  })) || fallbackStages;
  const stagesNote = stagesBlock?.refNote || "Plus reference calls, both ways.";
  const rolesEyebrow = rolesBlock?.eyebrow || "Open roles";
  const rolesNoRolesTitle = rolesBlock?.noRolesTitle || "No open roles right now.";
  const rolesNoRolesBody = rolesBlock?.noRolesBody || "We're always interested in hearing from senior people who share the fit-first, AI-augmented approach. Send us your work and we'll keep you in our network. When the right role opens, you'll be the first to know.";
  const rolesHasRolesTitle = rolesBlock?.hasRolesTitle || "Active Opportunities";
  const rolesCtaLabel = rolesBlock?.ctaLabel || "Send us your work";
  const rolesCtaLink = rolesBlock?.ctaLink || "#apply";
  const applyEyebrow = applyBlock?.eyebrow || "Introduce yourself";
  const applyTitleNode = applyBlock?.title?.root;
  let applyTitleHtml = "";
  if (applyTitleNode) {
    const parsed = lexicalNodeToHtml(applyTitleNode, { italicClass: "serif-em" });
    applyTitleHtml = parsed.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
  }
  const applyBody = applyBlock?.body || "No posted role is no problem. If you're senior and you own outcomes, show us the hardest thing you've done and leave your CV. Strong profiles stay on file for when the right role opens.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": metaTitle, "description": metaDescription, "data-astro-cid-2pjcwduj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section" data-astro-cid-2pjcwduj> <div class="container" data-astro-cid-2pjcwduj> <p class="eyebrow" data-astro-cid-2pjcwduj>${introEyebrow}</p> ${introTitleHtml ? renderTemplate`<h1 data-astro-cid-2pjcwduj>${unescapeHTML(introTitleHtml)}</h1>` : renderTemplate`<h1 data-astro-cid-2pjcwduj>We hire the way <span class="serif-em tick" data-astro-cid-2pjcwduj>we build</span>.</h1>`} <p class="sub" data-astro-cid-2pjcwduj>${introSubtitle}</p> <div class="cta-row" data-astro-cid-2pjcwduj> <a${addAttribute(primaryCtaLink, "href")} class="btn btn-primary" data-astro-cid-2pjcwduj>${primaryCtaLabel}</a> <a${addAttribute(secondaryCtaLink, "href")} class="btn btn-ghost" data-astro-cid-2pjcwduj>${secondaryCtaLabel}</a> </div> </div> </section> <section class="section tinted" data-astro-cid-2pjcwduj> <div class="container" data-astro-cid-2pjcwduj> <p class="eyebrow" data-astro-cid-2pjcwduj>${pillarsEyebrow}</p> ${pillarsTitleHtml ? renderTemplate`<h2 data-astro-cid-2pjcwduj>${unescapeHTML(pillarsTitleHtml)}</h2>` : renderTemplate`<h2 data-astro-cid-2pjcwduj>Five things that are <span class="serif-em" data-astro-cid-2pjcwduj>actually true</span> here.</h2>`} <div class="pillar-list" data-astro-cid-2pjcwduj> ${pillarsList.map((p, i) => renderTemplate`<div class="pillar p-col" data-astro-cid-2pjcwduj> <span class="p-no" data-astro-cid-2pjcwduj>${String(i + 1).padStart(2, "0")}</span> <div class="pillar-ico" aria-hidden="true" data-astro-cid-2pjcwduj>${unescapeHTML(p.iconHtml)}</div> <div data-astro-cid-2pjcwduj> <h3 data-astro-cid-2pjcwduj>${p.title}</h3> <p data-astro-cid-2pjcwduj>${p.body}</p> </div> </div>`)} </div> </div> </section> <section class="section" data-astro-cid-2pjcwduj> <div class="container" data-astro-cid-2pjcwduj> <p class="eyebrow" data-astro-cid-2pjcwduj>${stagesEyebrow}</p> ${stagesTitleHtml ? renderTemplate`<h2 data-astro-cid-2pjcwduj>${unescapeHTML(stagesTitleHtml)}</h2>` : renderTemplate`<h2 data-astro-cid-2pjcwduj>Four conversations. <span class="serif-em" data-astro-cid-2pjcwduj>No puzzles.</span></h2>`} <div class="stages" data-astro-cid-2pjcwduj> ${stagesList.map((s, i) => renderTemplate`<div class="stage" data-astro-cid-2pjcwduj> <p class="stage-meta" data-astro-cid-2pjcwduj>Step ${i + 1} · ${s.time}</p> <h3 data-astro-cid-2pjcwduj>${s.name}</h3> <p data-astro-cid-2pjcwduj>${s.body}</p> </div>`)} </div> <p class="ref-note" data-astro-cid-2pjcwduj>${stagesNote}</p> </div> </section> <section class="section on-dark" id="roles" data-astro-cid-2pjcwduj> <div class="container" data-astro-cid-2pjcwduj> <p class="eyebrow" data-astro-cid-2pjcwduj>${rolesEyebrow}</p> ${openRoles.length > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-2pjcwduj": true }, { "default": async ($$result3) => renderTemplate` <h2 data-astro-cid-2pjcwduj>${rolesHasRolesTitle}</h2> <div class="roles-list" data-astro-cid-2pjcwduj> ${openRoles.map((role) => renderTemplate`<div class="role-card" data-astro-cid-2pjcwduj> <div data-astro-cid-2pjcwduj> <h3 class="role-title" data-astro-cid-2pjcwduj>${role.title}</h3> <div class="role-meta" data-astro-cid-2pjcwduj> <span data-astro-cid-2pjcwduj>${role.department}</span> <span data-astro-cid-2pjcwduj>·</span> <span data-astro-cid-2pjcwduj>${role.location}</span> </div> </div> <a href="#apply" class="btn btn-ghost role-apply" data-astro-cid-2pjcwduj>Apply now</a> </div>`)} </div> ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-2pjcwduj": true }, { "default": async ($$result3) => renderTemplate` <h2 data-astro-cid-2pjcwduj>${rolesNoRolesTitle}</h2> <p class="roles-sub" data-astro-cid-2pjcwduj>${rolesNoRolesBody}</p> <a${addAttribute(rolesCtaLink, "href")} class="btn btn-primary" data-astro-cid-2pjcwduj>${rolesCtaLabel}</a> ` })}`} </div> </section> <section class="section" id="apply" data-astro-cid-2pjcwduj> <div class="container" data-astro-cid-2pjcwduj> <p class="eyebrow" data-astro-cid-2pjcwduj>${applyEyebrow}</p> ${applyTitleHtml ? renderTemplate`<h2 data-astro-cid-2pjcwduj>${unescapeHTML(applyTitleHtml)}</h2>` : renderTemplate`<h2 data-astro-cid-2pjcwduj>Send us your <span class="serif-em" data-astro-cid-2pjcwduj>work</span>.</h2>`} <p class="apply-sub" data-astro-cid-2pjcwduj>${applyBody}</p> ${formStructure ? renderTemplate`${renderComponent($$result2, "DynamicForm", null, { "form": formStructure, "cmsUrl": PAYLOAD_CMS_URL, "client:only": "react", "client:component-hydration": "only", "data-astro-cid-2pjcwduj": true, "client:component-path": "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/components/DynamicForm.tsx", "client:component-export": "default" })}` : renderTemplate`${renderComponent($$result2, "CareersForm", CareersForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/components/CareersForm.tsx", "client:component-export": "default", "data-astro-cid-2pjcwduj": true })}`} </div> </section> ` })} `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/careers.astro", void 0);
const $$file = "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/careers.astro";
const $$url = "/careers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Careers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
