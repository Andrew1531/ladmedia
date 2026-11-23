export type GuideItem = { title: string; text: string };

export type GuideSection = {
  id: string;
  heading: string;
  intro?: string;
  items?: GuideItem[];
  paragraphs?: string[];
};

export type Guide = {
  slug: string;
  /** Page title shown in search results; 30 to 60 characters. */
  pageTitle: string;
  /** Headline shown on the page. */
  title: string;
  description: string;
  category: string;
  published: string; // YYYY-MM-DD
  readMinutes: number;
  intro: string;
  sections: GuideSection[];
  closing: string;
  related: { path: string; label: string }[];
};

export const GUIDES_TITLE = 'Marketing Guides for New Jersey Businesses | LAD Media';
export const GUIDES_DESCRIPTION =
  'Practical marketing guides for New Jersey businesses from LAD Media in Newark, NJ: Google Business Profile, local SEO, ads, websites and social media tips.';

export const guideCategories = ['Home services', 'Restaurants & retail', 'Professional services', 'Startups & Web3'];

export const guides: Guide[] = [
  {
    slug: 'google-business-profile-checklist-nj-home-services',
    pageTitle: 'Google Business Profile Checklist for NJ Home Services',
    title: 'Google Business Profile checklist for New Jersey home service businesses',
    description:
      'A Google Business Profile checklist for New Jersey HVAC, plumbing, and contracting businesses: what to set up, what to do each week, and mistakes to avoid.',
    category: 'Home services',
    published: '2026-11-18',
    readMinutes: 6,
    intro:
      'When someone in New Jersey searches for an HVAC company or a plumber, the map results often appear before any website. Your Google Business Profile decides whether you show up there. This checklist covers what to set up, what to keep doing, and the mistakes that hold profiles back.',
    sections: [
      {
        id: 'checklist',
        heading: 'The six-point checklist',
        intro: 'Work through these once. Most take a few minutes in your Google Business Profile dashboard.',
        items: [
          {
            title: 'Choose the right primary category',
            text: 'Pick the one that matches your main service, such as "HVAC contractor" or "Plumber". Add secondary categories only for services you actually offer.',
          },
          {
            title: 'Set your service area, not just an address',
            text: 'If you go to customers, list the New Jersey towns and counties you cover. If customers do not visit your location, hide your address and use a service area instead.',
          },
          {
            title: 'Fill in every service',
            text: 'Add each service with a short description in plain words, such as "furnace repair" or "water heater installation". These help Google match you to specific searches.',
          },
          {
            title: 'Add real photos',
            text: 'Your team, your vehicles, finished jobs. Add a few every month rather than all at once, and skip stock photos.',
          },
          {
            title: 'Ask every customer for a review',
            text: 'Send your review link by text or email after each job. Ask every customer, not only the happy ones, never offer anything in return, and reply to every review.',
          },
          {
            title: 'Post once a week',
            text: 'Share a finished job, a seasonal tip, or an offer, with a button that links to the matching page on your website.',
          },
        ],
      },
      {
        id: 'weekly',
        heading: 'What to do every week',
        intro: 'A profile that stays active tends to stay visible. Fifteen minutes a week is enough:',
        items: [
          { title: 'Reply to new reviews', text: 'Thank people for positive reviews and answer negative ones calmly, with a way to follow up offline.' },
          { title: 'Add photos from recent jobs', text: 'Two or three real photos keep the profile current and show the kind of work you do.' },
          { title: 'Publish one update', text: 'A short post about a job, a seasonal reminder, or a new service, linked to your website.' },
          { title: 'Check your hours', text: 'Update hours before holidays and storms so customers do not call or drive over when you are closed.' },
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes',
        items: [
          {
            title: 'Adding keywords or town names to your business name',
            text: 'Use your real business name only. Extra words like "Best HVAC Newark" break Google’s guidelines and can get a profile suspended.',
          },
          {
            title: 'One profile per town',
            text: 'A business gets one profile. Cover more towns through your service area and website pages, not extra listings.',
          },
          {
            title: 'Using a PO box or virtual office',
            text: 'Google does not accept these as business addresses. If you work from home, hide the address and set a service area.',
          },
          {
            title: 'Details that do not match',
            text: 'Keep your business name, phone number, and website the same on your profile, your site, and directories.',
          },
        ],
      },
      {
        id: 'start',
        heading: 'Where to start',
        paragraphs: [
          'If you only do one thing this week, check your primary category and service area. They decide which searches you can appear in at all.',
          'Then set a simple routine: ask for a review after every job, and add one update and a few photos each week. Results depend on your market and competitors, so measure calls and website visits from the profile over a few months, not days.',
        ],
      },
    ],
    closing: 'LAD Media sets up and manages Google Business Profiles and websites for New Jersey businesses. Tell us about yours and we will explain how we can help and what it would involve.',
    related: [
      { path: '/new-jersey-marketing-agency/', label: 'Marketing for New Jersey businesses' },
      { path: '/services/seo/', label: 'SEO and content services' },
      { path: '/case-studies/polar-point-hvac-website/', label: 'Polar Point HVAC website case study' },
    ],
  },
];

export const getGuide = (slug?: string) => guides.find((guide) => guide.slug === slug);

export const formatGuideDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
