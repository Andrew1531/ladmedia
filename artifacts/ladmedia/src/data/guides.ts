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

/** Every guide, including ones scheduled for later weeks. */
const allGuides: Guide[] = [
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
  {
    "slug": "google-maps-nj-restaurants-and-shops",
    "pageTitle": "How NJ Restaurants and Shops Show Up in Google Maps",
    "title": "How New Jersey restaurants and shops show up in Google Maps",
    "description": "How New Jersey restaurants and retail shops can get found in Google Maps: categories, hours, menus, photos, products and reviews, in the order they matter.",
    "category": "Restaurants & retail",
    "published": "2026-11-25",
    "readMinutes": 5,
    "intro": "When someone nearby searches for \"pizza near me\" or \"gift shop Montclair\", Google Maps decides which places they see first. Three things drive it: how relevant your profile is to the search, how close you are, and how well known your business is. You cannot move your location, but you control the rest. This guide covers what a walk-in business needs before anything else.",
    "sections": [
      {
        "id": "basics",
        "heading": "Get the basics right first",
        "intro": "These fields decide which searches you can appear in. Check them in your Google Business Profile.",
        "items": [
          {
            "title": "Primary category",
            "text": "Be specific: \"Italian restaurant\" or \"Coffee shop\" beats \"Restaurant\", and \"Bicycle store\" beats \"Store\". Add secondary categories only for what you really offer."
          },
          {
            "title": "Hours, including holidays",
            "text": "Set regular hours and add special hours before every holiday, snow day and summer change. Wrong hours lead to bad reviews faster than anything else."
          },
          {
            "title": "Address and pin",
            "text": "Make sure the map pin sits on your actual entrance, especially in a strip mall or a building with several storefronts."
          },
          {
            "title": "Phone and website",
            "text": "Use a number that is answered during opening hours, and link to your own website rather than a third-party page."
          }
        ]
      },
      {
        "id": "walk-in",
        "heading": "What walk-in customers look for",
        "intro": "People choosing where to go right now decide on what they can see in a few seconds:",
        "items": [
          {
            "title": "Your menu or products",
            "text": "Restaurants: add the menu in your profile or link to a menu page on your site, not a PDF. Shops: add your main products with photos and price ranges."
          },
          {
            "title": "Real photos",
            "text": "The storefront from the street, the inside, your best dishes or products, and your team. Add a few every month so the profile looks current."
          },
          {
            "title": "Attributes",
            "text": "Mark what applies, such as outdoor seating, takeout, delivery, wheelchair-accessible entrance or Wi-Fi. These answer questions before people call."
          },
          {
            "title": "Ordering and booking links",
            "text": "If you take online orders or reservations, add the links so customers can act straight from Maps."
          }
        ]
      },
      {
        "id": "reviews",
        "heading": "Reviews and replies",
        "paragraphs": [
          "Reviews affect both where you appear and whether people choose you. Ask every customer, by a QR code at the register or on the receipt, and never offer anything in return.",
          "Reply to every review within a few days. Short, specific thanks for good reviews, and a calm reply with a way to follow up offline for bad ones."
        ]
      },
      {
        "id": "start",
        "heading": "Where to start this week",
        "paragraphs": [
          "Check your primary category, hours and map pin today. Then add ten real photos and your menu or top products.",
          "After that, a routine of a few photos and one update a week keeps the profile active. Measure calls, direction requests and website clicks in your profile over a few months."
        ]
      }
    ],
    "closing": "LAD Media sets up and manages Google Business Profiles and websites for New Jersey restaurants and shops. Tell us about your business and we will explain what we would change first.",
    "related": [
      {
        "path": "/guides/google-business-profile-checklist-nj-home-services/",
        "label": "Google Business Profile checklist"
      },
      {
        "path": "/new-jersey-marketing-agency/",
        "label": "Marketing for New Jersey businesses"
      },
      {
        "path": "/services/seo/",
        "label": "SEO and content services"
      }
    ]
  },
  {
    "slug": "ad-rules-nj-law-firms-accountants-practices",
    "pageTitle": "Ad Rules for NJ Law Firms, Accountants and Practices",
    "title": "Ad rules New Jersey law firms, accountants and practices should know",
    "description": "What New Jersey advertising rules mean for law firm, accounting and medical practice websites and ads, and what to check before you spend on new marketing.",
    "category": "Professional services",
    "published": "2026-12-02",
    "readMinutes": 7,
    "intro": "Lawyers, accountants and medical practices in New Jersey can advertise, but their licensing rules set limits that ordinary businesses do not face. Breaking them can mean a complaint to your licensing board, not just a rejected ad. This guide is a plain-English starting point for marketing decisions. It is not legal advice: confirm anything you are unsure about with your board, your bar or your own counsel.",
    "sections": [
      {
        "id": "all",
        "heading": "Rules that apply to all three",
        "intro": "Each profession has its own rules, but they share the same core:",
        "items": [
          {
            "title": "Nothing false or misleading",
            "text": "Every claim must be true and not create unjustified expectations. That includes what you leave out: a fact presented without needed context can still mislead."
          },
          {
            "title": "Be ready to back up claims",
            "text": "Regulators can ask you to prove what your ads say. Keep the evidence for any statistic, result or credential you mention."
          },
          {
            "title": "Careful with \"specialist\" and \"expert\"",
            "text": "Each profession limits how these words can be used. Check your own rules before putting them in a headline, a page title or an ad."
          },
          {
            "title": "No guarantees",
            "text": "Promising outcomes, such as winning a case, getting a refund or a medical result, is where most problems start."
          }
        ]
      },
      {
        "id": "law",
        "heading": "Law firms",
        "items": [
          {
            "title": "\"Expert\" is restricted",
            "text": "Under New Jersey Committee on Attorney Advertising Opinion 45, only lawyers certified by the New Jersey Supreme Court (or an approved organization) may call themselves experts. \"Specialize\" or \"expertise\" may be used only if accurate and you can show the education, training and experience behind it."
          },
          {
            "title": "Awards and rankings need care",
            "text": "New Jersey is stricter than many states about comparing yourself with other lawyers. Before using \"Super Lawyers\", \"Best Lawyers\" or similar badges, check the current rules and required wording. Being on such a list does not by itself support a claim of expertise."
          },
          {
            "title": "Results and testimonials",
            "text": "Past results and client reviews can create expectations about future cases. Add context and check the rules before featuring them."
          }
        ]
      },
      {
        "id": "cpa",
        "heading": "Accountants and CPA firms",
        "items": [
          {
            "title": "No false or unfair claims",
            "text": "New Jersey Board of Accountancy rules prohibit public communication with false, misleading, deceptive or unfair claims, including unjustified expectations of favorable results."
          },
          {
            "title": "Credentials must be real",
            "text": "Do not imply licenses, education or formal specialist recognition you do not have."
          },
          {
            "title": "Fees with all the variables",
            "text": "If you advertise a price, say what affects it. \"Tax returns from $X\" should explain what the starting price includes."
          }
        ]
      },
      {
        "id": "medical",
        "heading": "Medical practices",
        "items": [
          {
            "title": "Testimonials have conditions",
            "text": "New Jersey Board of Medical Examiners rules (N.J.A.C. 13:35-6.10) set requirements for patient testimonials, including a written statement if a testimonial was paid for, and patient permission before identifying anyone."
          },
          {
            "title": "No superiority claims or guarantees",
            "text": "Claims that your service is better than what is normally used in the profession, and any guarantee of results, are prohibited."
          },
          {
            "title": "Fee and discount ads have rules",
            "text": "Advertised fees must be fixed or a stated range for clearly described services, and free or discounted offers must show the usual fee."
          },
          {
            "title": "Keep copies of your ads",
            "text": "The rule requires keeping copies of ads for three years after their last use. Save every version of your website pages and paid ads."
          }
        ]
      },
      {
        "id": "start",
        "heading": "Before you launch a campaign",
        "paragraphs": [
          "Read your website and ad copy as a skeptical regulator would. Remove guarantees and unsupported comparisons, check every use of \"expert\" or \"specialist\", and keep proof for every claim.",
          "Keep a dated archive of each page and ad you publish. It costs little and answers most questions if a complaint ever comes in."
        ]
      }
    ],
    "closing": "LAD Media builds websites and ad campaigns for New Jersey professional practices and works with your compliance review. Tell us what you offer and we will show you how we would approach it.",
    "related": [
      {
        "path": "/new-jersey-marketing-agency/",
        "label": "Marketing for New Jersey businesses"
      },
      {
        "path": "/services/ppc/",
        "label": "Paid advertising services"
      },
      {
        "path": "/services/seo/",
        "label": "SEO and content services"
      }
    ]
  },
  {
    "slug": "seo-or-google-ads-first-nj-small-business",
    "pageTitle": "SEO or Google Ads First? A Guide for NJ Small Businesses",
    "title": "SEO or Google Ads first? A guide for New Jersey small businesses",
    "description": "Should a New Jersey small business start with SEO or Google Ads? How to pick where your first marketing dollar goes, based on time, budget and competitors.",
    "category": "Startups & Web3",
    "published": "2026-12-09",
    "readMinutes": 6,
    "intro": "Most small businesses can afford to do one thing well before they do both. SEO builds traffic you do not pay for each click, but it takes months. Google Ads can bring calls this week, but stop the moment you stop paying. The right first step depends on how soon you need customers, how much you can spend, and how crowded your market is.",
    "sections": [
      {
        "id": "compare",
        "heading": "How they differ",
        "items": [
          {
            "title": "Speed",
            "text": "Ads can show the day your campaign is approved. SEO usually takes three to six months before new pages bring steady visits, longer in competitive New Jersey markets."
          },
          {
            "title": "Cost over time",
            "text": "With ads you pay for every click, forever. SEO costs time or agency fees up front, and the traffic it earns keeps coming without a per-click charge."
          },
          {
            "title": "Control",
            "text": "Ads let you choose towns, hours and services and change them daily. SEO results depend on Google’s rankings, which you influence but do not control."
          },
          {
            "title": "Trust",
            "text": "Many people skip the ads and click the map results or organic listings. Ranking there carries weight that an ad does not."
          }
        ]
      },
      {
        "id": "ads-first",
        "heading": "Start with Google Ads when",
        "items": [
          {
            "title": "You need leads now",
            "text": "A new location, a slow season or a launch date with no time to wait for rankings."
          },
          {
            "title": "People search for exactly what you sell",
            "text": "Urgent services such as \"emergency plumber Jersey City\" convert well from ads because the intent is clear."
          },
          {
            "title": "You want to test demand",
            "text": "A few weeks of ads show which services and towns bring calls before you invest in pages for them."
          }
        ]
      },
      {
        "id": "seo-first",
        "heading": "Start with SEO when",
        "items": [
          {
            "title": "Clicks are expensive",
            "text": "In crowded categories, cost per click can make small budgets disappear quickly. Organic visibility is often better value."
          },
          {
            "title": "People research before buying",
            "text": "Professional services, bigger purchases and B2B buyers read guides and compare sites. Helpful pages win those searches."
          },
          {
            "title": "Your Google Business Profile is not set up",
            "text": "For local businesses, a complete profile is the cheapest visibility you can get. Do this before spending on either."
          }
        ]
      },
      {
        "id": "plan",
        "heading": "A simple plan for most businesses",
        "paragraphs": [
          "Set up your Google Business Profile and a fast website with one clear page per main service. That is the base for both SEO and ads.",
          "If you need customers soon, run a small, tightly targeted ads campaign on your highest-value service, and track calls and form fills. Use what you learn to choose which SEO pages to build first, then reduce ad spend as organic traffic grows."
        ]
      }
    ],
    "closing": "LAD Media runs SEO and Google Ads for New Jersey businesses and will tell you honestly which to start with. Tell us your goals and budget.",
    "related": [
      {
        "path": "/services/seo/",
        "label": "SEO and content services"
      },
      {
        "path": "/services/ppc/",
        "label": "Paid advertising services"
      },
      {
        "path": "/new-jersey-marketing-agency/",
        "label": "Marketing for New Jersey businesses"
      }
    ]
  },
  {
    "slug": "service-area-pages-nj-towns",
    "pageTitle": "Service-Area Pages: How to Cover the NJ Towns You Serve",
    "title": "Service-area pages: how to cover the NJ towns you serve",
    "description": "When separate pages for each NJ town help your local SEO, when they only add thin copies, and how to write town pages that both customers and Google value.",
    "category": "Home services",
    "published": "2026-12-16",
    "readMinutes": 5,
    "intro": "If you serve twenty towns across Essex, Hudson and Union counties, it is tempting to make twenty nearly identical pages that only swap the town name. Google treats those as doorway pages, and they can hold your whole site back. Town pages can work, but only when each one gives a customer in that town something real.",
    "sections": [
      {
        "id": "when",
        "heading": "When a town page helps",
        "items": [
          {
            "title": "You do real work there",
            "text": "You have jobs, customers or reviews from that town and can show them."
          },
          {
            "title": "Something is different there",
            "text": "Local permits, older housing stock, common problems, travel times or pricing that differ from your other areas."
          },
          {
            "title": "People search by town",
            "text": "Searches like \"roofer Montclair\" or \"HVAC repair Hoboken\" are common for your service."
          }
        ]
      },
      {
        "id": "avoid",
        "heading": "When it only adds thin copies",
        "items": [
          {
            "title": "Find-and-replace pages",
            "text": "The same text with only the town name changed adds no value and can be treated as spam."
          },
          {
            "title": "Towns you rarely serve",
            "text": "A page for every town within fifty miles spreads you thin. Start with the places that bring most of your work."
          },
          {
            "title": "Lists of towns in the footer",
            "text": "A long block of town names does not help rankings and looks like keyword stuffing."
          }
        ]
      },
      {
        "id": "write",
        "heading": "What to put on each page",
        "items": [
          {
            "title": "Real local proof",
            "text": "Photos and short write-ups of jobs in that town, and reviews from customers there."
          },
          {
            "title": "Local details",
            "text": "Neighborhoods you cover, typical response times, permits you handle, and problems common in that area."
          },
          {
            "title": "Clear next step",
            "text": "Phone number, service hours and a short form, the same as your main service pages."
          },
          {
            "title": "Links both ways",
            "text": "Link from each town page to the matching service pages, and from an \"Areas we serve\" page to each town."
          }
        ]
      },
      {
        "id": "start",
        "heading": "Where to start",
        "paragraphs": [
          "Pick your three to five most important towns and write one strong page for each. Make sure your Google Business Profile service area lists the same towns.",
          "Add more towns only when you have local work to show. Two good pages beat twenty thin ones."
        ]
      }
    ],
    "closing": "LAD Media builds local service pages and websites for New Jersey home service businesses. Tell us which towns matter most to you.",
    "related": [
      {
        "path": "/guides/google-business-profile-checklist-nj-home-services/",
        "label": "Google Business Profile checklist"
      },
      {
        "path": "/services/seo/",
        "label": "SEO and content services"
      },
      {
        "path": "/case-studies/polar-point-hvac-website/",
        "label": "Polar Point HVAC website case study"
      }
    ]
  },
  {
    "slug": "how-to-ask-nj-customers-for-google-reviews",
    "pageTitle": "How to Ask New Jersey Customers for Google Reviews",
    "title": "How to ask New Jersey customers for Google reviews",
    "description": "Simple ways for New Jersey businesses to ask customers for Google reviews that fit a busy day, plus the Google and FTC rules each business must now follow.",
    "category": "Restaurants & retail",
    "published": "2026-12-23",
    "readMinutes": 4,
    "intro": "Most happy customers never leave a review because nobody asked, or asking was a hassle. A short routine fixes that. The rules matter too: Google and the Federal Trade Commission both restrict how you can ask, and breaking them can cost you reviews you already have.",
    "sections": [
      {
        "id": "how",
        "heading": "Make asking part of the day",
        "items": [
          {
            "title": "Get your review link",
            "text": "In your Google Business Profile, use \"Ask for reviews\" to copy a short link that opens the review form directly."
          },
          {
            "title": "Put a QR code where customers wait",
            "text": "At the register, on tables, on receipts and on the bag. One scan should open the review form."
          },
          {
            "title": "Send it after the visit",
            "text": "A text or email the same day works best: thank them, include the link, and keep it to two sentences."
          },
          {
            "title": "Ask in person",
            "text": "Train staff to ask at the end of a good interaction: \"If you have a minute, a Google review really helps us.\""
          }
        ]
      },
      {
        "id": "rules",
        "heading": "The rules to follow",
        "items": [
          {
            "title": "Ask everyone, not only happy customers",
            "text": "Google does not allow \"review gating\", meaning screening customers first and sending only satisfied ones to Google."
          },
          {
            "title": "No rewards for reviews",
            "text": "Do not offer discounts, freebies or entries into a draw for reviews. Federal rules also ban buying reviews or offering rewards for positive ones."
          },
          {
            "title": "No reviews from staff or family",
            "text": "Reviews must come from real customers. Do not post reviews yourself or ask employees to."
          },
          {
            "title": "Never write reviews for customers",
            "text": "You can remind people what they bought, but the words must be theirs."
          }
        ]
      },
      {
        "id": "reply",
        "heading": "Reply to every review",
        "paragraphs": [
          "Thank people by name and mention something specific. For negative reviews, reply calmly, apologize where it fits, and offer a way to follow up offline. Future customers read your replies as much as the reviews."
        ]
      },
      {
        "id": "start",
        "heading": "Where to start",
        "paragraphs": [
          "Print one QR code for the register this week and add the review link to your receipt or follow-up message. Then track how many new reviews arrive each month."
        ]
      }
    ],
    "closing": "LAD Media helps New Jersey businesses set up review routines, Google Business Profiles and websites. Tell us about your business.",
    "related": [
      {
        "path": "/guides/google-maps-nj-restaurants-and-shops/",
        "label": "How NJ restaurants and shops show up in Google Maps"
      },
      {
        "path": "/new-jersey-marketing-agency/",
        "label": "Marketing for New Jersey businesses"
      },
      {
        "path": "/services/social/",
        "label": "Social media services"
      }
    ]
  },
  {
    "slug": "professional-services-website-before-ads",
    "pageTitle": "What a Professional Services Website Needs Before Ads",
    "title": "What a professional services website needs before you run ads",
    "description": "The pages, proof and contact paths a New Jersey law, accounting or consulting website needs before paid ads, so more clicks can turn into new client calls.",
    "category": "Professional services",
    "published": "2026-12-30",
    "readMinutes": 8,
    "intro": "Paid ads send people to your website, but the website decides whether they contact you. For law firms, accountants, consultants and practices, a weak site turns ad spend into expensive bounces. Fix these things first, and every dollar you spend on ads works harder.",
    "sections": [
      {
        "id": "pages",
        "heading": "The pages you need",
        "items": [
          {
            "title": "One page per service you advertise",
            "text": "Each ad should land on a page about that exact service, not your homepage. A divorce ad goes to the divorce page."
          },
          {
            "title": "A clear about page",
            "text": "Who you are, your credentials, and photos of the real people clients will work with."
          },
          {
            "title": "A contact page that works",
            "text": "Phone, form, office address and hours, with a map. Test the form yourself."
          },
          {
            "title": "Privacy policy",
            "text": "Ad platforms expect one, and it matters if your forms collect personal information."
          }
        ]
      },
      {
        "id": "proof",
        "heading": "Proof that builds trust",
        "items": [
          {
            "title": "Credentials and memberships",
            "text": "Licenses, bar admissions, CPA status and professional bodies, stated accurately."
          },
          {
            "title": "Reviews and examples",
            "text": "Client reviews and case examples where your profession’s rules allow them. Our guide on New Jersey ad rules covers the limits."
          },
          {
            "title": "What working with you looks like",
            "text": "A short process: first call, what you need from the client, timelines and how fees work."
          }
        ]
      },
      {
        "id": "contact",
        "heading": "Contact paths that convert",
        "items": [
          {
            "title": "Call button on mobile",
            "text": "Most ad clicks come from phones. A tap-to-call button at the top of every page is essential."
          },
          {
            "title": "Short forms",
            "text": "Name, phone or email, and one question. Long intake forms belong after the first contact."
          },
          {
            "title": "Fast replies",
            "text": "Respond within the hour during business hours. Leads that wait often call the next firm on the list."
          }
        ]
      },
      {
        "id": "tracking",
        "heading": "Tracking before the first ad",
        "items": [
          {
            "title": "Track calls and forms",
            "text": "Set up conversion tracking in Google Ads and your analytics so you know which ads bring clients, not just clicks."
          },
          {
            "title": "Speed check",
            "text": "Pages should load in a few seconds on a phone. Slow pages waste paid clicks."
          }
        ]
      },
      {
        "id": "start",
        "heading": "Where to start",
        "paragraphs": [
          "Pick the one service you want to advertise first and make its page excellent: clear headline, proof, process, and a call button. Set up tracking, then launch a small campaign and improve from real data."
        ]
      }
    ],
    "closing": "LAD Media builds websites and runs ads for New Jersey professional services firms. Tell us which service you want more clients for.",
    "related": [
      {
        "path": "/guides/ad-rules-nj-law-firms-accountants-practices/",
        "label": "Ad rules for NJ law firms, accountants and practices"
      },
      {
        "path": "/services/design/",
        "label": "Design and website services"
      },
      {
        "path": "/services/ppc/",
        "label": "Paid advertising services"
      }
    ]
  },
  {
    "slug": "launching-in-new-jersey-marketing-checklist-founders",
    "pageTitle": "Launching in New Jersey: A Marketing Checklist for Founders",
    "title": "Launching in New Jersey: a marketing checklist for founders",
    "description": "A marketing checklist for founders launching a startup or Web3 project in New Jersey: what to have ready before the first announcement and what comes next.",
    "category": "Startups & Web3",
    "published": "2027-01-06",
    "readMinutes": 7,
    "intro": "A launch gets one big moment of attention. If the website is half finished, there is no way to capture interest, or nobody can tell what you do, that moment is wasted. This checklist covers what founders in New Jersey should have ready before the first announcement, and what to do in the weeks after.",
    "sections": [
      {
        "id": "before",
        "heading": "Before you announce",
        "items": [
          {
            "title": "A one-sentence explanation",
            "text": "Say what you do, for whom, and why it is different, in words a customer would use. Put it at the top of your homepage."
          },
          {
            "title": "A fast, simple website",
            "text": "Homepage, product or service page, about, contact, privacy policy, and terms if you sell anything. Mobile first."
          },
          {
            "title": "A way to capture interest",
            "text": "An email signup, waitlist or booking link, so launch traffic turns into contacts you own."
          },
          {
            "title": "Analytics and tracking",
            "text": "Set them up and test them before launch day, not after."
          },
          {
            "title": "Your names everywhere",
            "text": "Claim your business name on the social platforms you will actually use, and set up a Google Business Profile if you serve customers locally."
          }
        ]
      },
      {
        "id": "launch",
        "heading": "Launch week",
        "items": [
          {
            "title": "A short press kit",
            "text": "Logo files, founder photos and bios, a one-page fact sheet and a contact for press."
          },
          {
            "title": "Local and industry outreach",
            "text": "New Jersey business news, local chambers of commerce, university and startup communities, and the newsletters your customers read."
          },
          {
            "title": "Personal networks",
            "text": "Founders’ own posts and messages usually outperform brand accounts at launch."
          }
        ]
      },
      {
        "id": "web3",
        "heading": "If you are launching a Web3 project",
        "items": [
          {
            "title": "Check ad platform rules first",
            "text": "Google, Meta and X restrict crypto and token advertising, and some ads need certification or are limited by region. Confirm the current policies before planning paid campaigns."
          },
          {
            "title": "Make everything verifiable",
            "text": "Publish contract or policy IDs, token supply and team details, and link to block explorers. Crypto audiences check before they trust."
          },
          {
            "title": "Get legal advice on token sales",
            "text": "How tokens are sold and described can raise securities and consumer protection questions. Talk to a lawyer before you announce sale terms."
          }
        ]
      },
      {
        "id": "after",
        "heading": "The month after",
        "paragraphs": [
          "Follow up with everyone who signed up, publish one useful update a week, and look at which channels brought real users, not just visits.",
          "Put next month’s budget into the channels that worked and stop the ones that did not."
        ]
      }
    ],
    "closing": "LAD Media plans and runs launches for New Jersey startups and Web3 projects, from website to press. Tell us your launch date and goals.",
    "related": [
      {
        "path": "/new-jersey-crypto-marketing-agency/",
        "label": "Crypto marketing in New Jersey"
      },
      {
        "path": "/services/token-launch/",
        "label": "Token launch services"
      },
      {
        "path": "/services/pr/",
        "label": "PR services"
      }
    ]
  },
  {
    "slug": "fast-mobile-website-nj-restaurants-and-shops",
    "pageTitle": "A Fast Mobile Website for NJ Restaurants and Shops",
    "title": "A fast mobile website for New Jersey restaurants and shops",
    "description": "What a New Jersey restaurant or shop website needs on a phone: speed, clear hours, a tappable menu, easy directions and a way to order, with a simple test.",
    "category": "Restaurants & retail",
    "published": "2027-01-13",
    "readMinutes": 5,
    "intro": "Most people who look up a restaurant or shop do it on a phone, often while standing outside or already on the way. If your website is slow, hard to read or hides the hours, they move on to the next result. This guide covers what a mobile site for a walk-in business needs, in the order that matters.",
    "sections": [
      {
        "id": "first-screen",
        "heading": "What the first screen must show",
        "intro": "Someone should know what you are and how to reach you without scrolling or zooming:",
        "items": [
          {
            "title": "What you are and where",
            "text": "Your name, what you sell and your town, in plain words at the top of the page."
          },
          {
            "title": "Today’s hours",
            "text": "Current opening hours, including holiday and seasonal changes, kept in step with your Google Business Profile."
          },
          {
            "title": "Tap to call and tap for directions",
            "text": "A phone number and an address that open the dialer and the maps app with one tap."
          },
          {
            "title": "Your main action",
            "text": "Order online, reserve a table, or see products. Make that one button easy to find and use."
          }
        ]
      },
      {
        "id": "content",
        "heading": "Menu and product pages",
        "items": [
          {
            "title": "Menus as web pages, not PDFs",
            "text": "A PDF menu is slow to open, hard to read on a small screen and cannot be searched by Google. Put the menu on a normal page and update it there."
          },
          {
            "title": "Real photos, sized properly",
            "text": "Use your own photos, compressed before upload. Huge image files are the most common cause of slow pages."
          },
          {
            "title": "Prices and options",
            "text": "Show prices, sizes and allergen notes if you can. People decide faster when they do not have to call."
          }
        ]
      },
      {
        "id": "speed",
        "heading": "Speed and a quick test",
        "paragraphs": [
          "Open your site on your own phone using mobile data, not Wi-Fi. If the page takes more than a few seconds to be usable, or buttons jump around as it loads, there is work to do.",
          "Google’s free PageSpeed Insights tool gives a mobile report and a list of the biggest problems. Fix the largest images and unneeded scripts first."
        ]
      },
      {
        "id": "start",
        "heading": "Where to start this week",
        "paragraphs": [
          "Check the first screen on your phone, replace any PDF menu with a page, and compress your biggest photos. Then make sure the hours match your Google profile."
        ]
      }
    ],
    "closing": "LAD Media designs fast, simple websites for New Jersey restaurants and shops. Send us your current site and we will tell you what we would fix first.",
    "related": [
      {
        "path": "/guides/google-maps-nj-restaurants-and-shops/",
        "label": "Getting found in Google Maps"
      },
      {
        "path": "/services/design/",
        "label": "Website design services"
      },
      {
        "path": "/new-jersey-marketing-agency/",
        "label": "Marketing for New Jersey businesses"
      }
    ]
  },
  {
    "slug": "track-calls-and-leads-nj-home-services",
    "pageTitle": "Tracking Calls and Leads for NJ Home Service Businesses",
    "title": "Tracking calls and leads for New Jersey home service businesses",
    "description": "How New Jersey home service businesses can tell which marketing brings calls: call tracking, form tracking, simple notes at the phone and a monthly review.",
    "category": "Home services",
    "published": "2027-01-20",
    "readMinutes": 6,
    "intro": "Most home service work arrives by phone, and most owners cannot say which marketing produced the call. That makes it easy to keep paying for what does not work. You do not need an expensive system. This guide covers a simple way to see where calls and requests come from.",
    "sections": [
      {
        "id": "why",
        "heading": "What you want to know",
        "intro": "Three answers are enough to guide your spending:",
        "items": [
          {
            "title": "Where leads come from",
            "text": "Google search, the map listing, ads, referrals or repeat customers."
          },
          {
            "title": "Which leads become jobs",
            "text": "A call that never books costs the same to get as one that does. Track booked work, not only calls."
          },
          {
            "title": "What each job cost to win",
            "text": "Divide marketing spend by booked jobs. Compare channels over a few months, not a few days."
          }
        ]
      },
      {
        "id": "methods",
        "heading": "Simple ways to track",
        "items": [
          {
            "title": "Ask every caller",
            "text": "Add \"How did you hear about us?\" to your call script and write the answer down. It is imperfect but costs nothing."
          },
          {
            "title": "Separate tracking numbers",
            "text": "A different phone number for ads, your website and your Google profile shows which source rings. Check that your provider keeps your main number visible and consistent across the web."
          },
          {
            "title": "Form and click tracking",
            "text": "Track contact form submissions and taps on the phone number in Google Analytics or your ad platform."
          },
          {
            "title": "Your Google profile numbers",
            "text": "Your Business Profile shows calls, direction requests and website clicks. Note them each month."
          }
        ]
      },
      {
        "id": "record",
        "heading": "A one-page lead log",
        "paragraphs": [
          "Keep a shared sheet with the date, source, service, whether it booked and the job value. Whoever answers the phone fills it in.",
          "Once a month, total each source and compare it with what you spent. Move money toward what books jobs."
        ]
      },
      {
        "id": "privacy",
        "heading": "Be careful with call recording",
        "paragraphs": [
          "If you record calls to review quality or tracking, tell callers at the start of the call. Recording rules vary, so check them for your situation before turning it on."
        ]
      }
    ],
    "closing": "LAD Media sets up call and lead tracking for New Jersey home service businesses, so you can see what is working. Tell us how leads reach you now.",
    "related": [
      {
        "path": "/guides/google-business-profile-checklist-nj-home-services/",
        "label": "Google Business Profile checklist"
      },
      {
        "path": "/services/ppc/",
        "label": "Paid advertising services"
      },
      {
        "path": "/case-studies/polar-point-hvac-website/",
        "label": "HVAC website case study"
      }
    ]
  },
  {
    "slug": "choosing-a-marketing-agency-nj-small-business",
    "pageTitle": "How to Choose a Marketing Agency in New Jersey",
    "title": "How to choose a marketing agency as a New Jersey small business",
    "description": "Questions to ask before hiring a marketing agency in New Jersey: what you own, how results are reported, contract terms, and warning signs to look out for.",
    "category": "Professional services",
    "published": "2027-01-27",
    "readMinutes": 6,
    "intro": "Hiring an agency is easier when you know what to ask. Good agencies are glad to answer clear questions, and vague answers tell you something too. This guide lists what to ask and what to check before you sign.",
    "sections": [
      {
        "id": "goals",
        "heading": "Start with your own goal",
        "paragraphs": [
          "Decide what a good result looks like: more calls, more booked appointments, more online orders. An agency can only be judged against a goal you both understand.",
          "Write down your monthly budget and how long you are willing to wait before judging results. SEO takes months. Ads can show results sooner."
        ]
      },
      {
        "id": "questions",
        "heading": "Questions to ask",
        "items": [
          {
            "title": "Who will do the work?",
            "text": "Ask who your main contact is and who actually writes, designs and manages campaigns."
          },
          {
            "title": "Can I see relevant examples?",
            "text": "Look for work with businesses like yours, with a clear explanation of what changed."
          },
          {
            "title": "How will you report results?",
            "text": "Ask for the numbers you will see each month and how they connect to calls, leads or sales."
          },
          {
            "title": "What do I own?",
            "text": "Your website, domain, ad accounts, analytics and Google Business Profile should be in your name, not the agency’s."
          },
          {
            "title": "What are the contract terms?",
            "text": "Check the length, how to cancel, what happens to your accounts if you leave, and what costs extra."
          }
        ]
      },
      {
        "id": "flags",
        "heading": "Warning signs",
        "items": [
          {
            "title": "Guaranteed rankings",
            "text": "No one controls Google. Be wary of promises of a number-one ranking or fixed results."
          },
          {
            "title": "Reports full of vanity numbers",
            "text": "Impressions and followers matter less than calls, leads and sales."
          },
          {
            "title": "Locked-in accounts",
            "text": "If the agency will not give you admin access to your own accounts, think twice."
          }
        ]
      },
      {
        "id": "start",
        "heading": "Where to start",
        "paragraphs": [
          "Talk to two or three agencies with the same short brief, compare their questions as much as their answers, and start with a small, clearly defined first project."
        ]
      }
    ],
    "closing": "LAD Media works with New Jersey small businesses on websites, search and ads, and you keep ownership of your accounts. Tell us your goal and budget.",
    "related": [
      {
        "path": "/new-jersey-marketing-agency/",
        "label": "Marketing for New Jersey businesses"
      },
      {
        "path": "/guides/seo-or-google-ads-first-nj-small-business/",
        "label": "SEO or Google Ads first"
      },
      {
        "path": "/services/seo/",
        "label": "SEO and content services"
      }
    ]
  },
  {
    "slug": "first-90-days-marketing-plan-nj-startups",
    "pageTitle": "A First 90 Days Marketing Plan for NJ Startups",
    "title": "A first 90 days marketing plan for New Jersey startups",
    "description": "A simple 90 day marketing plan for New Jersey startups and Web3 projects: what to set up, what to test each month, and how to decide where the budget goes.",
    "category": "Startups & Web3",
    "published": "2026-11-25",
    "readMinutes": 6,
    "intro": "A new company cannot do everything at once, and trying usually means doing nothing well. A 90 day plan gives you three clear steps: lay the foundation, test a few channels, then put money behind what works.",
    "sections": [
      {
        "id": "month1",
        "heading": "Month one: foundation",
        "items": [
          {
            "title": "Clear message and website",
            "text": "A one-sentence explanation of what you do, a simple site, and a way to capture email addresses or bookings."
          },
          {
            "title": "Tracking",
            "text": "Analytics and goal tracking in place so every later test can be measured."
          },
          {
            "title": "Your first audience list",
            "text": "Friends of the business, early customers and community members who agree to hear from you."
          }
        ]
      },
      {
        "id": "month2",
        "heading": "Month two: test a few channels",
        "items": [
          {
            "title": "Pick two or three channels",
            "text": "For example search, one social platform and local or industry outreach. Do not spread across everything."
          },
          {
            "title": "Small, time-boxed tests",
            "text": "Set a small budget and a fixed end date for each test, and write down what you expect."
          },
          {
            "title": "Talk to users",
            "text": "Ask new customers or community members how they found you and what almost stopped them."
          }
        ]
      },
      {
        "id": "month3",
        "heading": "Month three: double down",
        "paragraphs": [
          "Compare results across channels using cost per lead or cost per customer, not likes or visits. Move budget to the best performer and stop the weakest.",
          "Turn the best content and answers from month two into your standard pages and posts."
        ]
      },
      {
        "id": "web3",
        "heading": "If you are launching a Web3 project",
        "paragraphs": [
          "Check each ad platform’s current crypto policy before planning paid campaigns, publish verifiable details such as policy IDs and supply, and get legal advice before describing any token sale."
        ]
      }
    ],
    "closing": "LAD Media plans and runs first-year marketing for New Jersey startups and Web3 projects. Tell us your goal and timeline.",
    "related": [
      {
        "path": "/guides/launching-in-new-jersey-marketing-checklist-founders/",
        "label": "Launch checklist for founders"
      },
      {
        "path": "/new-jersey-crypto-marketing-agency/",
        "label": "Crypto marketing in New Jersey"
      },
      {
        "path": "/services/token-launch/",
        "label": "Token launch services"
      }
    ]
  },
];

declare const __GUIDES_CUTOFF__: string | undefined;

/** Today's date in New Jersey, as YYYY-MM-DD. */
const todayInNewJersey = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

/**
 * Guides go live on their `published` date. The cutoff is fixed when the site is built
 * (Vite defines __GUIDES_CUTOFF__; the static page generator uses today's date), so a guide
 * dated in the future stays hidden everywhere until a build on or after that date.
 */
const cutoff = typeof __GUIDES_CUTOFF__ === 'string' ? __GUIDES_CUTOFF__ : todayInNewJersey();

/** Published guides, newest first. */
export const guides: Guide[] = allGuides
  .filter((guide) => guide.published <= cutoff)
  .sort((a, b) => b.published.localeCompare(a.published));

export const getGuide = (slug?: string) => guides.find((guide) => guide.slug === slug);

export const formatGuideDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
