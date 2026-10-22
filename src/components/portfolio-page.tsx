import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Clock,
  Code2,
  Download,
  Github,
  Instagram,
  Linkedin,
  Menu,
  Monitor,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { Assistant } from "@/components/assistant";
import { chips, jobs, nav, profile, roles, stackGroups } from "@/data/profile";

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleTheme() {
  const next = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", next);
  localStorage.setItem("baril-theme", next ? "dark" : "light");
}

function Loader({ onDone }: { onDone: () => void }) {
  const doneRef = useRef(onDone);
  doneRef.current = onDone;
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 280 : 1650;
    const start = performance.now();
    let frame = 0;
    let timer = 0;
    let cancelled = false;

    const tick = (now: number) => {
      if (cancelled) return;
      const value = Math.min(1, (now - start) / dur);
      setProgress(value);
      if (value < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }
      setLeaving(true);
      timer = window.setTimeout(() => {
        if (!cancelled) doneRef.current();
      }, reduce ? 0 : 380);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-bg transition-opacity duration-500",
        leaving && "opacity-0",
      )}
      role="status"
      aria-live="polite"
    >
      <div className="loader-glow" aria-hidden="true" />
      <div className="relative text-center">
        <p className="text-4xl font-bold tracking-tight">{profile.brand}</p>
        <p className="mt-3 text-xs font-medium tracking-brand text-muted uppercase">
          Portfolio Loading
        </p>
        <div className="mx-auto mt-4 h-px w-44 bg-line">
          <div
            className="h-full origin-left bg-fg"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </div>
    </div>
  );
}

function TypeRole({ active }: { active: boolean }) {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let role = 0;
    let index = roles[0]?.length ?? 0;
    let deleting = false;
    let hold = true;
    let timer = 0;

    const tick = () => {
      const current = roles[role] ?? "";
      if (hold) {
        hold = false;
        deleting = true;
        timer = window.setTimeout(tick, 1100);
        return;
      }
      if (!deleting) {
        index += 1;
        setText(current.slice(0, index));
        if (index >= current.length) {
          hold = true;
          timer = window.setTimeout(tick, 80);
          return;
        }
        timer = window.setTimeout(tick, 72);
        return;
      }
      index -= 1;
      setText(current.slice(0, Math.max(0, index)));
      if (index <= 0) {
        deleting = false;
        role = (role + 1) % roles.length;
        timer = window.setTimeout(tick, 240);
        return;
      }
      timer = window.setTimeout(tick, 34);
    };

    timer = window.setTimeout(tick, 500);
    return () => window.clearTimeout(timer);
  }, [active]);

  return (
    <p className="min-h-9 text-2xl font-bold tracking-tight md:text-3xl">
      {text}
      <span className="caret" aria-hidden="true" />
      <span className="sr-only">Peran yang sedang diketik</span>
    </p>
  );
}

function SiteNav({
  active,
  menu,
  setMenu,
}: {
  active: string;
  menu: boolean;
  setMenu: (open: boolean) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 md:top-4 md:px-6">
      <div
        className={cn(
          "mx-auto max-w-6xl border border-line bg-surface/90 shadow-float backdrop-blur-xl",
          menu ? "rounded-3xl" : "rounded-full",
        )}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 md:px-6">
          <a href="#home" className="text-sm font-extrabold tracking-tight">
            PORTFOLIO.
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Utama">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition-colors",
                  active === item.id ? "font-bold text-fg" : "font-medium text-muted hover:text-fg",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex size-10 items-center justify-center rounded-full text-fg transition-colors hover:bg-chip"
              aria-label="Ganti tema terang atau gelap"
            >
              <Sun className="size-4 dark:hidden" />
              <Moon className="hidden size-4 dark:block" />
            </button>
            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-full text-fg md:hidden"
              aria-expanded={menu}
              aria-label={menu ? "Tutup menu" : "Buka menu"}
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {menu ? (
          <nav className="flex flex-col gap-1 px-3 pb-3 md:hidden" aria-label="Utama">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                onClick={() => setMenu(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm",
                  active === item.id ? "bg-chip font-bold" : "font-medium text-soft",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}

function ChipIcon({ name }: { name: (typeof chips)[number]["icon"] }) {
  if (name === "clock") return <Clock className="size-4" />;
  if (name === "code") return <Code2 className="size-4" />;
  return <Monitor className="size-4" />;
}

function Hero({ active }: { active: boolean }) {
  return (
    <section id="home" className="scroll-mt-28 px-5 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-6">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            Hi, I'm {profile.firstName}
          </h1>
          <div className="mt-3">
            <TypeRole active={active} />
          </div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-soft md:text-base">
            {profile.hero}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToId("experience")}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-fg transition-transform duration-150 ease-out active:scale-[0.96]"
            >
              Explore Work
              <ArrowRight className="size-4" />
            </button>
            <a
              href="/cv.html"
              download="Baril-Yahya-CV.html"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 text-sm font-semibold transition-transform duration-150 ease-out active:scale-[0.96]"
            >
              Download CV
              <Download className="size-4" />
            </a>
          </div>
          <div className="mt-10 border-t border-line pt-6">
            <p className="text-xs font-semibold tracking-brand text-muted uppercase">Connect</p>
            <div className="mt-3 flex gap-2">
              {[
                { label: "Instagram", Icon: Instagram },
                { label: "GitHub", Icon: Github },
                { label: "LinkedIn", Icon: Linkedin },
              ].map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={`${label}, buka kontak`}
                  className="flex size-11 items-center justify-center rounded-xl border border-line bg-surface transition-colors hover:bg-chip"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative mx-auto w-fit">
            <div className="size-64 overflow-hidden rounded-full shadow-float ring-8 ring-surface sm:size-80">
              <img
                src="/portrait.jpg"
                alt="Potret bergaya Baril Yahya, hitam putih kontras tinggi"
                width={800}
                height={800}
                className="size-full object-cover"
              />
            </div>
            <ul className="relative z-10 mx-auto -mt-10 flex w-full max-w-xs flex-col gap-3 sm:-mt-16 lg:absolute lg:bottom-2 lg:left-0 lg:mx-0 lg:mt-0 lg:w-64 lg:-translate-x-16">
              {chips.map((chip) => (
                <li
                  key={chip.label}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-3 py-2.5 shadow-card"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-fg">
                    <ChipIcon name={chip.icon} />
                  </span>
                  <span className="text-sm font-semibold">{chip.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-brand text-muted uppercase">{label}</p>
      {href ? (
        <a href={href} className="mt-1 inline-block font-bold underline decoration-line underline-offset-4">
          {value}
        </a>
      ) : (
        <p className="mt-1 font-bold">{value}</p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-xs font-semibold tracking-brand text-muted uppercase">Discover</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">About Me</h2>
        </div>
        <div className="reveal grid items-start gap-10 lg:grid-cols-5">
          <div className="overflow-hidden rounded-3xl shadow-float lg:col-span-2">
            <img
              src="/portrait.jpg"
              alt=""
              width={800}
              height={800}
              className="about-frame w-full object-cover"
            />
          </div>
          <div className="lg:col-span-3">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="border-b border-line pb-3 text-lg font-bold">Who Am I</h3>
                <p className="mt-4 text-sm leading-relaxed text-soft">{profile.who}</p>
              </div>
              <div>
                <h3 className="border-b border-line pb-3 text-lg font-bold">My Approach</h3>
                <p className="mt-4 text-sm leading-relaxed text-soft">{profile.approach}</p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="border-l-4 border-fg pl-3 text-lg font-bold">Personal Details</h3>
              <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                <Detail label="Name" value={profile.fullName} />
                <Detail label="Place of Birth" value={profile.birthplace} />
                <Detail label="Phone" value={profile.phone} href={profile.phoneHref} />
                <Detail label="Education" value={profile.education} />
                <Detail label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const lineA = "Hello I'm Baril";
  const lineB = "Fullstack Web Developer";
  const row = (text: string) => Array.from({ length: 8 }, () => text);

  return (
    <section className="marquee overflow-hidden border-y border-line py-8" aria-hidden="true">
      <div className="marquee-track gap-10 py-1">
        {[...row(lineA), ...row(lineA)].map((text, index) => (
          <span key={`a-${index}`} className="text-4xl font-extrabold tracking-tight text-faint md:text-6xl">
            {text}
          </span>
        ))}
      </div>
      <div className="marquee-track reverse mt-2 gap-10">
        {[...row(lineB), ...row(lineB)].map((text, index) => (
          <span key={`b-${index}`} className="text-4xl font-extrabold tracking-tight text-faint md:text-6xl">
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-brand text-muted uppercase">Career Path</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Work Experience</h2>
        </div>
        <ol className="timeline mx-auto max-w-5xl">
          {jobs.map((job, index) => (
            <li
              key={job.company}
              className={cn("timeline-item", index % 2 === 0 ? "is-right" : "is-left")}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <article className="rounded-3xl border border-line bg-surface px-6 py-7 text-center shadow-card">
                <p className="text-sm text-muted">{job.year}</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{job.title}</h3>
                <p className="mt-2 text-xs font-semibold tracking-brand text-muted uppercase">
                  {job.company}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-soft">{job.body}</p>
                <ul className="mt-5 flex flex-wrap justify-center gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-chip px-3 py-1 text-xs font-semibold tracking-wide text-soft uppercase"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TechGlyph({ name }: { name: string }) {
  const common = "size-8 text-soft";
  if (name === "React") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="12" cy="12" r="2.1" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.3" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.3" transform="rotate(120 12 12)" />
      </svg>
    );
  }
  if (name === "Next.js") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8.2 16.2V7.8L15.8 16.2V7.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "Tailwind CSS") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M4 10c2-4 4-4 6 0 1 2 2 2 3 0 2-4 4-4 6 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 15c2-4 4-4 6 0 1 2 2 2 3 0 2-4 4-4 6 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "TypeScript") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 10h8M12 10v7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "Node.js") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M12 8.5v7M9.2 10.2 12 12l2.8-1.8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "Express.js") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 15.2 10.2 8.8h.1L12.6 15M9 13h3.1M13.6 15.2l2.2-6.4h.1l2.2 6.4M14.4 13h3" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "MySQL") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <ellipse cx="12" cy="7" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 7v10c0 1.7 3.1 3 7 3s7-1.3 7-3V7" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
      <path d="M12 3c2.2 3.6 5 5.6 5 9.2A5 5 0 1 1 7 12.2C7 8.6 9.8 6.6 12 3z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 21V10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function Stack() {
  return (
    <section id="stack" className="scroll-mt-28 px-5 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-brand text-muted uppercase">Skills & Tools</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">My Tech Stack</h2>
        </div>
        <div className="flex flex-col gap-12">
          {stackGroups.map((group) => (
            <div key={group.title} className="reveal grid items-center gap-6 lg:grid-cols-4">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{group.body}</p>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-surface px-3 py-6 shadow-card"
                  >
                    <TechGlyph name={item} />
                    <span className="text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const fieldClass =
  "mt-2 h-12 w-full rounded-xl border border-line bg-chip px-4 text-sm text-fg outline-none transition-colors placeholder:text-muted focus:border-fg";

function Contact() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (name.trim().length < 2) {
      setError("Nama minimal 2 huruf.");
      setSent(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Isi email yang valid supaya Baril bisa membalas.");
      setSent(false);
      return;
    }
    if (message.trim().length < 8) {
      setError("Tulis pesan singkat, minimal 8 huruf.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
    const subject = encodeURIComponent(`Halo Baril, dari ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-brand text-muted uppercase">Get in Touch</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Contact Me</h2>
        </div>
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-line bg-surface p-6 shadow-float md:p-8"
          noValidate
        >
          <h3 className="text-2xl font-extrabold tracking-tight">Send an Email directly.</h3>
          <div className="mt-6">
            <label htmlFor={nameId} className="text-xs font-semibold tracking-brand text-muted uppercase">
              Name
            </label>
            <input
              id={nameId}
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="John Doe"
              autoComplete="name"
              className={fieldClass}
            />
          </div>
          <div className="mt-5">
            <label htmlFor={emailId} className="text-xs font-semibold tracking-brand text-muted uppercase">
              Email
            </label>
            <input
              id={emailId}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="johndoe@example.com"
              autoComplete="email"
              className={fieldClass}
            />
          </div>
          <div className="mt-5">
            <label htmlFor={messageId} className="text-xs font-semibold tracking-brand text-muted uppercase">
              Message
            </label>
            <textarea
              id={messageId}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Your message here..."
              rows={5}
              className="mt-2 w-full resize-y rounded-xl border border-line bg-chip px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted focus:border-fg"
            />
          </div>
          {error ? <p className="mt-4 text-sm font-medium text-soft">{error}</p> : null}
          {sent ? (
            <p className="mt-4 text-sm font-medium text-soft">
              Aplikasi email kamu terbuka dengan pesan untuk {profile.email}.
            </p>
          ) : null}
          <button
            type="submit"
            className="mt-6 h-12 w-full rounded-xl bg-primary text-sm font-semibold tracking-wide text-primary-fg uppercase transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export function PortfolioPage() {
  const [ready, setReady] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const mark = window.scrollY + 140;
      let current = nav[0]?.id ?? "home";
      for (const item of nav) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= mark) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-fg">
      {ready ? null : <Loader onDone={() => setReady(true)} />}
      <SiteNav active={active} menu={menu} setMenu={setMenu} />
      <main>
        <Hero active={ready} />
        <About />
        <Marquee />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <footer className="border-t border-line px-5 py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.fullName}. Fullstack web developer, Padang.
      </footer>
      <Assistant />
    </div>
  );
}
