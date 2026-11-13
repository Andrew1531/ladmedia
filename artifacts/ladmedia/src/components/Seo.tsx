import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { servicesData } from '../data/services';
import { getCaseStudy } from '../data/case-studies';
import { getLandingPage } from '../data/landing-pages';
import { HOME_TITLE, HOME_DESCRIPTION } from '../data/home-search-content';
import { SERVICES_DESCRIPTION, CASE_STUDIES_DESCRIPTION } from '../data/site-descriptions';

const SITE_URL = 'https://ladmedia.co';
const INDEXABLE_ROBOTS = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
const NOT_FOUND_TITLE = 'Page Not Found | LAD Media';
const NOT_FOUND_DESCRIPTION = 'This page does not exist on the LAD Media website.';

// The canonical tag is removed on unknown routes and restored on real pages.
function setCanonical(href: string | null) {
  const existing = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!href) {
    existing?.remove();
    return;
  }
  if (existing) {
    existing.setAttribute('href', href);
    return;
  }
  const link = document.createElement('link');
  link.setAttribute('rel', 'canonical');
  link.setAttribute('href', href);
  document.head.appendChild(link);
}

function setMeta(selector: string, attribute: string, value: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute(attribute, value);
}

export default function Seo() {
  const [location] = useLocation();

  useEffect(() => {
    const cleanPath = location === '/' ? '/' : `${location.replace(/\/+$/, '')}/`;
    const serviceId = cleanPath.match(/^\/services\/([^/]+)\/$/)?.[1];
    const service = servicesData.find((item) => item.id === serviceId);
    const caseStudySlug = cleanPath.match(/^\/case-studies\/([^/]+)\/$/)?.[1];
    const caseStudy = getCaseStudy(caseStudySlug);
    const landingPage = getLandingPage(cleanPath);

    let title = HOME_TITLE;
    let description = HOME_DESCRIPTION;
    let known = true;

    if (cleanPath === '/') {
      // Homepage defaults apply.
    } else if (landingPage) {
      title = landingPage.title;
      description = landingPage.description;
    } else if (cleanPath === '/services/') {
      title = 'Marketing Services for Crypto & Beyond | LAD Media';
      description = SERVICES_DESCRIPTION;
    } else if (service) {
      title = `${service.title} for Crypto & Web3 | LAD Media`;
      description = service.description;
    } else if (cleanPath === '/case-studies/') {
      title = 'Website Design Case Studies | LAD Media';
      description = CASE_STUDIES_DESCRIPTION;
    } else if (caseStudy) {
      title = `${caseStudy.client} Website Case Study | LAD Media`;
      description = caseStudy.summary;
    } else {
      // Unknown route: never advertise a canonical URL or ask to be indexed.
      known = false;
      title = NOT_FOUND_TITLE;
      description = NOT_FOUND_DESCRIPTION;
    }

    const canonical = `${SITE_URL}${cleanPath}`;
    document.title = title;
    setCanonical(known ? canonical : null);
    setMeta('meta[name="robots"]', 'content', known ? INDEXABLE_ROBOTS : 'noindex, follow');
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', known ? canonical : `${SITE_URL}/`);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [location]);

  return null;
}