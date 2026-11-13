import { servicesData } from '../src/data/services.ts';

// URLs from the previous static site that Google still has on record.
// GitHub Pages cannot issue server redirects, so the build writes a small
// redirect page at each old address pointing to the current page.
const retiredServices = {
  // The tokenomics service was retired; token launch strategy is the closest current page.
  tokenomics: '/services/token-launch/',
};

export const legacyRedirects = [
  ...servicesData.map((service) => ({
    from: `/services/${service.id}.html`,
    to: `/services/${service.id}/`,
  })),
  ...Object.entries(retiredServices).map(([id, to]) => ({
    from: `/services/${id}.html`,
    to,
  })),
];

export function renderRedirectPage(siteUrl, to) {
  const target = `${siteUrl}${to}`;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page moved | LAD Media</title>
    <link rel="canonical" href="${target}" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <script>window.location.replace(${JSON.stringify(target)});</script>
  </head>
  <body>
    <p>This page has moved to <a href="${target}">${target}</a>.</p>
  </body>
</html>
`;
}
