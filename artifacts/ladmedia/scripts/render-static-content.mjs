import { servicesData } from '../src/data/services.ts';
import { caseStudies } from '../src/data/case-studies.ts';
import { HOME_INTRO, homeSearchContent, homeSearchFaqs } from '../src/data/home-search-content.ts';
import { guides, formatGuideDate } from '../src/data/guides.ts';

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const paragraph = (text) => `<p>${escapeHtml(text)}</p>`;
const list = (items) => `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
const link = (href, label) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
const section = (heading, body) => `<section><h2>${escapeHtml(heading)}</h2>${body}</section>`;
const wrap = (heading, body) => `<main><article><h1>${escapeHtml(heading)}</h1>${body}</article></main>`;

export function renderHomeContent() {
  return wrap('Digital Marketing Agency in Newark, NJ', [
    '<p>MARKETING</p>',
    '<h2>BUILT AROUND YOUR GOALS</h2>',
    paragraph(HOME_INTRO),
    section(homeSearchContent.heading,
      paragraph(homeSearchContent.intro) +
      homeSearchContent.sections.map(item =>
        `<section><h3>${escapeHtml(item.heading)}</h3>${paragraph(item.text)}<p>${link(`${item.href}/`, item.label)}</p></section>`
      ).join('')),
    section('Crypto and Web3 specialists',
      paragraph('We work on positioning, launches, community, PR, and campaigns for teams building in a complex space.') +
      `<p>${link('/services/crypto-event-marketing/', 'Explore crypto and Web3 event marketing')}</p>`),
    section('Marketing beyond crypto',
      paragraph('Our digital work also supports service businesses, technology platforms, and professional organizations. Explore our strategy, SEO, content, paid media, and website services.') +
      `<ul>${servicesData.map(service => `<li>${link(`/services/${service.id}/`, service.title)}</li>`).join('')}</ul>`),
    section('Based in Newark. Working across NJ.',
      paragraph('Home service companies, restaurants and shops, professional practices, and startups. See how we help New Jersey businesses get found, or read our weekly guides.') +
      `<ul><li>${link('/new-jersey-marketing-agency/', 'NJ marketing services')}</li><li>${link('/guides/', 'Marketing guides for New Jersey businesses')}</li></ul>`),
    section('Marketing for New Jersey teams',
      paragraph('Learn how we approach positioning and outreach for New Jersey founders and blockchain businesses.') +
      `<p>${link('/new-jersey-crypto-marketing-agency/', 'Explore New Jersey crypto marketing')}</p>`),
    section('Crypto and Web3 event marketing',
      paragraph('Connect event invitations, promotion, community engagement and follow-up for meetups, product demonstrations and virtual sessions.') +
      `<p>${link('/services/crypto-event-marketing/', 'Explore event marketing')}</p>`),
    section('Documented work across industries',
      paragraph('Browse public website projects with documented deliverables and links to the live sites.') +
      `<ul>${caseStudies.map(study => `<li>${link(`/case-studies/${study.slug}/`, study.client)}</li>`).join('')}</ul>` +
      `<p>${link('/case-studies/', 'View all LAD Media case studies')}</p>`),
    section('Projects in development',
      paragraph('LADsync and LADestate are projects we are currently working on, not completed case studies.') +
      `<ul><li>${link('https://ladsync.com', 'LADsync.com')}</li><li>${link('https://ladestate.org', 'LADestate.org')}</li></ul>`),
    section('Choosing a marketing partner',
      homeSearchFaqs.map(faq => `<section><h3>${escapeHtml(faq.q)}</h3>${paragraph(faq.a)}</section>`).join('')),
    section('Discuss your project',
      paragraph('Share your project, audience, timeline and goals to discuss a suitable marketing scope.') +
      `<p>${link('/#contact', 'Contact LAD Media')}</p>`),
  ].join(''));
}

export function renderServicesContent() {
  return wrap('Marketing Services',
    paragraph('We specialize in crypto and Web3. Our strategy, content, design, SEO, and paid media work also supports businesses beyond the space. Each service page explains its approach, who it is for, and common questions.') +
    `<ul>${servicesData.map(service => `<li><h2>${link(`/services/${service.id}/`, service.title)}</h2>${paragraph(service.description)}</li>`).join('')}</ul>` +
    section('Specialized marketing', `<ul>
      <li>${link('/services/crypto-event-marketing/', 'Crypto and Web3 event marketing')}</li>
      <li>${link('/new-jersey-marketing-agency/', 'Marketing for New Jersey businesses')}</li>
      <li>${link('/new-jersey-crypto-marketing-agency/', 'Crypto marketing in New Jersey')}</li>
    </ul>`));
}

export function renderServiceContent(service, content) {
  if (!content) throw new Error(`Missing long-form content for service: ${service.id}`);
  return wrap(service.title,
    paragraph(service.description) +
    section(`A practical approach to ${service.title.toLowerCase()}`, content.overview.map(paragraph).join('')) +
    section('Who this service is for', list(content.idealFor)) +
    section('What an engagement may include', list(service.features)) +
    section('How the engagement works',
      content.approach.map(step => `<section><h3>${escapeHtml(step.title)}</h3>${paragraph(step.description)}</section>`).join('')) +
    section('Useful outcomes', list(content.outcomes)) +
    section(`${service.title} FAQ`,
      content.faqs.map(faq => `<section><h3>${escapeHtml(faq.question)}</h3>${paragraph(faq.answer)}</section>`).join('')) +
    section('Related services',
      `<ul>${content.relatedServiceIds.map(id => {
        const related = servicesData.find(item => item.id === id);
        if (!related) throw new Error(`Unknown related service: ${id}`);
        return `<li>${link(`/services/${id}/`, related.title)}</li>`;
      }).join('')}</ul>` +
      `<p>${link('/services/crypto-event-marketing/', 'Crypto and Web3 event marketing')}</p>` +
      `<p>${link('/services/', 'All marketing services')}</p>`) +
    `<p>${link('/#contact', 'Discuss your project with LAD Media')}</p>`);
}

export function renderCaseStudiesContent() {
  return wrap('LAD Media Case Studies',
    paragraph('Explore documented website projects for service businesses, technology platforms and professional organizations. Each study describes completed work and available evidence.') +
    `<ul>${caseStudies.map(study => `<li><h2>${link(`/case-studies/${study.slug}/`, study.client)}</h2><img src="/${escapeHtml(study.screenshot)}" alt="${escapeHtml(study.client)} website created by LAD Media" width="1280" height="720" loading="lazy">${paragraph(study.summary)}</li>`).join('')}</ul>` +
    `<p>${link('/services/design/', 'Explore website design services')}</p>`);
}

export function renderCaseStudyContent(study) {
  return wrap(study.title,
    paragraph(study.summary) +
    `<figure><img src="/${escapeHtml(study.screenshot)}" alt="${escapeHtml(study.client)} website created by LAD Media" width="1280" height="720"><figcaption>Captured view of the completed ${escapeHtml(study.client)} website.</figcaption></figure>` +
    section('The challenge', paragraph(study.challenge)) +
    section('Work completed', list(study.workCompleted)) +
    study.story.map(item => section(item.heading, paragraph(item.text))).join('') +
    section('Deliverables', list(study.deliverables)) +
    section('Available evidence', list(study.evidence)) +
    paragraph('No traffic, lead, revenue, or ranking outcome is claimed because none has been confirmed for this case study.') +
    `<p>${link(study.liveUrl, `Visit the ${study.client} website`)}</p>` +
    `<p>${link('/case-studies/', 'See all case studies')}</p>` +
    `<p>${link('/services/design/', 'Explore website design services')}</p>`);
}
const guideCard = (guide) =>
  `<li><h2>${link(`/guides/${guide.slug}/`, guide.title)}</h2>${paragraph(guide.description)}<p>${escapeHtml(guide.category)} · ${escapeHtml(formatGuideDate(guide.published))} · ${guide.readMinutes} min read</p></li>`;

export function renderGuidesContent() {
  return wrap('Marketing guides for NJ businesses',
    paragraph('Practical answers to the questions New Jersey business owners ask about Google, ads, websites and social media. A new guide every week.') +
    `<ul>${guides.map(guideCard).join('')}</ul>` +
    section('Want this done for your business?',
      paragraph('LAD Media is a digital marketing agency based in Newark, NJ.') +
      `<p>${link('/new-jersey-marketing-agency/', 'See NJ marketing services')}</p>`));
}

export function renderGuideContent(guide) {
  const body = guide.sections.map((item) => `<section id="${escapeHtml(item.id)}"><h2>${escapeHtml(item.heading)}</h2>` +
    (item.intro ? paragraph(item.intro) : '') +
    (item.paragraphs ?? []).map(paragraph).join('') +
    (item.items ? `<ol>${item.items.map((entry) => `<li><h3>${escapeHtml(entry.title)}</h3>${paragraph(entry.text)}</li>`).join('')}</ol>` : '') +
    '</section>').join('');
  return wrap(guide.title,
    `<p>${escapeHtml(guide.category)} · ${escapeHtml(formatGuideDate(guide.published))} · ${guide.readMinutes} min read · By Andrew, LAD Media, Newark, NJ</p>` +
    paragraph(guide.intro) + body +
    section('Want help putting this in place?', paragraph(guide.closing) + `<p><a href="https://calendar.app.google/o7VBxEWFGqhCR9scA">Book a call with LAD Media</a> or email <a href="mailto:andrew@ladmedia.co">andrew@ladmedia.co</a></p>`) +
    section('Related', `<ul>${guide.related.map((item) => `<li>${link(item.path, item.label)}</li>`).join('')}<li>${link('/guides/', 'All guides for New Jersey businesses')}</li></ul>`));
}
