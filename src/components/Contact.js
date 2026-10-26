import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Resume from "../assets/Resume.pdf";

const ease = [0.22, 1, 0.36, 1];

const channels = [
  {
    id: "email",
    label: "Email",
    value: "hamzasyed2985@gmail.com",
    href: "mailto:hamzasyed2985@gmail.com",
    note: "Best for project briefs and detailed conversations.",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "syed-hamza",
    href: "https://www.linkedin.com/in/syed-hamza-07021724a/",
    note: "Professional updates, intros, and quick syncs.",
  },
  {
    id: "github",
    label: "GitHub",
    value: "hamzasyed2985",
    href: "https://github.com/hamzasyed2985",
    note: "Code, demos, and open work samples.",
  },
];

const engagement = [
  {
    title: "Product builds",
    body: "React / Next.js apps, Node APIs, MongoDB models, and polished UI systems with intentional motion.",
  },
  {
    title: "Automation & tooling",
    body: "Workflow automation (n8n, Python services), reporting pipelines, and integrations that remove manual ops.",
  },
  {
    title: "Client websites",
    body: "WordPress and marketing sites with clear IA, responsive layouts, and content that’s easy to maintain.",
  },
];

const briefPoints = [
  "What you’re building and who it’s for",
  "Must-have features vs nice-to-haves",
  "Timeline and rough budget range",
  "Links to references, Figma, or existing code",
];

function Contact() {
  return (
    <div className="relative overflow-hidden bg-[#F4F6F8] text-[#0B0F14] dark:bg-[#0B0F14] dark:text-[#F4F6F8]">
      <div className="pointer-events-none absolute inset-0 terminal-grid opacity-60 dark:opacity-80" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#F4F6F8] dark:to-[#0B0F14]" aria-hidden />

      <section className="relative mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <p className="font-mono-tech text-xs tracking-[0.28em] text-teal-600 dark:text-teal-400">
            CONTACT
          </p>
          <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build something intentional.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5c6778] dark:text-[#8b95a5] sm:text-lg">
            Share the idea, the constraints, and the outcome you want. I&apos;ll
            reply with clarity on fit, approach, and next steps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:hamzasyed2985@gmail.com"
              className="inline-flex items-center gap-2 bg-[#0B0F14] px-7 py-3.5 text-sm font-semibold text-[#F4F6F8] transition-colors hover:bg-teal-700 dark:bg-teal-400 dark:text-[#0B0F14] dark:hover:bg-teal-300"
            >
              Email me
            </a>
            <a
              href={Resume}
              download
              className="inline-flex items-center gap-2 border border-[#0B0F14]/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-teal-600 hover:text-teal-700 dark:border-white/25 dark:hover:border-teal-400 dark:hover:text-teal-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {channels.map((channel, index) => (
            <motion.a
              key={channel.id}
              href={channel.href}
              target={channel.id === "email" ? undefined : "_blank"}
              rel={channel.id === "email" ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.55, ease }}
              className="group border border-[#0B0F14]/12 bg-white p-6 transition-colors hover:border-teal-600/50 dark:border-white/10 dark:bg-[#121821] dark:hover:border-teal-400/40"
            >
              <p className="font-mono-tech text-[10px] tracking-[0.22em] text-teal-700 dark:text-teal-400">
                {String(index + 1).padStart(2, "0")} · {channel.label.toUpperCase()}
              </p>
              <h2 className="font-display mt-4 text-xl font-bold break-all group-hover:text-teal-700 dark:group-hover:text-teal-300">
                {channel.value}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5c6778] dark:text-[#8b95a5]">
                {channel.note}
              </p>
              <span className="mt-6 inline-block font-mono-tech text-xs tracking-widest text-[#5c6778] transition-colors group-hover:text-teal-700 dark:text-[#8b95a5] dark:group-hover:text-teal-300">
                OPEN →
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="relative border-y border-[#0B0F14]/10 bg-white/70 py-16 dark:border-white/10 dark:bg-[#121821]/50 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="font-mono-tech text-xs tracking-[0.28em] text-teal-600 dark:text-teal-400">
                WHAT I TAKE ON
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
                Ways we can work together
              </h2>
              <p className="mt-4 text-[#5c6778] dark:text-[#8b95a5]">
                Based in Pakistan, collaborating remotely with flexible hours
                across time zones. Open to freelance builds, product
                partnerships, and focused engineering sprints.
              </p>
            </motion.div>

            <div className="space-y-0">
              {engagement.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease }}
                  className="border border-[#0B0F14]/10 p-6 transition-colors hover:border-teal-600/40 dark:border-white/10 dark:hover:border-teal-400/35 lg:-mt-px"
                >
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5c6778] dark:text-[#8b95a5]">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="font-mono-tech text-xs tracking-[0.28em] text-teal-600 dark:text-teal-400">
              SEND A USEFUL BRIEF
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
              What to include in your first message
            </h2>
            <p className="mt-4 text-[#5c6778] dark:text-[#8b95a5]">
              A short, concrete brief helps me respond faster with a realistic
              plan instead of generic questions.
            </p>
            <ul className="mt-8 space-y-3">
              {briefPoints.map((point, index) => (
                <li
                  key={point}
                  className="flex items-start gap-3 border-l-2 border-teal-500/70 pl-4 text-sm font-medium text-[#3d4654] dark:text-[#c5ccd6]"
                >
                  <span className="font-mono-tech text-teal-700 dark:text-teal-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="relative border border-teal-500/30 bg-[#0B0F14] p-8 text-[#F4F6F8] sm:p-10"
          >
            <div className="pointer-events-none absolute inset-0 terminal-grid opacity-30" />
            <div className="relative z-10 space-y-6">
              <p className="font-mono-tech text-xs tracking-[0.28em] text-teal-400">
                DIRECT LINE
              </p>
              <h3 className="font-display text-3xl font-bold">
                Prefer email? Start there.
              </h3>
              <p className="text-[#8b95a5]">
                Reach out at{" "}
                <a
                  href="mailto:hamzasyed2985@gmail.com"
                  className="text-teal-300 underline-offset-4 hover:underline"
                >
                  hamzasyed2985@gmail.com
                </a>
                . I typically reply within 1–2 business days.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:hamzasyed2985@gmail.com?subject=Project%20inquiry"
                  className="inline-flex items-center bg-teal-400 px-6 py-3 text-sm font-semibold text-[#0B0F14] transition-colors hover:bg-teal-300"
                >
                  Compose email
                </a>
                <Link
                  to="/projects"
                  className="inline-flex items-center border border-white/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-teal-400 hover:text-teal-300"
                >
                  Browse work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
