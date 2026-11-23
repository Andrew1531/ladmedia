export const BOOKING_URL = 'https://calendar.app.google/o7VBxEWFGqhCR9scA';

type Params = Record<string, string | number | undefined>;

/** Sends a GA4 event through the dataLayer; the Google tag in GTM forwards it to GA4. */
export function trackEvent(name: string, params: Params = {}) {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', name, { page_path: window.location.pathname, ...params });
}

/** Where on the page a link sits, so reports can tell header, hero, footer and form clicks apart. */
function linkLocation(el: Element) {
  const marked = el.closest('[data-cta-location]');
  if (marked) return marked.getAttribute('data-cta-location') ?? 'unknown';
  if (el.closest('header, nav')) return 'header';
  if (el.closest('footer')) return 'footer';
  const section = el.closest('section[id]');
  return section ? section.id : 'body';
}

let started = false;

/**
 * Tracks booking-link clicks anywhere on the site. Email (mailto:) clicks are
 * tracked by the email_click tag in Google Tag Manager, so they are not sent here.
 */
export function initClickTracking() {
  if (started || typeof document === 'undefined') return;
  started = true;
  document.addEventListener(
    'click',
    (event) => {
      const link = (event.target as Element | null)?.closest?.('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') ?? '';
      if (href.startsWith('https://calendar.app.google')) {
        trackEvent('book_call_click', { link_location: linkLocation(link), link_url: href });
      }
    },
    { capture: true },
  );
}
