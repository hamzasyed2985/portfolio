import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import avatar from '../assets/avatar.webp';
import animation from '../assets/animation (2).gif';
import html from '../assets/html.webp';
import css from '../assets/css.webp';
import js from '../assets/js.webp';
import nextjs from '../assets/next js.jpg';
import tailwind from '../assets/tailwind.png';
import vscode from '../assets/vs code.webp';
import bootstrap from '../assets/bootstrap.webp';
import mongodb from '../assets/mongo.png';
import java from '../assets/java.webp';
import node from '../assets/node.webp';
import react from '../assets/react.webp';
import python from '../assets/python.webp';
import git from '../assets/git.webp';
import githubimage from '../assets/github-image.webp';
import { TypeAnimation } from 'react-type-animation';
import Resume from '../assets/Resume.pdf';

const skills = ["NextJs", "Python", "React", "VsCode", "Git", "Tailwind", "Bootstrap", "Html", "Github", "Css", "JavaScript", "Node", "MongoDb", "Java"];
const imgSrc = [nextjs, python, react, vscode, git, tailwind, bootstrap, html, githubimage, css, js, node, mongodb, java];

const quickStats = [
  { label: "Years Experience", value: "2+", icon: "🎯" },
  { label: "Projects Shipped", value: "20+", icon: "🚀" },
  { label: "Tech Stack", value: "Full-Stack", icon: "⚡" },
];

const services = [
  {
    title: "Product Design",
    description: "Modern UI systems, accessible components, and scalable design tokens.",
    icon: "🎨",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Full-Stack Build",
    description: "Next.js + React apps, backend APIs, and database integrations.",
    icon: "💻",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Performance",
    description: "Speed-focused, SEO-friendly builds with smooth interactions.",
    icon: "⚡",
    gradient: "from-purple-500 to-indigo-500",
  },
];

const highlights = [
  "Responsive, mobile-first layouts",
  "Design systems with reusable UI",
  "Seamless light & dark theming",
  "Animation-first user experience",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Homepage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 });

  useEffect(() => {
    // Only enable parallax on desktop
    if (window.innerWidth < 1024) return;
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const marqueeSkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-100/40 via-purple-100/40 to-pink-100/40 dark:from-indigo-950/40 dark:via-purple-950/40 dark:to-pink-950/40"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-48 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-100/40 via-cyan-100/40 to-sky-100/40 dark:from-blue-950/40 dark:via-cyan-950/40 dark:to-sky-950/40"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-20 pb-16 sm:pb-32">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 mx-auto max-w-7xl w-full"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-16 lg:grid-cols-2 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 shadow-sm"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-indigo-500"
                />
                Available for freelance
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 dark:text-white"
              >
                Crafting{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  immersive
                </span>{' '}
                digital experiences
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
              >
                I'm <span className="font-semibold text-slate-900 dark:text-white">Syed Muhammad Hamza</span>, a full-stack developer blending thoughtful design, smooth motion, and scalable engineering to build unforgettable web experiences.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-xl font-semibold"
              >
                <span className="text-slate-700 dark:text-slate-300">I'm a</span>
                <TypeAnimation
                  sequence={[
                    'MERN Stack Developer',
                    2000,
                    'Full Stack Engineer',
                    1200,
                    'UI Motion Specialist',
                    1200,
                    'Product-Ready Builder',
                    1200,
                  ]}
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                  wrapper="span"
                  speed={50}
                  deletionSpeed={75}
                  repeat={Infinity}
                  cursor={false}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/projects"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <span className="relative z-10">View Projects</span>
                    <motion.svg
                      className="relative z-10 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href={Resume}
                    download
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md"
                  >
                    Download CV
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="https://www.linkedin.com/in/syed-hamza-07021724a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-indigo-400 dark:border-indigo-600 bg-indigo-50 dark:bg-indigo-950 px-8 py-4 text-base font-semibold text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:shadow-md"
                  >
                    LinkedIn
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>

            </motion.div>

            {/* Right Content - 3D Illustration only */}
            <motion.div
              variants={itemVariants}
              style={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.img
                src={animation}
                alt="3D developer illustration"
                className="h-[260px] sm:h-[320px] lg:h-[360px] w-auto object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </section>

      {/* Quick Stats Section (moved below hero for better balance) */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      >
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center shadow-xl">
                <motion.div
                  className="mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-indigo-100 dark:border-indigo-900 shadow-lg mb-6"
                >
                  <img src={avatar} alt="about" className="h-full w-full object-cover" />
                </motion.div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Syed Muhammad Hamza</h2>
                <p className="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
                  MERN Stack Developer
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 order-1 lg:order-2">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
              >
                About
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white"
              >
                Designing future-ready digital experiences.
              </motion.h3>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              With a strong foundation in computer science and hands-on experience in full-stack engineering, I build fast, accessible, and elegant web applications. I focus on product clarity, delightful motion, and a clean architecture that scales.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm"
                >
                  <motion.span
                    className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  {item}
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  Let's Collaborate
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://github.com/hamzasyed2985"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md"
                >
                  GitHub
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.162-1.11-1.47-1.11-1.47-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between mb-16"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              What I do
            </p>
            <h3 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Services tailored for modern products
            </h3>
          </div>
          <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Explore Work
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                <motion.div
                  className={`h-1 w-16 rounded-full bg-gradient-to-r ${service.gradient}`}
                  initial={{ width: 0 }}
                  animate={servicesInView ? { width: 64 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-start gap-4 mb-12"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Toolbox
          </p>
          <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Skills & technologies
          </h3>
          <p className="max-w-xl text-slate-600 dark:text-slate-300">
            A balanced stack that blends rapid prototyping, scalable engineering, and smooth motion design.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <div className="marquee">
            <div className="marquee__inner gap-10 px-6 items-center">
              {marqueeSkills.map((skill, index) => (
                <motion.div
                  key={`${skill}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.03 }}
                  className="flex min-w-[200px] items-center gap-4 text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100"
                >
                  <motion.img
                    src={imgSrc[index % imgSrc.length]}
                    alt={skill}
                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-3xl border border-indigo-200 dark:border-indigo-900 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 sm:px-12 lg:px-16 py-16 sm:py-20 text-white shadow-2xl"
        >
          <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white/90">
                Let's build
              </p>
              <h3 className="text-4xl sm:text-5xl font-bold">
                Ready to craft your next standout product?
              </h3>
              <p className="text-lg text-white/90 max-w-2xl">
                Share your idea and I'll help translate it into a polished, high-performing web experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  Start a Project
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 bg-white/10 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:border-white"
                >
                  See Case Studies
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Homepage;
