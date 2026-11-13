import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { Link, useParams } from "wouter";
import { getCaseStudy } from "../data/case-studies";
import NotFound from "./not-found";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) return <NotFound />;

  return (
    <article className="w-full bg-black text-white pt-32 pb-24">
      <header className="max-w-7xl mx-auto px-6 mb-16">
        <Link href="/case-studies/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 font-medium">
          <ArrowLeft className="w-4 h-4" /> All case studies
        </Link>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 mb-5">{caseStudy.category}</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 max-w-5xl">{caseStudy.title}</h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">{caseStudy.summary}</p>
      </header>

      <div className="max-w-7xl mx-auto px-6">
        <figure className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 mb-20">
          <img
            src={import.meta.env.BASE_URL + caseStudy.screenshot}
            alt={`${caseStudy.client} website created by LAD Media`}
            className="w-full h-auto"
            width="1280"
            height="720"
          />
          <figcaption className="p-4 text-sm text-white/45">Captured view of the completed {caseStudy.client} website.</figcaption>
        </figure>

        <section className="grid lg:grid-cols-2 gap-10 mb-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-4">The challenge</p>
            <h2 className="text-3xl font-black mb-6">A clear public home for the organization</h2>
            <p className="text-lg text-white/70 leading-relaxed">{caseStudy.challenge}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-black mb-6">Work completed</h2>
            <ul className="space-y-4">
              {caseStudy.workCompleted.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70 leading-relaxed">
                  <Check className="w-5 h-5 shrink-0 mt-0.5" /><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="max-w-4xl mb-20 space-y-12">
          {caseStudy.story.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-black mb-5">{section.heading}</h2>
              <p className="text-lg text-white/70 leading-relaxed">{section.text}</p>
            </section>
          ))}
        </div>

        <section className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-black mb-6">Deliverables</h2>
            <ul className="space-y-3 text-white/70">
              {caseStudy.deliverables.map((item) => <li key={item}>— {item}</li>)}
            </ul>
          </div>
          <div className="border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-black mb-6">Available evidence</h2>
            <ul className="space-y-4 text-white/70 leading-relaxed">
              {caseStudy.evidence.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="text-sm text-white/40 mt-6">No traffic, lead, revenue, or ranking outcome is claimed because none has been confirmed for this case study.</p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black mb-3">Review the work</h2>
            <p className="text-white/60">See the live project or explore LAD Media’s website design service.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold">
              Visit live website <ExternalLink className="w-4 h-4" />
            </a>
            <Link href="/services/design/" className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full font-bold">
              Website design service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}