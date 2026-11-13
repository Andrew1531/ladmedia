import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Services", hash: "#services" },
  { label: "Process", hash: "#process" },
  { label: "Work", hash: "#results" },
  { label: "About", hash: "#about" },
  { label: "FAQ", hash: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const progressRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`;
      setIsScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [location]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const href = (hash: string) => `${import.meta.env.BASE_URL}${hash}`;
  const onCaseStudies = location.startsWith("/case-studies");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-paper/95 text-ink backdrop-blur-md transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_1px_0_hsl(var(--ink)/0.12),0_12px_30px_-18px_hsl(var(--ink)/0.5)]" : "shadow-[0_1px_0_hsl(var(--ink)/0.08)]"
        }`}
      >
        <nav aria-label="Primary" className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-300 ${isScrolled ? "py-2" : "py-3"}`}>
          <Link href="/" className="flex items-center" data-testid="nav-logo" aria-label="LAD Media home">
            <img src={import.meta.env.BASE_URL + "assets/lad-media-official-logo.png"} alt="LAD Media" className="h-12 w-12 object-contain mix-blend-multiply" />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a key={l.hash} href={href(l.hash)} className="ulink text-sm font-semibold tracking-wide">
                {l.label}
              </a>
            ))}
            <Link href="/case-studies/" aria-current={onCaseStudies ? "page" : undefined} className={`ulink text-sm font-semibold tracking-wide ${onCaseStudies ? "text-ember" : ""}`}>
              Case studies
            </Link>
            <a href="https://calendar.app.google/FPUDRXb8M71c1psD7" className="btn-ink px-6 py-2.5 text-sm" data-testid="nav-cta">
              Start a project <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="-mr-2 p-2 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            data-testid="nav-menu-btn"
          >
            <Menu className="h-7 w-7" />
          </button>
        </nav>
        <div ref={progressRef} aria-hidden="true" className="h-[3px] origin-left scale-x-0 bg-ember will-change-transform" />
      </header>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[60] flex flex-col bg-ink p-6 text-bone animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-extrabold uppercase tracking-wide">LAD Media</span>
            <button ref={closeRef} type="button" onClick={closeMenu} className="p-2" aria-label="Close menu" data-testid="nav-close-btn">
              <X className="h-8 w-8" />
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2">
            {[...LINKS.map((l) => ({ ...l, internal: false })), { label: "Case studies", hash: "", internal: true }].map((l, i) =>
              l.internal ? (
                <Link key={l.label} href="/case-studies/" onClick={closeMenu} className="flex items-baseline gap-4 border-b border-bone/10 py-3 font-display text-5xl font-extrabold uppercase">
                  <span className="font-mono text-xs text-ember">{String(i + 1).padStart(2, "0")}</span>{l.label}
                </Link>
              ) : (
                <a key={l.hash} href={href(l.hash)} onClick={closeMenu} className="flex items-baseline gap-4 border-b border-bone/10 py-3 font-display text-5xl font-extrabold uppercase">
                  <span className="font-mono text-xs text-ember">{String(i + 1).padStart(2, "0")}</span>{l.label}
                </a>
              ),
            )}
          </div>
          <a href="https://calendar.app.google/FPUDRXb8M71c1psD7" onClick={closeMenu} className="btn-ember w-full py-4 text-lg">
            Start a project <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      )}
    </>
  );
}
