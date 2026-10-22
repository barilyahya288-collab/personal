import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Moon, c as Menu, d as Github, f as Download, h as ArrowRight, i as SendHorizontal, l as Linkedin, m as Clock, o as Monitor, p as CodeXml, r as Sun, s as MessageCircle, t as X, u as Instagram } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CWFV_RoM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profile = {
	brand: "Baril",
	firstName: "Baril",
	fullName: "Baril Yahya",
	phone: "+62 822-8922-6508",
	phoneHref: "tel:+6282289226508",
	whatsapp: "https://wa.me/6282289226508",
	email: "barilyahya28@gmail.com",
	birthplace: "Padang, Indonesia",
	education: "Kerja Bebas",
	hero: "Halo! Saya suka ngoding dan bereksperimen dengan ide-ide baru. Bagi saya, setiap baris kode adalah cara untuk menghadirkan sesuatu yang bermanfaat dan keren di dunia digital.",
	who: "Saya seorang web developer yang berfokus pada menciptakan tampilan dan pengalaman pengguna yang sederhana, cepat, dan fungsional.",
	approach: "Saya mengutamakan clean code, desain responsif, dan pengalaman pengguna yang intuitif dalam setiap proyek yang saya kerjakan."
};
var roles = [
	"Frontend Developer",
	"Fullstack Developer",
	"Bot Developer"
];
var chips = [
	{
		label: "2+ Years of Experience",
		icon: "clock"
	},
	{
		label: "Javascript Main Language",
		icon: "code"
	},
	{
		label: "Fullstack developer",
		icon: "monitor"
	}
];
var jobs = [
	{
		year: "2025",
		title: "Fullstack Web Developer",
		company: "Baril Panel",
		body: "Developed a web platform for selling hosting panels with dedicated admin and user dashboards. Implemented analytics for monitoring sales and system usage, built system settings management, and integrated a payment gateway for automated transactions.",
		tags: [
			"Next.js",
			"Node.js",
			"Prisma",
			"Express.js",
			"Tailwind CSS",
			"MySQL",
			"API Integration"
		]
	},
	{
		year: "2025",
		title: "Fullstack Web Developer",
		company: "Baril API",
		body: "Developed Baril API, a platform that provides developers with easy access to free APIs accompanied by comprehensive documentation. Built a responsive frontend interface and implemented a backend system to handle API requests, user access, and data management.",
		tags: [
			"Next.js",
			"Tailwind CSS",
			"Express.js",
			"MySQL",
			"REST API"
		]
	},
	{
		year: "2024 – 2025",
		title: "Bot Developer",
		company: "WhatsApp Bot Platform",
		body: "Built a multifunctional WhatsApp bot with various features including games, utility tools, and automated services. Implemented message processing, API integrations, and dynamic command handling to create interactive chat-based experiences.",
		tags: [
			"Node.js",
			"Baileys",
			"Puppeteer",
			"Express.js",
			"Canvas",
			"API Integration"
		]
	}
];
var stackGroups = [{
	title: "Frontend Languages & Frameworks",
	body: "The tools I use to build beautiful, responsive, and interactive user interfaces.",
	items: [
		"React",
		"Next.js",
		"Tailwind CSS",
		"TypeScript"
	]
}, {
	title: "Backend Core",
	body: "The foundations of the APIs and services I build for web apps and bots.",
	items: [
		"Node.js",
		"Express.js",
		"MySQL",
		"MongoDB"
	]
}];
var nav = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "contact",
		label: "Contacts"
	}
];
function stamp() {
	const d = /* @__PURE__ */ new Date();
	return `${d.getHours()}.${String(d.getMinutes()).padStart(2, "0")}`;
}
function answer(raw) {
	const q = raw.toLowerCase().trim();
	const en = /\b(who|what|where|when|how|experience|skill|stack|contact|email|phone|hello|hi|project|work|education|born|cv|resume|you)\b/.test(q);
	if (/^(halo|hai|hello|hi|hey|pagi|siang|sore|malam)\b/.test(q)) return en ? "Hi! Ask me about Baril's experience, tech stack, or how to reach him." : "Halo! Ada yang bisa saya bantu soal pengalaman, tech stack, atau kontak Baril?";
	if (/siapa|who are you|who r u|kamu siapa|anda siapa|lu siapa/.test(q)) return en ? "I'm Baril Assistant, the personal AI for Baril Yahya, a fullstack web developer from Padang, Indonesia. I can walk you through his portfolio, services, and projects." : "Saya Baril Assistant, asisten AI pribadi untuk Baril Yahya, seorang Fullstack Web Developer. Saya siap membantu Anda dengan informasi tentang portofolio, layanan, atau proyek yang ia kerjakan.";
	if (/panel/.test(q)) return en ? "Baril Panel is a 2025 hosting-panel platform with separate admin and user dashboards, sales analytics, system settings, and a payment gateway. Stack: Next.js, Node.js, Prisma, Express, Tailwind, MySQL." : "Baril Panel (2025) adalah platform jual panel hosting. Ada dashboard admin dan user, analitik penjualan, pengaturan sistem, dan payment gateway. Stack: Next.js, Node.js, Prisma, Express, Tailwind, MySQL.";
	if (/\bapi\b/.test(q)) return en ? "Baril API offers free endpoints with clear docs, a responsive frontend, and a backend for requests, access, and data. Stack: Next.js, Tailwind, Express, MySQL, REST." : "Baril API menyediakan endpoint gratis plus dokumentasi yang jelas, antarmuka responsif, dan backend untuk request, akses, serta data. Stack: Next.js, Tailwind, Express, MySQL, REST.";
	if (/bot|whatsapp/.test(q)) return en ? "From 2024 to 2025 Baril built a WhatsApp bot with games, tools, and automation: message processing, API integrations, and dynamic commands. Stack: Node.js, Baileys, Puppeteer, Express, Canvas." : "Tahun 2024–2025 Baril membangun bot WhatsApp dengan game, alat, dan otomasi. Ada pemrosesan pesan, integrasi API, dan perintah dinamis. Stack: Node.js, Baileys, Puppeteer, Express, Canvas.";
	if (/pengalaman|experience|karir|career|kerja|pernah buat|pernah bikin/.test(q)) {
		const lines = jobs.map((job) => `${job.year} · ${job.title} — ${job.company}`).join("; ");
		return en ? `Baril's path: ${lines}.` : `Jejak kerja Baril: ${lines}.`;
	}
	if (/skill|stack|teknologi|tools|framework|bahasa|react|next|node|mysql/.test(q)) {
		const groups = stackGroups.map((group) => `${group.title}: ${group.items.join(", ")}`).join(". ");
		return en ? `${groups}. JavaScript is his main language, with 2+ years of experience.` : `${groups}. Bahasa utama Baril adalah JavaScript, dengan pengalaman 2+ tahun.`;
	}
	if (/kontak|contact|email|surel|telepon|phone|nomor|hubungi|wa\b/.test(q)) return en ? `Email ${profile.email} or WhatsApp ${profile.phone}. The form on this page opens your mail app with the message filled in.` : `Email ${profile.email} atau WhatsApp ${profile.phone}. Form di halaman ini juga langsung membuka aplikasi email.`;
	if (/lahir|born|asal|padang|tinggal|domisili/.test(q)) return en ? `Baril was born in ${profile.birthplace}.` : `Tempat lahir Baril: ${profile.birthplace}.`;
	if (/pendidikan|education|sekolah|kuliah|kampus|gpa|ipk/.test(q)) return en ? `Education on this portfolio: ${profile.education}. No GPA is listed.` : `Pendidikan yang tercantum: ${profile.education}. IPK tidak dipublikasikan.`;
	if (/cv|resume|lamaran/.test(q)) return en ? "Use Download CV on the home section. It saves Baril Yahya's CV as a file you can open or print." : "Tombol Download CV di bagian atas mengunduh CV Baril Yahya. File-nya bisa dibuka atau dicetak.";
	if (/proyek|project|karya|portofolio|portfolio|galeri/.test(q)) return en ? "The highlighted work is in Experience: Baril Panel, Baril API, and a WhatsApp bot. This page has no separate project gallery." : "Karya yang ditonjolkan ada di bagian Experience: Baril Panel, Baril API, dan bot WhatsApp. Halaman ini tidak menampilkan galeri Selected Works.";
	return en ? "I only cover Baril's public portfolio — profile, experience, stack, and contact. Try “who are you?” or “how do I contact him?”." : "Saya hanya menjawab seputar portofolio publik Baril: profil, pengalaman, tech stack, dan kontak. Coba tanya “kamu siapa?” atau “bagaimana menghubunginya?”.";
}
var greeting = "Halo! Saya adalah asisten AI Baril. Ada yang bisa saya bantu terkait portofolio, pengalaman, atau project Baril?";
function Assistant() {
	const fieldId = (0, import_react.useId)();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [text, setText] = (0, import_react.useState)("");
	const [typing, setTyping] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([{
		id: "hello",
		role: "bot",
		text: greeting,
		time: ""
	}]);
	const scroller = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const timer = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		setMessages((prev) => prev.map((msg) => msg.id === "hello" && !msg.time ? {
			...msg,
			time: stamp()
		} : msg));
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		inputRef.current?.focus();
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	(0, import_react.useEffect)(() => {
		const node = scroller.current;
		if (!node) return;
		node.scrollTo({
			top: node.scrollHeight,
			behavior: "smooth"
		});
	}, [
		messages,
		typing,
		open
	]);
	(0, import_react.useEffect)(() => () => window.clearTimeout(timer.current), []);
	function send() {
		const value = text.trim();
		if (!value || typing) return;
		const userMsg = {
			id: crypto.randomUUID(),
			role: "user",
			text: value,
			time: stamp()
		};
		setMessages((prev) => [...prev, userMsg]);
		setText("");
		setTyping(true);
		const reply = answer(value);
		timer.current = window.setTimeout(() => {
			setMessages((prev) => [...prev, {
				id: crypto.randomUUID(),
				role: "bot",
				text: reply,
				time: stamp()
			}]);
			setTyping(false);
		}, 700);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [open ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className: "fixed right-4 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-fg shadow-float transition-transform duration-150 ease-out active:scale-[0.96]",
		"aria-label": "Buka Baril Assistant",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-mint text-xs font-bold text-fg",
			children: "AI"
		})]
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-fg/15 backdrop-blur-md",
			"aria-label": "Tutup asisten",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "assistant-title",
			className: "chat-panel chat-in relative flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-float",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center gap-3 border-b border-line px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-full bg-chip text-xs font-bold",
							children: "AI"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "assistant-title",
								className: "text-sm font-bold",
								children: "Baril Assistant"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1.5 text-xs text-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-online" }), "Online"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(false),
							className: "flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-chip hover:text-fg",
							"aria-label": "Tutup",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: scroller,
					className: "flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4",
					children: [messages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: msg.role === "user" ? "ml-auto max-w-[85%]" : "mr-auto max-w-[90%]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: msg.role === "user" ? "rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-sm leading-relaxed text-primary-fg" : "rounded-2xl rounded-bl-md border border-line bg-chip px-3.5 py-2.5 text-sm leading-relaxed text-fg",
							children: msg.text
						}), msg.time ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 px-1 text-xs text-muted",
							children: msg.time
						}) : null]
					}, msg.id)), typing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mr-auto rounded-2xl rounded-bl-md border border-line bg-chip px-4 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "typing-dots flex gap-1",
							"aria-label": "Mengetik",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
							]
						})
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex items-center gap-2 border-t border-line p-3",
					onSubmit: (event) => {
						event.preventDefault();
						send();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "sr-only",
							htmlFor: fieldId,
							children: "Pesan untuk Baril Assistant"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: fieldId,
							ref: inputRef,
							value: text,
							onChange: (event) => setText(event.target.value),
							placeholder: "Ask me anything...",
							className: "h-11 flex-1 rounded-full border border-line bg-bg px-4 text-sm text-fg outline-none placeholder:text-muted focus:border-fg",
							autoComplete: "off"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: !text.trim() || typing,
							className: "flex size-11 items-center justify-center rounded-xl bg-primary text-primary-fg transition-opacity disabled:bg-chip disabled:text-muted",
							"aria-label": "Kirim",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SendHorizontal, { className: "size-4" })
						})
					]
				})
			]
		})]
	}) : null] });
}
function cn(...parts) {
	return parts.filter(Boolean).join(" ");
}
function scrollToId(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function toggleTheme() {
	const next = !document.documentElement.classList.contains("dark");
	document.documentElement.classList.toggle("dark", next);
	localStorage.setItem("baril-theme", next ? "dark" : "light");
}
function Loader({ onDone }) {
	const doneRef = (0, import_react.useRef)(onDone);
	doneRef.current = onDone;
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [leaving, setLeaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const dur = reduce ? 280 : 1650;
		const start = performance.now();
		let frame = 0;
		let timer = 0;
		let cancelled = false;
		const tick = (now) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed inset-0 z-50 flex items-center justify-center bg-bg transition-opacity duration-500", leaving && "opacity-0"),
		role: "status",
		"aria-live": "polite",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "loader-glow",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-4xl font-bold tracking-tight",
					children: profile.brand
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs font-medium tracking-brand text-muted uppercase",
					children: "Portfolio Loading"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-4 h-px w-44 bg-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full origin-left bg-fg",
						style: { transform: `scaleX(${progress})` }
					})
				})
			]
		})]
	});
}
function TypeRole({ active }) {
	const [text, setText] = (0, import_react.useState)(roles[0]);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "min-h-9 text-2xl font-bold tracking-tight md:text-3xl",
		children: [
			text,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "caret",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Peran yang sedang diketik"
			})
		]
	});
}
function SiteNav({ active, menu, setMenu }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-3 z-40 px-3 md:top-4 md:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mx-auto max-w-6xl border border-line bg-surface/90 shadow-float backdrop-blur-xl", menu ? "rounded-3xl" : "rounded-full"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 px-4 py-2.5 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#home",
						className: "text-sm font-extrabold tracking-tight",
						children: "PORTFOLIO."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						"aria-label": "Utama",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${item.id}`,
							"aria-current": active === item.id ? "true" : void 0,
							className: cn("rounded-full px-3 py-2 text-sm transition-colors", active === item.id ? "font-bold text-fg" : "font-medium text-muted hover:text-fg"),
							children: item.label
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: toggleTheme,
							className: "flex size-10 items-center justify-center rounded-full text-fg transition-colors hover:bg-chip",
							"aria-label": "Ganti tema terang atau gelap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4 dark:hidden" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "hidden size-4 dark:block" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex size-10 items-center justify-center rounded-full text-fg md:hidden",
							"aria-expanded": menu,
							"aria-label": menu ? "Tutup menu" : "Buka menu",
							onClick: () => setMenu(!menu),
							children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})]
					})
				]
			}), menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1 px-3 pb-3 md:hidden",
				"aria-label": "Utama",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${item.id}`,
					"aria-current": active === item.id ? "true" : void 0,
					onClick: () => setMenu(false),
					className: cn("rounded-2xl px-4 py-3 text-sm", active === item.id ? "bg-chip font-bold" : "font-medium text-soft"),
					children: item.label
				}, item.id))
			}) : null]
		})
	});
}
function ChipIcon({ name }) {
	if (name === "clock") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" });
	if (name === "code") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-4" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-4" });
}
function Hero({ active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		className: "scroll-mt-28 px-5 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-5xl font-extrabold tracking-tight md:text-6xl",
					children: ["Hi, I'm ", profile.firstName]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeRole, { active })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-sm leading-relaxed text-soft md:text-base",
					children: profile.hero
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => scrollToId("experience"),
						className: "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-fg transition-transform duration-150 ease-out active:scale-[0.96]",
						children: ["Explore Work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/cv.html",
						download: "Baril-Yahya-CV.html",
						className: "inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 text-sm font-semibold transition-transform duration-150 ease-out active:scale-[0.96]",
						children: ["Download CV", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 border-t border-line pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-brand text-muted uppercase",
						children: "Connect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex gap-2",
						children: [
							{
								label: "Instagram",
								Icon: Instagram
							},
							{
								label: "GitHub",
								Icon: Github
							},
							{
								label: "LinkedIn",
								Icon: Linkedin
							}
						].map(({ label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							"aria-label": `${label}, buka kontak`,
							className: "flex size-11 items-center justify-center rounded-xl border border-line bg-surface transition-colors hover:bg-chip",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}, label))
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-sm lg:max-w-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-fit",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-64 overflow-hidden rounded-full shadow-float ring-8 ring-surface sm:size-80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/portrait.jpg",
							alt: "Potret bergaya Baril Yahya, hitam putih kontras tinggi",
							width: 800,
							height: 800,
							className: "size-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "relative z-10 mx-auto -mt-10 flex w-full max-w-xs flex-col gap-3 sm:-mt-16 lg:absolute lg:bottom-2 lg:left-0 lg:mx-0 lg:mt-0 lg:w-64 lg:-translate-x-16",
						children: chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 rounded-2xl border border-line bg-surface px-3 py-2.5 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipIcon, { name: chip.icon })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: chip.label
							})]
						}, chip.label))
					})]
				})
			})]
		})
	});
}
function Detail({ label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-semibold tracking-brand text-muted uppercase",
		children: label
	}), href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "mt-1 inline-block font-bold underline decoration-line underline-offset-4",
		children: value
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 font-bold",
		children: value
	})] });
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-28 px-5 py-16 md:px-8 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 text-center md:mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-brand text-muted uppercase",
					children: "Discover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-extrabold tracking-tight md:text-5xl",
					children: "About Me"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal grid items-start gap-10 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl shadow-float lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/portrait.jpg",
						alt: "",
						width: 800,
						height: 800,
						className: "about-frame w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "border-b border-line pb-3 text-lg font-bold",
							children: "Who Am I"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-soft",
							children: profile.who
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "border-b border-line pb-3 text-lg font-bold",
							children: "My Approach"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-soft",
							children: profile.approach
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "border-l-4 border-fg pl-3 text-lg font-bold",
							children: "Personal Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
									label: "Name",
									value: profile.fullName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
									label: "Place of Birth",
									value: profile.birthplace
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
									label: "Phone",
									value: profile.phone,
									href: profile.phoneHref
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
									label: "Education",
									value: profile.education
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
									label: "Email",
									value: profile.email,
									href: `mailto:${profile.email}`
								})
							]
						})]
					})]
				})]
			})]
		})
	});
}
function Marquee() {
	const lineA = "Hello I'm Baril";
	const lineB = "Fullstack Web Developer";
	const row = (text) => Array.from({ length: 8 }, () => text);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "marquee overflow-hidden border-y border-line py-8",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track gap-10 py-1",
			children: [...row(lineA), ...row(lineA)].map((text, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-4xl font-extrabold tracking-tight text-faint md:text-6xl",
				children: text
			}, `a-${index}`))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track reverse mt-2 gap-10",
			children: [...row(lineB), ...row(lineB)].map((text, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-4xl font-extrabold tracking-tight text-faint md:text-6xl",
				children: text
			}, `b-${index}`))
		})]
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "scroll-mt-28 px-5 py-16 md:px-8 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-brand text-muted uppercase",
					children: "Career Path"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-extrabold tracking-tight md:text-5xl",
					children: "Work Experience"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "timeline mx-auto max-w-5xl",
				children: jobs.map((job, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("timeline-item", index % 2 === 0 ? "is-right" : "is-left"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "timeline-dot",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-3xl border border-line bg-surface px-6 py-7 text-center shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: job.year
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-2xl font-extrabold tracking-tight",
								children: job.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs font-semibold tracking-brand text-muted uppercase",
								children: job.company
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-soft",
								children: job.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 flex flex-wrap justify-center gap-2",
								children: job.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-full bg-chip px-3 py-1 text-xs font-semibold tracking-wide text-soft uppercase",
									children: tag
								}, tag))
							})
						]
					})]
				}, job.company))
			})]
		})
	});
}
function TechGlyph({ name }) {
	const common = "size-8 text-soft";
	if (name === "React") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: common,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "2.1",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "12",
				cy: "12",
				rx: "9.5",
				ry: "3.8",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "12",
				cy: "12",
				rx: "9.5",
				ry: "3.8",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.3",
				transform: "rotate(60 12 12)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "12",
				cy: "12",
				rx: "9.5",
				ry: "3.8",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.3",
				transform: "rotate(120 12 12)"
			})
		]
	});
	if (name === "Next.js") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: common,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "9",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8.2 16.2V7.8L15.8 16.2V7.8",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinejoin: "round"
		})]
	});
	if (name === "Tailwind CSS") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: common,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 10c2-4 4-4 6 0 1 2 2 2 3 0 2-4 4-4 6 0",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 15c2-4 4-4 6 0 1 2 2 2 3 0 2-4 4-4 6 0",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})]
	});
	if (name === "TypeScript") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: common,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "3",
			width: "18",
			height: "18",
			rx: "3",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 10h8M12 10v7",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})]
	});
	if (name === "Node.js") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: common,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5z",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 8.5v7M9.2 10.2 12 12l2.8-1.8",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4",
			strokeLinecap: "round"
		})]
	});
	if (name === "Express.js") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: common,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "9",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 15.2 10.2 8.8h.1L12.6 15M9 13h3.1M13.6 15.2l2.2-6.4h.1l2.2 6.4M14.4 13h3",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.2",
			strokeLinecap: "round"
		})]
	});
	if (name === "MySQL") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: common,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "12",
				cy: "7",
				rx: "7",
				ry: "3",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M5 7v10c0 1.7 3.1 3 7 3s7-1.3 7-3V7",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: common,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 3c2.2 3.6 5 5.6 5 9.2A5 5 0 1 1 7 12.2C7 8.6 9.8 6.6 12 3z",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 21V10",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4",
			strokeLinecap: "round"
		})]
	});
}
function Stack() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stack",
		className: "scroll-mt-28 px-5 py-8 md:px-8 md:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-brand text-muted uppercase",
					children: "Skills & Tools"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-extrabold tracking-tight md:text-5xl",
					children: "My Tech Stack"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-12",
				children: stackGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal grid items-center gap-6 lg:grid-cols-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-extrabold tracking-tight",
						children: group.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-soft",
						children: group.body
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-3",
						children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-surface px-3 py-6 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechGlyph, { name: item }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: item
							})]
						}, item))
					})]
				}, group.title))
			})]
		})
	});
}
var fieldClass = "mt-2 h-12 w-full rounded-xl border border-line bg-chip px-4 text-sm text-fg outline-none transition-colors placeholder:text-muted focus:border-fg";
function Contact() {
	const nameId = (0, import_react.useId)();
	const emailId = (0, import_react.useId)();
	const messageId = (0, import_react.useId)();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(event) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-28 px-5 py-16 md:px-8 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-brand text-muted uppercase",
					children: "Get in Touch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-extrabold tracking-tight md:text-5xl",
					children: "Contact Me"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "rounded-3xl border border-line bg-surface p-6 shadow-float md:p-8",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-extrabold tracking-tight",
						children: "Send an Email directly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: nameId,
							className: "text-xs font-semibold tracking-brand text-muted uppercase",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: nameId,
							value: name,
							onChange: (event) => setName(event.target.value),
							placeholder: "John Doe",
							autoComplete: "name",
							className: fieldClass
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: emailId,
							className: "text-xs font-semibold tracking-brand text-muted uppercase",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: emailId,
							type: "email",
							value: email,
							onChange: (event) => setEmail(event.target.value),
							placeholder: "johndoe@example.com",
							autoComplete: "email",
							className: fieldClass
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: messageId,
							className: "text-xs font-semibold tracking-brand text-muted uppercase",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: messageId,
							value: message,
							onChange: (event) => setMessage(event.target.value),
							placeholder: "Your message here...",
							rows: 5,
							className: "mt-2 w-full resize-y rounded-xl border border-line bg-chip px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted focus:border-fg"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm font-medium text-soft",
						children: error
					}) : null,
					sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm font-medium text-soft",
						children: [
							"Aplikasi email kamu terbuka dengan pesan untuk ",
							profile.email,
							"."
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-6 h-12 w-full rounded-xl bg-primary text-sm font-semibold tracking-wide text-primary-fg uppercase transition-transform duration-150 ease-out active:scale-[0.96]",
						children: "Send Message"
					})
				]
			})]
		})
	});
}
function PortfolioPage() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			ready ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, { onDone: () => setReady(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {
				active,
				menu,
				setMenu
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { active: ready }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line px-5 py-8 text-center text-sm text-muted",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					profile.fullName,
					". Fullstack web developer, Padang."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Assistant, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioPage, {});
}
//#endregion
export { Home as component };
