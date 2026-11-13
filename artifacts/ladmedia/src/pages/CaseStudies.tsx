import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { caseStudies } from "../data/case-studies";

export default function CaseStudies() {
  return (
    <div className="w-full bg-black text-white pt-32 pb-24">
      <header className="max-w-7xl mx-auto px-6 mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 mb-5">Selected work</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">LAD Media Case Studies</h1>
        <p className="text-xl text-white/60 max-w-3xl leading-relaxed">
          A closer look at websites LAD Media has built for service businesses, technology platforms, and professional organizations. Each study is limited to the work and evidence we can show.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {caseStudies.map((caseStudy) => (
          <article key={caseStudy.slug} className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-video overflow-hidden border-b border-white/10">
              <img
                src={import.meta.env.BASE_URL + caseStudy.screenshot}
                alt={`${caseStudy.client} website created by LAD Media`}
                className="w-full h-full object-cover object-top"
                width="1280"
                height="720"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-3">{caseStudy.category}</p>
              <h2 className="text-2xl md:text-3xl font-black mb-4">{caseStudy.client}</h2>
              <p className="text-white/65 leading-relaxed mb-7">{caseStudy.summary}</p>
              <Link href={`/case-studies/${caseStudy.slug}/`} className="inline-flex items-center gap-2 font-bold">
                Read the {caseStudy.client} case study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}