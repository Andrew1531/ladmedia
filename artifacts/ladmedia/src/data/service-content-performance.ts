export type ServicePageContent = {
  eyebrow: string;
  overview: [string, string];
  idealFor: string[];
  approach: Array<{
    title: string;
    description: string;
  }>;
  outcomes: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServiceIds: string[];
};

export const serviceContentPerformance: Record<string, ServicePageContent> = {
  ppc: {
    eyebrow: "Paid media built for considered growth",
    overview: [
      "Paid advertising gives a Web3 company a direct way to put a clear offer in front of a defined audience. LAD Media plans and manages campaigns across suitable platforms, including Google, Meta, X, and crypto-native networks, with the audience, message, landing page, and conversion event considered together. We turn a business objective into a measurable media plan rather than treating ad spend as a substitute for positioning.",
      "Our paid media work covers campaign structure, creative direction, audience research, tracking, and ongoing optimization. We account for each platform's policies and review requirements while keeping claims, calls to action, and destination pages aligned. Testing is organized around useful business signals—such as qualified inquiries, registrations, or content engagement—so decisions are grounded in the quality of response, not vanity traffic alone."
    ],
    idealFor: [
      "Web3 companies with a defined offer and a landing page ready to receive qualified demand",
      "Teams preparing a launch, product release, event, or focused acquisition campaign",
      "Marketing leaders who need a clear testing plan and dependable visibility into paid activity",
      "Projects that have organic traction but need additional reach in carefully selected audiences"
    ],
    approach: [
      {
        title: "Clarify the commercial objective",
        description: "We align on the action that matters, the audience worth reaching, the available budget, and the conditions that make a lead or conversion useful. This creates a practical brief for channel and campaign decisions."
      },
      {
        title: "Build the measurement foundation",
        description: "We map the customer journey from ad impression to destination-page action, then review tags, events, naming conventions, and reporting inputs. Where tracking is limited, we identify the gaps before drawing conclusions from the data."
      },
      {
        title: "Launch focused experiments",
        description: "We develop audience, message, creative, placement, and landing-page variations that test a specific hypothesis. Campaigns are structured so spend can be evaluated by intent and relevance rather than blended into one opaque result."
      },
      {
        title: "Learn and refine",
        description: "We monitor delivery, search intent, creative fatigue, conversion quality, and platform feedback. Findings are translated into the next round of budget, audience, creative, or page improvements with clear reasoning behind each change."
      }
    ],
    outcomes: [
      "A paid media plan connected to a specific business objective and audience",
      "Cleaner campaign structure and reporting that make optimization decisions easier",
      "Ad creative and landing-page messaging that work together as one conversion path",
      "A disciplined testing rhythm that helps the team learn where qualified demand is coming from"
    ],
    faqs: [
      {
        question: "Which paid advertising channels do you manage?",
        answer: "We can plan and manage campaigns across Google, Meta, X, and relevant crypto-native networks. The right mix depends on the offer, audience, destination experience, budget, and each platform's current policies; we recommend channels based on fit rather than using every channel by default."
      },
      {
        question: "Can you help if my crypto advertising account or creative is restricted?",
        answer: "We can review campaign setup, copy, creative, targeting, and landing-page alignment against the applicable platform requirements, then recommend clearer, more supportable alternatives. Platform decisions remain with the platform, and we do not promise approval or bypass review processes."
      },
      {
        question: "What does a paid advertising engagement need from our team?",
        answer: "We need a clear offer, an agreed conversion action, access to relevant analytics or ad accounts, and a point of contact who can approve claims and creative. If the landing page or tracking is not ready, we can identify the priority changes before launching media."
      }
    ],
    relatedServiceIds: ["social", "seo", "branding"]
  },

  social: {
    eyebrow: "A recognizable voice for the feeds that matter",
    overview: [
      "Social media is often where a Web3 audience first evaluates how a project thinks, communicates, and responds. LAD Media creates and manages channel-specific content for X, Instagram, TikTok, and related community touchpoints, turning product knowledge into useful posts, threads, short-form concepts, and conversation prompts. The goal is a consistent presence that earns attention without reducing every post to a promotion.",
      "We combine editorial planning with hands-on publishing, community engagement, Spaces or live-program support, and practical reporting. Content is shaped around the audience's questions and the project's real milestones, with a review process for technical or sensitive claims. That gives founders and internal teams a dependable social operating rhythm while leaving room to respond to relevant conversations."
    ],
    idealFor: [
      "Web3 founders who have strong expertise but limited time to plan, write, and publish consistently",
      "Projects launching a product, protocol, collection, or community and needing a coherent social narrative",
      "Marketing teams that want channel-native content instead of one message copied across every platform",
      "Established brands whose social presence needs clearer editorial direction and more thoughtful engagement"
    ],
    approach: [
      {
        title: "Find the authentic point of view",
        description: "We learn the product, audience, category vocabulary, milestones, and boundaries for public claims. From that foundation, we define the themes and voice that make the account useful and recognizable."
      },
      {
        title: "Plan the editorial system",
        description: "We create a channel-aware calendar covering educational posts, product context, founder perspective, community prompts, timely commentary, and campaign moments. Each idea has a purpose, format, and review path."
      },
      {
        title: "Create, publish, and participate",
        description: "We write and adapt posts, threads, short-form concepts, and visual directions for the selected channels. We also monitor replies and relevant conversations so engagement feels informed, timely, and consistent with the brand."
      },
      {
        title: "Use signals to improve the mix",
        description: "We review meaningful indicators such as saves, shares, replies, profile actions, link activity, and recurring audience questions. Those observations guide future themes, formats, publishing choices, and community prompts."
      }
    ],
    outcomes: [
      "A coherent social voice that makes the project easier to understand and remember",
      "A repeatable publishing workflow with content tailored to each selected channel",
      "More useful conversations built around audience questions, education, and product context",
      "Clearer learning about which themes and formats deserve more attention"
    ],
    faqs: [
      {
        question: "Do you only manage X, or can you support other social channels?",
        answer: "X can be a core channel, but we also support Instagram, TikTok, and complementary community touchpoints when they fit the audience and content. We adapt the idea to each platform's format instead of automatically reposting the same copy everywhere."
      },
      {
        question: "How do you create content when the subject is technical?",
        answer: "We begin with source material and conversations with the people closest to the product, then translate the substance into clear formats for the intended audience. Technical details are reviewed through an agreed approval process so the content remains accessible without making unsupported claims."
      },
      {
        question: "Will your team respond to comments and community conversations?",
        answer: "Yes, engagement support can include monitoring mentions, responding to routine questions, surfacing recurring feedback, and coordinating Spaces or live conversations. We establish escalation guidelines in advance so product, support, security, or sensitive issues reach the right person on your team."
      }
    ],
    relatedServiceIds: ["branding", "community", "influencer"]
  },

  seo: {
    eyebrow: "Search visibility built on useful information",
    overview: [
      "SEO helps the right people find a Web3 company when they are researching a problem, comparing solutions, or looking for an explanation they can trust. LAD Media combines technical SEO, search-intent research, information architecture, and content planning to make a site easier for search engines to understand and more useful for people to navigate. We focus on durable foundations rather than chasing isolated keywords.",
      "Our work can include audits, keyword and topic mapping, briefs, on-page recommendations, internal linking, local search considerations, and authority-building opportunities. We pay attention to search intent and the reader's next decision, while keeping financial, product, and technical language accurate. Reporting connects implemented work to observable search and engagement signals without promising a particular ranking or traffic outcome."
    ],
    idealFor: [
      "Web3 companies with valuable expertise that is difficult for prospective customers to discover through search",
      "Marketing teams publishing content without a clear topic strategy, internal-linking plan, or editorial priority",
      "Sites whose technical structure, performance, or indexability may be limiting otherwise strong content",
      "Businesses entering a new category or market and needing search research before investing in a content roadmap"
    ],
    approach: [
      {
        title: "Audit the search foundation",
        description: "We review crawlability, indexation, page templates, metadata, internal links, performance signals, structured information, and analytics configuration. The output separates urgent blockers from improvements that can be sequenced over time."
      },
      {
        title: "Map demand and intent",
        description: "We research how relevant audiences describe their problems and group those queries by intent, stage, and topic. This creates a prioritized map of pages and content opportunities rather than a disconnected list of keywords."
      },
      {
        title: "Improve and publish useful pages",
        description: "We provide or implement recommendations for page structure, copy, headings, links, briefs, and technical details. Content is designed to answer the actual question, make the next step clear, and support the site's broader topical structure."
      },
      {
        title: "Measure, maintain, and expand",
        description: "We monitor search visibility, indexed pages, engagement, conversion paths, and technical health. New findings inform refreshes, additional content, internal-link improvements, and the next set of practical priorities."
      }
    ],
    outcomes: [
      "A prioritized SEO roadmap that connects technical work and content to real search intent",
      "A clearer site structure that helps both visitors and crawlers find related information",
      "Content briefs and on-page guidance designed to be genuinely useful to the intended reader",
      "A reporting baseline that supports informed decisions without overclaiming search performance"
    ],
    faqs: [
      {
        question: "How is SEO for a Web3 company different from general SEO?",
        answer: "The fundamentals remain the same, but Web3 topics often combine unfamiliar terminology, fast-changing products, technical documentation, and higher expectations around clarity. We spend time understanding the subject and audience so pages explain the concept accurately while matching the language people actually use to search."
      },
      {
        question: "Do you write the SEO content or only provide recommendations?",
        answer: "Either model can work. We can create research-led briefs and editorial direction for your team, write or edit agreed pages, or combine both approaches. The scope depends on your internal expertise, review process, subject-matter access, and publishing capacity."
      },
      {
        question: "How soon will SEO produce results?",
        answer: "Timing varies with the site's existing technical health, competition, topic demand, content quality, authority, and how quickly recommendations are implemented. We establish a baseline and prioritize work that can be evaluated over time; no agency can responsibly guarantee a specific ranking, traffic level, or schedule."
      }
    ],
    relatedServiceIds: ["ppc", "branding", "social"]
  },

  branding: {
    eyebrow: "A clear identity for a complex category",
    overview: [
      "A strong Web3 brand does more than look distinctive. It gives people a consistent way to recognize the project, understand its purpose, and decide whether its communication feels credible and relevant. LAD Media develops visual identity and messaging systems—including logos, color, typography, brand voice, and usage guidance—around the product, audience, positioning, and places the brand needs to show up.",
      "We make the identity practical for real marketing work: websites, social profiles, community spaces, campaign creative, decks, and product-adjacent materials. The process balances a recognizable point of view with enough flexibility for an evolving company. Rather than presenting a logo in isolation, we provide the strategic rationale and usable standards that help internal teams and partners communicate consistently."
    ],
    idealFor: [
      "Early-stage Web3 companies defining how to present a new product, protocol, or community",
      "Established projects whose visual language has become inconsistent across web, social, and campaign assets",
      "Teams repositioning for a new audience, product direction, or stage of company growth",
      "Founders who need a usable brand system and messaging guidance, not just a standalone logo"
    ],
    approach: [
      {
        title: "Understand the position",
        description: "We review the product, audience, category context, competitors, existing materials, and intended moments of use. These inputs help us identify what the brand should communicate, what it should avoid, and where it can be meaningfully distinct."
      },
      {
        title: "Shape the identity direction",
        description: "We develop and compare visual and verbal directions across ideas such as tone, typography, color, imagery, logo behavior, and message hierarchy. Feedback is gathered against the agreed positioning rather than personal preference alone."
      },
      {
        title: "Design the system",
        description: "We refine the selected direction into core identity elements and define how they work together. The system is considered across digital touchpoints so the brand remains legible in a social avatar, a website header, a presentation, and campaign creative."
      },
      {
        title: "Document and activate",
        description: "We organize the decisions into guidelines and practical assets, then help apply them to priority touchpoints. Your team receives a clearer basis for briefing designers, reviewing content, and maintaining consistency as the brand grows."
      }
    ],
    outcomes: [
      "A distinctive identity grounded in the project's audience, positioning, and real use cases",
      "Consistent visual and verbal decisions across the channels where prospects encounter the brand",
      "A flexible system that can support launches, education, community communication, and ongoing content",
      "Guidance that makes future creative briefs, reviews, and partner work more efficient"
    ],
    faqs: [
      {
        question: "What is included in a branding and identity engagement?",
        answer: "The scope can include positioning input, logo development, color palette, typography, brand voice, messaging guidance, visual direction, and brand guidelines. We tailor the deliverables to the project's stage and the touchpoints that need to work first, rather than forcing every project into the same package."
      },
      {
        question: "Can you refresh an existing Web3 brand instead of starting over?",
        answer: "Yes. We can audit the current identity, identify what is valuable to retain, and clarify where the system is inconsistent or no longer fits the audience. A refresh may range from updated guidelines and messaging to a more substantial visual evolution, depending on the underlying need."
      },
      {
        question: "How do you make sure the brand works across social and marketing materials?",
        answer: "We test identity decisions in the contexts where the audience will encounter them, such as profile images, social posts, landing pages, decks, and campaign assets. Guidelines explain the important choices and provide practical examples, so the system can be used consistently beyond the initial design presentation."
      }
    ],
    relatedServiceIds: ["social", "seo", "design"]
  }
};