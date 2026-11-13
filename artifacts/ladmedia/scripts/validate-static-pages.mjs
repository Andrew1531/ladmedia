import { readFile, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { servicesData } from '../src/data/services.ts';
import { serviceContentGrowth } from '../src/data/service-content-growth.ts';
import { serviceContentPerformance } from '../src/data/service-content-performance.ts';
import { serviceContentStrategy } from '../src/data/service-content-strategy.ts';
import { landingPages } from '../src/data/landing-pages.ts';
import { caseStudies } from '../src/data/case-studies.ts';
import { HOME_TITLE, HOME_DESCRIPTION, homeSearchContent, homeSearchFaqs } from '../src/data/home-search-content.ts';
import { SERVICES_DESCRIPTION } from '../src/data/site-descriptions.ts';
import { legacyRedirects } from './legacy-redirects.mjs';
import { readdir } from 'node:fs/promises';

async function listHtmlFiles(directory, base = directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listHtmlFiles(fullPath, base)));
    else if (entry.name.endsWith('.html')) files.push(fullPath.slice(base.length + 1));
  }
  return files;
}

// Checks that every canonical signal agrees: sitemap, canonical tags,
// internal links, the 404 page, legacy redirects, and the custom domain.
export async function validateCanonicalSignals(outputDir) {
  const errors = [];
  const sitemap = await readFile(resolve(outputDir, 'sitemap.xml'), 'utf8');
  const sitemapUrls = new Set([...sitemap.matchAll(/<loc>\s*([^<]*?)\s*<\/loc>/g)].map((match) => match[1]));
  const redirectFiles = new Set(legacyRedirects.map(({ from }) => from.slice(1)));

  for (const url of sitemapUrls) {
    if (!url.endsWith('/')) errors.push(`sitemap.xml: ${url} must end with a trailing slash`);
  }

  for (const file of await listHtmlFiles(outputDir)) {
    const html = await readFile(resolve(outputDir, file), 'utf8');
    const canonicals = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]*)"/gi)].map((match) => match[1]);
    const robots = html.match(/<meta name="robots" content="([^"]*)"/i)?.[1] ?? '';

    if (file === '404.html') {
      if (canonicals.length) errors.push('404.html: must not declare a canonical URL');
      if (!/noindex/.test(robots)) errors.push('404.html: must be noindex');
      if (/<title>Digital Marketing Agency/.test(html)) errors.push('404.html: must not reuse the homepage title');
      continue;
    }

    if (redirectFiles.has(file)) continue;

    const expected = `${siteUrl}/${file.replace(/index\.html$/, '')}`;
    if (canonicals.length !== 1 || canonicals[0] !== expected) {
      errors.push(`${file}: canonical must be exactly ${expected}`);
    }
    if (/noindex/.test(robots)) errors.push(`${file}: canonical page must be indexable`);
    if (!sitemapUrls.has(expected)) errors.push(`${file}: ${expected} is missing from sitemap.xml`);

    for (const [, href] of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)[^"]*"/gi)) {
      if (href === '/' || href.startsWith('/assets/')) continue;
      if (!href.endsWith('/')) errors.push(`${file}: internal link ${href} must end with a trailing slash`);
      else if (!sitemapUrls.has(`${siteUrl}${href}`)) errors.push(`${file}: internal link ${href} does not match a sitemap URL`);
    }
  }

  for (const { from, to } of legacyRedirects) {
    const target = `${siteUrl}${to}`;
    let html = '';
    try {
      html = await readFile(resolve(outputDir, from.slice(1)), 'utf8');
    } catch {
      errors.push(`${from}: missing legacy redirect page`);
      continue;
    }
    if (!sitemapUrls.has(target)) errors.push(`${from}: redirect target ${target} is not a sitemap URL`);
    if (!html.includes(`<link rel="canonical" href="${target}" />`)) errors.push(`${from}: canonical must point to ${target}`);
    if (!html.includes(`<meta http-equiv="refresh" content="0; url=${target}" />`)) errors.push(`${from}: missing instant redirect to ${target}`);
  }

  let cname = '';
  try {
    cname = (await readFile(resolve(outputDir, 'CNAME'), 'utf8')).trim();
  } catch {}
  if (cname !== 'ladmedia.co') errors.push('CNAME: must contain ladmedia.co');

  return errors;
}

const projectDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const defaultOutputDir = resolve(projectDir, 'dist/public');
const siteUrl = 'https://ladmedia.co';
const servicePageContent = {
  ...serviceContentGrowth,
  ...serviceContentPerformance,
  ...serviceContentStrategy,
};
function decodeHtml(value) {
  return value
    .replaceAll('&quot;', '"')
    .replaceAll('&gt;', '>')
    .replaceAll('&lt;', '<')
    .replaceAll('&amp;', '&');
}

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function faqQuestions(faqs) {
  return faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  }));
}

function getSingleMatch(html, pattern, route, label, report) {
  const matches = [...html.matchAll(pattern)];
  if (matches.length !== 1) {
    report(route, `expected exactly one ${label}, found ${matches.length}`);
    return undefined;
  }
  return decodeHtml(matches[0][1].trim());
}

function readJsonLd(html, route, report) {
  const blocks = [
    ...html.matchAll(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];

  return blocks.flatMap((match, index) => {
    try {
      return [JSON.parse(match[1])];
    } catch (error) {
      report(route, `JSON-LD block ${index + 1} is invalid JSON (${error.message})`);
      return [];
    }
  });
}

async function fileExists(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

const defaultPages = [
  {
    route: '/services/',
    title: 'Marketing Services for Crypto & Beyond | LAD Media',
    description: SERVICES_DESCRIPTION,
  },
  ...servicesData.map((service) => ({
    route: `/services/${service.id}/`,
    title: `${service.title} for Crypto & Web3 | LAD Media`,
    description: service.description,
    service,
    content: servicePageContent[service.id],
  })),
];

export async function validateStaticPages({
  outputDir = defaultOutputDir,
  pages = defaultPages,
  landings = landingPages,
} = {}) {
  const errors = [];
  const report = (route, message) => errors.push(`${route}: ${message}`);
let sitemap = '';
try {
  sitemap = await readFile(resolve(outputDir, 'sitemap.xml'), 'utf8');
} catch {
  errors.push('sitemap.xml: missing from dist/public; run the production build first');
}

const sitemapUrls = [
  ...sitemap.matchAll(/<loc>\s*(https:\/\/ladmedia\.co\/[^<]*)\s*<\/loc>/g),
].map((match) => match[1].trim());
const serviceSitemapUrls = sitemapUrls.filter((url) =>
  url.startsWith(`${siteUrl}/services/`),
);

for (const page of pages) {
  const expectedCanonical = `${siteUrl}${page.route}`;
  const filePath = resolve(outputDir, page.route.slice(1), 'index.html');

  if (!(await fileExists(filePath))) {
    report(page.route, `missing generated page at ${filePath}`);
    continue;
  }

  const html = await readFile(filePath, 'utf8');
  const title = getSingleMatch(html, /<title>([\s\S]*?)<\/title>/gi, page.route, 'title', report);
  const description = getSingleMatch(
    html,
    /<meta\b[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/gi,
    page.route,
    'meta description',
    report,
  );
  const canonical = getSingleMatch(
    html,
    /<link\b[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/gi,
    page.route,
    'canonical URL',
    report,
  );
  const ogTitle = getSingleMatch(
    html,
    /<meta\b[^>]*property="og:title"[^>]*content="([^"]*)"[^>]*>/gi,
    page.route,
    'Open Graph title',
    report,
  );
  const ogDescription = getSingleMatch(
    html,
    /<meta\b[^>]*property="og:description"[^>]*content="([^"]*)"[^>]*>/gi,
    page.route,
    'Open Graph description',
    report,
  );
  const ogUrl = getSingleMatch(
    html,
    /<meta\b[^>]*property="og:url"[^>]*content="([^"]*)"[^>]*>/gi,
    page.route,
    'Open Graph URL',
    report,
  );

  if (title !== page.title) report(page.route, `title does not match "${page.title}"`);
  if (description !== page.description) {
    report(page.route, `description does not match service data`);
  }
  if (canonical !== expectedCanonical) {
    report(page.route, `canonical must be ${expectedCanonical}`);
  }
  if (ogTitle !== page.title) report(page.route, 'Open Graph title does not match title');
  if (ogDescription !== page.description) {
    report(page.route, 'Open Graph description does not match meta description');
  }
  if (ogUrl !== expectedCanonical) {
    report(page.route, 'Open Graph URL does not match canonical');
  }

  const sitemapCount = sitemapUrls.filter((url) => url === expectedCanonical).length;
  if (sitemapCount !== 1) {
    report(page.route, `expected one sitemap entry for ${expectedCanonical}, found ${sitemapCount}`);
  }

  if (!page.service) continue;

  if (!page.content) {
    report(page.route, 'missing long-form service content');
    continue;
  }
  if (!Array.isArray(page.content.faqs) || page.content.faqs.length === 0) {
    report(page.route, 'service content must include at least one FAQ');
    continue;
  }

  const root = html.match(/<div id="root">([\s\S]*?)<\/div>/)?.[1] ?? '';
  if (!root.includes('<h1>')) report(page.route, 'missing crawlable service heading before JavaScript loads');
  for (const [index, faq] of page.content.faqs.entries()) {
    if (!root.includes(`<h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p>`)) {
      report(page.route, `crawlable service FAQ ${index + 1} question or answer is missing`);
    }
  }

  const jsonLd = readJsonLd(html, page.route, report);
  const faqSchemas = jsonLd.filter((schema) => schema?.['@type'] === 'FAQPage');
  if (faqSchemas.length !== 1) {
    report(page.route, `expected exactly one FAQPage schema, found ${faqSchemas.length}`);
    continue;
  }

  const expectedQuestions = faqQuestions(page.content.faqs);
  if (JSON.stringify(faqSchemas[0].mainEntity) !== JSON.stringify(expectedQuestions)) {
    report(page.route, 'FAQPage schema does not match the service FAQ content');
  }
}

const expectedServiceUrls = new Set(pages.map((page) => `${siteUrl}${page.route}`));
for (const landing of landings) expectedServiceUrls.add(`${siteUrl}${landing.path}`);
for (const sitemapUrl of serviceSitemapUrls) {
  if (!expectedServiceUrls.has(sitemapUrl)) {
    errors.push(`sitemap.xml: unexpected or stale service URL ${sitemapUrl}`);
  }
}

for (const [label, valueOf] of [
  ['title', (page) => page.title],
  ['description', (page) => page.description],
]) {
  const routesByValue = new Map();
  for (const page of [...pages, ...landings.map((landing) => ({ ...landing, route: landing.path }))]) {
    const value = valueOf(page);
    const routes = routesByValue.get(value) ?? [];
    routes.push(page.route);
    routesByValue.set(value, routes);
  }
  for (const [value, routes] of routesByValue) {
    if (routes.length > 1) {
      for (const route of routes) report(route, `duplicate ${label} "${value}" shared with ${routes.filter((other) => other !== route).join(', ')}`);
    }
  }
}

for (const landing of landings) {
  const route = landing.path;
  const canonical = `${siteUrl}${route}`;
  const file = resolve(outputDir, route.slice(1), 'index.html');
  if (!(await fileExists(file))) {
    report(route, 'missing generated landing page');
    continue;
  }
  const html = await readFile(file, 'utf8');
  for (const [label, pattern, expected] of [
    ['title', /<title>(.*?)<\/title>/gi, landing.title],
    ['meta description', /<meta\b[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/gi, landing.description],
    ['canonical URL', /<link\b[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/gi, canonical],
    ['Open Graph title', /<meta\b[^>]*property="og:title"[^>]*content="([^"]*)"[^>]*>/gi, landing.title],
    ['Open Graph description', /<meta\b[^>]*property="og:description"[^>]*content="([^"]*)"[^>]*>/gi, landing.description],
    ['Open Graph URL', /<meta\b[^>]*property="og:url"[^>]*content="([^"]*)"[^>]*>/gi, canonical],
  ]) {
    const actual = getSingleMatch(html, pattern, route, label, report);
    if (actual !== expected) report(route, `${label} must match landing page data`);
  }
  if (sitemapUrls.filter(url => url === canonical).length !== 1) report(route, 'expected exactly one sitemap entry');
  if (!html.includes(`<h1>${landing.heading.replaceAll('&', '&amp;')}</h1>`)) report(route, 'missing crawlable page content');
  const schemas = readJsonLd(html, route, report);
  for (const type of ['BreadcrumbList', 'Service', 'FAQPage']) {
    if (schemas.filter(schema => schema?.['@type'] === type).length !== 1) report(route, `expected one ${type} schema`);
  }
  if (landing.schemaType === 'city' && !schemas.some(schema => schema?.['@type'] === 'Service' && schema?.areaServed?.name === 'Newark')) {
    report(route, 'missing Newark service area schema');
  }
  if (landing.schemaType === 'local' && !schemas.some(schema => schema?.['@type'] === 'Service' && schema?.areaServed?.name === 'New Jersey')) {
    report(route, 'missing New Jersey service area schema');
  }
  const faq = schemas.find(schema => schema?.['@type'] === 'FAQPage');
  if (faq && JSON.stringify(faq.mainEntity) !== JSON.stringify(faqQuestions(landing.faqs))) {
    report(route, 'FAQ schema does not match landing page FAQ content');
  }
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  const faqSection = body.match(/<h2>Frequently asked questions<\/h2>([\s\S]*?)(?=<h2>|<\/article>)/i)?.[1] ?? '';
  const visibleFaqs = [...faqSection.matchAll(/<section>\s*<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>\s*<\/section>/gi)]
    .map(([, question, answer]) => ({
      question: decodeHtml(question),
      answer: decodeHtml(answer),
    }));
  for (const [index, expected] of landing.faqs.entries()) {
    if (visibleFaqs[index]?.question !== expected.question || visibleFaqs[index]?.answer !== expected.answer) {
      report(route, `crawlable FAQ ${index + 1} question or answer does not match landing page FAQ content`);
    }
  }
}

  return errors;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const errors = await validateStaticPages();
  errors.push(...(await validateCanonicalSignals(defaultOutputDir)));
  const home = await readFile(resolve(defaultOutputDir, 'index.html'), 'utf8');
  const homeRoot = home.match(/<div id="root">([\s\S]*?)<\/div>/)?.[1] ?? '';
  if (!homeRoot.includes('<h1>Digital Marketing Agency in Newark, NJ</h1><p>MARKETING</p><h2>BUILT AROUND YOUR GOALS</h2>')) {
    errors.push('/: missing crawlable homepage heading or subheading');
  }
  if ([...homeRoot.matchAll(/<h1\b/gi)].length !== 1) errors.push('/: expected exactly one homepage H1');
  for (const pattern of [
    /<title>(.*?)<\/title>/gi,
    /<meta property="og:title" content="([^"]*)"/gi,
    /<meta name="twitter:title" content="([^"]*)"/gi,
  ]) {
    if (getSingleMatch(home, pattern, '/', 'homepage title', (route, issue) => errors.push(`${route}: ${issue}`)) !== HOME_TITLE) {
      errors.push('/: homepage title must match the client-side SEO title');
    }
  }
  if (!home.includes(`name="description" content="${escapeHtml(HOME_DESCRIPTION)}"`)) errors.push('/: homepage description must match the client-side SEO description');
  for (const item of homeSearchContent.sections) {
    if (!homeRoot.includes(escapeHtml(item.text))) errors.push(`/: missing crawlable content for ${item.heading}`);
  }
  for (const faq of homeSearchFaqs) {
    if (!homeRoot.includes(escapeHtml(faq.a))) errors.push(`/: missing crawlable answer for ${faq.q}`);
  }
  const sitemap = await readFile(resolve(defaultOutputDir, 'sitemap.xml'), 'utf8');
  for (const study of caseStudies) {
    const route = `/case-studies/${study.slug}/`;
    const url = `${siteUrl}${route}`;
    const occurrences = [...sitemap.matchAll(new RegExp(`<loc>${url.replaceAll('/', '\\/')}</loc>`, 'g'))].length;
    if (occurrences !== 1) errors.push(`${route}: expected exactly one case-study sitemap entry`);
    const file = resolve(defaultOutputDir, route.slice(1), 'index.html');
    if (!(await fileExists(file))) {
      errors.push(`${route}: missing crawlable case study page`);
      continue;
    }
    const html = await readFile(file, 'utf8');
    if (!html.includes(`<h1>${escapeHtml(study.title)}</h1>`) || !html.includes(escapeHtml(study.challenge))) {
      errors.push(`${route}: missing crawlable case-study content`);
    }
  }
  if (errors.length) {
    console.error(`SEO validation failed with ${errors.length} error(s):`);
    for (const error of errors) console.error(`  - ${error}`);
    process.exitCode = 1;
  } else {
    console.log(
      `SEO validation passed: generated pages, unique metadata, canonicals, internal links, legacy redirects, 404 page, sitemap entries, and FAQ schema are complete.`,
    );
  }
}