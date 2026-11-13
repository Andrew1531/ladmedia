import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { validateStaticPages } from './validate-static-pages.mjs';
import { renderHomeContent, renderCaseStudyContent } from './render-static-content.mjs';
import { HOME_TITLE, HOME_DESCRIPTION, homeSearchContent, homeSearchFaqs } from '../src/data/home-search-content.ts';
import { SERVICES_DESCRIPTION, CASE_STUDIES_DESCRIPTION } from '../src/data/site-descriptions.ts';
import { servicesData } from '../src/data/services.ts';
import { caseStudies } from '../src/data/case-studies.ts';
import { landingPages } from '../src/data/landing-pages.ts';

test('every page has a complete 155-character description without truncation', () => {
  const descriptions = [
    ['home', HOME_DESCRIPTION],
    ['services', SERVICES_DESCRIPTION],
    ['case studies', CASE_STUDIES_DESCRIPTION],
    ...servicesData.map(item => [item.id, item.description]),
    ...caseStudies.map(item => [item.slug, item.summary]),
    ...landingPages.map(item => [item.path, item.description]),
  ];
  for (const [page, description] of descriptions) {
    assert.equal(description.length, 155, `${page}: description must be 155 characters`);
    assert.match(description, /\.$/, `${page}: description must end as a complete sentence`);
  }
});

test('case studies expose substantive documented stories and real images before JavaScript', () => {
  for (const study of caseStudies) {
    const html = renderCaseStudyContent(study);
    assert.ok(html.includes(`src="/${study.screenshot}"`));
    assert.ok(html.includes(`alt="${study.client.replaceAll('&', '&amp;')} website created by LAD Media"`));
    for (const section of study.story) {
      assert.ok(html.includes(section.text.replaceAll('&', '&amp;')));
    }
    const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    assert.ok(words >= 400 && words <= 600, `${study.slug}: expected 400–600 words, got ${words}`);
    assert.ok(html.includes('none has been confirmed'));
  }
});

test('homepage targets Newark in one crawlable H1 while preserving the hero wording', () => {
  const html = renderHomeContent();
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
  assert.ok(html.includes('<h1>Digital Marketing Agency in Newark, NJ</h1>'));
  assert.ok(html.includes('<h2>BUILT AROUND YOUR GOALS</h2>'));
  assert.match(HOME_TITLE, /^Digital Marketing Agency in Newark, NJ/);
});

test('homepage includes substantive service content, FAQs, and internal service links', () => {
  const html = renderHomeContent();
  for (const item of homeSearchContent.sections) {
    assert.ok(html.includes(item.text.replaceAll('&', '&amp;')));
    assert.ok(html.includes(`href="${item.href}/"`));
  }
  for (const faq of homeSearchFaqs) assert.ok(html.includes(faq.a.replaceAll('&', '&amp;')));
});

test('homepage keeps development projects separate without manufactured ratings', () => {
  const html = renderHomeContent();
  assert.ok(html.includes('not completed case studies'));
  assert.ok(html.includes('href="https://ladsync.com"'));
  assert.ok(html.includes('href="https://ladestate.org"'));
  assert.ok(!html.includes('AggregateRating'));
});

const siteUrl = 'https://ladmedia.co';
const route = '/services/example/';
const faq = { question: 'What is included?', answer: 'A clear plan.' };
const servicePage = {
  route,
  title: 'Example Service | LAD Media',
  description: 'An example service.',
  service: { id: 'example' },
  content: { faqs: [faq] },
};

function htmlFor(page) {
  const canonical = `${siteUrl}${page.route}`;
  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: page.content.faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
  return `<html><head>
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.description}">
<meta property="og:url" content="${canonical}">
<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
</head><body>${page.service ? `<div id="root"><main><h1>${page.title}</h1><h2>Service FAQ</h2>${page.content.faqs.map((item) => `<section><h3>${item.question}</h3><p>${item.answer}</p></section>`).join('')}</main></div>` : ''}</body></html>`;
}

async function fixture(t, pages = [servicePage]) {
  const outputDir = await mkdtemp(join(tmpdir(), 'ladmedia-seo-'));
  t.after(() => rm(outputDir, { recursive: true, force: true }));
  const files = new Map();
  for (const page of pages) {
    const path = join(outputDir, page.route.slice(1), 'index.html');
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, htmlFor(page));
    files.set(page.route, path);
  }
  const sitemap = join(outputDir, 'sitemap.xml');
  await writeFile(sitemap, `<urlset>${pages.map((page) => `<url><loc>${siteUrl}${page.route}</loc></url>`).join('')}</urlset>`);
  const validate = () => validateStaticPages({ outputDir, pages, landings: [] });
  return {
    files,
    sitemap,
    validate,
    async changeHtml(changedRoute, update) {
      const path = files.get(changedRoute);
      await writeFile(path, update(await readFile(path, 'utf8')));
    },
  };
}

async function expectFailure(validate, affectedRoute, problem) {
  const errors = await validate();
  assert.ok(errors.some((error) => error.startsWith(`${affectedRoute}: `) && problem.test(error)),
    `Expected ${affectedRoute} and ${problem} in errors:\n${errors.join('\n')}`);
}

test('valid generated service fixture passes', async (t) => {
  const { validate } = await fixture(t);
  assert.deepEqual(await validate(), []);
});

test('missing generated service page identifies its route', async (t) => {
  const { files, validate } = await fixture(t);
  await rm(files.get(route));
  await expectFailure(validate, route, /missing generated page/);
});

test('duplicate source metadata identifies both affected routes', async (t) => {
  const second = {
    ...servicePage,
    route: '/services/second/',
    service: { id: 'second' },
  };
  const { validate } = await fixture(t, [servicePage, second]);
  await expectFailure(validate, route, /duplicate title/);
  await expectFailure(validate, second.route, /duplicate description/);
});

test('duplicate HTML metadata identifies the route and tag', async (t) => {
  const { changeHtml, validate } = await fixture(t);
  await changeHtml(route, (html) => html.replace('</head>', '<meta name="description" content="extra"></head>'));
  await expectFailure(validate, route, /expected exactly one meta description, found 2/);
});

test('incorrect canonical identifies the route and expected URL', async (t) => {
  const { changeHtml, validate } = await fixture(t);
  await changeHtml(route, (html) => html.replace(`${siteUrl}${route}`, `${siteUrl}/wrong/`));
  await expectFailure(validate, route, /canonical must be https:\/\/ladmedia\.co\/services\/example\//);
});

test('missing sitemap entry identifies the affected route', async (t) => {
  const { sitemap, validate } = await fixture(t);
  await writeFile(sitemap, '<urlset></urlset>');
  await expectFailure(validate, route, /expected one sitemap entry .* found 0/);
});

test('missing FAQ schema identifies the affected service route', async (t) => {
  const { changeHtml, validate } = await fixture(t);
  await changeHtml(route, (html) => html.replace(/<script type="application\/ld\+json">.*?<\/script>/, ''));
  await expectFailure(validate, route, /expected exactly one FAQPage schema, found 0/);
});

test('incomplete FAQ schema identifies the affected service route', async (t) => {
  const { changeHtml, validate } = await fixture(t);
  await changeHtml(route, (html) => html.replace('"A clear plan."', '"An incomplete answer."'));
  await expectFailure(validate, route, /FAQPage schema does not match the service FAQ content/);
});

test('missing crawlable service FAQ answer identifies its route', async (t) => {
  const { changeHtml, validate } = await fixture(t);
  await changeHtml(route, (html) => html.replace('<p>A clear plan.</p>', ''));
  await expectFailure(validate, route, /crawlable service FAQ 1 question or answer is missing/);
});

test('missing landing page identifies its route', async (t) => {
  const { sitemap } = await fixture(t);
  const landing = { path: '/services/event/', title: 'Event | LAD Media', description: 'Event service.' };
  await writeFile(sitemap, `<urlset><url><loc>${siteUrl}${route}</loc></url><url><loc>${siteUrl}${landing.path}</loc></url></urlset>`);
  const outputDir = dirname(sitemap);
  await expectFailure(() => validateStaticPages({ outputDir, pages: [servicePage], landings: [landing] }),
    landing.path, /missing generated landing page/);
});

async function landingFixture(t) {
  const { sitemap } = await fixture(t);
  const landing = {
    path: '/services/event/',
    title: 'Event | LAD Media',
    description: 'Event service.',
    heading: 'Event marketing',
    schemaType: 'event',
    faqs: [
      { question: 'What happens first?', answer: 'We make a plan.' },
      { question: 'What about A & B?', answer: 'We compare <both> & choose "one".' },
    ],
  };
  const outputDir = dirname(sitemap);
  const file = join(outputDir, landing.path.slice(1), 'index.html');
  await mkdir(dirname(file), { recursive: true });
  const html = htmlFor({ ...landing, route: landing.path, content: { faqs: landing.faqs } })
    .replace('</head>', `<script type="application/ld+json">${JSON.stringify({ '@type': 'Service' })}</script><script type="application/ld+json">${JSON.stringify({ '@type': 'BreadcrumbList' })}</script></head>`)
    .replace('</body>', `<h1>${landing.heading}</h1><h2>Frequently asked questions</h2><section><h3>${landing.faqs[0].question}</h3><p>${landing.faqs[0].answer}</p></section><section><h3>What about A &amp; B?</h3><p>We compare &lt;both&gt; &amp; choose &quot;one&quot;.</p></section><h2>Explore related services</h2></body>`);
  await writeFile(file, html);
  await writeFile(sitemap, `<urlset><url><loc>${siteUrl}${route}</loc></url><url><loc>${siteUrl}${landing.path}</loc></url></urlset>`);
  const validate = () => validateStaticPages({ outputDir, pages: [servicePage], landings: [landing] });
  return { landing, file, html, validate };
}

test('changed landing FAQ answer with the same question count identifies its route', async (t) => {
  const { landing, file, html, validate } = await landingFixture(t);
  assert.deepEqual(await validate(), []);

  await writeFile(file, html.replace('"We make a plan."', '"We skip planning."'));
  await expectFailure(validate, landing.path, /FAQ schema does not match landing page FAQ content/);
});

test('missing crawlable landing FAQ question identifies its route even when schema is correct', async (t) => {
  const { landing, file, html, validate } = await landingFixture(t);
  assert.deepEqual(await validate(), []);

  await writeFile(file, html.replace('<h3>What about A &amp; B?</h3>', ''));
  await expectFailure(validate, landing.path, /crawlable FAQ 2 question or answer does not match/);
});

test('changed crawlable landing FAQ answer identifies its route even when schema is correct', async (t) => {
  const { landing, file, html, validate } = await landingFixture(t);
  assert.deepEqual(await validate(), []);

  await writeFile(file, html.replace('<p>We make a plan.</p>', '<p>We skip planning.</p>'));
  await expectFailure(validate, landing.path, /crawlable FAQ 1 question or answer does not match/);
});
