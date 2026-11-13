import { Link } from "wouter";
import { ArrowUp, Mail, MapPin, ArrowRight } from "lucide-react";

const base = import.meta.env.BASE_URL;

const services = [
  ["token-launch", "Token Launch Strategy"],
  ["community", "Community Building"],
  ["influencer", "Influencer Marketing"],
  ["pr", "PR & Media Coverage"],
  ["ppc", "Paid Advertising"],
  ["seo", "SEO & Content"],
] as const;

const linkCls = "ulink text-bone/70 transition-colors hover:text-bone";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 border-b border-bone/15 pb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-lilac">Newark, NJ</p>
            <h2 className="font-display text-5xl font-black uppercase leading-[0.95] md:text-7xl">
              Have a project?<br /><span className="text-ember">Tell us the goal.</span>
            </h2>
          </div>
          <a href="https://calendar.app.google/FPUDRXb8M71c1psD7" className="btn-ember shrink-0 text-lg" data-testid="footer-cta">
            Start a project <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 inline-block rounded-xl bg-paper p-1.5">
              <img src={base + "assets/lad-media-official-logo.png"} alt="LAD Media" className="h-16 w-16 object-contain mix-blend-multiply" />
            </div>
            <p className="mb-6 max-w-xs leading-relaxed text-bone/70">
              A marketing agency specializing in crypto and Web3, with strategy and digital work for businesses beyond the space.
            </p>
            <Link href="/case-studies/" className="ulink text-sm font-bold">View our case studies</Link>
          </div>

          <nav aria-label="Services">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-lilac">Services</h3>
            <ul className="space-y-3">
              {services.map(([id, label]) => (
                <li key={id}><Link href={`/services/${id}/`} className={linkCls}>{label}</Link></li>
              ))}
              <li><Link href="/services/crypto-event-marketing/" className={linkCls}>Crypto & Web3 Events</Link></li>
              <li><Link href="/services/" className="ulink font-bold">All services</Link></li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-lilac">Company</h3>
            <ul className="space-y-3">
              <li><a href={base + "#about"} className={linkCls}>About us</a></li>
              <li><Link href="/case-studies/" className={linkCls}>Case studies</Link></li>
              <li><a href={base + "#process"} className={linkCls}>Process</a></li>
              <li><a href={base + "#faq"} className={linkCls}>FAQ</a></li>
              <li><a href={base + "#contact"} className={linkCls}>Contact</a></li>
              <li><Link href="/new-jersey-crypto-marketing-agency/" className={linkCls}>New Jersey marketing</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-lilac">Contact</h3>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-ember" />
                <a href="mailto:andrew@ladmedia.co" className={linkCls}>andrew@ladmedia.co</a>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-ember" />
                <span className="text-bone/70">Based in Newark, NJ.<br />Remote collaboration available.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-bone/15 pt-8 text-sm text-bone/50 md:flex-row md:items-center">
          <p>&copy; 2026 LAD Media Co. All rights reserved.</p>
          <button type="button" onClick={() => window.scrollTo({ top: 0 })} className="inline-flex items-center gap-2 font-semibold text-bone/70 transition-colors hover:text-ember" data-testid="footer-top">
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
