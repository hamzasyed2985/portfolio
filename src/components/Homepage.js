import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import avatar from "../assets/avatar.webp";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import js from "../assets/js.webp";
import nextjs from "../assets/next js.jpg";
import tailwind from "../assets/tailwind.png";
import vscode from "../assets/vs code.webp";
import bootstrap from "../assets/bootstrap.webp";
import mongodb from "../assets/mongo.png";
import java from "../assets/java.webp";
import node from "../assets/node.webp";
import react from "../assets/react.webp";
import python from "../assets/python.webp";
import git from "../assets/git.webp";
import githubimage from "../assets/github-image.webp";
import Resume from "../assets/Resume.pdf";

const skills = [
  "NextJs",
  "Python",
  "React",
  "VsCode",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Html",
  "Github",
  "Css",
  "JavaScript",
  "Node",
  "MongoDb",
  "Java",
];

const imgSrc = [
  nextjs,
  python,
  react,
  vscode,
  git,
  tailwind,
  bootstrap,
  html,
  githubimage,
  css,
  js,
  node,
  mongodb,
  java,
];

const capabilities = [
  {
    title: "Interfaces that hold up",
    description:
      "Accessible React and Next.js UIs with clear hierarchy, responsive structure, and motion that supports the product.",
    code: "01",
  },
  {
    title: "APIs & data layer",
    description:
      "Node backends, MongoDB models, and clean contracts so the frontend stays fast and predictable.",
    code: "02",
  },
  {
    title: "Ship-ready polish",
    description:
      "Performance, SEO basics, theming, and interaction details that make a build feel intentional.",
    code: "03",
  },
];

const highlights = [
  "Mobile-first responsive layouts",
  "Reusable UI systems",
  "Light & dark theming",
  "Motion with purpose",
];

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

function Homepage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const skillsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.25 });
  const capabilitiesInView = useInView(capabilitiesRef, {
    once: true,
    amount: 0.2,
  });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 });

  const marqueeSkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden bg-[#F4F6F8] text-[#0B0F14] dark:bg-[#0B0F14] dark:text-[#F4F6F8]">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex items-center overflow-hidden"
      >
        <motion.div
          style={{ y: gridY }}
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          <div className="absolute inset-0 terminal-grid" />
          <div className="terminal-light absolute left-[60%] top-[35%] h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl" />
          <div className="terminal-scan pointer-events-none absolute inset-x-0 top-0 w-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4F6F8]/40 via-transparent to-[#F4F6F8] dark:from-[#0B0F14]/55 dark:via-transparent dark:to-[#0B0F14]" />
        </motion.div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
          >
            <div>
              <motion.p
                variants={itemVariants}
                className="font-mono-tech mb-6 text-xs tracking-[0.28em] text-teal-600 dark:text-teal-400 sm:text-sm"
              >
                FULL STACK ENGINEER
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="font-display text-[clamp(3.2rem,10vw,6.8rem)] font-extrabold leading-[0.92] tracking-tight"
              >
                Hamza
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="font-display mt-6 max-w-xl text-2xl font-semibold leading-snug text-[#3d4654] dark:text-[#c5ccd6] sm:text-3xl lg:text-[2.15rem]"
              >
                Full-stack systems that feel intentional.
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mt-5 max-w-lg text-base leading-relaxed text-[#5c6778] dark:text-[#8b95a5] sm:text-lg"
              >
                I design and ship React and Node products with clean
                architecture, calm interfaces, and motion that earns its place.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-4 flex flex-wrap items-center gap-2 font-mono-tech text-sm text-[#5c6778] dark:text-[#8b95a5]"
              >
                <span>role</span>
                <span className="text-teal-600 dark:text-teal-400">=</span>
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    2200,
                    "Full Stack Engineer",
                    1800,
                    "Frontend + APIs",
                    1800,
                  ]}
                  className="text-[#0B0F14] dark:text-[#F4F6F8]"
                  wrapper="span"
                  speed={50}
                  deletionSpeed={70}
                  repeat={Infinity}
                  cursor={false}
                />
                <motion.span
                  aria-hidden
                  className="inline-block h-4 w-[2px] bg-teal-500"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-wrap gap-3 sm:gap-4"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 bg-[#0B0F14] px-7 py-3.5 text-sm font-semibold text-[#F4F6F8] transition-colors hover:bg-teal-700 dark:bg-teal-400 dark:text-[#0B0F14] dark:hover:bg-teal-300"
                >
                  View Projects
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <a
                  href={Resume}
                  download
                  className="inline-flex items-center gap-2 border border-[#0B0F14]/25 bg-transparent px-7 py-3.5 text-sm font-semibold text-[#0B0F14] transition-colors hover:border-teal-600 hover:text-teal-700 dark:border-white/25 dark:text-[#F4F6F8] dark:hover:border-teal-400 dark:hover:text-teal-300"
                >
                  Download CV
                </a>
              </motion.div>
            </div>

            {/* Visual anchor — stack diagram */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-0"
              aria-hidden
            >
              <div className="relative aspect-square">
                <div className="hero-orbit absolute inset-[6%] rounded-full border border-[#0B0F14]/12 dark:border-white/12">
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-teal-500" />
                </div>
                <div className="hero-orbit-reverse absolute inset-[18%] rounded-full border border-dashed border-teal-500/40">
                  <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 bg-[#0B0F14]/40 dark:bg-white/40" />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8">
                  {[
                    { label: "INTERFACE", sub: "React · Next.js", shift: "translate-x-3" },
                    { label: "SERVICES", sub: "Node · APIs", shift: "translate-x-0" },
                    { label: "DATA", sub: "MongoDB", shift: "-translate-x-3" },
                  ].map((layer, index) => (
                    <motion.div
                      key={layer.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + index * 0.12, duration: 0.55, ease }}
                      className={`w-full border border-[#0B0F14]/15 bg-[#F4F6F8]/90 px-5 py-4 backdrop-blur-sm dark:border-white/12 dark:bg-[#121821]/90 ${layer.shift}`}
                    >
                      <p className="font-mono-tech text-[10px] tracking-[0.24em] text-teal-700 dark:text-teal-400">
                        {String(index + 1).padStart(2, "0")} · {layer.label}
                      </p>
                      <p className="font-display mt-1 text-lg font-semibold tracking-tight sm:text-xl">
                        {layer.sub}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section
        ref={aboutRef}
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-[340px]"
          >
            <div className="absolute -inset-3 border border-teal-500/30" />
            <div className="relative overflow-hidden bg-[#121821]">
              <img
                src={avatar}
                alt="Syed Muhammad Hamza"
                className="aspect-[4/5] h-auto w-full object-cover object-[center_82%] opacity-95"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/70 to-transparent p-5">
                <p className="font-display text-xl font-bold text-white sm:text-2xl">
                  Syed Muhammad Hamza
                </p>
                <p className="font-mono-tech mt-1 text-xs tracking-widest text-teal-400">
                  MERN STACK DEVELOPER
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="space-y-6"
          >
            <p className="font-mono-tech text-xs tracking-[0.28em] text-teal-600 dark:text-teal-400">
              ABOUT
            </p>
            <h3 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Building future-ready digital products end to end.
            </h3>
            <p className="max-w-xl text-base leading-relaxed text-[#5c6778] dark:text-[#8b95a5] sm:text-lg">
              Computer science foundation, full-stack practice. I care about
              product clarity, reliable APIs, and interfaces that stay fast as
              they grow.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + index * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 border-l-2 border-teal-500/70 pl-3 text-sm font-medium text-[#3d4654] dark:text-[#c5ccd6]"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-teal-500 px-6 py-3 text-sm font-semibold text-[#0B0F14] transition-colors hover:bg-teal-600 dark:hover:bg-teal-300"
              >
                Let&apos;s Collaborate
              </Link>
              <a
                href="https://github.com/hamzasyed2985"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#0B0F14]/25 px-6 py-3 text-sm font-semibold text-[#0B0F14] transition-colors hover:border-teal-600 hover:text-teal-700 dark:border-white/25 dark:text-[#F4F6F8] dark:hover:border-teal-400 dark:hover:text-teal-300"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        ref={capabilitiesRef}
        className="relative border-y border-[#0B0F14]/10 bg-white/70 py-24 dark:border-white/10 dark:bg-[#121821]/60 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono-tech text-xs tracking-[0.28em] text-teal-600 dark:text-teal-400">
                CAPABILITIES
              </p>
              <h3 className="font-display mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                What I bring to a build
              </h3>
            </div>
            <Link
              to="/projects"
              className="font-mono-tech text-xs tracking-widest text-[#5c6778] transition-colors hover:text-teal-700 dark:text-[#8b95a5] dark:hover:text-teal-300"
            >
              EXPLORE WORK →
            </Link>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 36 }}
                animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.65, ease }}
                className="group border border-[#0B0F14]/10 bg-[#F4F6F8]/40 p-8 transition-colors hover:border-teal-600/60 hover:bg-white dark:border-white/10 dark:bg-transparent dark:hover:border-teal-400/50 dark:hover:bg-white/[0.03] md:-ml-px"
              >
                <p className="font-mono-tech text-xs text-teal-600 dark:text-teal-400">
                  {item.code}
                </p>
                <h4 className="font-display mt-5 text-xl font-bold sm:text-2xl">
                  {item.title}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-[#5c6778] dark:text-[#8b95a5] sm:text-base">
                  {item.description}
                </p>
                <div className="mt-8 h-px w-10 bg-teal-500 transition-all duration-300 group-hover:w-16" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        ref={skillsRef}
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease }}
          className="mb-12"
        >
          <p className="font-mono-tech text-xs tracking-[0.28em] text-teal-600 dark:text-teal-400">
            TOOLBOX
          </p>
          <h3 className="font-display mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Skills & technologies
          </h3>
          <p className="mt-4 max-w-xl text-[#5c6778] dark:text-[#8b95a5]">
            A stack tuned for rapid builds, scalable backends, and interfaces
            that stay sharp in production.
          </p>
        </motion.div>

        <div className="marquee">
          <div className="marquee__inner items-center gap-10 px-4">
            {marqueeSkills.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="marquee-item flex min-w-[180px] items-center gap-4 border border-[#0B0F14]/12 bg-white px-4 py-3 text-[#0B0F14] dark:border-white/12 dark:bg-[#121821] dark:text-[#F4F6F8]"
              >
                <img
                  src={imgSrc[index % imgSrc.length]}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                  draggable={false}
                />
                <span className="font-mono-tech text-sm font-medium tracking-wide">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden border border-teal-500/30 bg-[#0B0F14] px-8 py-16 text-[#F4F6F8] sm:px-12 sm:py-20 lg:px-16"
        >
          <div className="pointer-events-none absolute inset-0 terminal-grid opacity-40" />
          <div className="terminal-light absolute -right-20 -top-24 h-72 w-72 rounded-full blur-2xl" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="font-mono-tech text-xs tracking-[0.28em] text-teal-400">
                LET&apos;S BUILD
              </p>
              <h3 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                Ready for your next product?
              </h3>
              <p className="text-base text-[#8b95a5] sm:text-lg">
                Share the idea. I&apos;ll help turn it into a clear, fast, and
                polished web experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-teal-400 px-7 py-3.5 text-sm font-semibold text-[#0B0F14] transition-colors hover:bg-teal-300"
              >
                Start a Project
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 border border-white/30 px-7 py-3.5 text-sm font-semibold text-[#F4F6F8] transition-colors hover:border-teal-400 hover:text-teal-300"
              >
                See Work
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Homepage;
