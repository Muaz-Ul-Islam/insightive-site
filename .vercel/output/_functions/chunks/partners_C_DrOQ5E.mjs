// Single source of truth for delivery partners.
// Used by /partners (full sections) and /services/advisory (logo links into those sections).
// `domain` maps a partner to the Advisory domain it delivers against.
// `logo` is the path a real brand asset will live at; until supplied, pages render a wordmark.
const partners = [
  {
    id: 'devsinc',
    type: 'delivery',
    name: 'Devsinc',
    capability: 'Shopify development',
    domain: 'Commerce Ecosystem Strategy',
    url: 'https://devsinc.com',
    logo: '/brand/partners/devsinc.png',
    mark: '/brand/partners/devsinc-mark.png',
    logoReady: true,
    blurb:
      'Shopify builds, custom apps and storefront engineering at scale. When a commerce assessment ends in Shopify implementation, Devsinc delivers the build while we stay on the architecture.',
  },
  {
    id: 'thiswayup',
    type: 'delivery',
    name: 'ThisWayUP',
    capability: 'Amazon marketing',
    domain: 'Commerce Ecosystem Strategy',
    url: 'https://thiswayup.online',
    logo: '/brand/partners/thiswayup.png',
    logoReady: true,
    blurb:
      'Amazon-focused marketing and marketplace growth: advertising, listing and A+ content optimisation plus Seller and Vendor Central management that drives sales.',
  },
  {
    id: 'unity-retail',
    type: 'delivery',
    name: 'Unity Retail',
    capability: 'E-commerce logistics & warehousing',
    domain: 'Commerce Ecosystem Strategy',
    url: 'https://unityretail.com',
    logo: '/brand/partners/unity-retail.png',
    logoReady: true,
    blurb:
      'E-commerce logistics and warehousing: order management, warehouse operations and multi-carrier shipping, unified in one operating platform.',
  },
  {
    id: 'synarc',
    type: 'delivery',
    name: 'Synarc',
    capability: 'Digital marketing & retail intelligence',
    domain: 'Marketing, Brand & Automation Strategy',
    url: 'https://synarc.io',
    logo: '/brand/partners/synarc.svg',
    logoReady: true,
    blurb:
      'Digital marketing and retail intelligence: performance media, SEO, CRM automation and the analytics that connect spend to outcomes.',
  },
];

export { partners as p };
