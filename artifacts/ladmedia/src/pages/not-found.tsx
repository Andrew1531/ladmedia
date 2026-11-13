import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center">
      <div className="mx-auto w-full max-w-3xl px-6 py-40">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Error 404</p>
        <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight">Page not found</h1>
        <p className="mt-6 text-lg text-white/70">
          The page you were looking for has moved or no longer exists. These links will get you back on track.
        </p>
        <ul className="mt-10 space-y-4 text-lg font-bold">
          <li>
            <Link href="/" className="inline-flex items-center gap-2 underline underline-offset-4">
              LAD Media home <ArrowRight className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link href="/services/" className="inline-flex items-center gap-2 underline underline-offset-4">
              Marketing services <ArrowRight className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link href="/case-studies/" className="inline-flex items-center gap-2 underline underline-offset-4">
              Case studies <ArrowRight className="h-5 w-5" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
