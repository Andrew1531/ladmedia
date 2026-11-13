/**
 * Long-form content for the service detail pages.
 *
 * This content is kept separate from the compact service-card data so pages can
 * explain the work in enough detail for prospective clients and search engines.
 */
export interface ServicePageContent {
  eyebrow: string;
  overview: [string, string];
  idealFor: [string, string, string, string];
  approach: [
    { title: string; description: string },
    { title: string; description: string },
    { title: string; description: string },
    { title: string; description: string }
  ];
  outcomes: [string, string, string, string];
  faqs: [
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string }
  ];
  relatedServiceIds: [string, string, string];
}

export const serviceContentGrowth: Record<string, ServicePageContent> = {
  "token-launch": {
    eyebrow: "Token launch strategy for durable Web3 growth",
    overview: [
      "A token launch needs more than a memorable announcement. It needs a clear reason to exist, an understandable path from first interaction to participation, and an economic model that can be explained to a real community. LAD Media helps Web3 teams turn product goals into a launch narrative, token distribution plan, vesting logic, and communications roadmap that people can follow.",
      "We connect tokenomics, launch sequencing, and marketing execution so the project tells one coherent story across its website, whitepaper, community channels, and campaign assets. Our work is grounded in the information your team can support; we do not substitute promotional language for product substance, and we leave legal and financial advice to the appropriately qualified advisers on your team."
    ],
    idealFor: [
      "Founders preparing a first token launch and needing a practical go-to-market structure",
      "Protocols that need to explain utility, allocation, and vesting to a non-specialist audience",
      "Existing Web3 products revisiting token incentives as their product and community mature",
      "Teams coordinating token messaging across a whitepaper, website, social channels, and community"
    ],
    approach: [
      {
        title: "Clarify the product and launch objective",
        description: "We review the product, audience, milestones, distribution constraints, and intended token role to identify the decisions the launch strategy must answer."
      },
      {
        title: "Shape the token model",
        description: "We organize utility, allocation categories, unlocks, vesting, incentives, and supply assumptions into a model that is internally consistent and easier to communicate."
      },
      {
        title: "Build the launch narrative",
        description: "We translate technical and economic choices into a clear message hierarchy for the whitepaper, website, community education, and launch communications."
      },
      {
        title: "Sequence the go-to-market plan",
        description: "We map education, community readiness, campaign moments, and post-launch communications to product milestones, with owners and review points your team can use."
      }
    ],
    outcomes: [
      "A token story that connects the asset to a real product or protocol purpose",
      "Clearer distribution and vesting communications for prospective participants",
      "A coordinated launch plan that gives product, community, and marketing teams shared priorities",
      "A foundation for evaluating token messaging as the product and market develop"
    ],
    faqs: [
      {
        question: "What does a token launch strategy include?",
        answer: "It can include token utility and positioning, distribution and vesting communication, economic-model review, launch sequencing, audience education, and a content plan for the website, whitepaper, and community channels. The exact scope depends on how far the product and token design have progressed."
      },
      {
        question: "Can LAD Media help if our tokenomics are still being designed?",
        answer: "Yes. Early involvement lets us connect product goals, incentive decisions, and audience education before those choices are presented publicly. We can help structure the model and its communications, while your legal, tax, and financial advisers address matters that require their professional advice."
      },
      {
        question: "How do you communicate tokenomics to people who are not specialists?",
        answer: "We start with the user problem and token role, then explain supply, allocation, unlocks, and participation mechanics in plain language supported by diagrams or examples where useful. Technical detail remains available, but the main path should answer what the token does and why the design is relevant."
      }
    ],
    relatedServiceIds: ["community", "pr", "influencer"]
  },

  community: {
    eyebrow: "Community building for useful, trusted Web3 spaces",
    overview: [
      "A healthy Web3 community is more than a large member count. It is a place where people can understand the product, find reliable answers, share feedback, and take the next appropriate action without getting lost in noise or exposed to avoidable risk. LAD Media helps teams design and operate Discord and Telegram communities around those practical needs.",
      "Our community work combines channel architecture, onboarding, moderation guidance, recurring engagement, and escalation processes. We align the day-to-day experience with your product milestones and voice, so announcements, support conversations, educational sessions, and feedback loops feel like parts of one member journey rather than disconnected activity."
    ],
    idealFor: [
      "Web3 founders launching a Discord or Telegram space for an early product community",
      "Protocols with active conversations but inconsistent onboarding, information, or moderation",
      "Teams moving from campaign-driven attention toward ongoing member education and retention",
      "Projects that need a documented operating rhythm for announcements, events, support, and escalation"
    ],
    approach: [
      {
        title: "Map the member journey",
        description: "We identify who the community serves, what a new member needs to learn, and which conversations or actions matter at each stage of the product journey."
      },
      {
        title: "Design the community structure",
        description: "We recommend channel and role architecture, onboarding prompts, pinned resources, moderation principles, and an information hierarchy that keeps important guidance findable."
      },
      {
        title: "Establish the operating rhythm",
        description: "We plan recurring updates, educational conversations, feedback collection, events, and response workflows that give members useful reasons to return."
      },
      {
        title: "Listen and improve",
        description: "We review recurring questions, sentiment, participation patterns, and moderation issues with your team, then refine programming and documentation around what members actually need."
      }
    ],
    outcomes: [
      "A clearer first-day experience for new community members",
      "More consistent answers, announcements, and moderation across community channels",
      "A repeatable rhythm for education, feedback, and meaningful member participation",
      "Better visibility into community questions that can inform product and marketing decisions"
    ],
    faqs: [
      {
        question: "Which community platforms can you support?",
        answer: "Our service is designed around Discord and Telegram, with the operating principles adaptable to other community spaces. We can help with structure, onboarding, moderation workflows, content programming, and coordination with the rest of your marketing plan."
      },
      {
        question: "How do you approach moderation in a crypto community?",
        answer: "We use clear rules, visible escalation paths, consistent enforcement, and documentation that helps members distinguish official information from speculation or impersonation. We also coordinate with the project team so urgent product, security, or support issues reach the right owner instead of being handled casually in chat."
      },
      {
        question: "Can you build a community before our product launches?",
        answer: "Yes. Pre-launch communities benefit from a clear purpose and a realistic content rhythm rather than empty activity. We can plan onboarding, education, founder updates, feedback sessions, and launch preparation around the milestones your team can genuinely support."
      }
    ],
    relatedServiceIds: ["token-launch", "social", "influencer"]
  },

  influencer: {
    eyebrow: "Influencer marketing with fit, context, and accountability",
    overview: [
      "Influencer marketing works best when the creator, audience, format, and project message are aligned. LAD Media helps Web3 teams plan creator campaigns that make the product understandable in the creator's own voice while keeping briefs, review steps, timelines, and deliverables clear for everyone involved.",
      "From creator research and outreach through content coordination and reporting, we manage the operational details that can otherwise distract a lean team. We focus on audience relevance and the quality of the explanation rather than treating reach alone as a proxy for campaign value, and we build appropriate disclosure and platform-policy checks into the workflow."
    ],
    idealFor: [
      "Web3 products that need credible third-party education for a defined audience",
      "Launch teams comparing creators across YouTube, X, TikTok, Instagram, or other relevant channels",
      "Marketing leads who need one process for briefs, contracts, approvals, publishing, and follow-up",
      "Projects with a clear message but limited internal capacity to coordinate multiple creator relationships"
    ],
    approach: [
      {
        title: "Define the campaign brief",
        description: "We establish the campaign goal, audience, key message, required context, creative boundaries, deliverables, timeline, and the signals that will inform the review."
      },
      {
        title: "Research creator fit",
        description: "We assess relevant content, audience context, topic alignment, communication style, and working expectations before recommending creators for outreach."
      },
      {
        title: "Coordinate the activation",
        description: "We manage outreach, commercial discussions, agreements, briefs, content review, scheduling, and coordination with your product or community team."
      },
      {
        title: "Review and learn",
        description: "We organize reporting around agreed deliverables and observable engagement, capture audience questions, and turn campaign learnings into better future briefs."
      }
    ],
    outcomes: [
      "Creator partnerships selected for audience and message fit rather than surface-level visibility",
      "A clearer review process for accurate, useful, and on-brand campaign content",
      "Better coordination between creator publishing, product education, and community follow-up",
      "A documented view of campaign activity and learnings for the next marketing decision"
    ],
    faqs: [
      {
        question: "How do you choose influencers for a Web3 campaign?",
        answer: "We begin with the campaign audience and objective, then review a creator's subject matter, recent content, audience context, communication style, and practical fit for the brief. A large following by itself is not enough; the creator should be able to explain the project in a way their audience can use."
      },
      {
        question: "What does influencer campaign management cover?",
        answer: "Depending on scope, management can cover creator research, outreach, negotiations, agreements, briefing, content coordination, review, publishing schedules, disclosure reminders, and post-campaign reporting. We agree responsibilities and approval points before outreach begins."
      },
      {
        question: "Do influencers create their own content?",
        answer: "Usually, yes. Strong campaigns give creators a clear factual brief and boundaries while leaving room for their authentic format and perspective. LAD Media helps your team review content for accuracy, message alignment, and required disclosures without turning every creator post into a scripted advertisement."
      }
    ],
    relatedServiceIds: ["community", "social", "pr"]
  },

  pr: {
    eyebrow: "PR and media relations for clear Web3 narratives",
    overview: [
      "Good Web3 public relations starts with a story that is relevant to a publication's audience and supported by evidence the project can stand behind. LAD Media helps founders and marketing teams turn product milestones, research, launches, and company perspectives into clear pitches, press materials, and thought-leadership content.",
      "We support the full communications process: identifying a news angle, preparing the narrative and supporting materials, coordinating outreach, and helping the team respond consistently when interest or difficult questions arise. Media coverage is editorially independent and cannot be promised; our role is to improve the clarity, preparedness, and relevance of your communications."
    ],
    idealFor: [
      "Web3 companies with a meaningful product milestone that needs a focused communications plan",
      "Founders who have useful expertise but need help turning it into publishable thought leadership",
      "Marketing teams preparing launch announcements, research, partnerships, or company updates",
      "Projects that need a consistent message and an organized process for media inquiries"
    ],
    approach: [
      {
        title: "Find the newsworthy angle",
        description: "We review the milestone, audience, timing, supporting facts, and wider context to identify a story that is specific, useful, and appropriate for media outreach."
      },
      {
        title: "Prepare the communications kit",
        description: "We develop or refine press releases, founder talking points, backgrounders, contributed-article ideas, FAQs, and the source material needed for consistent conversations."
      },
      {
        title: "Coordinate targeted outreach",
        description: "We match the story to relevant journalists, publications, and formats, then manage pitches, follow-ups, interview preparation, and internal approvals."
      },
      {
        title: "Support the response",
        description: "We help organize inbound requests, clarify answers, track coverage, and capture questions or editorial feedback that can strengthen the next communications cycle."
      }
    ],
    outcomes: [
      "A sharper narrative connecting the project milestone to reader or industry interest",
      "Prepared messaging that helps founders answer questions with clarity and consistency",
      "A more focused media outreach process built around relevance rather than broad distribution",
      "Reusable press and thought-leadership materials for future communications work"
    ],
    faqs: [
      {
        question: "What kind of news can a Web3 PR campaign support?",
        answer: "Potential angles include a product or protocol launch, a meaningful feature release, original research, a partnership with a clear user impact, company news, or an informed perspective on an industry topic. The story needs a specific point and supportable information; a generic promotion is rarely enough on its own."
      },
      {
        question: "Can you guarantee media coverage or a particular publication?",
        answer: "No. Editorial decisions belong to each journalist and publication, so responsible PR cannot guarantee coverage, placement, or a specific outlet. We can help improve the story, target relevant contacts, prepare your team, and manage the process transparently."
      },
      {
        question: "How does PR differ from a paid media placement?",
        answer: "PR outreach seeks editorial consideration and is subject to a publication's independent judgment. A paid placement is purchased media with different control, disclosure, and approval conditions. We can help clarify which communications route fits a particular objective instead of presenting paid exposure as independent coverage."
      }
    ],
    relatedServiceIds: ["token-launch", "influencer", "social"]
  }
};