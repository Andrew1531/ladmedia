export type LandingPage = {
  path: string;
  title: string;
  description: string;
  heading: string;
  eyebrow: string;
  intro: string;
  contextHeading: string;
  context: string[];
  audience: string[];
  deliverables: { title: string; description: string; href?: string }[];
  phases: { title: string; description: string }[];
  outcomes: string[];
  faqs: { question: string; answer: string }[];
  related: { path: string; label: string }[];
  schemaType: 'local' | 'event' | 'city';
  /** Business types served, shown as cards on the New Jersey marketing page. */
  segments?: { title: string; description: string; items: string[]; href: string; linkLabel: string }[];
};

export const landingPages: LandingPage[] = [
  {
    path: '/new-jersey-marketing-agency/',
    title: 'Marketing Agency in New Jersey | LAD Media',
    description: 'LAD Media is a Newark-based marketing agency helping New Jersey businesses get found on Google with local SEO, Google Business Profile, ads and web design.',
    heading: 'Marketing for New Jersey businesses',
    eyebrow: 'New Jersey · Digital marketing',
    intro: 'LAD Media is a digital marketing agency based in Newark, NJ. We help businesses across New Jersey get found on Google, explain what they offer, and turn website visits into inquiries.',
    contextHeading: 'Four kinds of New Jersey business',
    context: [
      'Each one is found differently on Google. We plan around how your customers search, not a one-size package.',
    ],
    audience: [
      'Home service businesses such as HVAC, plumbing, roofing, cleaning and landscaping',
      'Restaurants, cafes, shops and salons',
      'Law firms, accountants, real estate offices and medical or dental practices',
      'Startups, technology teams and Web3 projects',
    ],
    segments: [
      { title: 'Home services', description: 'HVAC, plumbing, roofing, cleaning, landscaping', items: ['Google Business Profile and map results', 'Service-area pages for the towns you cover', 'Search ads limited to your area'], href: '/guides/google-business-profile-checklist-nj-home-services/', linkLabel: 'Read the guide' },
      { title: 'Restaurants & retail', description: 'Restaurants, cafes, shops and salons', items: ['Accurate hours, menus and photos on Google', 'Review requests built into your routine', 'Social posts that show what is new'], href: '/services/social/', linkLabel: 'Social media services' },
      { title: 'Professional services', description: 'Law firms, accountants, real estate, practices', items: ['Clear service pages people can trust', 'Search content that answers real questions', 'Ads planned around your profession\u2019s rules'], href: '/services/design/', linkLabel: 'Website design services' },
      { title: 'Startups & Web3', description: 'Founders, tech and crypto teams', items: ['Positioning and launch planning', 'Community, creators and PR', 'Websites that explain a technical product'], href: '/new-jersey-crypto-marketing-agency/', linkLabel: 'NJ crypto marketing' },
    ],
    deliverables: [
      { title: 'Local SEO & Google Business Profile', description: 'Profile setup, categories, posts and reviews; service and location pages; technical fixes so Google can read your site.', href: '/services/seo/' },
      { title: 'Paid advertising', description: 'Search and social campaigns limited to the New Jersey areas you serve, with tracking agreed before any budget is spent.', href: '/services/ppc/' },
      { title: 'Website design', description: 'Mobile-first pages that say what you do, show real work, and make it easy to call, book, or send a message.', href: '/services/design/' },
      { title: 'Social media & content', description: 'Posts, guides and updates with a clear purpose, planned around what your customers ask.', href: '/services/social/' },
    ],
    phases: [
      { title: 'Review where you stand', description: 'Website, Google Business Profile, and the searches your customers use.' },
      { title: 'Fix the foundations', description: 'Correct business details, clear service pages, working tracking.' },
      { title: 'Build visibility', description: 'Useful content, an active profile, ads where they make sense.' },
      { title: 'Measure and adjust', description: 'Monthly review of calls, form submissions and search visits.' },
    ],
    outcomes: [
      'A complete and consistent presence on Google Search and Maps',
      'Service pages that match what New Jersey customers search for',
      'A website that works well on phones and makes contact simple',
      'Monthly reporting on visits and inquiries',
    ],
    faqs: [
      { question: 'Is LAD Media based in New Jersey?', answer: 'Yes. LAD Media is based in Newark, NJ, and works with businesses across the state, plus remote teams elsewhere.' },
      { question: 'Which New Jersey businesses do you work with?', answer: 'Home service companies, restaurants and shops, professional practices, and startups and Web3 teams.' },
      { question: 'How long does local SEO take to show results?', answer: 'It depends on your market and starting point. We agree on what to measure first and report monthly. No agency can guarantee rankings.' },
      { question: 'How do we get started?', answer: 'Book a call or use the contact form. Tell us what you do, where your customers are, and what you want to improve.' },
    ],
    related: [
      { path: '/services/seo/', label: 'SEO and content' },
      { path: '/services/ppc/', label: 'Paid advertising' },
      { path: '/services/design/', label: 'Design and creative' },
      { path: '/services/social/', label: 'Social media management' },
      { path: '/guides/', label: 'Guides for New Jersey businesses' },
      { path: '/case-studies/', label: 'Website case studies' },
    ],
    schemaType: 'local',
  },
  {
    path: '/new-jersey-crypto-marketing-agency/',
    title: 'Crypto Marketing Agency New Jersey | LAD Media',
    description: 'LAD Media helps New Jersey crypto and Web3 teams plan launches, clarify their message, build communities, and coordinate content, outreach, and paid media.',
    heading: 'Crypto Marketing Agency in New Jersey',
    eyebrow: 'New Jersey · Web3 marketing',
    intro: 'Marketing support for New Jersey founders and teams building crypto, blockchain and Web3 products. Start with the audience and product, then choose the channels that make sense.',
    contextHeading: 'A plan that fits the product, not a generic playbook',
    context: [
      'A token launch, a DeFi product and a blockchain-powered business do not need the same campaign. We begin by understanding what your product does, who needs it, and what a qualified inquiry or meaningful community action looks like. Then we connect the message to the channels your audience actually uses.',
      'LAD Media is based in Newark, NJ, and also works with teams remotely. A local conversation can help align founders and stakeholders, but execution can span audiences beyond the region. We do not use a fabricated office address or promise a search position, token price, or campaign outcome.'
    ],
    audience: [
      'New Jersey founders preparing a crypto or Web3 product launch',
      'Blockchain teams that need to explain a technical offer in plain language',
      'Projects seeking a coordinated plan for PR, community and creator outreach',
      'Established businesses exploring a credible Web3 positioning'
    ],
    deliverables: [
      { title: 'Launch strategy', description: 'Audience research, positioning, milestones and an actionable campaign sequence that can be reviewed with your team.' },
      { title: 'Community and social', description: 'Discord or Telegram onboarding, useful updates, social content and a process for answering recurring audience questions.' },
      { title: 'PR and creators', description: 'Relevant story angles, press materials and creator briefs that reflect the facts of your product rather than hype.' },
      { title: 'Paid media and search', description: 'Channel assessment, landing-page recommendations, tracking priorities and search content tied to genuine intent.' }
    ],
    phases: [
      { title: 'Understand the brief', description: 'Share your product, target audience, timeline and constraints so we can identify the actual marketing problem.' },
      { title: 'Prioritize the work', description: 'Agree on positioning, suitable channels, deliverables and realistic measures before spending on promotion.' },
      { title: 'Coordinate execution', description: 'Connect content, community, outreach and campaigns to one calendar, with review points for sensitive claims.' },
      { title: 'Learn and adjust', description: 'Review inquiries, audience questions and campaign signals, then refine the next round of activity.' }
    ],
    outcomes: [
      'Clearer messaging for people evaluating the product',
      'A practical channel plan based on audience fit',
      'A more consistent path from discovery to inquiry',
      'Better visibility into which questions prospective clients are asking'
    ],
    faqs: [
      { question: 'Does LAD Media work with crypto companies throughout New Jersey?', answer: 'Yes. LAD Media is based in Newark, NJ, and can coordinate remotely with teams elsewhere. Share your location and project needs when you get in touch so we can discuss the best working arrangement.' },
      { question: 'What does a New Jersey crypto marketing engagement include?', answer: 'The scope depends on your stage and goals. It may include positioning, launch planning, community building, PR preparation, influencer coordination, paid media, SEO content and campaign reporting. We agree on deliverables before work begins.' },
      { question: 'Can you help if our token or product is not launched yet?', answer: 'Yes. Pre-launch work can focus on audience research, a clear product explanation, community readiness and a realistic communications calendar. Legal, regulatory and financial questions should be reviewed by qualified advisers.' },
      { question: 'How do we get a proposal?', answer: 'Use the contact form with your project name, type, timeline and goals. That gives us enough context to discuss the right scope rather than sending a generic package.' }
    ],
    related: [
      { path: '/services/token-launch/', label: 'Token launch strategy' },
      { path: '/services/community/', label: 'Community building' },
      { path: '/services/seo/', label: 'SEO and content' },
      { path: '/services/crypto-event-marketing/', label: 'Crypto and Web3 event marketing' }
    ],
    schemaType: 'local'
  },
  {
    path: '/services/crypto-event-marketing/',
    title: 'Crypto & Web3 Event Marketing Agency | LAD Media',
    description: 'Plan crypto and Web3 event promotion before, during, and after launch. LAD Media coordinates messaging, creators, PR, social, community, and lead tracking.',
    heading: 'Crypto & Web3 Event Marketing',
    eyebrow: 'Before · during · after the event',
    intro: 'A crypto event marketing agency should do more than announce a date. LAD Media helps Web3 teams connect the invitation, live experience and follow-up so the right people know why to attend and what to do next.',
    contextHeading: 'Make each event moment part of one campaign',
    context: [
      'Whether you are planning a community meetup, product demonstration, conference activation or online session, marketing starts with the audience and a useful reason to participate. We can shape the event message, build a clear registration path and coordinate appropriate promotion across the channels that match the brief.',
      'Event operations such as venue booking, ticketing contracts, security and on-site production should be scoped separately with the appropriate providers. We focus on marketing planning, content and coordination, and we do not claim attendance, press coverage or lead volume before results exist.'
    ],
    audience: [
      'Web3 teams announcing a product or community milestone at an event',
      'Crypto brands organizing a meetup or side event for a defined audience',
      'Founders preparing an online session, panel or product demonstration',
      'Teams seeking a coordinated follow-up plan after an activation'
    ],
    deliverables: [
      { title: 'Event positioning and landing page', description: 'A concise reason to attend, clear audience fit, registration or inquiry copy, and a path for questions before the event.' },
      { title: 'PR and creator coordination', description: 'A relevant pitch angle, factual press materials and creator briefs that fit the event and respect disclosure requirements.' },
      { title: 'Social and community programming', description: 'Announcement assets, reminders, live updates and post-event recaps adapted for the channels your audience uses.' },
      { title: 'Paid promotion and measurement', description: 'Platform-appropriate promotion options, source tracking and a practical way to review registrations and qualified follow-up.' }
    ],
    phases: [
      { title: 'Before: set the invitation', description: 'Define who the event is for, the value of attending, the registration path, outreach roles and the review process for claims.' },
      { title: 'Before: build momentum', description: 'Coordinate the landing page, community announcements, social schedule, creator materials and optional paid promotion.' },
      { title: 'During: keep the story coherent', description: 'Support live social updates, speaker or product highlights and clear directions for participants who want to learn more.' },
      { title: 'After: continue the conversation', description: 'Publish a useful recap, respond to questions and route interested participants to the right next step rather than ending at attendance.' }
    ],
    outcomes: [
      'An event message that tells the right audience why it matters',
      'Coordinated promotion instead of disconnected announcements',
      'A clearer registration and inquiry journey',
      'A follow-up plan that keeps useful conversations going'
    ],
    faqs: [
      { question: 'What kinds of crypto events can you help market?', answer: 'Marketing support can be scoped for meetups, conference side events, product demonstrations, virtual sessions and community gatherings. The approach depends on audience, format, event objective and the resources already in place.' },
      { question: 'Do you organize venues or run the event on site?', answer: 'This page covers event marketing rather than venue booking or full event production. If those services are needed, identify them during scoping so roles and specialist partners can be agreed before promotion begins.' },
      { question: 'When should event marketing start?', answer: 'Start early enough to clarify the audience, registration process, speakers or program, and approval of claims before outreach begins. The timeline varies by event type; we can plan a realistic sequence around your confirmed date.' },
      { question: 'How do you measure event marketing?', answer: 'We first agree on useful signals such as qualified registrations, inquiry sources, attendance where tracked, and post-event conversations. We do not promise a fixed number of attendees or leads.' }
    ],
    related: [
      { path: '/services/pr/', label: 'PR and media coverage' },
      { path: '/services/influencer/', label: 'Influencer marketing' },
      { path: '/services/social/', label: 'Social media management' },
      { path: '/services/community/', label: 'Community building' },
      { path: '/services/ppc/', label: 'Paid advertising' },
      { path: '/services/design/', label: 'Design and creative' }
    ],
    schemaType: 'event'
  }
];

export const getLandingPage = (path: string) => landingPages.find((page) => page.path === path);