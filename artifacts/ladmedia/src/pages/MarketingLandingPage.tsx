import { Link } from 'wouter';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { getLandingPage } from '../data/landing-pages';

export default function MarketingLandingPage({ path }: { path: string }) {
  const page = getLandingPage(path);
  if (!page) return null;

  return (
    <div className="w-full bg-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-white/50 mb-16">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-3">/</span>
          {page.schemaType === 'event' && <><Link href="/services/" className="hover:text-white">Services</Link><span className="mx-3">/</span></>}
          <span className="text-white/80">{page.heading}</span>
        </nav>
        <header className="max-w-4xl mb-24">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50 font-bold mb-6">{page.eyebrow}</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.08] mb-8">{page.heading}</h1>
          <p className="text-xl md:text-2xl text-white/65 leading-relaxed mb-10">{page.intro}</p>
          <a href={`${import.meta.env.BASE_URL}#contact`} className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
            Discuss your project <ArrowRight className="w-5 h-5" />
          </a>
        </header>
        <section className="grid lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-black mb-7">{page.contextHeading}</h2>
            <div className="space-y-6 text-lg text-white/65 leading-relaxed">{page.context.map(p => <p key={p}>{p}</p>)}</div>
          </div>
          <aside className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Who this is for</h2>
            <ul className="space-y-5">{page.audience.map(a => <li key={a} className="flex gap-3 text-white/70 leading-relaxed"><Check className="w-5 h-5 mt-1 shrink-0" />{a}</li>)}</ul>
          </aside>
        </section>
        <section className="mb-24">
          <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Services and deliverables</p>
          <h2 className="text-3xl md:text-5xl font-black mb-10">What we can help coordinate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {page.deliverables.map(item => <article key={item.title} className="bg-white/5 border border-white/10 rounded-3xl p-8"><h3 className="text-2xl font-bold mb-4">{item.title}</h3><p className="text-white/65 leading-relaxed">{item.description}</p></article>)}
          </div>
        </section>
        <section className="mb-24">
          <p className="text-sm uppercase tracking-widest text-white/50 mb-4">How we work</p>
          <h2 className="text-3xl md:text-5xl font-black mb-10">{page.schemaType === 'event' ? 'Before, during and after' : 'From brief to next steps'}</h2>
          <ol className="grid md:grid-cols-2 gap-6">
            {page.phases.map((item, i) => <li key={item.title} className="border border-white/10 rounded-3xl p-8"><span className="text-white/40 font-bold">0{i + 1}</span><h3 className="text-2xl font-bold my-4">{item.title}</h3><p className="text-white/65 leading-relaxed">{item.description}</p></li>)}
          </ol>
        </section>
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-24">
          <h2 className="text-3xl font-black mb-8">What a useful engagement should produce</h2>
          <ul className="grid md:grid-cols-2 gap-6">{page.outcomes.map(item => <li key={item} className="flex gap-3 text-lg text-white/70"><Check className="w-5 h-5 mt-1 shrink-0" />{item}</li>)}</ul>
        </section>
        <section className="mb-24 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black mb-10">Frequently asked questions</h2>
          <div className="space-y-4">{page.faqs.map(faq => <details key={faq.question} className="group bg-white/5 border border-white/10 rounded-2xl"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 text-lg font-bold">{faq.question}<ChevronDown className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180" /></summary><p className="px-6 pb-6 text-white/65 leading-relaxed">{faq.answer}</p></details>)}</div>
        </section>
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-8">Explore related services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{page.related.map(item => <Link key={item.path} href={item.path} className="flex justify-between gap-4 p-6 rounded-2xl border border-white/10 hover:border-white/40 transition-colors font-bold">{item.label}<ArrowRight className="w-5 h-5 shrink-0" /></Link>)}</div>
        </section>
        <section className="text-center rounded-3xl bg-white/10 border border-white/10 p-10 md:p-16">
          <h2 className="text-3xl md:text-4xl font-black mb-5">Tell us what you are planning</h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto mb-9">Share your project, audience, timeline and goals. We can discuss a scope that fits the work rather than a one-size-fits-all package.</p>
          <a href={`${import.meta.env.BASE_URL}#contact`} className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200">Get in touch <ArrowRight className="w-5 h-5" /></a>
        </section>
      </div>
    </div>
  );
}