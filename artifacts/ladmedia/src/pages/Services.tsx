import { Link } from "wouter";
import { ArrowRight, Mail } from "lucide-react";
import { servicesData } from "../data/services";
import * as Icons from "lucide-react";

const getIcon = (name: string, props: any = {}) => {
  const IconComponent = (Icons as any)[name] || Icons.Lightbulb;
  return <IconComponent {...props} />;
};

export default function Services() {
  const coreServices = servicesData.slice(0, 9);
  const advisoryServices = servicesData.slice(9);

  return (
    <div className="w-full bg-black text-white selection:bg-white selection:text-black">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="text-sm font-medium tracking-widest uppercase text-white/80">Crypto specialty. Broader perspective.</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Marketing Services</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            We specialize in crypto and Web3. Our strategy, content, design, SEO, and paid media work also supports businesses beyond the space.
          </p>
          <a href={`${import.meta.env.BASE_URL}#contact`} className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg glow-button hover:bg-gray-200 transition-colors">
            Discuss Your Project <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <Link href="/services/crypto-event-marketing/" className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-white/30 transition-colors">
            <h2 className="text-2xl font-bold mb-3">Crypto & Web3 event marketing</h2>
            <p className="text-white/60 mb-5">Plan the invitation, promotion and follow-up for community meetups, product demonstrations and virtual events.</p>
            <span className="inline-flex gap-2 items-center font-bold">Explore event marketing <ArrowRight className="w-4 h-4" /></span>
          </Link>
          <Link href="/new-jersey-crypto-marketing-agency/" className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-white/30 transition-colors">
            <h2 className="text-2xl font-bold mb-3">New Jersey crypto marketing</h2>
            <p className="text-white/60 mb-5">Explore local marketing support for New Jersey founders and Web3 teams.</p>
            <span className="inline-flex gap-2 items-center font-bold">Explore New Jersey services <ArrowRight className="w-4 h-4" /></span>
          </Link>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-12">Core Marketing Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => (
              <Link key={service.id} href={`/services/${service.id}/`} className="block group card-hover">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 h-full flex flex-col relative overflow-hidden transition-colors hover:border-white/30">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    {getIcon(service.iconName, { className: "w-6 h-6 text-white group-hover:text-black transition-colors duration-300" })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/60 mb-8 flex-1 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-white/80 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-12">Advisory Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryServices.map((service) => (
              <Link key={service.id} href={`/services/${service.id}/`} className="block group card-hover">
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10 h-full flex flex-col relative transition-colors hover:border-white/30">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    {getIcon(service.iconName, { className: "w-6 h-6 text-white group-hover:text-black transition-colors duration-300" })}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/60 mb-6 flex-1 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
            
            <a href={`${import.meta.env.BASE_URL}#contact`} className="block group card-hover">
              <div className="bg-white text-black rounded-3xl p-8 h-full flex flex-col justify-center items-center text-center glow-button">
                <h3 className="text-2xl font-black mb-4">Need A Custom Plan?</h3>
                <p className="opacity-80 mb-6 text-sm">
                  Not sure what you need? Let's get on a call and build a strategy together.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold">
                  Discuss Your Project <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8">Ready to get started?</h2>
          <p className="text-xl text-white/60 mb-12">Let's discuss a marketing strategy grounded in your project, audience, and goals.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={`${import.meta.env.BASE_URL}#contact`} className="bg-white text-black px-8 py-5 rounded-full font-bold text-lg glow-button hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Tell Us About Your Project <ArrowRight className="w-5 h-5" />
            </a>
            <a href="mailto:andrew@ladmedia.co" className="px-8 py-5 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Email Us Directly <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
