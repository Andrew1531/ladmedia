import { useRef, useState, type FormEvent } from "react";
import { AlertCircle, ArrowRight, Check, ChevronDown, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const field =
  "w-full rounded-xl border border-white bg-black px-4 py-3 text-white placeholder:text-white transition-colors focus:border-white focus:outline-none focus:ring-2 focus:ring-white aria-[invalid=true]:border-white [color-scheme:dark]";
const label = "mb-2 block text-sm font-semibold text-white";

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "That email address does not look complete.";
  if (!message) errors.message = "Tell us a little about the project.";
  else if (message.length < 10) errors.message = "A sentence or two helps us prepare for the first conversation.";
  return errors;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [errorDetail, setErrorDetail] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    const form = e.currentTarget;
    const formData = new FormData(form);

    const found = validate(formData);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Array<keyof Errors>)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("loading");
    setErrorDetail("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
        signal: controller.signal,
      });
      let result: { success?: boolean; message?: string } | null = null;
      try {
        result = await res.json();
      } catch {
        result = null;
      }

      if (!res.ok || !result || result.success !== true) {
        setErrorDetail(result?.message ?? "");
        setStatus("error");
        return;
      }

      // Optional lead copy for deployments that expose /api/leads; never blocks or affects the result.
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          projectType: formData.get("project_type"),
          message: formData.get("message"),
        }),
      }).catch(() => {});

      form.reset();
      setStatus("success");
      window.requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        data-testid="contact-success"
        className="rounded-3xl border border-white bg-black p-8 text-center text-white outline-none md:p-12"
      >
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-bone">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="font-display text-4xl font-extrabold uppercase">Inquiry received</h3>
        <p className="mx-auto mt-3 max-w-sm text-white">
          Thanks for reaching out. We will follow up by email to talk through your project.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="ulink mt-8 font-bold" data-testid="contact-reset">
          Send another message
        </button>
      </div>
    );
  }

  const busy = status === "loading";
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={busy}
      className="space-y-5 rounded-3xl border border-white bg-black p-6 text-white md:p-10"
      data-testid="contact-form"
    >
      <input type="hidden" name="access_key" value="83776d97-1345-4e6c-80d8-8222dbe8eaaf" />
      <input type="hidden" name="subject" value="New Lead from LAD Media Website" />
      <input type="hidden" name="from_name" value="LAD Media Website" />

      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-4xl font-extrabold uppercase leading-none">Start a conversation</h3>
        <span className="font-mono text-xs uppercase tracking-widest text-white">Name, email, message required</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" type="text" autoComplete="name" className={field} placeholder="Your name"
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} data-testid="input-name" />
          {errors.name && <p id="name-error" className="mt-1.5 text-sm font-medium text-white">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" autoComplete="email" className={field} placeholder="you@company.com"
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} data-testid="input-email" />
          {errors.email && <p id="email-error" className="mt-1.5 text-sm font-medium text-white">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="project_name" className={label}>Project or company <span className="font-normal text-white">(optional)</span></label>
          <input id="project_name" name="project_name" type="text" className={field} placeholder="What should we call it?" data-testid="input-project-name" />
        </div>
        <div>
          <label htmlFor="project_type" className={label}>Project type <span className="font-normal text-white">(optional)</span></label>
          <div className="relative">
            <select id="project_type" name="project_type" className={`${field} appearance-none pr-10`} defaultValue="" data-testid="select-project-type">
              <option value="">Select type</option>
              <option value="Token Launch">Token Launch</option>
              <option value="NFT Collection">NFT Collection</option>
              <option value="DeFi Protocol">DeFi Protocol</option>
              <option value="DAO">DAO</option>
              <option value="Exchange DEX">Exchange/DEX</option>
              <option value="Other Web3">Other Web3</option>
              <option value="Traditional Business">Business outside crypto</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className={label}>Timeline <span className="font-normal text-white">(optional)</span></label>
        <div className="relative">
          <select id="timeline" name="timeline" className={`${field} appearance-none pr-10`} defaultValue="" data-testid="select-timeline">
            <option value="">When do you want to start?</option>
            <option value="ASAP">ASAP (0-4 weeks)</option>
            <option value="1-2 months">1-2 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6+ months">6+ months</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" rows={5} className={`${field} resize-none`}
          placeholder="Who is it for, what should change, and when?"
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} data-testid="input-message" />
        {errors.message && <p id="message-error" className="mt-1.5 text-sm font-medium text-white">{errors.message}</p>}
      </div>

      {status === "error" && (
        <div role="alert" data-testid="contact-error" className="flex gap-3 rounded-xl border border-white bg-black px-4 py-3 text-sm text-white">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            Your message was not sent{errorDetail ? ` (${errorDetail})` : ""}. Please try again, or email us at{" "}
            <a href="mailto:andrew@ladmedia.co" className="font-bold underline">andrew@ladmedia.co</a>.
          </p>
        </div>
      )}

      <button type="submit" disabled={busy} className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white bg-black px-7 py-4 text-lg font-bold text-white transition-shadow hover:ring-2 hover:ring-white focus-visible:outline-white disabled:cursor-wait disabled:opacity-70" data-testid="button-submit-inquiry">
        {busy ? (<><Loader2 className="h-5 w-5 animate-spin" /> Sending</>) : (<>Send project inquiry <ArrowRight className="h-5 w-5" /></>)}
      </button>
      <p className="text-center text-sm text-white">Tell us enough to make the first conversation useful.</p>
    </form>
  );
}
