import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { homeFaqs } from "@/lib/faqs";
import {
  Users,
  Target,
  Search,
  Briefcase,
  ArrowRight,
  ChevronDown,
  Star,
  Quote,
  Clock,
  CheckCircle,
  HeartHandshake,
  Rocket,
  Mail,
  Phone,
  MapPin,
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
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: HeartHandshake,
    title: "Nurturing Talent, Fueling Growth",
    description:
      "We identify and cultivate exceptional talent, providing training and mentorship to help candidates reach their full potential.",
    color: "#2767d7",
  },
  {
    icon: Target,
    title: "Tailoring Talent For Excellence",
    description:
      "Our precision matching process ensures candidates align perfectly with your company culture and role requirements.",
    color: "#2767d7",
  },
  {
    icon: Search,
    title: "Finding The Right Fit, Every Time",
    description:
      "Through rigorous screening and deep industry knowledge, we deliver candidates who exceed expectations from day one.",
    color: "#2767d7",
  },
];

const stats = [
  { value: "250K+", label: "Candidates Placed" },
  { value: "10+", label: "Years Experience" },
  { value: "99%", label: "Success Rate" },
  { value: "200K+", label: "Active Jobs" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director, TechCorp",
    text: "TalentBridge transformed our hiring process. Within weeks, we found the perfect candidates for our most challenging roles. Their attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO, StartupHub",
    text: "The quality of candidates they brought us was exceptional. They truly understand our industry and company culture. Highly recommended for any growing business.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CFO, FinancePlus",
    text: "Professional, efficient, and results-driven. TalentBridge has been our trusted recruitment partner for over three years. They never disappoint.",
    rating: 5,
  },
];

const blogPosts = [
  {
    title: "5 Tips for Acing Your Next Job Interview",
    excerpt:
      "Master the art of interviewing with these proven strategies from our top recruiters.",
    date: "August 2025",
    readTime: "5 min read",
  },
  {
    title: "The Future of Remote Work in 2025",
    excerpt:
      "How the workplace is evolving and what it means for both employers and job seekers.",
    date: "July 2025",
    readTime: "7 min read",
  },
  {
    title: "Building a Strong Employer Brand",
    excerpt:
      "Why employer branding matters more than ever in attracting top talent.",
    date: "July 2025",
    readTime: "6 min read",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ══════════ NAVBAR ══════════ */}
      <header className="bg-nav-gradient px-4 py-3 sm:px-6 sm:py-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
              <Briefcase className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight sm:text-xl">
              TalentBridge
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
            href="#contact"
            className="btn-lift rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2767d7] shadow-md"
          >
            Get Started
          </a>
        </nav>
      </header>

      <main className="flex flex-col">
        {/* ══════════ HERO ══════════ */}
        <section
          id="home"
          className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f8ff] px-4 py-1.5 text-xs font-medium text-[#2767d7] ring-1 ring-[#2767d7]/15">
                <Star className="h-3 w-3 fill-[#2767d7]" />
                Trusted by 500+ Companies
              </span>
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#0d2247] sm:text-4xl lg:text-5xl">
              Connecting Talent,
              <br />
              Building Careers
            </h1>
            <p className="mt-5 text-base text-[#6279a4] sm:text-lg">
              We bridge the gap between exceptional talent and great companies.
              Your dream career or perfect hire is just a click away.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#services"
                className="btn-lift flex items-center gap-2 rounded-full bg-[#2767d7] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2767d7]/30"
              >
                Find Talent
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="btn-lift rounded-full border-2 border-[#2767d7]/20 px-7 py-3 text-sm font-semibold text-[#2767d7]"
              >
                Find Jobs
              </a>
            </div>
          </div>
        </section>

        {/* ══════════ CTA BAR (Ready to Apply) ══════════ */}
        <section className="bg-cta-gradient px-4 py-8 sm:px-6 sm:py-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Ready to Take the Next Step?
              </h2>
              <p className="mt-1 text-sm text-white/80">
                Join thousands who found their perfect match
              </p>
            </div>
            <a
              href="#contact"
              className="btn-lift flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2767d7] shadow-lg"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* ══════════ SERVICES ══════════ */}
        <section
          id="services"
          className="bg-white px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2767d7]">
                What We Do
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0d2247] sm:text-3xl">
                Our Recruitment Services
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="card-lift rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon
                      className="h-6 w-6"
                      style={{ color: service.color }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d2247]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6279a4]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ ABOUT / CONTENT SECTION ══════════ */}
        <section
          id="about"
          className="bg-[#f5f8ff] px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2767d7]">
                About Us
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0d2247] sm:text-3xl">
                Shaping Futures, One
                <br />
                Placement At A Time
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-soft">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2767d7]/10">
                  <Users className="h-5 w-5 text-[#2767d7]" />
                </div>
                <h3 className="text-base font-bold text-[#0d2247]">
                  For Employers
                </h3>
                <p className="mt-2 text-sm text-[#6279a4]">
                  Access our pool of 250K+ pre-screened candidates. We handle the
                  entire recruitment lifecycle so you can focus on running your
                  business.
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Dedicated account manager",
                    "Custom candidate screening",
                    "Industry-specific recruiters",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#6279a4]"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0 text-[#2767d7]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-soft">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2767d7]/10">
                  <Rocket className="h-5 w-5 text-[#2767d7]" />
                </div>
                <h3 className="text-base font-bold text-[#0d2247]">
                  For Job Seekers
                </h3>
                <p className="mt-2 text-sm text-[#6279a4]">
                  Discover opportunities that match your skills and aspirations.
                  We guide you through every step of your career journey.
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Career counseling sessions",
                    "Resume optimization",
                    "Interview preparation",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#6279a4]"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0 text-[#2767d7]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ STATS BAND ══════════ */}
        <section className="bg-white px-4 py-10 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-[#2767d7] sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#6279a4] sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ BLUE CTA BANNER ══════════ */}
        <section className="bg-cta-banner px-4 py-10 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Let&apos;s Build Your Future Together
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Whether you&apos;re hiring or looking for your next role, we&apos;re here to
              help you succeed.
            </p>
            <a
              href="#contact"
              className="btn-lift mt-5 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#2260c7] shadow-lg"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* ══════════ TESTIMONIALS ══════════ */}
        <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2767d7]">
                Testimonials
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0d2247] sm:text-3xl">
                Client Feedback
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
                  <p className="text-sm leading-relaxed text-[#6279a4]">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <p className="text-sm font-bold text-[#0d2247]">{t.name}</p>
                    <p className="text-xs text-[#6279a4]">{t.role}</p>
                  </div>
                </div>
              ))}
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
                Our Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {homeFaqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ BLOG ══════════ */}
        <section
          id="blog"
          className="bg-white px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2767d7]">
                Blog
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0d2247] sm:text-3xl">
                Read Our Latest Blog
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {blogPosts.map((post, i) => (
                <article
                  key={i}
                  className="card-lift overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft"
                >
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#2767d7] to-[#1a4798]">
                    <Briefcase className="h-12 w-12 text-white/30" />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-3 text-xs text-[#6279a4]">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0d2247]">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#6279a4]">
                      {post.excerpt}
                    </p>
                    <a
                      href="#blog"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2767d7]"
                    >
                      Read More
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CONTACT ══════════ */}
        <section
          id="contact"
          className="bg-[#f5f8ff] px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2767d7]">
                Contact
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0d2247] sm:text-3xl">
                Get In Touch With Us
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 text-center shadow-soft">
                <div className="mb-3 flex justify-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2767d7]/10">
                    <Mail className="h-5 w-5 text-[#2767d7]" />
                  </span>
                </div>
                <p className="text-xs font-medium text-[#6279a4]">Email Us</p>
                <p className="mt-1 text-sm font-bold text-[#0d2247]">
                  hello@talentbridge.com
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 text-center shadow-soft">
                <div className="mb-3 flex justify-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2767d7]/10">
                    <Phone className="h-5 w-5 text-[#2767d7]" />
                  </span>
                </div>
                <p className="text-xs font-medium text-[#6279a4]">Call Us</p>
                <p className="mt-1 text-sm font-bold text-[#0d2247]">
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 text-center shadow-soft">
                <div className="mb-3 flex justify-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2767d7]/10">
                    <MapPin className="h-5 w-5 text-[#2767d7]" />
                  </span>
                </div>
                <p className="text-xs font-medium text-[#6279a4]">Visit Us</p>
                <p className="mt-1 text-sm font-bold text-[#0d2247]">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-footer-gradient px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
                  <Briefcase className="h-5 w-5" />
                </span>
                <span className="text-lg font-bold">TalentBridge</span>
              </div>
              <p className="mt-3 max-w-xs text-sm text-white/70">
                Connecting talent, building careers. We&apos;re your trusted partner
                in recruitment and placement.
              </p>
              <div className="mt-4 flex gap-3">
                {[
                  {
                    label: "LinkedIn",
                    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z",
                  },
                  {
                    label: "Twitter",
                    path: "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.63 7.58H.48l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3L17.61 20.65z",
                  },
                  {
                    label: "Facebook",
                    path: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Quick Links</h4>
              <ul className="mt-3 space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Services</h4>
              <ul className="mt-3 space-y-2">
                {services.map((s) => (
                  <li key={s.title}>
                    <a
                      href="#services"
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-white/15 pt-6 text-center">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} TalentBridge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ──────────────────── FAQ Item (client interactivity) ──────────────────── */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl bg-white p-4 shadow-soft">
      <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
        <span className="text-sm font-semibold text-[#0d2247]">{question}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-[#2767d7] transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-[#6279a4]">{answer}</p>
    </details>
  );
}