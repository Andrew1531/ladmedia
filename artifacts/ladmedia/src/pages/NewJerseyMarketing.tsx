import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Check, Minus, Plus } from 'lucide-react';
import { getLandingPage } from '../data/landing-pages';
import { caseStudies } from '../data/case-studies';
import { guides, formatGuideDate } from '../data/guides';
import Eyebrow from '../components/Eyebrow';
import Reveal from '../components/Reveal';

const PATH = '/new-jersey-marketing-agency/';
const base = import.meta.env.BASE_URL;

export default function NewJerseyMarketing() {
  const page = getLandingPage(PATH);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  if (!page) return null;
  const studies = caseStudies.slice(0, 3);

  return (
    <div className="w-full bg-paper text-ink">
      {/* Intro */}
      <section className="bg-paper pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-ink/60">
            <Link href="/" className="ulink">Home</Link>
            <span className="mx-3">/</span>
            <span>New Jersey</span>
          </nav>
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <h1 className="mb-8 max-w-5xl font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">{page.heading}</h1>
          <p className="mb-10 max-w-3xl text-xl leading-relaxed text-ink/75">{page.intro}</p>
          <div className="flex flex-wrap gap-4">
            <a href={base + '#contact'} className="btn-ink text-lg">Start your project <ArrowRight className="h-5 w-5" /></a>
            <Link href="/guides/" className="btn-ghost text-lg">Read our NJ guides</Link>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section aria-labelledby="nj-segments" className="bg-ink py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow dark>Who we work with</Eyebrow>
              <h2 id="nj-segments" className="font-display text-5xl font-black uppercase leading-[0.92] md:text-7xl">{page.contextHeading}</h2>
            </div>
            <p className="text-lg leading-relaxed text-white/80 lg:col-span-5 lg:pt-12">{page.context[0]}</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {page.segments?.map((segment, i) => (
              <Reveal key={segment.title} delay={(i % 4) * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-bone/20 p-7">
                  <span className="mb-6 font-mono text-xs text-white/60">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mb-3 font-display text-3xl font-extrabold uppercase leading-none">{segment.title}</h3>
                  <p className="mb-5 text-sm text-white/65">{segment.description}</p>
                  <ul className="mb-8 flex-1 space-y-2.5">
                    {segment.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0" />{item}</li>
                    ))}
                  </ul>
                  <Link href={segment.href} className="inline-flex items-center gap-2 text-sm font-bold">
                    <span className="ulink">{segment.linkLabel}</span> <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="nj-services" className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 id="nj-services" className="mb-12 font-display text-5xl font-black uppercase leading-[0.92] md:text-7xl">Services for NJ businesses</h2>
          </Reveal>
          {page.deliverables.map((item, i) => (
            <Reveal key={item.title} className="grid gap-4 border-t border-ink/20 py-8 md:grid-cols-12 md:gap-8">
              <span className="font-mono text-xs text-ink/60 md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-3xl font-extrabold uppercase leading-none md:col-span-4">{item.title}</h3>
              <p className="leading-relaxed text-ink/70 md:col-span-5">{item.description}</p>
              {item.href && (
                <Link href={item.href} className="inline-flex items-center gap-2 text-sm font-bold md:col-span-2 md:justify-end">
                  <span className="ulink">Learn more</span> <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section aria-labelledby="nj-process" className="bg-paper pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 id="nj-process" className="mb-12 font-display text-5xl font-black uppercase leading-[0.92] md:text-6xl">Four steps</h2>
          </Reveal>
          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {page.phases.map((phase, i) => (
              <li key={phase.title} className="border-t-[3px] border-ink pt-6">
                <div className="mb-3 font-mono text-xs uppercase tracking-widest text-ink/60">Step {String(i + 1).padStart(2, '0')}</div>
                <h3 className="mb-3 font-display text-3xl font-extrabold uppercase leading-none">{phase.title}</h3>
                <p className="leading-relaxed text-ink/70">{phase.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Documented work */}
      <section aria-labelledby="nj-work" className="border-t border-ink/15 bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Documented work</Eyebrow>
              <h2 id="nj-work" className="font-display text-5xl font-black uppercase leading-[0.92] md:text-6xl">Websites we built</h2>
            </div>
            <Link href="/case-studies/" className="btn-ink">All case studies <ArrowRight className="h-5 w-5" /></Link>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {studies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}/`} className="group card-hover block overflow-hidden rounded-2xl border border-ink/15 bg-paper">
                <img src={base + study.screenshot} alt={`${study.client} website created by LAD Media`} loading="lazy" className="aspect-video w-full border-b border-ink/15 object-cover object-top" />
                <div className="p-6">
                  <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink/60">{study.category}</div>
                  <h3 className="mb-3 font-display text-3xl font-extrabold uppercase leading-none">{study.client}</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-bold"><span className="ulink">View case study</span> <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section aria-labelledby="nj-guides" className="bg-ink py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow dark>Guides for New Jersey businesses</Eyebrow>
              <h2 id="nj-guides" className="font-display text-5xl font-black uppercase leading-[0.92] md:text-6xl">Latest NJ guides</h2>
            </div>
            <Link href="/guides/" className="btn-ember">All guides <ArrowRight className="h-5 w-5" /></Link>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.slice(0, 3).map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}/`} className="group flex flex-col gap-4 rounded-2xl border border-bone/20 p-7 hover:border-bone/60">
                <span className="self-start rounded-full border border-bone/50 px-3 py-1 text-xs font-semibold">{guide.category}</span>
                <h3 className="font-display text-3xl font-extrabold uppercase leading-none">{guide.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{guide.description}</p>
                <div className="mt-auto flex justify-between text-sm">
                  <span className="inline-flex items-center gap-2 font-bold"><span className="ulink">Read the guide</span> <ArrowRight className="h-4 w-4" /></span>
                  <span className="text-white/60">{formatGuideDate(guide.published)} · {guide.readMinutes} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="nj-faq" className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="nj-faq" className="mb-10 font-display text-5xl font-black uppercase leading-[0.92] md:text-6xl">Questions from NJ businesses</h2>
          <div>
            {page.faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={faq.question} className="border-t border-ink/20">
                  <button type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-bold">
                    {faq.question}
                    {open ? <Minus className="h-5 w-5 shrink-0" /> : <Plus className="h-5 w-5 shrink-0" />}
                  </button>
                  {open && <p className="max-w-3xl pb-6 leading-relaxed text-ink/70">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
