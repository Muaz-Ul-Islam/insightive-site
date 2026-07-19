import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_Xkj7_IYx.mjs';
import 'piccolore';
import { f as fetchPage, l as lexicalNodeToHtml, $ as $$Base } from '../chunks/Base_njw7ilXC.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const SERVICES = [
  { value: "advisory", label: "Advisory — decide what fits" },
  { value: "build", label: "Build — Process · System · Platform" },
  { value: "careers", label: "Careers" },
  { value: "undecided", label: "Not sure yet" }
];
const SCALES = [
  { value: "process", label: "Process — one workflow, one team" },
  { value: "system", label: "System — runs a department" },
  { value: "platform", label: "Platform — runs the business" },
  { value: "undecided", label: "Not sure yet" }
];
const ENDPOINT = "http://127.0.0.1:3000/api/contact";
function ContactForm() {
  const [service, setService] = useState("");
  const [scale, setScale] = useState("");
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("service");
    const sc = params.get("scale");
    if (s && SERVICES.some((o) => o.value === s)) setService(s);
    if (sc && SCALES.some((o) => o.value === sc)) setScale(sc);
  }, []);
  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }
  if (status === "sent") {
    return /* @__PURE__ */ jsxs("div", { className: "form-done", children: [
      /* @__PURE__ */ jsx("h3", { children: "Received." }),
      /* @__PURE__ */ jsx("p", { children: "We read every message and reply within two business days, usually faster." })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit, className: "contact-form", children: [
    /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("span", { children: "Name" }),
      /* @__PURE__ */ jsx("input", { name: "name", type: "text", required: true, autoComplete: "name" })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("span", { children: "Email" }),
      /* @__PURE__ */ jsx("input", { name: "email", type: "email", required: true, autoComplete: "email" })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("span", { children: "Company" }),
      /* @__PURE__ */ jsx("input", { name: "company", type: "text", autoComplete: "organization" })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("span", { children: "What brings you here?" }),
      /* @__PURE__ */ jsxs("select", { name: "service", required: true, value: service, onChange: (e) => setService(e.target.value), children: [
        /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select…" }),
        SERVICES.map((o) => /* @__PURE__ */ jsx("option", { value: o.value, children: o.label }, o.value))
      ] })
    ] }),
    service === "build" && /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("span", { children: "Scale of the misfit (optional)" }),
      /* @__PURE__ */ jsxs("select", { name: "scale", value: scale, onChange: (e) => setScale(e.target.value), children: [
        /* @__PURE__ */ jsx("option", { value: "", children: "Select…" }),
        SCALES.map((o) => /* @__PURE__ */ jsx("option", { value: o.value, children: o.label }, o.value))
      ] })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      /* @__PURE__ */ jsx("span", { children: "Message" }),
      /* @__PURE__ */ jsx("textarea", { name: "message", rows: 6, required: true, placeholder: "What's bending and what would 'fixed' look like?" })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-primary", disabled: status === "sending", children: status === "sending" ? "Sending…" : "Send" }),
    status === "error" && /* @__PURE__ */ jsx("p", { className: "form-error", children: "Something went wrong. Please try again, or reach us on WhatsApp." })
  ] });
}

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const PAYLOAD_CMS_URL = "http://127.0.0.1:3000";
  let pageData = null;
  try {
    pageData = await fetchPage("contact");
  } catch (e) {
    console.warn("[Contact Page] Failed to fetch contact page data from Payload CMS, using static fallback.", e);
  }
  const metaTitle = pageData?.meta?.title || pageData?.title || "Contact | Insightive — Fit-First Technology Consulting";
  const metaDescription = pageData?.meta?.description || "Start a conversation about fit. Advisory, Build (Process · System · Platform) or commerce: tell us what's bending and we'll tell you what it costs to fix.";
  const introBlock = pageData?.layout?.find((block) => block.blockType === "contactIntro");
  const eyebrowText = introBlock?.eyebrow || "Contact";
  const titleNode = introBlock?.title?.root;
  let titleInnerHtml = "";
  if (titleNode) {
    const parsedHtml = lexicalNodeToHtml(titleNode, { italicClass: "serif-em tick" });
    titleInnerHtml = parsedHtml.replace(/^<[a-zA-Z0-9]+>/, "").replace(/<\/[a-zA-Z0-9]+>$/, "");
  }
  const subtitleText = introBlock?.subtitle || "";
  const formBlock = pageData?.layout?.find((block) => block.blockType === "formBlock");
  const formStructure = formBlock?.form;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": metaTitle, "description": metaDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container contact-grid"> <div> <p class="eyebrow">${eyebrowText}</p> ${titleInnerHtml ? renderTemplate`<h1>${unescapeHTML(titleInnerHtml)}</h1>` : renderTemplate`<h1>Tell us what's <span class="serif-em tick">bending</span>.</h1>`} <p class="sub"> ${subtitleText || "A workflow your team contorts around. A customisation quote that feels wrong. A platform decision you need an independent read on. Start there. We'll respond within two business days."} </p> <div class="alt"> <p class="alt-label">${introBlock?.directLabel || "Prefer direct?"}</p> <p><a class="link-quiet"${addAttribute(introBlock?.directLinkUrl || "https://wa.me/+971586978728", "href")}>${introBlock?.directLinkText || "Message us on WhatsApp"}</a></p> </div> <div class="alt"> <p class="alt-label">${introBlock?.locationLabel || "Where we are"}</p> <p>${introBlock?.locationText || "Based in the UAE (Meydan Free Zone, Dubai). We work with clients across the GCC and North America."}</p> </div> </div> <div class="form-col"> ${formStructure ? renderTemplate`${renderComponent($$result2, "DynamicForm", null, { "form": formStructure, "cmsUrl": PAYLOAD_CMS_URL, "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/components/DynamicForm.tsx", "client:component-export": "default" })}` : renderTemplate`${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/components/ContactForm.tsx", "client:component-export": "default" })}`} </div> </div> </section> ` })} `;
}, "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/contact.astro", void 0);
const $$file = "C:/Users/TAYYAB/OneDrive/Desktop/DEV/insightive-site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
