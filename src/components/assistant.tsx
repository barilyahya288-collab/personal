import { useEffect, useId, useRef, useState } from "react";
import { MessageCircle, SendHorizontal, X } from "lucide-react";
import { jobs, profile, stackGroups } from "@/data/profile";

type Msg = { id: string; role: "user" | "bot"; text: string; time: string };

function stamp() {
  const d = new Date();
  return `${d.getHours()}.${String(d.getMinutes()).padStart(2, "0")}`;
}

function answer(raw: string): string {
  const q = raw.toLowerCase().trim();
  const en =
    /\b(who|what|where|when|how|experience|skill|stack|contact|email|phone|hello|hi|project|work|education|born|cv|resume|you)\b/.test(
      q,
    );

  if (/^(halo|hai|hello|hi|hey|pagi|siang|sore|malam)\b/.test(q)) {
    return en
      ? "Hi! Ask me about Baril's experience, tech stack, or how to reach him."
      : "Halo! Ada yang bisa saya bantu soal pengalaman, tech stack, atau kontak Baril?";
  }

  if (/siapa|who are you|who r u|kamu siapa|anda siapa|lu siapa/.test(q)) {
    return en
      ? "I'm Baril Assistant, the personal AI for Baril Yahya, a fullstack web developer from Padang, Indonesia. I can walk you through his portfolio, services, and projects."
      : "Saya Baril Assistant, asisten AI pribadi untuk Baril Yahya, seorang Fullstack Web Developer. Saya siap membantu Anda dengan informasi tentang portofolio, layanan, atau proyek yang ia kerjakan.";
  }

  if (/panel/.test(q)) {
    return en
      ? "Baril Panel is a 2025 hosting-panel platform with separate admin and user dashboards, sales analytics, system settings, and a payment gateway. Stack: Next.js, Node.js, Prisma, Express, Tailwind, MySQL."
      : "Baril Panel (2025) adalah platform jual panel hosting. Ada dashboard admin dan user, analitik penjualan, pengaturan sistem, dan payment gateway. Stack: Next.js, Node.js, Prisma, Express, Tailwind, MySQL.";
  }

  if (/\bapi\b/.test(q)) {
    return en
      ? "Baril API offers free endpoints with clear docs, a responsive frontend, and a backend for requests, access, and data. Stack: Next.js, Tailwind, Express, MySQL, REST."
      : "Baril API menyediakan endpoint gratis plus dokumentasi yang jelas, antarmuka responsif, dan backend untuk request, akses, serta data. Stack: Next.js, Tailwind, Express, MySQL, REST.";
  }

  if (/bot|whatsapp/.test(q)) {
    return en
      ? "From 2024 to 2025 Baril built a WhatsApp bot with games, tools, and automation: message processing, API integrations, and dynamic commands. Stack: Node.js, Baileys, Puppeteer, Express, Canvas."
      : "Tahun 2024–2025 Baril membangun bot WhatsApp dengan game, alat, dan otomasi. Ada pemrosesan pesan, integrasi API, dan perintah dinamis. Stack: Node.js, Baileys, Puppeteer, Express, Canvas.";
  }

  if (/pengalaman|experience|karir|career|kerja|pernah buat|pernah bikin/.test(q)) {
    const lines = jobs.map((job) => `${job.year} · ${job.title} — ${job.company}`).join("; ");
    return en
      ? `Baril's path: ${lines}.`
      : `Jejak kerja Baril: ${lines}.`;
  }

  if (/skill|stack|teknologi|tools|framework|bahasa|react|next|node|mysql/.test(q)) {
    const groups = stackGroups
      .map((group) => `${group.title}: ${group.items.join(", ")}`)
      .join(". ");
    return en
      ? `${groups}. JavaScript is his main language, with 2+ years of experience.`
      : `${groups}. Bahasa utama Baril adalah JavaScript, dengan pengalaman 2+ tahun.`;
  }

  if (/kontak|contact|email|surel|telepon|phone|nomor|hubungi|wa\b/.test(q)) {
    return en
      ? `Email ${profile.email} or WhatsApp ${profile.phone}. The form on this page opens your mail app with the message filled in.`
      : `Email ${profile.email} atau WhatsApp ${profile.phone}. Form di halaman ini juga langsung membuka aplikasi email.`;
  }

  if (/lahir|born|asal|padang|tinggal|domisili/.test(q)) {
    return en
      ? `Baril was born in ${profile.birthplace}.`
      : `Tempat lahir Baril: ${profile.birthplace}.`;
  }

  if (/pendidikan|education|sekolah|kuliah|kampus|gpa|ipk/.test(q)) {
    return en
      ? `Education on this portfolio: ${profile.education}. No GPA is listed.`
      : `Pendidikan yang tercantum: ${profile.education}. IPK tidak dipublikasikan.`;
  }

  if (/cv|resume|lamaran/.test(q)) {
    return en
      ? "Use Download CV on the home section. It saves Baril Yahya's CV as a file you can open or print."
      : "Tombol Download CV di bagian atas mengunduh CV Baril Yahya. File-nya bisa dibuka atau dicetak.";
  }

  if (/proyek|project|karya|portofolio|portfolio|galeri/.test(q)) {
    return en
      ? "The highlighted work is in Experience: Baril Panel, Baril API, and a WhatsApp bot. This page has no separate project gallery."
      : "Karya yang ditonjolkan ada di bagian Experience: Baril Panel, Baril API, dan bot WhatsApp. Halaman ini tidak menampilkan galeri Selected Works.";
  }

  return en
    ? "I only cover Baril's public portfolio — profile, experience, stack, and contact. Try “who are you?” or “how do I contact him?”."
    : "Saya hanya menjawab seputar portofolio publik Baril: profil, pengalaman, tech stack, dan kontak. Coba tanya “kamu siapa?” atau “bagaimana menghubunginya?”.";
}

const greeting =
  "Halo! Saya adalah asisten AI Baril. Ada yang bisa saya bantu terkait portofolio, pengalaman, atau project Baril?";

export function Assistant() {
  const fieldId = useId();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { id: "hello", role: "bot", text: greeting, time: "" },
  ]);
  const scroller = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<number>(0);

  useEffect(() => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === "hello" && !msg.time ? { ...msg, time: stamp() } : msg)),
    );
  }, []);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const node = scroller.current;
    if (!node) return;
    node.scrollTo({ top: node.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function send() {
    const value = text.trim();
    if (!value || typing) return;
    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", text: value, time: stamp() };
    setMessages((prev) => [...prev, userMsg]);
    setText("");
    setTyping(true);
    const reply = answer(value);
    timer.current = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "bot", text: reply, time: stamp() },
      ]);
      setTyping(false);
    }, 700);
  }

  return (
    <>
      {open ? null : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed right-4 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-fg shadow-float transition-transform duration-150 ease-out active:scale-[0.96]"
          aria-label="Buka Baril Assistant"
        >
          <MessageCircle className="size-6" />
          <span className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-mint text-xs font-bold text-fg">
            AI
          </span>
        </button>
      )}

      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-fg/15 backdrop-blur-md"
            aria-label="Tutup asisten"
            onClick={() => setOpen(false)}
          />
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="assistant-title"
            className="chat-panel chat-in relative flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-float"
          >
            <header className="flex items-center gap-3 border-b border-line px-4 py-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-chip text-xs font-bold">
                AI
              </span>
              <div className="min-w-0 flex-1">
                <h2 id="assistant-title" className="text-sm font-bold">
                  Baril Assistant
                </h2>
                <p className="flex items-center gap-1.5 text-xs text-soft">
                  <span className="size-1.5 rounded-full bg-online" />
                  Online
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-chip hover:text-fg"
                aria-label="Tutup"
              >
                <X className="size-5" />
              </button>
            </header>

            <div ref={scroller} className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={msg.role === "user" ? "ml-auto max-w-[85%]" : "mr-auto max-w-[90%]"}
                >
                  <div
                    className={
                      msg.role === "user"
                        ? "rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-sm leading-relaxed text-primary-fg"
                        : "rounded-2xl rounded-bl-md border border-line bg-chip px-3.5 py-2.5 text-sm leading-relaxed text-fg"
                    }
                  >
                    {msg.text}
                  </div>
                  {msg.time ? <p className="mt-1 px-1 text-xs text-muted">{msg.time}</p> : null}
                </div>
              ))}
              {typing ? (
                <div className="mr-auto rounded-2xl rounded-bl-md border border-line bg-chip px-4 py-3">
                  <span className="typing-dots flex gap-1" aria-label="Mengetik">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
              ) : null}
            </div>

            <form
              className="flex items-center gap-2 border-t border-line p-3"
              onSubmit={(event) => {
                event.preventDefault();
                send();
              }}
            >
              <label className="sr-only" htmlFor={fieldId}>
                Pesan untuk Baril Assistant
              </label>
              <input
                id={fieldId}
                ref={inputRef}
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Ask me anything..."
                className="h-11 flex-1 rounded-full border border-line bg-bg px-4 text-sm text-fg outline-none placeholder:text-muted focus:border-fg"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={!text.trim() || typing}
                className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-fg transition-opacity disabled:bg-chip disabled:text-muted"
                aria-label="Kirim"
              >
                <SendHorizontal className="size-4" />
              </button>
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}
