import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  Sparkles,
  Rocket,
  Award,
  Search,
  Star,
  ThumbsUp,
} from "lucide-react";
import profileImg from "../assets/adithya.png";
import cert1 from "../assets/certificates/digital-edge-101.jpeg.asset.json";
import cert2 from "../assets/certificates/programming-c.jpeg.asset.json";
import cert3 from "../assets/certificates/mybharat-quiz.jpeg.asset.json";
import cert4 from "../assets/certificates/algorithmic-python.jpeg.asset.json";
import cert5 from "../assets/certificates/git-gitlab.jpeg.asset.json";
import cert6 from "../assets/certificates/think-a-thon.jpeg.asset.json";
import cert7 from "../assets/certificates/code-to-cloud.jpeg.asset.json";
import cert8 from "../assets/certificates/yip-recognition.jpeg.asset.json";
import cert9 from "../assets/certificates/yip-appreciation.jpeg.asset.json";
import cert10 from "../assets/certificates/c-training.jpeg.asset.json";
import efsetB2 from "../assets/certificates/efset-b2.jpeg.asset.json";
import efsetC1 from "../assets/certificates/efset-c1.jpeg.asset.json";

export const EMAIL = "adithyabinesh07@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/adithya-binesh-631270388";
export const GITHUB = "https://github.com/Adithya-Binesh-007";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Achievements", to: "/achievements" },
  { label: "Certificates", to: "/certificates" },
  { label: "Contact", to: "/contact" },
] as const;

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.22 300 / 0.6), transparent 70%)" }}
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.52 0.24 295 / 0.6), transparent 70%)" }}
        animate={{ x: [0, -60, 0], y: [0, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.75 0.18 320 / 0.5), transparent 70%)" }}
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60 shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight">
          Adithya<span className="text-primary">.</span>
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className={`relative text-sm font-medium transition-colors hover:text-foreground after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:bg-primary after:transition-[width] ${
                    active ? "text-foreground after:w-full" : "text-muted-foreground after:w-0"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          className="md:hidden rounded-md p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden border-t border-border/60 backdrop-blur-xl bg-background/90"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}

const HEADLINES = ["I build AI-powered tools for learning and productivity"];

function TypingHeadline() {
  const text = HEADLINES[0];
  const [shown, setShown] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, [text]);
  return (
    <span>
      {shown}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] -mb-1 bg-primary animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Available for new projects
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
              Adithya Binesh
            </span>
          </h1>

          <h2 className="mt-5 font-display text-2xl font-semibold text-muted-foreground sm:text-3xl min-h-[3.5em] sm:min-h-[2.5em]">
            <TypingHeadline />
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Full-Stack Developer (Learning &amp; Building) — CSE student at Vidya Academy of
            Science and Technology, shipping AI projects like FocusAI and Papryx AI.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
              style={{ background: "var(--gradient-primary)" }}
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-background/40 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur transition-colors hover:border-primary/60"
            >
              Contact
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-4"
          >
            <SocialIcon href={`mailto:${EMAIL}`} label="Email">
              <Mail className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={LINKEDIN} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={GITHUB} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialIcon>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 mx-auto flex justify-center lg:order-2"
        >
          <div className="relative">
            <motion.div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-60"
              style={{ background: "var(--gradient-primary)" }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={profileImg}
              alt="Adithya Binesh"
              className="relative z-10 w-[280px] sm:w-[360px] lg:w-[440px] drop-shadow-2xl"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-110"
      style={{ background: "var(--gradient-primary)" }}
    >
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <Reveal>
      <div className="mb-14 text-center">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</div>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        {description && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{description}</p>}
      </div>
    </Reveal>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section className="relative pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionTitle eyebrow="About" title="A student. A builder. A learner." />
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur-xl shadow-[var(--shadow-soft)] sm:p-12">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
            <p className="relative text-lg leading-relaxed text-foreground/90 sm:text-xl">
              I'm an aspiring <span className="font-semibold text-primary">Full-Stack Developer</span> and a Computer Science Engineering student at{" "}
              <span className="font-semibold">Vidya Academy of Science and Technology</span>. I love
              turning ideas into real, useful products — currently building AI-powered tools like{" "}
              <span className="font-semibold text-primary">FocusAI</span> and{" "}
              <span className="font-semibold text-primary">Papryx AI</span>. I learn fast, ship
              often, and care about solving real problems.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              {["React", "TypeScript", "TanStack", "AI / LLMs", "Tailwind", "Node.js", "Python"].map((t) => (
                <span key={t} className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    name: "FocusAI",
    tag: "AI Study Assistant",
    description: "A mini ChatGPT-like tool designed to help students focus and study effectively.",
    link: "https://focusai-study-suite.vercel.app/",
    cta: "View Project",
  },
  {
    name: "Papryx AI",
    tag: "Question Paper Generator",
    description: "An AI-powered tool that generates question papers automatically — already reaching real users via Google Search.",
    link: "https://papryx-ai.lovable.app/",
    cta: "View Project",
  },
];

export function Projects() {
  return (
    <section className="relative pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle eyebrow="Projects" title="Things I've built" description="Real shipped projects, not concepts." />
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="group relative block h-full overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur-xl shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-glow)]"
              >
                <div className="relative">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">{p.tag}</div>
                  <h3 className="font-display text-3xl font-bold">{p.name}</h3>
                  <p className="mt-4 text-muted-foreground">{p.description}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => `${Math.floor(v)}${suffix}`);
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

const STATS = [
  { icon: Rocket, value: 2, suffix: "", label: "AI Projects Built", note: "FocusAI & Papryx AI" },
  { icon: Search, value: 10, suffix: "+", label: "Google Search Clicks", note: "Papryx AI · last 28 days" },
];

export function Achievements() {
  return (
    <section className="relative pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle eyebrow="Achievements" title="Milestones along the way" description="Small wins that keep the momentum going." />

        <div className="grid gap-6 md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur-xl shadow-[var(--shadow-soft)]">
                <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-5xl font-bold text-foreground">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 font-semibold">{s.label}</div>
                <div className="text-sm text-muted-foreground">{s.note}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-8 backdrop-blur-xl shadow-[var(--shadow-soft)] sm:p-12">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
                  <GoogleLogo />
                </div>
                <h3 className="font-display text-3xl font-bold sm:text-4xl">Google Search Impact</h3>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  Papryx AI reached <span className="font-semibold text-foreground">10 clicks</span>{" "}
                  from Google Search in the past 28 days (as of Jun 14, 2026) — real users discovering it organically.
                </p>
                <a
                  href="https://papryx-ai.lovable.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-100/70 px-4 py-2 text-sm font-medium text-amber-900 ring-1 ring-amber-300/60 transition hover:bg-amber-100"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">P</span>
                  papryx-ai.lovable.app
                </a>
              </div>
              <ImpactBadge />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GoogleLogo() {
  return (
    <span className="font-display text-2xl font-semibold">
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}

function ImpactBadge() {
  return (
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative mx-auto h-52 w-52">
      <Sparkle className="absolute -top-2 left-6 text-amber-300" />
      <Sparkle className="absolute top-4 -right-2 text-amber-400" size={14} />
      <ThumbsUp className="absolute -left-3 top-12 h-5 w-5 text-amber-300" />
      <ThumbsUp className="absolute -right-4 bottom-12 h-5 w-5 text-amber-300" />
      <Sparkle className="absolute -bottom-2 left-10 text-amber-400" />
      <div className="relative grid h-full w-full place-items-center">
        <div
          className="grid h-44 w-44 place-items-center text-amber-900"
          style={{
            clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
            background: "linear-gradient(135deg, #f5c84a, #eab308)",
            boxShadow: "0 20px 50px -15px rgba(234,179,8,0.55)",
          }}
        >
          <div className="grid h-28 w-28 place-items-center rounded-full bg-white">
            <div className="text-center">
              <Star className="mx-auto mb-1 h-4 w-4 fill-amber-500 text-amber-500" />
              <div className="font-display text-3xl font-bold text-sky-600">10</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Sparkle({ className = "", size = 16 }: { className?: string; size?: number }) {
  return (
    <motion.div className={className} animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
      <Sparkles style={{ width: size, height: size }} />
    </motion.div>
  );
}

const CERTIFICATES = [
  { src: efsetC1.url, title: "EF SET English Certificate — C1 Advanced", issuer: "EF Standard English Test", date: "Jun 2026" },
  { src: efsetB2.url, title: "EF SET English Certificate — B2 Upper Intermediate", issuer: "EF Standard English Test", date: "May 2026" },
  { src: cert1.url, title: "Digital Edge 101", issuer: "FutureSkills Prime · NASSCOM", date: "Apr 2026" },
  { src: cert8.url, title: "Young Innovators Programme 8.0", issuer: "K-DISC, Govt. of Kerala", date: "Dec 2025" },
  { src: cert9.url, title: "Voice of Stakeholder Training", issuer: "K-DISC · YIP 8.0", date: "Dec 2025" },
  { src: cert4.url, title: "Algorithmic Thinking with Python", issuer: "CodeTantra", date: "Dec 2025" },
  { src: cert2.url, title: "Programming in C — GXEST204", issuer: "CodeTantra", date: "May 2026" },
  { src: cert10.url, title: "C Training", issuer: "Spoken Tutorial, IIT Bombay", date: "Oct 2025" },
  { src: cert5.url, title: "Git and GitLab", issuer: "LearnTube.ai", date: "Oct 2025" },
  { src: cert7.url, title: "Code to Cloud Workshop", issuer: "Synnefo Solutions", date: "Sep 2025" },
  { src: cert6.url, title: "Think-A-Thon", issuer: "Jyothi Engineering College · TinkerHub", date: "Jan 2026" },
  { src: cert3.url, title: "MY Bharat Budget Quest 2026", issuer: "Ministry of Youth Affairs & Sports", date: "Feb 2026" },
];

export function Certificates() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="relative pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle eyebrow="Certificates" title="Learning, recognized" description="A growing collection of certifications from courses, workshops, and programs." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              <motion.button
                onClick={() => setActive(i)}
                whileHover={{ y: -6 }}
                className="group block w-full overflow-hidden rounded-3xl border border-border/60 bg-card/60 text-left backdrop-blur-xl shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-glow)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img src={c.src} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <div className="font-display text-lg font-semibold leading-tight">{c.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    <Award className="h-3.5 w-3.5" />
                    {c.date}
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-4 backdrop-blur-xl sm:p-8"
          onClick={() => setActive(null)}
        >
          <motion.img
            key={active}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={CERTIFICATES[active].src}
            alt={CERTIFICATES[active].title}
            className="max-h-[90vh] max-w-6xl rounded-2xl border border-border/60 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}

export function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Linkedin, label: "LinkedIn", value: "adithya-binesh", href: LINKEDIN },
    { icon: Github, label: "GitHub", value: "Adithya-Binesh-007", href: GITHUB },
  ];
  return (
    <section className="relative pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionTitle eyebrow="Contact" title="Let's build something together" description="The fastest way to reach me is below." />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.1}>
              <motion.a
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur-xl shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-glow)]"
              >
                <div className="mb-6 inline-grid h-12 w-12 place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{it.label}</div>
                <div className="mt-2 break-all font-display text-xl font-semibold">{it.value}</div>
                <div className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Reach out
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-10">
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Adithya Binesh. Built with care.</div>
        <div className="flex gap-3">
          <SocialIcon href={`mailto:${EMAIL}`} label="Email">
            <Mail className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href={LINKEDIN} label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href={GITHUB} label="GitHub">
            <Github className="h-4 w-4" />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}
