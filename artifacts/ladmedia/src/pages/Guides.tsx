import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { guides, guideCategories, formatGuideDate } from '../data/guides';
import Eyebrow from '../components/Eyebrow';

export default function Guides() {
  const [category, setCategory] = useState<string | null>(null);
  const available = guideCategories.filter((name) => guides.some((guide) => guide.category === name));
  const shown = category ? guides.filter((guide) => guide.category === category) : guides;

  return (
    <div className="w-full bg-paper text-ink">
      <section className="pt-32 pb-14 md:pt-36">
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-ink/60">
            <Link href="/" className="ulink">Home</Link>
            <span className="mx-3">/</span>
            <span>Guides</span>
          </nav>
          <Eyebrow>Guides · New Jersey</Eyebrow>
          <h1 className="mb-8 max-w-5xl font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">Marketing guides for NJ businesses</h1>
          <p className="max-w-3xl text-xl leading-relaxed text-ink/75">
            Practical answers to the questions New Jersey business owners ask about Google, ads, websites and social media. A new guide every week.
          </p>
          {available.length > 1 && (
            <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label="Filter guides by business type">
              {[null, ...available].map((name) => (
                <button
                  key={name ?? 'all'}
                  type="button"
                  aria-pressed={category === name}
                  onClick={() => setCategory(name)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold ${category === name ? 'border-ink bg-ink text-white' : 'border-ink/40'}`}
                >
                  {name ?? 'All guides'}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}/`} className="group card-hover flex flex-col gap-4 rounded-2xl border border-ink/15 bg-paper p-7">
                <span className="self-start rounded-full border border-ink/50 px-3 py-1 text-xs font-semibold">{guide.category}</span>
                <h2 className="font-display text-3xl font-extrabold uppercase leading-none">{guide.title}</h2>
                <p className="text-sm leading-relaxed text-ink/70">{guide.description}</p>
                <div className="mt-auto flex justify-between text-sm">
                  <span className="inline-flex items-center gap-2 font-bold"><span className="ulink">Read the guide</span> <ArrowRight className="h-4 w-4" /></span>
                  <span className="text-ink/60">{formatGuideDate(guide.published)} · {guide.readMinutes} min read</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink/15 p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="font-display text-4xl font-black uppercase leading-none">Want this done for your business?</h2>
              <p className="mt-3 text-ink/70">LAD Media is a digital marketing agency based in Newark, NJ.</p>
            </div>
            <Link href="/new-jersey-marketing-agency/" className="btn-ink shrink-0">See NJ marketing services <ArrowRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
