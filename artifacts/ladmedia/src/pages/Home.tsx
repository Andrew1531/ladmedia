import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, ArrowUpRight, Briefcase, Check, Lightbulb, Mail, MapPin, Newspaper, Palette,
  PenTool, Plus, Rocket, Search, Share2, Star, Target, TrendingUp, Users, Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HOME_INTRO, homeSearchContent, homeSearchFaqs } from "../data/home-search-content";
import { caseStudies } from "../data/case-studies";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

const base = import.meta.env.BASE_URL;
const shot = (file: string) => base + "assets/screenshots/" + file;

const primaryServices: { id: string; title: string; icon: LucideIcon; features: string[] }[] = [
  { id: "token-launch", title: "Token Launch Strategy", icon: Rocket, features: ["Tokenomics Design", "Whitepaper Creation", "Exchange Listing Support"] },
  { id: "community", title: "Community Building", icon: Users, features: ["Discord/Telegram Setup", "Moderation Planning", "Engagement Campaigns"] },
  { id: "influencer", title: "Influencer Marketing", icon: Star, features: ["Creator Vetting", "Multi-Platform Campaigns", "Performance Tracking"] },
  { id: "pr", title: "PR & Media Coverage", icon: Newspaper, features: ["Media Outreach", "Press Release Distribution", "Thought Leadership"] },
  { id: "ppc", title: "Paid Advertising", icon: Target, features: ["Google & Meta Ads", "Crypto Ad Networks", "Retargeting Campaigns"] },
  { id: "social", title: "Social Media Management", icon: Share2, features: ["Content Calendar Planning", "Educational Content", "Community Engagement"] },
];

const secondaryServices: { id: string; title: string; icon: LucideIcon }[] = [
  { id: "seo", title: "SEO & Content", icon: Search },
  { id: "branding", title: "Branding & Identity", icon: Palette },
  { id: "design", title: "Design & Creative", icon: PenTool },
  { id: "cmo", title: "Fractional CMO", icon: Briefcase },
];

const steps: { num: string; title: string; icon: LucideIcon; desc: string }[] = [
  { num: "01", title: "Understand", icon: Lightbulb, desc: "Define the audience, the business goal, and what needs to change." },
  { num: "02", title: "Plan", icon: Wrench, desc: "Set the message, choose relevant channels, and agree on deliverables." },
  { num: "03", title: "Make & Launch", icon: Rocket, desc: "Build the assets and bring the agreed plan into the market." },
  { num: "04", title: "Measure & Refine", icon: TrendingUp, desc: "Review what is working and adjust the next steps based on evidence." },
];

const projects = [
  { name: "Mispar.co", category: "Blockchain Project", url: "https://mispar.co", file: "mispar.png", tag: "Web3 / Analytics" },
  { name: "Polar Point HVAC", category: "Local Business", url: "https://polarpointhvac.com", file: "polarpoint.png", tag: "Local SEO & PPC" },
  { name: "Superior Pack Group", category: "E-Commerce", url: "https://superiorpackgroup.com", file: "superiorpack.png", tag: "E-Commerce & Brand" },
  { name: "SPORTSBEEP", category: "Sports Media / Web3", url: "https://sportsbeep.com", file: "sportsbeep.png", tag: "Token Launch" },
  { name: "VerifED Global", category: "EdTech / Web3", url: "https://verifed.co", file: "verifed.png", tag: "EdTech Platform" },
  { name: "William C. Roach", category: "Personal Brand", url: "https://williamcroach.com", file: "williamcroach.png", tag: "Content & Brand" },
  { name: "Ma'at Institute of AI", category: "AI Consulting", url: "https://maatiai.org", file: "maatiai.png", tag: "AI / Consulting" },
  { name: "State Nationalist Reform", category: "Political / Advocacy", url: "https://statenationalistreform.info", file: "statenationalistreform.png", tag: "Strategic Ops" },
];

const faqs = [
  ...homeSearchFaqs,
  { q: "How does your pricing work?", a: "We scope each project around its goals, deliverables, and timeline, then discuss the proposed work and pricing before an engagement begins." },
  { q: "How long does it take to launch a token?", a: "The timeline depends on the product, technical readiness, approvals, and marketing scope. We can map the communications and launch milestones once we understand the project." },
  { q: "Do you guarantee results?", a: "We agree on deliverables and useful measures before work begins. Results depend on your project, audience, timing, and channels; we do not guarantee token prices, placements, community growth, or search rankings." },
  { q: "What makes you different from other crypto marketing agencies?", a: "We connect marketing strategy, creative work, and a practical understanding of Web3 audiences. Share your project and goals so we can discuss a plan that fits rather than a generic package." },
  { q: "Do you work with projects outside of crypto?", a: "Yes. Crypto and Web3 are our specialty, but we also work with service businesses, technology teams, and other organizations on websites, content, SEO, paid media, and marketing strategy." },
];

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] ${dark ? "text-lilac" : "text-plum"}`}>
      <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rotate-45 bg-ember" />
      {children}
    </div>
  );
}

function BrowserFrame({ url, children, className = "" }: { url: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-ink/20 bg-paper shadow-[0_30px_60px_-30px_hsl(var(--ink)/0.65)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-ink/15 bg-paper-deep px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ink/25" /><span className="h-2 w-2 rounded-full bg-ink/25" /><span className="h-2 w-2 rounded-full bg-ink/25" />
        <span className="ml-2 flex-1 truncate rounded bg-paper px-2 py-0.5 font-mono text-[10px] text-ink/50">{url}</span>
      </div>
      {children}
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (!targetId) return;
    const go = () => document.getElementById(targetId)?.scrollIntoView();
    const frame = requestAnimationFrame(go);
    // Images above the target can shift layout after first paint; settle once more.
    const timer = window.setTimeout(go, 600);
    return () => { cancelAnimationFrame(frame); window.clearTimeout(timer); };
  }, []);

  return (
    <div className="w-full bg-paper text-ink">
      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-paper pt-32 pb-20 md:pt-36 lg:pb-28">
        <div aria-hidden="true" className="hatch absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div aria-hidden="true" className="spin-slow pointer-events-none absolute -right-40 top-10 h-[46rem] w-[46rem] rotate-45 border border-plum/40">
          <div className="absolute inset-4 border border-dotted border-plum/50" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="rise mb-6 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-plum" style={{ animationDelay: "50ms" }}>
                <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rotate-45 bg-ember" />
                Digital Marketing Agency in Newark, NJ
            </h1>
            <div className="rise block font-display text-[clamp(4.5rem,15vw,12rem)] font-black uppercase leading-[0.82]" style={{ animationDelay: "150ms" }}>MARKETING</div>
            <h2 className="rise mb-8 font-display text-[clamp(2.6rem,7.4vw,6rem)] font-black uppercase leading-[0.9] text-ember" style={{ animationDelay: "260ms" }}>
              BUILT AROUND YOUR GOALS
            </h2>

            <p className="rise mb-3 max-w-xl text-lg font-medium leading-relaxed text-ink/80 md:text-xl" style={{ animationDelay: "380ms" }}>{HOME_INTRO}</p>
            <p className="rise mb-10 flex items-center gap-2 text-sm font-semibold text-plum" style={{ animationDelay: "440ms" }}>
              <MapPin className="h-4 w-4" /> Based in Newark, NJ. Remote collaboration available.
            </p>

            <div className="rise mb-12 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "520ms" }}>
              <a href={base + "#contact"} className="btn-ink text-lg" data-testid="hero-cta-contact">
                Start your project <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/case-studies/" className="btn-ghost text-lg" data-testid="hero-cta-work">
                View case studies
              </Link>
            </div>

            <ul className="rise grid grid-cols-2 gap-x-6 gap-y-3 border-t border-ink/20 pt-6 sm:grid-cols-4" style={{ animationDelay: "620ms" }}>
              {["Crypto & Web3", "Strategy & content", "Digital campaigns", "Websites & design"].map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm font-bold">
                  <Check className="h-4 w-4 shrink-0 text-ember" /> {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="rise relative mx-auto aspect-[5/6] w-full max-w-md lg:col-span-5 lg:max-w-none" style={{ animationDelay: "400ms" }}>
            {[
              { name: "VerifED Global", tag: "EdTech / Web3", url: "https://verifed.co", file: "verifed.png", pos: "left-0 top-0 w-[72%] -rotate-3" },
              { name: "Polar Point HVAC", tag: "Local Business", url: "https://polarpointhvac.com", file: "polarpoint.png", pos: "right-0 top-[30%] w-[72%] rotate-2" },
              { name: "Ma'at Institute of AI", tag: "AI / Consulting", url: "https://maatiai.org", file: "maatiai.png", pos: "left-[6%] bottom-0 w-[72%] -rotate-1" },
            ].map((p, i) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" data-testid={`hero-project-${i}`} aria-label={`${p.name}, ${p.tag}: visit live site`} className={`shot group absolute block ${p.pos}`}>
                <BrowserFrame url={p.url.replace("https://", "")}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={shot(p.file)} alt={`${p.name} website`} className="h-full w-full object-cover object-top" />
                  </div>
                  <div className="flex items-center justify-between bg-ink px-3 py-2 text-bone">
                    <span className="text-xs font-bold">{p.name}</span>
                    <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-lilac">{p.tag} <ArrowUpRight className="h-3 w-3" /></span>
                  </div>
                </BrowserFrame>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Two lanes */}
      <section aria-label="Who we work with" className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <Reveal className="border-bone/15 px-6 py-14 md:border-r md:pr-14">
            <Eyebrow dark>Our specialty</Eyebrow>
            <h2 className="mb-4 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-6xl">Crypto &amp; Web3</h2>
            <p className="max-w-md leading-relaxed text-white">Positioning, launches, community, PR, and campaigns for teams building in a complex space.</p>
          </Reveal>
          <Reveal delay={120} className="px-6 py-14 md:pl-14">
            <Eyebrow dark>Beyond the category</Eyebrow>
            <h2 className="mb-4 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-6xl">What comes next</h2>
            <p className="mb-5 max-w-md leading-relaxed text-white">Strategy and digital experiences for service businesses, technology platforms, and professional organizations.</p>
            <Link href="/case-studies/" className="ulink inline-flex items-center gap-2 font-bold">Explore documented work <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* Newark marketing */}
      <section id="nyc-marketing" aria-labelledby="nyc-marketing-heading" className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Eyebrow>Newark, NJ</Eyebrow>
              <h2 id="nyc-marketing-heading" className="font-display text-5xl font-black uppercase leading-[0.92] md:text-7xl">{homeSearchContent.heading}</h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-6 lg:pt-12">
              <p className="text-lg leading-relaxed text-ink/75">{homeSearchContent.intro}</p>
            </Reveal>
          </div>
          <div className="grid gap-x-12 gap-y-2 md:grid-cols-2">
            {homeSearchContent.sections.map((section, i) => (
              <Reveal key={section.href} delay={(i % 2) * 100} className="group border-t border-ink/25 py-8">
                <div className="mb-3 flex items-start gap-4">
                  <span className="mt-1.5 font-mono text-xs text-ember">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-3xl font-extrabold uppercase leading-none md:text-4xl">{section.heading}</h3>
                </div>
                <p className="mb-5 pl-9 leading-relaxed text-ink/70">{section.text}</p>
                <Link href={`${section.href}/`} className="ml-9 inline-flex items-center gap-2 font-bold">
                  <span className="ulink">{section.label}</span> <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative bg-ink py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow dark>What we do</Eyebrow>
              <h2 className="font-display text-5xl font-black uppercase leading-[0.92] text-white md:text-7xl">Specialist thinking. Broader capability.</h2>
            </div>
            <p className="text-lg leading-relaxed text-white lg:col-span-5 lg:pt-12">From crypto launches and community to websites, content, SEO, and paid media for businesses in other industries, we shape the work around the challenge.</p>
          </Reveal>

          <div className="mb-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {primaryServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.id} delay={(i % 3) * 90}>
                  <Link href={`/services/${service.id}/`} className="service-card group card-hover flex h-full flex-col rounded-2xl border border-bone/15 bg-ink-2 p-8 text-white hover:border-ember/70" data-testid={`service-card-${service.id}`}>
                    <div className="mb-8 flex items-center justify-between">
                      <div className="service-icon flex h-12 w-12 items-center justify-center rounded-xl bg-bone/10"><Icon className="h-5 w-5" /></div>
                      <span className="font-mono text-xs text-white">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mb-5 font-display text-3xl font-extrabold uppercase leading-none text-white">{service.title}</h3>
                    <ul className="mb-8 flex-1 space-y-2.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-white"><Check className="h-4 w-4 shrink-0 text-ember" />{f}</li>
                      ))}
                    </ul>
                    <span className="flex items-center gap-2 text-sm font-bold">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.id} delay={i * 70}>
                  <Link href={`/services/${service.id}/`} className="service-card group card-hover flex items-center gap-4 rounded-2xl border border-bone/10 bg-bone/5 p-6 text-white">
                    <div className="service-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bone/10"><Icon className="h-5 w-5" /></div>
                    <h3 className="font-bold text-white">{service.title}</h3>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-t border-bone/15 pt-8 md:flex-row md:items-center">
            <Link href="/services/" className="btn-ghost on-dark text-white">View all services <ArrowRight className="h-5 w-5" /></Link>
            <div className="flex flex-col gap-3 text-white sm:flex-row sm:gap-8">
              <Link href="/new-jersey-crypto-marketing-agency/" className="ulink">Marketing for New Jersey Web3 teams</Link>
              <Link href="/services/crypto-event-marketing/" className="ulink">Crypto &amp; Web3 event marketing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry band */}
      <section aria-label="Start a project" className="bg-ember text-ink">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <p className="font-display text-4xl font-black uppercase leading-none md:text-5xl">Not sure which service fits? Describe the goal.</p>
          <a href={base + "#contact"} className="btn-ink shrink-0">Talk to LAD Media <ArrowRight className="h-5 w-5" /></a>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 max-w-3xl">
            <Eyebrow>Our process</Eyebrow>
            <h2 className="mb-6 font-display text-5xl font-black uppercase leading-[0.92] md:text-7xl">A clear process for complex work</h2>
            <p className="text-lg leading-relaxed text-ink/75">The scope changes with the project. The approach stays focused on understanding the audience, making the work, and learning from it.</p>
          </Reveal>
          <Reveal className="relative">
            <div aria-hidden="true" className="draw-line absolute left-0 right-0 top-[3.25rem] hidden h-px bg-ink/40 lg:block" />
            <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <li key={step.num} className="group relative">
                    <div className="relative mb-6 flex h-[6.5rem] items-start">
                      <div className="flex h-[6.5rem] w-[6.5rem] items-center justify-center bg-paper">
                        <div className="flex h-14 w-14 rotate-45 items-center justify-center bg-ink text-bone transition-colors duration-300 group-hover:bg-ember group-hover:text-ink">
                          <Icon className="h-6 w-6 -rotate-45" />
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 font-mono text-xs tracking-widest text-ember">STEP {step.num}</div>
                    <h3 className="mb-3 font-display text-4xl font-extrabold uppercase leading-none">{step.title}</h3>
                    <p className="leading-relaxed text-ink/70">{step.desc}</p>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="bg-ink py-24 text-bone md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow dark>Selected work</Eyebrow>
              <h2 className="font-display text-5xl font-black uppercase leading-[0.92] md:text-7xl">Websites you can open and judge</h2>
            </div>
            <div className="lg:col-span-5 lg:pt-12">
              <p className="mb-6 leading-relaxed text-bone/70">Each documented case study covers the challenge, completed work, deliverables, and the evidence we can show behind a live LAD Media website project.</p>
              <Link href="/case-studies/" className="btn-ember">View all case studies <ArrowRight className="h-5 w-5" /></Link>
            </div>
          </Reveal>

          <div className="mb-24 grid gap-6 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={(i % 2) * 100}>
                <Link href={`/case-studies/${study.slug}/`} className="group card-hover block overflow-hidden rounded-2xl border border-bone/15 bg-ink-2" data-testid={`case-study-card-${study.slug}`}>
                  <div className="aspect-[16/10] overflow-hidden border-b border-bone/15">
                    <img src={base + study.screenshot} alt={`${study.client} website created by LAD Media`} width={1280} height={720} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="flex items-end justify-between gap-4 p-6">
                    <div>
                      <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-lilac">{study.category}</p>
                      <h3 className="font-display text-4xl font-extrabold uppercase leading-none">{study.client}</h3>
                    </div>
                    <span className="flex shrink-0 items-center gap-2 text-sm font-bold text-ember">Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="border-t border-bone/15 pt-14">
            <Eyebrow dark>Live projects</Eyebrow>
            <h3 className="mb-10 font-display text-4xl font-extrabold uppercase md:text-5xl">More of the portfolio</h3>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {projects.map((project, i) => (
                <Reveal key={project.name} delay={(i % 4) * 70}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" data-testid={`portfolio-card-${i}`} className="group card-hover block h-full overflow-hidden rounded-xl border border-bone/15 bg-ink-2 hover:border-ember/60">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={shot(project.file)} alt={project.name + " website screenshot"} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute bottom-2 left-2 rounded bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-bone backdrop-blur-sm">{project.tag}</span>
                    </div>
                    <div className="flex items-start justify-between gap-3 p-4">
                      <div>
                        <div className="font-bold">{project.name}</div>
                        <div className="text-sm text-bone/55">{project.category}</div>
                      </div>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-bone/40 transition-colors group-hover:text-ember" />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20 border-t border-bone/15 pt-14">
            <Eyebrow dark>In development</Eyebrow>
            <h3 className="mb-3 font-display text-4xl font-extrabold uppercase md:text-5xl">What we're working on next</h3>
            <p className="mb-10 max-w-2xl leading-relaxed text-bone/70">These projects are currently in progress and are not presented as completed case studies.</p>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                { name: "LADsync", domain: "LADsync.com", url: "https://ladsync.com" },
                { name: "LADestate", domain: "LADestate.org", url: "https://ladestate.org" },
              ].map((p) => (
                <a key={p.domain} href={p.url} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-dashed border-bone/30 p-8 transition-colors hover:border-ember">
                  <span className="mb-8 inline-block rounded-full border border-ember/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-ember">In progress</span>
                  <div className="font-display text-5xl font-extrabold uppercase leading-none">{p.name}</div>
                  <div className="mb-8 mt-2 text-bone/60">{p.domain}</div>
                  <span className="inline-flex items-center gap-2 font-bold transition-all group-hover:gap-3">Visit site <ArrowRight className="h-4 w-4" /></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="overflow-hidden bg-paper py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Crypto specialist. Marketing partner.</Eyebrow>
            <h2 className="mb-8 font-display text-5xl font-black uppercase leading-[0.92] md:text-7xl">Depth in Web3. Perspective beyond it.</h2>
            <p className="mb-5 text-lg leading-relaxed text-ink/75">LAD Media brings a creative background to marketing for crypto, Web3, and other businesses. Our work spans campaign planning, audience messaging, and digital experiences that make the next step clear.</p>
            <p className="mb-10 text-lg leading-relaxed text-ink/75">We are based in Newark, NJ, and collaborate remotely when a project calls for it. Explore our services and documented website projects to see the scope of work we can discuss.</p>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-2xl border border-ink/25 px-6 py-5">
                <div className="mb-1 font-mono text-xs uppercase tracking-widest text-plum">Specialty</div>
                <div className="font-display text-3xl font-extrabold uppercase">Crypto &amp; Web3</div>
              </div>
              <div className="rounded-2xl border border-ink/25 px-6 py-5">
                <div className="mb-1 font-mono text-xs uppercase tracking-widest text-plum">Beyond crypto</div>
                <div className="font-display text-3xl font-extrabold uppercase">Business &amp; tech</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative flex justify-center lg:justify-end">
            <div aria-hidden="true" className="hatch absolute inset-6 rotate-3 rounded-3xl" />
            <img src={base + "assets/lad-media-official-logo.png"} alt="LAD Media logo" loading="lazy" className="relative w-full max-w-md object-contain mix-blend-multiply" />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-paper-deep py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mb-6 font-display text-5xl font-black uppercase leading-[0.92] md:text-6xl">Frequently asked questions</h2>
            <p className="mb-6 text-ink/70">Something not covered here? Ask directly.</p>
            <a href={base + "#contact"} className="btn-ink">Ask us <ArrowRight className="h-5 w-5" /></a>
          </Reveal>
          <div className="lg:col-span-8">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={faq.q} className="border-t border-ink/30 last:border-b">
                  <h3>
                    <button type="button" id={`faq-btn-${i}`} aria-expanded={isOpen} aria-controls={`faq-panel-${i}`} onClick={() => setOpenFaq(isOpen ? null : i)} className="group flex w-full items-center justify-between gap-6 py-6 text-left" data-testid={`faq-toggle-${i}`}>
                      <span className="text-lg font-bold md:text-xl">{faq.q}</span>
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/40 transition-all duration-300 group-hover:bg-ink group-hover:text-bone ${isOpen ? "rotate-45 bg-ember" : ""}`}>
                        <Plus className="h-5 w-5" />
                      </span>
                    </button>
                  </h3>
                  <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} data-open={isOpen} className="faq-panel">
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-6 leading-relaxed text-ink/75">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute -left-48 top-20 h-[36rem] w-[36rem] rotate-45 border border-lilac/20" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow dark>Get in touch</Eyebrow>
            <h2 className="mb-8 font-display text-6xl font-black uppercase leading-[0.9] text-white md:text-8xl">Tell us what you're building.</h2>
            <p className="mb-10 text-lg leading-relaxed text-white">Crypto project or another kind of business, share your audience, goals, and timeline. We'll discuss where our work could help.</p>
            <div className="mb-10 space-y-6">
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bone/10"><Mail className="h-5 w-5 text-ember" /></div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-lilac">Email us</div>
                  <a href="mailto:andrew@ladmedia.co" className="ulink text-lg font-semibold text-white">andrew@ladmedia.co</a>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bone/10"><MapPin className="h-5 w-5 text-ember" /></div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-lilac">Location</div>
                  <div className="text-lg font-semibold text-white">Newark, NJ</div>
                </div>
              </div>
            </div>
            <Link href="/case-studies/" className="ulink inline-flex items-center gap-2 font-bold text-white">Browse documented work <ArrowRight className="h-5 w-5" /></Link>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
