export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  title: string;
  summary: string;
  challenge: string;
  story: { heading: string; text: string }[];
  workCompleted: string[];
  deliverables: string[];
  evidence: string[];
  screenshot: string;
  liveUrl: string;
  relatedServiceIds: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "polar-point-hvac-website",
    client: "Polar Point HVAC",
    category: "Home services",
    title: "Polar Point HVAC Website Case Study",
    summary:
      "See how LAD Media created Polar Point HVAC's responsive website with clear service presentation, branded design, and contact paths for potential customers.",
    challenge:
      "Polar Point HVAC needed a public website that could introduce the company, present its HVAC services, and make the next step clear for local customers.",
    story: [
      {
        heading: "The customer’s decision",
        text: "For a heating and cooling business, a website has a practical job: help a visitor understand the service and decide whether to contact the company. A homeowner may arrive with a specific need rather than an interest in the brand itself. That makes the service explanation and the next step important parts of the brief. In this project, the documented challenge was to introduce Polar Point HVAC and make that path clear. It was a website design assignment, not a claim about the company’s response times, pricing, or service coverage.",
      },
      {
        heading: "How the website was organized",
        text: "LAD Media created a responsive marketing website with a service-focused page structure and customer contact calls to action. The company’s offer provides the organizing idea for the page, while the branded presentation gives the business a consistent public face. These choices address different parts of the same visit: recognizing the company, understanding its work, and finding a way to ask a question. The responsive website is the delivered asset. This case study does not treat that description as evidence of a particular accessibility score or a measured improvement in mobile use.",
      },
      {
        heading: "The delivered result",
        text: "The result documented here is a completed company website, with a public URL and a captured view of the delivered design. Readers can review the service presentation and contact path rather than relying on a marketing claim alone. The screenshot is a record of the design at capture time; the live website may change as the business updates it. There is no confirmed before-and-after traffic report, lead count, or revenue figure for this case study. The evidence supports the website delivery and its scope, not a promise of commercial performance.",
      },
    ],
    workCompleted: [
      "Created a responsive marketing website for the Polar Point HVAC brand.",
      "Organized the page around the company’s service offering and customer contact path.",
      "Used a visual direction suited to a heating and cooling service business.",
    ],
    deliverables: [
      "Responsive company website",
      "Service-focused page structure",
      "Customer contact calls to action",
      "Branded visual presentation",
    ],
    evidence: [
      "The completed website is publicly available at polarpointhvac.com.",
      "The project screenshot on this page records the delivered public-facing design.",
    ],
    screenshot: "assets/screenshots/polarpoint.png",
    liveUrl: "https://polarpointhvac.com",
    relatedServiceIds: ["design"],
  },
  {
    slug: "superior-pack-group-website",
    client: "Superior Pack Group",
    category: "Packaging and logistics",
    title: "Superior Pack Group Website Case Study",
    summary:
      "View LAD Media's website work for Superior Pack Group: a responsive design, product-led page structure, and business inquiry paths for packaging customers.",
    challenge:
      "Superior Pack Group needed a public web presence that could introduce the company and make its packaging offer understandable to prospective business customers.",
    story: [
      {
        heading: "Explaining a business offer",
        text: "A packaging company’s website needs to give a business buyer enough context to understand the offer before starting a conversation. Product presentation and company information have to work together: imagery alone does not explain a service, while a long company description can leave the offer unclear. Superior Pack Group’s documented brief centered on introducing the business and making its packaging offer understandable. The case study therefore focuses on a public-facing website, not on claims about manufacturing capability, shipping performance, stock levels, or savings for the company’s customers.",
      },
      {
        heading: "A product-led structure",
        text: "LAD Media created a responsive website and structured the experience around the packaging offer and the customer journey. The delivered visual presentation keeps the products and the business message prominent. Business inquiry calls to action provide a next step for visitors who want to discuss the offer. Together, those deliverables connect the presentation of the company to the purpose of the site: helping a prospective customer assess whether to make contact. The documented scope is a marketing website; it does not establish that an online store, inventory system, or ordering integration was included.",
      },
      {
        heading: "What can be reviewed",
        text: "The completed website and the project screenshot are the available evidence for this work. They let a reader inspect the public presentation rather than infer quality from an unsupported sales figure. The concrete result is a branded business website with a product-led page structure and an inquiry path. No measured change in quote requests, conversion rate, search visibility, or revenue has been confirmed for this project. Those outcomes would need separate analytics and client approval before being reported. This distinction keeps the case study useful without presenting a design goal as a proven business result.",
      },
    ],
    workCompleted: [
      "Created a responsive website for the Superior Pack Group brand.",
      "Structured the experience around the company’s packaging offer and customer journey.",
      "Built a visual presentation that keeps the products and business message prominent.",
    ],
    deliverables: [
      "Responsive company website",
      "Product-led page structure",
      "Business inquiry calls to action",
      "Branded visual presentation",
    ],
    evidence: [
      "The completed website is publicly available at superiorpackgroup.com.",
      "The project screenshot on this page records the delivered public-facing design.",
    ],
    screenshot: "assets/screenshots/superiorpack.png",
    liveUrl: "https://superiorpackgroup.com",
    relatedServiceIds: ["design"],
  },
  {
    slug: "verifed-global-website",
    client: "VerifED Global",
    category: "Education and career guidance",
    title: "VerifED Global Website Case Study",
    summary:
      "Explore LAD Media's VerifED Global website case study: a responsive site that guides people with foreign degrees towards their next career step in the U.S.",
    challenge:
      "VerifED Global needed a public website that explains U.S. career guidance for people educated abroad without overwhelming visitors who are new to the process.",
    story: [
      {
        heading: "Making a complicated process understandable",
        text: "People who earned a degree outside the United States often face several questions at once: how to present that degree to U.S. employers, whether an official credential evaluation is needed, and which licensing requirements apply to their field. Visitors need to find the question that matches their situation without reading everything first. That was the communication challenge behind VerifED Global’s public website. The documented brief concerned how the guidance is introduced and organized online. It was not an assessment of the guidance itself, of any credential evaluation, or of a visitor’s eligibility for a job or license. Keeping the website assignment separate from those matters is important when describing the work.",
      },
      {
        heading: "Building the public presentation",
        text: "LAD Media created a responsive website and organized the guidance into a clear page hierarchy. The homepage states who the site is for, then asks visitors to pick the question they are facing. Each area explains what a visitor can do there, what to have ready, and where the guidance stops. Navigation covers About, How It Works, and Guides, with English and Spanish language options and a call to action to start a profile. This is the distinction between explaining a service and proving every claim about it: the site can introduce the offer and direct a visitor toward the next step, but the website design itself does not validate outcomes for any individual.",
      },
      {
        heading: "The scope of the result",
        text: "The documented result is a completed website with a public address, a branded presentation, and a captured project screenshot. These materials support the claim that a website was delivered and show how its public-facing story is presented. They do not show a measured increase in profiles started, qualified inquiries, or organic traffic. No such performance outcome is claimed here. Readers can review the live site alongside the screenshot, bearing in mind that later changes to a public website may differ from the delivered view recorded in this case study.",
      },
    ],
    workCompleted: [
      "Created a responsive website for VerifED Global.",
      "Organized career guidance for internationally educated job seekers into a clear page hierarchy.",
      "Used a clean, approachable visual direction suited to visitors who are new to the process.",
    ],
    deliverables: [
      "Responsive guidance website",
      "Question-led page structure",
      "Profile calls to action",
      "English and Spanish language options",
    ],
    evidence: [
      "The completed website is publicly available at verifed.co.",
      "The project screenshot on this page records the delivered public-facing design.",
    ],
    screenshot: "assets/screenshots/verifed.png",
    liveUrl: "https://verifed.co",
    relatedServiceIds: ["design"],
  },
  {
    slug: "maat-institute-ai-website",
    client: "Ma’at Institute of AI",
    category: "AI and consulting",
    title: "Ma’at Institute of AI Website Case Study",
    summary:
      "Explore LAD Media's website work for the Ma'at Institute of AI: responsive design, information-led structure, and a public home for AI and consulting work.",
    challenge:
      "The Ma’at Institute of AI needed a public web presence that could introduce the organization and present its AI and consulting focus in a credible, accessible format.",
    story: [
      {
        heading: "Introducing the organization",
        text: "An AI and consulting organization needs a public home that helps visitors understand who it is and what kind of work it presents. A technology label on its own does not provide that context. The Ma’at Institute of AI’s documented website challenge was to introduce the organization and its areas of focus in a professional format. The brief was about the public web presence, not an independent assessment of the institute’s expertise, research, or client results. This case study describes the website deliverables without treating the design as proof of those wider claims.",
      },
      {
        heading: "Information before decoration",
        text: "LAD Media created a responsive organization website with an information-led page structure. The content structure introduces the institute and its areas of work, supported by a restrained visual presentation. An organization contact path is included among the delivered elements. Each part has a distinct purpose: the structure organizes the introduction, the visual direction provides a consistent presentation, and the contact path gives interested visitors a way to continue. These are documented design choices and deliverables. They do not imply that a formal accessibility audit, an AI application, or a consulting delivery platform formed part of the assignment.",
      },
      {
        heading: "A concrete website outcome",
        text: "The result available for review is the completed organization website and its captured public-facing design. This gives the case study a concrete basis: readers can look at the delivered presentation rather than relying on a testimonial or an unverified performance number. The project evidence does not include a confirmed increase in consulting inquiries, search rankings, traffic, or revenue. Those results would require separate measurement and approval. The case study therefore records the website scope, its information-led approach, and the available evidence while leaving unmeasured business outcomes out of the account.",
      },
    ],
    workCompleted: [
      "Created a responsive organization website for the Ma’at Institute of AI.",
      "Structured the site to introduce the institute and its areas of work.",
      "Developed a restrained visual presentation suited to a professional AI organization.",
    ],
    deliverables: [
      "Responsive organization website",
      "Information-led page structure",
      "Organization contact path",
      "Professional visual presentation",
    ],
    evidence: [
      "The completed website is publicly available at maatiai.org.",
      "The project screenshot on this page records the delivered public-facing design.",
    ],
    screenshot: "assets/screenshots/maatiai.png",
    liveUrl: "https://maatiai.org",
    relatedServiceIds: ["design"],
  },
];

export function getCaseStudy(slug?: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}