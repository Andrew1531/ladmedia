export type ServicePageContent = {
  eyebrow: string;
  overview: string[];
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

export const serviceContentStrategy: Record<string, ServicePageContent> = {
  design: {
    eyebrow: "Web3 design and creative direction",
    overview: [
      "LAD Media’s design and creative service helps Web3 teams turn a complex product, protocol, or token ecosystem into a visual identity people can understand and remember. We bring brand thinking, interface design, campaign creative, and presentation design into one coordinated system, so a logo, landing page, social post, pitch deck, or whitepaper feels like it belongs to the same project.",
      "We begin with the audience, product story, and practical communication needs rather than decorating a blank canvas. The result is a flexible set of creative assets built for the places Web3 projects actually show up: websites, communities, social channels, investor conversations, launch campaigns, and educational content. Design can support a new identity, a clearer product narrative, or an existing team that needs more consistent creative production."
    ],
    idealFor: [
      "Protocols and token projects preparing a new brand or public launch",
      "Web3 companies whose website and social presence feel visually inconsistent",
      "Founders who need a credible pitch deck or whitepaper that explains a technical product clearly",
      "Marketing teams that need a dependable creative system for campaigns, announcements, and ongoing content"
    ],
    approach: [
      {
        title: "Clarify the story",
        description: "We review the product, audience, positioning, and communication priorities to understand what the design needs to make clear and what it should make people feel."
      },
      {
        title: "Set the visual direction",
        description: "We develop a considered creative direction covering visual references, composition, typography, color, imagery, and the level of technical or cultural cues appropriate for the brand."
      },
      {
        title: "Build the core system",
        description: "We turn the direction into useful assets such as identity elements, interface layouts, presentation pages, social templates, or whitepaper components, with attention to consistency and reuse."
      },
      {
        title: "Refine for real use",
        description: "We review the work in its intended contexts, incorporate focused feedback, and organize final files so the team can apply the system across launch and day-to-day marketing work."
      }
    ],
    outcomes: [
      "A visual identity that gives the project a recognizable point of view",
      "Clearer communication of technical ideas, product value, and next steps",
      "A consistent creative language across web, social, community, and presentations",
      "Reusable assets and design guidance that make future marketing work more efficient"
    ],
    faqs: [
      {
        question: "What types of Web3 design does LAD Media provide?",
        answer: "We support identity and logo work, website UI/UX, social media graphics, pitch decks, whitepaper design, and animated marketing assets. The exact mix can be shaped around your launch stage, audience, and internal production needs."
      },
      {
        question: "Can you work with an existing brand instead of starting from scratch?",
        answer: "Yes. We can extend an existing identity, identify where it breaks down across channels, and create practical templates or supporting assets without discarding what already works."
      },
      {
        question: "How do you make complex crypto or blockchain products easier to understand visually?",
        answer: "We first map the audience and the message that matters at each touchpoint. We then use hierarchy, plain-language structure, interface patterns, diagrams where appropriate, and intentional visual emphasis to help people move from context to action."
      }
    ],
    relatedServiceIds: ["branding", "social", "cmo"]
  },
  cmo: {
    eyebrow: "Fractional marketing leadership for Web3 teams",
    overview: [
      "A fractional CMO gives a Web3 company senior marketing leadership without requiring a full-time executive hire. LAD Media can help establish the marketing direction, connect that direction to business priorities, and create the operating rhythm a founder-led or growing team needs to execute with more focus.",
      "The engagement is designed around the realities of crypto marketing: a technical product, several audiences, fast-moving channels, and a need to coordinate internal contributors with specialist agencies and vendors. We work with leadership to prioritize the right work, define useful measures, allocate attention and budget thoughtfully, and communicate progress in language that makes sense to the wider business."
    ],
    idealFor: [
      "Web3 founders who are still carrying marketing strategy and execution decisions themselves",
      "Growing teams that need executive-level direction before committing to a permanent CMO hire",
      "Protocols and products coordinating multiple agencies, freelancers, or channel owners",
      "Leadership teams that need a clearer marketing plan, priorities, and reporting cadence"
    ],
    approach: [
      {
        title: "Assess the operating picture",
        description: "We examine the product, audience, positioning, current channels, team responsibilities, active partners, and available resources to identify the most important strategic gaps."
      },
      {
        title: "Set the marketing direction",
        description: "Together we define priorities, audience journeys, channel roles, campaign themes, and a practical roadmap that reflects the company’s stage and business objectives."
      },
      {
        title: "Enable the team",
        description: "We create clear ownership, working processes, briefs, review points, and decision criteria so internal contributors and external partners can execute from the same plan."
      },
      {
        title: "Review and steer",
        description: "We establish an honest reporting rhythm, interpret channel and campaign signals, and adjust priorities as the product, market, and organizational needs develop."
      }
    ],
    outcomes: [
      "A single marketing direction that leadership and contributors can work from",
      "Better alignment between positioning, campaigns, channels, and business priorities",
      "Clearer ownership and coordination across internal teams and external partners",
      "A practical reporting and decision-making rhythm for ongoing marketing work"
    ],
    faqs: [
      {
        question: "What does a fractional CMO do for a Web3 company?",
        answer: "A fractional CMO provides senior marketing leadership on a part-time or scoped basis. That can include strategy, team direction, budget and vendor decisions, KPI frameworks, campaign prioritization, and leadership-level reporting, depending on the company’s needs."
      },
      {
        question: "How is fractional CMO support different from hiring a marketing agency?",
        answer: "An agency is often engaged to deliver specific services or campaigns. A fractional CMO focuses on the operating system around those services: deciding what matters most, connecting specialists to one plan, supporting the team, and giving leadership a strategic point of view."
      },
      {
        question: "When should a Web3 startup consider fractional marketing leadership?",
        answer: "It can be useful when founders are making disconnected channel decisions, a team has grown beyond informal coordination, or several partners need one accountable strategic lead. The right starting point depends on your goals, resources, and current marketing setup."
      }
    ],
    relatedServiceIds: ["consulting", "design", "seo"]
  },
  consulting: {
    eyebrow: "Strategic marketing consulting for crypto and Web3",
    overview: [
      "LAD Media’s marketing consulting service gives Web3 teams a structured outside perspective when the next marketing decision is important but the path is unclear. We help founders and marketing teams examine positioning, audience needs, competitive context, channels, launch plans, and the practical work required to turn a strategy into action.",
      "Consulting can be focused on one decision or used as an ongoing advisory relationship. We tailor the depth of the work to the question in front of you, whether that means auditing an existing program, shaping a go-to-market plan, planning a campaign, preparing a team workshop, or creating a sequence of priorities for the next stage of growth. Recommendations are grounded in your product, resources, and market context rather than a generic playbook."
    ],
    idealFor: [
      "Founders validating a go-to-market direction before investing in execution",
      "Marketing teams that need an impartial audit of their current strategy and channels",
      "Web3 products entering a new category, audience, market, or launch phase",
      "Teams that want practical workshops, planning support, or an experienced advisory partner"
    ],
    approach: [
      {
        title: "Frame the business question",
        description: "We agree on the decision or outcome the engagement should support, gather the relevant product and market context, and define what a useful recommendation needs to address."
      },
      {
        title: "Study the evidence",
        description: "We review existing marketing materials, audience assumptions, channel activity, competitor positioning, campaign plans, and team capacity to separate signals from assumptions."
      },
      {
        title: "Shape the recommendation",
        description: "We translate the findings into prioritized strategic options, messaging and channel considerations, campaign ideas, or a go-to-market sequence that the team can evaluate."
      },
      {
        title: "Make it actionable",
        description: "We document next steps, owners, dependencies, and decision points, then support the team through a workshop, planning session, or advisory cadence where appropriate."
      }
    ],
    outcomes: [
      "A sharper view of the audience, market context, and marketing challenge",
      "Prioritized recommendations that are easier for the team to evaluate and use",
      "A more coherent go-to-market or campaign plan tied to available resources",
      "Greater confidence about what to do next, what to defer, and why"
    ],
    faqs: [
      {
        question: "What can a Web3 marketing consultant help with?",
        answer: "Consulting can cover go-to-market strategy, competitive analysis, marketing audits, campaign planning, team workshops, and ongoing advisory support. We scope the work around a defined business question rather than forcing every project into the same process."
      },
      {
        question: "Do we need a complete marketing team before engaging a consultant?",
        answer: "No. Consulting can help a founder clarify the first marketing priorities, help an existing team make better decisions, or provide structure while responsibilities and partners are still being established."
      },
      {
        question: "What should we prepare for a marketing audit or strategy engagement?",
        answer: "Useful inputs include your product and business goals, target audiences, existing positioning, active channels, prior campaign materials, team or partner responsibilities, and any constraints that affect execution. We can identify the right starting materials during the initial scoping conversation."
      }
    ],
    relatedServiceIds: ["cmo", "seo", "branding"]
  }
};

export const servicePageContent = serviceContentStrategy;