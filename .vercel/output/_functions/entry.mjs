import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Dn74D-jw.mjs';
import { manifest } from './manifest_Ditx9PZL.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/billing-policy.astro.mjs');
const _page3 = () => import('./pages/careers.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/industries/_slug_.astro.mjs');
const _page6 = () => import('./pages/industries.astro.mjs');
const _page7 = () => import('./pages/insights/_slug_.astro.mjs');
const _page8 = () => import('./pages/insights.astro.mjs');
const _page9 = () => import('./pages/partners.astro.mjs');
const _page10 = () => import('./pages/privacy-policy.astro.mjs');
const _page11 = () => import('./pages/services/advisory.astro.mjs');
const _page12 = () => import('./pages/services/build.astro.mjs');
const _page13 = () => import('./pages/services.astro.mjs');
const _page14 = () => import('./pages/terms-of-service.astro.mjs');
const _page15 = () => import('./pages/thesis.astro.mjs');
const _page16 = () => import('./pages/work.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/billing-policy.astro", _page2],
    ["src/pages/careers.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/industries/[slug].astro", _page5],
    ["src/pages/industries/index.astro", _page6],
    ["src/pages/insights/[slug].astro", _page7],
    ["src/pages/insights/index.astro", _page8],
    ["src/pages/partners.astro", _page9],
    ["src/pages/privacy-policy.astro", _page10],
    ["src/pages/services/advisory.astro", _page11],
    ["src/pages/services/build.astro", _page12],
    ["src/pages/services/index.astro", _page13],
    ["src/pages/terms-of-service.astro", _page14],
    ["src/pages/thesis.astro", _page15],
    ["src/pages/work.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "974c3c42-8358-49bb-b46a-0237f23ad62b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
