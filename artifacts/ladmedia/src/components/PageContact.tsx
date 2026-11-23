import { ArrowRight, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import Eyebrow from './Eyebrow';
import { BOOKING_URL } from '@/lib/analytics';

type Props = {
  heading?: string;
  text?: string;
  /** Section label used in GA4 click reports. */
  location: string;
};

/** On-page contact block so visitors can reach out without leaving the page they are reading. */
export default function PageContact({
  heading = 'Tell us about your business.',
  text = "Share what you do, where you work and what you want more of. We'll reply by email with how we can help and what it would involve.",
  location,
}: Props) {
  return (
    <section id="get-in-touch" data-cta-location={location} aria-labelledby="get-in-touch-heading" className="scroll-mt-24 bg-ink py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow dark>Get in touch</Eyebrow>
          <h2 id="get-in-touch-heading" className="mb-8 font-display text-5xl font-black uppercase leading-[0.9] md:text-7xl">{heading}</h2>
          <p className="mb-10 text-lg leading-relaxed text-white/85">{text}</p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-ember mb-10">Book a call <ArrowRight className="h-5 w-5" /></a>
          <div className="space-y-6">
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
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
