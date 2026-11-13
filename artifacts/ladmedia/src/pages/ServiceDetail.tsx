import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import { servicesData } from "../data/services";
import { servicePageContent } from "../data/service-content";
import * as Icons from "lucide-react";
import NotFound from "./not-found";
import { caseStudies } from "../data/case-studies";

const getIcon = (name: string, props: any = {}) => {
  const IconComponent = (Icons as any)[name] || Icons.Lightbulb;
  return <IconComponent {...props} />;
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);
  const content = service ? servicePageContent[service.id] : undefined;

  if (!service || !content) {
    return <NotFound />;
  }

  const relatedServices = content.relatedServiceIds
    .map((relatedId) => servicesData.find((item) => item.id === relatedId))
    .filter((item): item is (typeof servicesData)[number] => Boolean(item));
  const relatedCaseStudies = caseStudies.filter((item) => item.relatedServiceIds.includes(service.id));

  return (
    <div className="w-full bg-black text-white selection:bg-white selection:text-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="mb-12">
          <Link href="/services/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
        </div>

        {/* Hero */}
        <div className="mb-16 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 mb-5">
            {content.eyebrow}
          </p>
          <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-8">
            {getIcon(service.iconName, { className: "w-10 h-10 text-white" })}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">{service.title}</h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Overview and fit */}
        <section className="grid lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-black mb-6">A practical approach to {service.title.toLowerCase()}</h2>
            <div className="space-y-5 text-lg text-white/70 leading-relaxed">
              {content.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-black mb-6">Who this service is for</h2>
            <ul className="space-y-5">
              {content.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70 leading-relaxed">
                  <Check className="w-5 h-5 text-white shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        {/* Deliverables */}
        <section className="mb-24">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-black mb-8">What We Offer</h2>
            <p className="text-lg text-white/60">
              The engagement is shaped around your goals and may include the following areas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="text-base text-white/80 leading-relaxed font-medium">{feature}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Our process</p>
            <h2 className="text-3xl md:text-5xl font-black">How the engagement works</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {content.approach.map((step, index) => (
              <article key={step.title} className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="text-sm font-black text-white/40 mb-5">0{index + 1}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/65 leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-24 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-4">What success looks like</p>
              <h2 className="text-3xl md:text-4xl font-black">Useful outcomes, not vanity metrics</h2>
            </div>
            <ul className="lg:col-span-3 grid gap-5">
              {content.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-4 text-lg text-white/75 leading-relaxed">
                  <Check className="w-5 h-5 shrink-0 mt-1" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-24 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Common questions</p>
          <h2 className="text-3xl md:text-5xl font-black mb-10">{service.title} FAQ</h2>
          <div className="space-y-4">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="group bg-white/5 border border-white/10 rounded-2xl">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 text-lg font-bold">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-6 text-white/65 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related services */}
        {relatedCaseStudies.length > 0 && (
          <section className="mb-24">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Related work</p>
            <h2 className="text-3xl md:text-5xl font-black mb-10">Website design case studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedCaseStudies.map((caseStudy) => (
                <Link key={caseStudy.slug} href={`/case-studies/${caseStudy.slug}/`} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-colors">
                  <img src={import.meta.env.BASE_URL + caseStudy.screenshot} alt={`${caseStudy.client} website`} className="w-full aspect-video object-cover object-top" width="1280" height="720" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{caseStudy.client}</h3>
                    <span className="inline-flex items-center gap-2 text-sm font-bold">Read case study <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related services */}
        <section className="mb-24">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-3">Build a connected plan</p>
              <h2 className="text-3xl font-black">Related services</h2>
            </div>
            <Link href="/services/" className="hidden sm:inline-flex items-center gap-2 font-bold text-white/60 hover:text-white">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          {["pr", "influencer", "social", "community", "ppc", "design"].includes(service.id) && (
            <p className="mb-8 text-white/60">
              Planning a launch meetup or virtual session? <Link href="/services/crypto-event-marketing/" className="underline underline-offset-4 text-white hover:text-white/80">See how these services fit into an event marketing plan.</Link>
            </p>
          )}
          <div className="grid md:grid-cols-3 gap-5">
            {relatedServices.map((related) => (
              <Link key={related.id} href={`/services/${related.id}/`} className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors">
                <h3 className="text-xl font-bold mb-3">{related.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">{related.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-6">Ready to scale your {service.title.toLowerCase()}?</h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Book a call with our team today and we'll build a custom strategy to help you dominate your market.
            </p>
            <a href={`${import.meta.env.BASE_URL}#contact`} className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-bold text-lg glow-button hover:bg-gray-200 transition-colors">
              Get a Free Proposal <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
