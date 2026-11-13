import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { servicesData } from '../src/data/services.ts';
import { serviceContentGrowth } from '../src/data/service-content-growth.ts';
import { serviceContentPerformance } from '../src/data/service-content-performance.ts';
import { serviceContentStrategy } from '../src/data/service-content-strategy.ts';
import { caseStudies } from '../src/data/case-studies.ts';
import { landingPages } from '../src/data/landing-pages.ts';
import { SERVICES_DESCRIPTION, CASE_STUDIES_DESCRIPTION } from '../src/data/site-descriptions.ts';
import {
  renderHomeContent,
  renderServicesContent,
  renderServiceContent,
  renderCaseStudiesContent,
  renderCaseStudyContent,
} from './render-static-content.mjs';
import { legacyRedirects, renderRedirectPage } from './legacy-redirects.mjs';

const projectDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = resolve(projectDir, 'dist/public');
const shell = await readFile(resolve(outputDir, 'index.html'), 'utf8');
// Only applies while the build-time content is the direct child of #root.
// React replaces that child when the interactive page mounts.
const staticContentStyle = `<style>
  #root > main { background: #000; color: #fff; min-height: 100vh; padding: 7rem max(1.5rem, calc((100vw - 72rem)/2)) 5rem; font: 400 1.1rem/1.75 system-ui, sans-serif; }
  #root > main article { max-width: 72rem; }
  #root > main h1 { font-size: clamp(2.4rem, 5vw, 4rem); line-height: 1.1; font-weight: 800; margin: 0 0 2rem; }
  #root > main h2 { font-size: clamp(1.6rem, 3vw, 2.3rem); line-height: 1.25; font-weight: 750; margin: 3.5rem 0 1rem; }
  #root > main h3 { font-size: 1.3rem; font-weight: 700; margin: 2rem 0 .5rem; }
  #root > main p { max-width: 52rem; margin: 0 0 1.25rem; color: #d1d5db; }
  #root > main ul { padding-left: 1.5rem; list-style: disc; margin: 1rem 0 2rem; }
  #root > main li { margin-bottom: .65rem; }
  #root > main a { color: #fff; text-decoration: underline; text-underline-offset: .2em; }
</style>`;
const siteUrl = 'https://ladmedia.co';
const sitemapMarker = '<!-- SERVICE_URLS -->';
const caseStudySitemapMarker = '<!-- CASE_STUDY_URLS -->';
const servicePageContent = {
  ...serviceContentGrowth,
  ...serviceContentPerformance,
  ...serviceContentStrategy,
};

const pages = [
  {
    path: '/services/',
    title: 'Marketing Services for Crypto & Beyond | LAD Media',
    description: SERVICES_DESCRIPTION,
  },
  ...servicesData.map((service) => ({
    path: `/services/${service.id}/`,
    title: `${service.title} for Crypto & Web3 | LAD Media`,
    description: service.description,
    serviceName: service.title,
    faqs: servicePageContent[service.id]?.faqs ?? [],
    service,
    content: servicePageContent[service.id],
  })),
  {
    path: '/case-studies/',
    title: 'Website Design Case Studies | LAD Media',
    description: CASE_STUDIES_DESCRIPTION,
  },
  ...caseStudies.map((caseStudy) => ({
    path: `/case-studies/${caseStudy.slug}/`,
    title: `${caseStudy.client} Website Case Study | LAD Media`,
    description: caseStudy.summary,
    caseStudy,
  })),
  ...landingPages.map((landing) => ({
    path: landing.path,
    title: landing.title,
    description: landing.description,
    landing,
  })),
];

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function renderPage(page) {
  const canonical = `${siteUrl}${page.path}`;
  let html = shell.replace('</head>', `${staticContentStyle}</head>`)
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${escapeHtml(page.description)}" />`,
    )
    .replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${canonical}" />`,
    )
    .replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    )
    .replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    )
    .replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${canonical}" />`,
    )
    .replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    )
    .replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    );

  if (page.serviceName) {
    const serviceSchema = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.serviceName,
      description: page.description,
      url: canonical,
      provider: {
        '@type': 'Organization',
        name: 'LAD Media',
        url: siteUrl,
      },
      areaServed: ['Newark, NJ', 'United States', 'Global'],
    });
    html = html.replace(
      '</head>',
      `    <script type="application/ld+json">${serviceSchema}</script>\n  </head>`,
    );

    if (page.faqs.length) {
      const faqSchema = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
      html = html.replace(
        '</head>',
        `    <script type="application/ld+json">${faqSchema}</script>\n  </head>`,
      );
    }
  }

  if (page.caseStudy) {
    const creativeWorkSchema = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: page.caseStudy.title,
      description: page.description,
      url: canonical,
      creator: { '@type': 'Organization', name: 'LAD Media', url: siteUrl },
      about: { '@type': 'Organization', name: page.caseStudy.client },
    });
    html = html.replace(
      '</head>',
      `    <script type="application/ld+json">${creativeWorkSchema}</script>\n  </head>`,
    );
  }

  if (page.landing) {
    const landing = page.landing;
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: landing.heading,
      description: landing.description,
      url: canonical,
      provider: { '@type': 'Organization', name: 'LAD Media', url: siteUrl },
      areaServed: landing.schemaType === 'city'
        ? { '@type': 'City', name: 'Newark', containedInPlace: { '@type': 'State', name: 'New Jersey' } }
        : landing.schemaType === 'local' ? { '@type': 'State', name: 'New Jersey' } : ['Newark, NJ', 'United States'],
    };
    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
        ...(landing.schemaType === 'event' ? [{ '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services/` }] : []),
        { '@type': 'ListItem', position: landing.schemaType === 'event' ? 3 : 2, name: landing.heading, item: canonical },
      ],
    };
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: landing.faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    };
    const schemas = [serviceSchema, breadcrumb, faqSchema];
    html = html.replace('</head>', `${schemas.map(schema => `    <script type="application/ld+json">${JSON.stringify(schema)}</script>`).join('\n')}\n  </head>`);

    // Useful crawlable HTML before the React bundle loads. React replaces the root when mounted.
    const renderList = (items) => `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
    const fallback = `<main><article>
      <h1>${escapeHtml(landing.heading)}</h1>
      <p>${escapeHtml(landing.intro)}</p>
      <h2>${escapeHtml(landing.contextHeading)}</h2>
      ${landing.context.map(text => `<p>${escapeHtml(text)}</p>`).join('')}
      <h2>Who this is for</h2>${renderList(landing.audience)}
      <h2>Services and deliverables</h2>
      ${landing.deliverables.map(({ title, description }) => `<section><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></section>`).join('')}
      <h2>How we work</h2>
      ${landing.phases.map(({ title, description }) => `<section><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></section>`).join('')}
      <h2>What a useful engagement should produce</h2>${renderList(landing.outcomes)}
      <h2>Frequently asked questions</h2>
      ${landing.faqs.map(({ question, answer }) => `<section><h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p></section>`).join('')}
      <h2>Explore related services</h2>
      <ul>${landing.related.map(({ path, label }) => `<li><a href="${path}">${escapeHtml(label)}</a></li>`).join('')}</ul>
      <p><a href="/#contact">Discuss your project with LAD Media</a></p>
    </article></main>`;
    html = html.replace('<div id="root"></div>', `<div id="root">${fallback}</div>`);
  }

  if (!page.landing) {
    let content;
    if (page.service) content = renderServiceContent(page.service, page.content);
    else if (page.caseStudy) content = renderCaseStudyContent(page.caseStudy);
    else if (page.path === '/services/') content = renderServicesContent();
    else if (page.path === '/case-studies/') content = renderCaseStudiesContent();
    if (!content) throw new Error(`Missing static content for ${page.path}`);
    html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  }
  return html;
}

await writeFile(resolve(outputDir, 'index.html'), shell
  .replace('</head>', `${staticContentStyle}</head>`)
  .replace('<div id="root"></div>', `<div id="root">${renderHomeContent()}</div>`));
for (const page of pages) {
  const filePath = resolve(outputDir, page.path.slice(1), 'index.html');
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, renderPage(page));
}

const sitemapPath = resolve(outputDir, 'sitemap.xml');
const sitemapTemplate = await readFile(resolve(projectDir, 'public/sitemap.xml'), 'utf8');
if (sitemapTemplate.split(sitemapMarker).length !== 2) {
  throw new Error(`Expected exactly one ${sitemapMarker} marker in public/sitemap.xml`);
}
const serviceEntries = servicesData.map((service) =>
  `  <url><loc>${escapeHtml(`${siteUrl}/services/${service.id}/`)}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`,
).join('\n');
if (sitemapTemplate.split(caseStudySitemapMarker).length !== 2) {
  throw new Error(`Expected exactly one ${caseStudySitemapMarker} marker in public/sitemap.xml`);
}
const caseStudyEntries = caseStudies.map((study) =>
  `  <url><loc>${escapeHtml(`${siteUrl}/case-studies/${study.slug}/`)}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`,
).join('\n');
await writeFile(sitemapPath, sitemapTemplate
  .replace(sitemapMarker, serviceEntries)
  .replace(caseStudySitemapMarker, caseStudyEntries));

// 404 page: served by GitHub Pages for every unknown URL. It must not claim to
// be the homepage, so it has its own title, no canonical, and is not indexable.
const notFoundTitle = 'Page Not Found | LAD Media';
const notFoundDescription = 'This page does not exist on the LAD Media website.';
const notFoundFallback = `<main><article>
      <h1>Page not found</h1>
      <p>The page you were looking for has moved or no longer exists.</p>
      <ul>
        <li><a href="/">LAD Media home</a></li>
        <li><a href="/services/">Marketing services</a></li>
        <li><a href="/case-studies/">Case studies</a></li>
      </ul>
    </article></main>`;
const notFoundHtml = shell
  .replace('</head>', `${staticContentStyle}</head>`)
  .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(notFoundTitle)}</title>`)
  .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${escapeHtml(notFoundDescription)}" />`)
  .replace(/\s*<link rel="canonical" href=".*?" \/>/, '')
  .replace(/<meta name="robots" content=".*?" \/>/, '<meta name="robots" content="noindex, follow" />')
  .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${escapeHtml(notFoundTitle)}" />`)
  .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${escapeHtml(notFoundDescription)}" />`)
  .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${escapeHtml(notFoundTitle)}" />`)
  .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${escapeHtml(notFoundDescription)}" />`)
  .replace('<div id="root"></div>', `<div id="root">${notFoundFallback}</div>`);
await writeFile(resolve(outputDir, '404.html'), notFoundHtml);

// Redirect pages for URLs from the previous static site.
for (const { from, to } of legacyRedirects) {
  const filePath = resolve(outputDir, from.slice(1));
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, renderRedirectPage(siteUrl, to));
}

// GitHub Pages custom domain. Written by the build so a deploy cannot drop it.
await writeFile(resolve(outputDir, 'CNAME'), 'ladmedia.co\n');
console.log(`Generated ${pages.length} crawlable route pages and ${legacyRedirects.length} legacy redirects.`);