import { Link, useParams } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { getGuide, guides, formatGuideDate } from '../data/guides';
import { caseStudies } from '../data/case-studies';
import NotFound from './not-found';
import PageContact from '../components/PageContact';
import { BOOKING_URL } from '@/lib/analytics';

const base = import.meta.env.BASE_URL;

export default function GuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const guide = getGuide(slug);
  if (!guide) return <NotFound />;

  const others = guides.filter((item) => item.slug !== guide.slug).slice(0, 3);
  const study = caseStudies.find((item) => guide.related.some((link) => link.path === `/case-studies/${item.slug}/`));

  return (
    <div className="w-full bg-paper text-ink">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 pt-32 pb-24 md:pt-36 lg:grid-cols-12">
        <article className="lg:col-span-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink/60">
            <Link href="/" className="ulink">Home</Link>
            <span className="mx-3">/</span>
            <Link href="/guides/" className="ulink">Guides</Link>
            <span className="mx-3">/</span>
            <span>{guide.category}</span>
          </nav>
          <span className="inline-block rounded-full border border-ink/50 px-3 py-1 text-xs font-semibold">{guide.category}</span>
          <h1 className="mt-6 mb-6 font-display text-5xl font-black uppercase leading-[0.92] md:text-7xl">{guide.title}</h1>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink/60">
            {formatGuideDate(guide.published)} · {guide.readMinutes} min read · By Andrew, LAD Media · Newark, NJ
          </p>
          <p className="mt-10 mb-8 text-xl leading-relaxed">{guide.intro}</p>

          <nav aria-label="In this guide" className="mb-12 rounded-2xl bg-ink/5 p-7">
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em]">In this guide</div>
            <ol className="list-decimal space-y-1 pl-5">
              {guide.sections.map((section) => (
                <li key={section.id}><a href={`#${section.id}`} className="ulink">{section.heading}</a></li>
              ))}
            </ol>
          </nav>

          {guide.sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-12 scroll-mt-28">
              <h2 className="mb-4 font-display text-4xl font-black uppercase leading-none md:text-5xl">{section.heading}</h2>
              {section.intro && <p className="mb-4 text-lg leading-relaxed text-ink/75">{section.intro}</p>}
              {section.paragraphs?.map((text) => <p key={text} className="mb-4 text-lg leading-relaxed text-ink/75">{text}</p>)}
              {section.items && (
                <ol>
                  {section.items.map((item, i) => (
                    <li key={item.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-ink/15 py-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-ink font-bold">{i + 1}</span>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="mt-1.5 leading-relaxed text-ink/70">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}

          <div data-cta-location="guide_end" className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-ink p-8 text-white md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="font-display text-4xl font-black uppercase leading-none">Want help putting this in place?</h2>
              <p className="mt-3 text-white/75">{guide.closing}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-ember">Book a call <ArrowRight className="h-5 w-5" /></a>
              <a href="#get-in-touch" className="btn-ghost on-dark">Send a message</a>
            </div>
          </div>
        </article>

        <aside className="space-y-5 lg:col-span-4 lg:pt-24">
          <div className="rounded-2xl border border-ink/15 p-7">
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em]">LAD Media</div>
            <p className="text-sm leading-relaxed text-ink/70">A digital marketing agency based in Newark, NJ, helping New Jersey businesses get found on Google.</p>
            <Link href="/new-jersey-marketing-agency/" className="mt-4 inline-flex items-center gap-2 text-sm font-bold"><span className="ulink">NJ marketing services</span> <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-2xl border border-ink/15 p-7">
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em]">Related</div>
            <ul>
              {others.map((item) => (
                <li key={item.slug} className="border-t border-ink/15 py-3"><Link href={`/guides/${item.slug}/`} className="ulink text-sm font-semibold">{item.title}</Link></li>
              ))}
              {guide.related.map((item) => (
                <li key={item.path} className="border-t border-ink/15 py-3"><Link href={item.path} className="ulink text-sm font-semibold">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          {study && (
            <Link href={`/case-studies/${study.slug}/`} className="block rounded-2xl border border-ink/15 p-7">
              <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em]">Documented work</div>
              <img src={base + study.screenshot} alt={`${study.client} website created by LAD Media`} loading="lazy" className="w-full rounded-lg border border-ink/15" />
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold"><span className="ulink">{study.client} website</span> <ArrowRight className="h-4 w-4" /></span>
            </Link>
          )}
        </aside>
      </div>
      <PageContact location="guide_page" />
    </div>
  );
}
