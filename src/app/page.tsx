import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { homeFaqs, competitorFaqs } from "@/lib/faqs";
import {
  Users,
  QrCode,
  BellRing,
  RefreshCcw,
  CheckCircle2,
  Shield,
  Smartphone,
  Clock,
  Zap,
  ArrowRight,
  ChevronDown,
  Star,
  Quote,
  Phone,
  MessageCircle,
  TrendingDown,
  LayoutGrid,
  BadgeCheck,
  X,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.tagline} | ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: `${siteConfig.tagline} | ${siteConfig.name}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Compare", href: "#compare" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// ─── FEATURES ────────────────────────────────────────────────────────────────
const features = [
  {
    icon: QrCode,
    title: "QR Check-in",
    description:
      "One code at the front desk. Members scan and enter their phone number — no app, no account, no friction. Check-in logs instantly.",
    color: "#2767d7",
  },
  {
    icon: BellRing,
    title: "Absentee Nudges",
    description:
      "Members who haven't shown up in 5+ days surface automatically, sorted by longest absence. One tap to call or WhatsApp.",
    color: "#e67e22",
  },
  {
    icon: RefreshCcw,
    title: "Renewal Dashboard",
    description:
      "Expiring, expired, and active members in one view. Mark a payment and the expiry date updates itself — no manual work.",
    color: "#27ae60",
  },
  {
    icon: Users,
    title: "Member Management",
    description:
      "Add members in seconds. Search the whole roster from your phone by name or number. Track plans, join dates, and status.",
    color: "#8e44ad",
  },
  {
    icon: CheckCircle2,
    title: "Check-in Log",
    description:
      "A timestamped record of every entry. 'I did come in on Tuesday' disputes settle in a second.",
    color: "#c0392b",
  },
  {
    icon: Shield,
    title: "Data Isolation",
    description:
      "Every gym's members, check-ins, and payments are kept completely separate. Nobody else can see yours.",
    color: "#16a085",
  },
];

// ─── HOW IT WORKS ────────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Add your members",
    description:
      "Name, phone number, plan, join date. Takes about as long as writing one line in the register.",
  },
  {
    number: "02",
    title: "Print your QR code",
    description:
      "One code generated for your gym. Stick it at the front desk or the door. That's the only hardware you need.",
  },
  {
    number: "03",
    title: "Let it run itself",
    description:
      "Members scan in with their phone number. You get absentee alerts and renewal reminders without asking for anything.",
  },
];

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Owner, Fitness First — Belagavi",
    text: "I was tracking renewals on a whiteboard. Members would expire and I'd realise a month later. GymFlow flags them before they even think about leaving.",
    rating: 5,
  },
  {
    name: "Sneha Patil",
    role: "Owner, Core Studio — Hubli",
    text: "The QR check-in took 5 minutes to set up and every single member uses it without being told. No app to download, no friction. That changed everything.",
    rating: 5,
  },
  {
    name: "Amit Shetty",
    role: "Owner, Iron House Gym — Belagavi",
    text: "I get WhatsApp alerts for members who miss 5 days. I've recovered at least 8 members in 3 months who would have just drifted away quietly.",
    rating: 5,
  },
];

// ─── COMPETITOR COMPARISON ───────────────────────────────────────────────────
// Full detailed competitor data
const competitors = [
  {
    name: "GymFlow",
    price: "₹499/mo",
    priceNote: "≤50 members",
    pricePro: "₹999/mo",
    priceProNote: "≤100 members",
    priceMax: "₹1,999/mo",
    priceMaxNote: "Unlimited members",
    memberCap: "50 / 100 / Unlimited",
    qrCheckin: true,
    noAppRequired: true,
    absenteeAlerts: true,
    renewalDashboard: true,
    whatsappReminders: true,
    memberManagement: true,
    checkinLog: true,
    dataIsolation: true,
    biometric: false,
    upiPayments: false,
    multiBranch: false,
    freeTrial: "1 month — no card",
    builtFor: "India",
    highlight: true,
    badge: "Best Value",
  },
  {
    name: "GymForce",
    price: "₹833/mo",
    priceNote: "~₹9,998/yr, unlimited members",
    memberCap: "Unlimited",
    qrCheckin: false,
    noAppRequired: false,
    absenteeAlerts: false,
    renewalDashboard: false,
    whatsappReminders: true,
    memberManagement: true,
    checkinLog: true,
    dataIsolation: true,
    biometric: true,
    upiPayments: false,
    multiBranch: "Pro only",
    freeTrial: "Not listed",
    builtFor: "India",
    highlight: false,
  },
  {
    name: "ManageYourGym",
    price: "₹1,499/mo",
    priceNote: "≤150 members",
    memberCap: "150",
    qrCheckin: false,
    noAppRequired: false,
    absenteeAlerts: false,
    renewalDashboard: false,
    whatsappReminders: true,
    memberManagement: true,
    checkinLog: true,
    dataIsolation: true,
    biometric: false,
    upiPayments: true,
    multiBranch: false,
    freeTrial: "14 days",
    builtFor: "India",
    highlight: false,
  },
  {
    name: "Okfit",
    price: "₹500–₹3,000/mo",
    priceNote: "4 plans, priced by tier",
    memberCap: "Not listed",
    qrCheckin: false,
    noAppRequired: false,
    absenteeAlerts: false,
    renewalDashboard: false,
    whatsappReminders: true,
    memberManagement: true,
    checkinLog: true,
    dataIsolation: true,
    biometric: true,
    upiPayments: true,
    multiBranch: "Not confirmed",
    freeTrial: "7 days",
    builtFor: "India",
    highlight: false,
  },
  {
    name: "Akton",
    price: "₹129/mo",
    priceNote: "flat, unlimited members",
    memberCap: "Unlimited",
    qrCheckin: false,
    noAppRequired: false,
    absenteeAlerts: false,
    renewalDashboard: false,
    whatsappReminders: "Not confirmed",
    memberManagement: true,
    checkinLog: "Staff only",
    dataIsolation: false,
    biometric: false,
    upiPayments: false,
    multiBranch: false,
    freeTrial: "—",
    builtFor: "India",
    highlight: false,
  },
  {
    name: "Mindbody",
    price: "$99/mo+",
    priceNote: "~₹9,600/mo, per location",
    memberCap: "Scales with plan",
    qrCheckin: false,
    noAppRequired: false,
    absenteeAlerts: false,
    renewalDashboard: true,
    whatsappReminders: "Not on pricing page",
    memberManagement: true,
    checkinLog: true,
    dataIsolation: true,
    biometric: false,
    upiPayments: true,
    multiBranch: true,
    freeTrial: "Demo only",
    builtFor: "US / Global",
    highlight: false,
  },
  {
    name: "Zen Planner",
    price: "$99–$229/mo",
    priceNote: "~₹9,600–₹22,000/mo",
    memberCap: "Tiered by member count",
    qrCheckin: false,
    noAppRequired: false,
    absenteeAlerts: false,
    renewalDashboard: true,
    whatsappReminders: false,
    memberManagement: true,
    checkinLog: true,
    dataIsolation: true,
    biometric: false,
    upiPayments: true,
    multiBranch: true,
    freeTrial: "—",
    builtFor: "US / Global",
    highlight: false,
  },
];

// ─── PRICING TIERS ───────────────────────────────────────────────────────────
const pricingPlans = [
  {
    name: "Starter",
    price: "₹499",
    period: "/month",
    members: "≤ 50 members",
    description: "For small gyms getting started with digital management.",
    cta: "Start Free Trial",
    highlight: false,
    features: [
      "QR check-in (no app needed)",
      "Member management",
      "Renewal dashboard",
      "Absentee nudges (5+ days)",
      "Check-in log",
      "WhatsApp reminders",
      "1-month free trial",
      "No card required",
    ],
    missing: [
      "Biometric integration",
      "UPI / online payments",
      "Multi-branch support",
    ],
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    members: "≤ 100 members",
    description: "For growing gyms that need more capacity and full automation.",
    cta: "Start Free Trial",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Up to 100 members",
      "Priority support",
      "Full renewal automation",
      "Extended absentee tracking",
      "WhatsApp + call one-tap",
      "1-month free trial",
      "No card required",
    ],
    missing: [
      "Biometric integration",
      "UPI / online payments",
      "Multi-branch support",
    ],
  },
  {
    name: "Unlimited",
    price: "₹1,999",
    period: "/month",
    members: "Unlimited members",
    description: "For established gyms ready to run completely on autopilot.",
    cta: "Start Free Trial",
    highlight: false,
    features: [
      "Everything in Pro",
      "Unlimited members",
      "Multi-branch ready (roadmap)",
      "Advanced renewal reports",
      "Custom reminders",
      "Priority onboarding support",
      "1-month free trial",
      "No card required",
    ],
    missing: [
      "Biometric integration",
      "UPI / online payments",
    ],
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
function CheckCell({ value }: { value: boolean | string | undefined }) {
  if (value === true)
    return <Check className="h-4 w-4 mx-auto text-green-600" />;
  if (value === false)
    return <X className="h-3.5 w-3.5 mx-auto text-red-400" />;
  return <span className="text-xs text-slate-400">{value}</span>;
}

function FeatureRow({
  label,
  competitors,
  icon: Icon,
}: {
  label: string;
  competitors: (boolean | string | undefined)[];
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
      <td className="py-3 pr-4 pl-4 text-sm font-medium text-slate-700">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-3.5 w-3.5 text-slate-400" />}
          {label}
        </div>
      </td>
      {competitors.map((val, i) => (
        <td
          key={i}
          className={`py-3 px-3 text-center ${i === 0 ? "bg-green-50/60" : ""}`}
        >
          <CheckCell value={val} />
        </td>
      ))}
    </tr>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-xl border border-slate-200 bg-white shadow-soft">
      <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold text-[#0d2247] list-none">
        <span>{question}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
      </summary>
      <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-600">
        {answer}
      </div>
    </details>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ══════════ NAVBAR ══════════ */}
      <header className="bg-nav-gradient px-4 py-3 sm:px-6 sm:py-4 sticky top-0 z-50 shadow-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
              <Zap className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight sm:text-xl">
              GymFlow
            </span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#pricing"
            className="btn-lift rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2767d7] shadow-md"
          >
            Get Started Free
          </a>
        </nav>
      </header>

      <main className="flex flex-col">
        {/* ══════════ HERO ══════════ */}
        <section id="home" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f8ff] px-4 py-1.5 text-xs font-medium text-[#2767d7] ring-1 ring-[#2767d7]/15">
                <BadgeCheck className="h-3 w-3 fill-[#2767d7] text-white" />
                Built for Indian Gym Owners
              </span>
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#0d2247] sm:text-4xl lg:text-5xl">
              Run your gym,
              <br />
              not your register.
            </h1>
            <p className="mt-5 text-base text-[#6279a4] sm:text-lg">
              Track members, catch absentees before they quit, and never miss a
              renewal again — from one dashboard your front desk can actually
              use.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="btn-lift flex items-center gap-2 rounded-full bg-[#2767d7] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2767d7]/30"
              >
                Start Free — No Card
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="btn-lift rounded-full border-2 border-[#2767d7]/20 px-7 py-3 text-sm font-semibold text-[#2767d7]"
              >
                See How it Works
              </a>
            </div>
            {/* Social proof stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { value: "< 5 min", label: "Setup time" },
                { value: "0", label: "App downloads needed" },
                { value: "1 month", label: "Free trial" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xl font-bold text-[#2767d7] sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ FEATURES ══════════ */}
        <section
          id="features"
          className="bg-[#f5f8ff] px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2767d7]">
                Everything you need
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0d2247] sm:text-3xl">
                Built around the three things that actually cost you members
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Forgotten renewals. Quiet dropouts. A register nobody can read.
                GymFlow solves all three.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="card-lift rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${f.color}18` }}
                  >
                    <f.icon
                      className="h-6 w-6"
                      style={{ color: f.color }}
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#0d2247]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6279a4]">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ HOW IT WORKS ══════════ */}
        <section
          id="how-it-works"
          className="bg-white px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2767d7]">
                Three steps. Then you're done.
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0d2247] sm:text-3xl">
                Set up in minutes, runs itself forever
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.number} className="relative text-center">
                  {i < steps.length - 1 && (
                    <div className="absolute -right-3 top-8 hidden text-slate-300 md:block">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2767d7] text-xl font-bold text-white shadow-lg shadow-[#2767d7]/30">
                    {s.number}
                  </div>
                  <h3 className="text-base font-bold text-[#0d2247]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ TESTIMONIALS ══════════ */}
        <section className="bg-[#f5f8ff] px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2767d7]">
                Real gyms. Real front desks.
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0d2247] sm:text-3xl">
                What gym owners say
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="card-lift rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
                >
                  <Quote className="mb-3 h-8 w-8 text-[#2767d7]/20" />
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#2767d7] text-[#2767d7]"
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <p className="text-sm font-bold text-[#0d2247]">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ COMPETITOR COMPARISON ══════════ */}
        <section
          id="compare"
          className="bg-white px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-3 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2767d7]">
                Honest comparison
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0d2247] sm:text-3xl">
                How GymFlow stacks up against every major competitor
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Every ✓/✗ pulled from each vendor's own public pricing page and
                feature list — July 2026.
              </p>
            </div>

            {/* ── Full Feature Comparison Table ── */}
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-card">
              <table className="w-full min-w-[720px] text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-3 pr-4 pl-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                      Feature
                    </th>
                    {competitors.map((c) => (
                      <th
                        key={c.name}
                        className={`py-3 px-3 text-center text-xs font-bold tracking-wide ${
                          c.highlight
                            ? "bg-green-50 text-[#2767d7]"
                            : "text-slate-500"
                        }`}
                      >
                        {c.highlight ? (
                          <div>
                            <span className="block text-base">{c.name}</span>
                            {c.badge && (
                              <span className="mt-0.5 inline-block rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-bold text-white">
                                {c.badge}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="block text-base">{c.name}</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Price row */}
                  <tr className="border-b border-slate-100 bg-slate-50/60">
                    <td className="py-3 pr-4 pl-4 text-xs font-semibold text-slate-600">
                      Starting Price
                    </td>
                    {competitors.map((c, i) => (
                      <td
                        key={i}
                        className={`py-3 px-3 text-center ${
                          i === 0 ? "bg-green-50/60" : ""
                        }`}
                      >
                        {i === 0 ? (
                          <div>
                            <span className="block text-sm font-bold text-green-700">
                              {c.price}
                            </span>
                            <span className="block text-[10px] text-slate-500">
                              {c.priceNote}
                            </span>
                          </div>
                        ) : (
                          <div>
                            <span className="block text-sm font-medium text-slate-700">
                              {c.price}
                            </span>
                            {c.priceNote && (
                              <span className="block text-[10px] text-slate-400">
                                {c.priceNote}
                              </span>
                            )}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Key differentiators */}
                  <tr className="border-b border-slate-100">
                    <td
                      colSpan={competitors.length + 1}
                      className="bg-slate-100 py-2 pl-4 text-[10px] font-bold uppercase tracking-widest text-slate-400"
                    >
                      Member Experience
                    </td>
                  </tr>
                  <FeatureRow
                    label="QR check-in (no app)"
                    competitors={competitors.map((c) => c.qrCheckin)}
                    icon={QrCode}
                  />
                  <FeatureRow
                    label="No app download for members"
                    competitors={competitors.map((c) => c.noAppRequired)}
                    icon={Smartphone}
                  />
                  <FeatureRow
                    label="Member mobile app required"
                    competitors={competitors.map((c) =>
                      c.noAppRequired === true ? false : c.noAppRequired === false ? true : undefined
                    )}
                    icon={Smartphone}
                  />

                  {/* Owner tools */}
                  <tr className="border-b border-slate-100">
                    <td
                      colSpan={competitors.length + 1}
                      className="bg-slate-100 py-2 pl-4 text-[10px] font-bold uppercase tracking-widest text-slate-400"
                    >
                      Owner & Retention Tools
                    </td>
                  </tr>
                  <FeatureRow
                    label="Absentee alerts (5+ days)"
                    competitors={competitors.map((c) => c.absenteeAlerts)}
                    icon={BellRing}
                  />
                  <FeatureRow
                    label="Renewal dashboard"
                    competitors={competitors.map((c) => c.renewalDashboard)}
                    icon={RefreshCcw}
                  />
                  <FeatureRow
                    label="WhatsApp reminders"
                    competitors={competitors.map((c) => c.whatsappReminders)}
                    icon={MessageCircle}
                  />
                  <FeatureRow
                    label="One-tap call + WhatsApp"
                    competitors={competitors.map((c) =>
                      c.absenteeAlerts && c.whatsappReminders ? true : false
                    )}
                    icon={Phone}
                  />

                  {/* Operations */}
                  <tr className="border-b border-slate-100">
                    <td
                      colSpan={competitors.length + 1}
                      className="bg-slate-100 py-2 pl-4 text-[10px] font-bold uppercase tracking-widest text-slate-400"
                    >
                      Operations
                    </td>
                  </tr>
                  <FeatureRow
                    label="Member management"
                    competitors={competitors.map((c) => c.memberManagement)}
                    icon={Users}
                  />
                  <FeatureRow
                    label="Check-in / attendance log"
                    competitors={competitors.map((c) => c.checkinLog)}
                    icon={Clock}
                  />
                  <FeatureRow
                    label="Data isolation per gym"
                    competitors={competitors.map((c) => c.dataIsolation)}
                    icon={Shield}
                  />

                  {/* Hardware & integrations */}
                  <tr className="border-b border-slate-100">
                    <td
                      colSpan={competitors.length + 1}
                      className="bg-slate-100 py-2 pl-4 text-[10px] font-bold uppercase tracking-widest text-slate-400"
                    >
                      Hardware & Integrations
                    </td>
                  </tr>
                  <FeatureRow
                    label="Biometric / hardware access"
                    competitors={competitors.map((c) => c.biometric)}
                    icon={LayoutGrid}
                  />
                  <FeatureRow
                    label="UPI / online member payments"
                    competitors={competitors.map((c) => c.upiPayments)}
                    icon={TrendingDown}
                  />
                  <FeatureRow
                    label="Multi-branch support"
                    competitors={competitors.map((c) => c.multiBranch)}
                    icon={LayoutGrid}
                  />

                  {/* Business fit */}
                  <tr className="border-b border-slate-100">
                    <td
                      colSpan={competitors.length + 1}
                      className="bg-slate-100 py-2 pl-4 text-[10px] font-bold uppercase tracking-widest text-slate-400"
                    >
                      Business Fit
                    </td>
                  </tr>
                  <FeatureRow
                    label="Built for Indian gyms"
                    competitors={competitors.map((c) => c.builtFor === "India")}
                    icon={BadgeCheck}
                  />
                  <FeatureRow
                    label="Free trial available"
                    competitors={competitors.map((c) => c.freeTrial)}
                    icon={Zap}
                  />
                  <FeatureRow
                    label="No card required to start"
                    competitors={competitors.map((c) =>
                      c.freeTrial && !c.freeTrial.includes("Demo") && c.freeTrial !== "—"
                        ? true
                        : false
                    )}
                    icon={CheckCircle2}
                  />
                </tbody>
              </table>
            </div>

            {/* ── Why GymFlow wins ── */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Absentee Intelligence",
                  description:
                    "Nobody else surfaces quiet dropouts before they ghost you. GymFlow flags members absent 5+ days, sorted by longest absence — so you can reach them before they reach for the phone to cancel.",
                  icon: BellRing,
                  color: "#e67e22",
                },
                {
                  title: "Truly Zero-Friction Check-in",
                  description:
                    "QR + phone number. No app download, no account creation, no training needed. Your members check in without being asked. That's the adoption rate competitors can't match.",
                  icon: QrCode,
                  color: "#2767d7",
                },
                {
                  title: "Auto-Renewal Tracking",
                  description:
                    "Mark a payment and the expiry date updates itself. No manual entry, no expiry slipping through the cracks. Your renewals run on autopilot — which means your revenue does too.",
                  icon: RefreshCcw,
                  color: "#27ae60",
                },
              ].map((w) => (
                <div
                  key={w.title}
                  className="rounded-2xl border border-green-200 bg-green-50/60 p-6"
                >
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${w.color}20` }}
                  >
                    <w.icon
                      className="h-5 w-5"
                      style={{ color: w.color }}
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#0d2247]">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {w.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ PRICING ══════════ */}
        <section
          id="pricing"
          className="bg-[#f5f8ff] px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2767d7]">
                Simple pricing, by member count
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0d2247] sm:text-3xl">
                One flat monthly fee for your gym
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Your members never pay a rupee to use it. No hidden fees. No
                surprise charges.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border p-6 shadow-soft ${
                    plan.highlight
                      ? "border-[#2767d7] bg-white shadow-lg ring-2 ring-[#2767d7]/20"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#2767d7] px-4 py-1 text-xs font-bold text-white shadow">
                        <BadgeCheck className="h-3 w-3" />
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">
                      {plan.name}
                    </h3>
                    <div className="mt-3 flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-[#0d2247]">
                        {plan.price}
                      </span>
                      <span className="text-sm text-slate-400">{plan.period}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">
                      {plan.members}
                    </p>
                    <p className="mt-3 text-sm text-slate-600">{plan.description}</p>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        <span className="text-slate-600">{f}</span>
                      </li>
                    ))}
                    {plan.missing.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm opacity-40">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                        <span className="text-slate-400 line-through">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className={`btn-lift block text-center rounded-full py-3 text-sm font-semibold transition-colors ${
                        plan.highlight
                          ? "bg-[#2767d7] text-white shadow-lg shadow-[#2767d7]/30 hover:bg-[#1a4798]"
                          : "border-2 border-[#2767d7]/20 text-[#2767d7] hover:bg-[#f5f8ff]"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-slate-400">
              All prices exclude 18% GST. No setup fees. No per-member extra
              charges. Billed monthly or save with annual.
            </p>
          </div>
        </section>

        {/* ══════════ WHY GYMFLOW vs GLOBAL ══════════ */}
        <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#0d2247]">
                Why not just use Mindbody or Zen Planner?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Global platforms start at{" "}
                <strong className="text-slate-700">
                  ₹9,600–₹22,000 per month
                </strong>{" "}
                and were built around card-on-file billing, class scheduling, and
                spa features most Indian gyms never use. At 100 members on a
                ₹1,200/month plan, a gym collects ₹1.2 lakh. Mindbody alone
                would eat{" "}
                <strong className="text-slate-700">8–18% of that in software fees</strong>{" "}
                — before rent, salaries, or electricity.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                GymFlow is built in India, priced in rupees, and designed around
                how Indian gym owners actually work: WhatsApp reminders, cash
                tracking, and front desk tools that fit a phone screen.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "No dollar pricing",
                  "No card-on-file required",
                  "WhatsApp-native reminders",
                  "Built for small teams",
                  "1-month free trial",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ FAQ ══════════ */}
        <section className="bg-[#f5f8ff] px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2767d7]">
                FAQ
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0d2247] sm:text-3xl">
                Common questions
              </h2>
            </div>
            <div className="mb-8 space-y-3">
              {homeFaqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
            <div className="border-t border-slate-200 pt-8">
              <h3 className="mb-5 text-center text-sm font-bold uppercase tracking-widest text-slate-500">
                Competitor-specific questions
              </h3>
              <div className="space-y-3">
                {competitorFaqs.map((faq, i) => (
                  <FaqItem
                    key={i}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ FINAL CTA ══════════ */}
        <section className="bg-nav-gradient px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Your next renewal shouldn&apos;t slip through.
            </h2>
            <p className="mt-3 text-sm text-white/80">
              Set up your gym on GymFlow today and stop chasing members through a
              notebook. 1-month free trial, no card required.
            </p>
            <a
              href="#pricing"
              className="btn-lift mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-[#2767d7] shadow-lg"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-xs text-white/60">
              Or call us: {siteConfig.phones[0]}
            </p>
          </div>
        </section>
      </main>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-[#0d2247] px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-white">
              <Zap className="h-5 w-5" />
              <span className="font-bold">GymFlow</span>
              <span className="text-sm text-white/60">
                — Smart Gym Management
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="mailto:support@gymflow.in" className="hover:text-white">
                support@gymflow.in
              </a>
              <a href="tel:+919019859543" className="hover:text-white">
                {siteConfig.phones[0]}
              </a>
            </div>
          </div>
          <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-white/40">
            © 2026 GymFlow. Built for independent gyms across India.
          </div>
        </div>
      </footer>
    </div>
  );
}
