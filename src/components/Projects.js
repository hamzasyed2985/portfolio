import React, { useEffect } from "react";
import Card from "../components/Card";
import Aos from "aos";
import "aos/dist/aos.css";

const styles = {
  title:
    "text-3xl md:text-4xl font-bold my-8 text-center text-[#17172e] dark:text-white transition",
  galleryItem:
    "flex flex-row justify-center flex-wrap gap-6 md:gap-8 max-w-7xl mx-auto",
};

// Shared projects data. Each project can optionally have a details page.
export const projects = [
  // 0) EduExtract – Final Year Project
  {
    id: "eduextract",
    title: "EduExtract – AI Educational Content Platform",
    shortDescription:
      "Final year project: an AI-powered platform that converts long educational videos into structured learning resources like summaries, quizzes, flashcards, slides, and blogs.",
    image: () => require("../assets/eduExtract.jpeg"),
    demoPath: "https://github.com/hamzasyed2985/eduExtract",
    demoType: "github",
    hasDetails: true,
    videoSrc: () => require("../assets/eduExtract.mp4"),
    detailOverview:
      "EduExtract is an AI-driven platform built as my final year project to transform long-form educational videos into structured, reusable learning resources. Instead of watching entire lectures again, learners and educators can quickly get summaries, quizzes, flashcards, slides, and blog-style writeups generated from the original content.",
    detailProblem:
      "With platforms like YouTube becoming primary sources of learning, students and teachers struggle to revise concepts, prepare assessments, or extract key insights from long videos. Manually transcribing, summarising, and turning video content into quizzes or notes is slow, repetitive, and error-prone. Most existing tools stop at basic transcription and don’t provide truly educational, reusable artifacts.",
    detailSolution:
      "EduExtract ingests YouTube URLs or uploaded files and runs them through a pipeline of speech-to-text transcription, topic-wise segmentation, and AI-powered content generation. For each video, the system creates structured summaries, quizzes (MCQs, short answer, true/false), flashcards, blog posts, and presentation slides. Users can customise tone, depth, and difficulty, store everything in a searchable content library, collaborate with others using role-based access, and export resources to formats like PDF, DOCX, and PPT.",
    detailImpact:
      "The platform significantly reduces the manual effort of converting video content into study material, making it easier to revise, teach, and share knowledge. It bridges the gap between unstructured video lectures and structured educational content, enabling more efficient learning and teaching workflows.",
    techStack: [
      "Speech-to-text (ASR) pipeline",
      "LLM-based summarisation and content generation",
      "Web frontend for content library and collaboration",
      "Role-based access control",
      "Export to PDF / DOCX / PPT",
    ],
    responsibilities: [
      "Co-designed the overall architecture and user experience for EduExtract.",
      "Implemented the core pipeline for transcription, topic segmentation, and AI content generation.",
      "Built the content library UX with search, tagging, and filters for generated resources.",
      "Added export flows and collaboration primitives (access control, sharing).",
      "Recorded demo videos explaining the system flow and major modules.",
    ],
  },
  // 1) Email audit system next
  {
    id: "email-audit-system",
    title: "Email Deliverability Audit Automation",
    shortDescription:
      "An automated email deliverability audit system that connects Fillout, n8n, Notion, and a custom Python backend to run multi-tool checks and generate polished, client-ready reports at scale.",
    image: () => require("../assets/email-audit-system.png"),
    demoPath: "https://github.com/hamzasyed2985/email-audit-backend",
    demoType: "github",
    hasDetails: true,
    detailOverview:
      "For an email deliverability consultant, I built an automation system that turns a manual, multi-tool audit into a fully orchestrated workflow. Instead of checking each platform and copying data by hand, the system ingests client inputs, runs a consistent battery of tests, and compiles everything into a structured Notion report.",
    detailProblem:
      "Previously, every audit required manually collecting client details, logging into multiple platforms (GlockApps, Google Postmaster, reputation and blacklist checkers), taking screenshots, and pasting metrics into Notion. This was slow, error-prone, and very hard to scale as the number of audits grew.",
    detailSolution:
      "I designed an end-to-end pipeline where clients submit data through Fillout, n8n normalises and inserts it into a relational Notion database, and a custom Python backend watches for new audits. When a new entry appears, the backend runs checks across all required tools, captures metrics and screenshots (including Google Postmaster), and pushes everything back into Notion in a client-ready format.",
    detailImpact:
      "The result is a dramatic reduction in manual effort—from hours per audit down to minutes—while improving consistency and reducing human error. The consultant can now scale audits to many more clients without sacrificing quality or spending time on copy-paste work.",
    techStack: [
      "Python (automation backend)",
      "n8n (workflow orchestration)",
      "Notion (relational database & reporting)",
      "Fillout (intake forms)",
      "GlockApps / Google Postmaster / reputation & blacklist tools",
      "REST APIs",
    ],
    responsibilities: [
      "Mapped the end-to-end audit workflow and identified automation points.",
      "Designed the Notion database schema to relate clients, audits, and checks.",
      "Implemented n8n flows to transform Fillout submissions into structured Notion records.",
      "Built the Python service that detects new audits, calls all external services, and pushes results back into Notion.",
      "Automated screenshot capture and attachment into final reports.",
    ],
  },
  // 2) Newly added WordPress client sites
  {
    id: "asia-crop-sciences",
    title: "Asia CropSciences Website",
    shortDescription:
      "Custom WordPress marketing site for Asia CropSciences, showcasing product categories, crop-focused pages, and sustainability messaging in a modern, responsive layout.",
    image: () => require("../assets/asia-crop.png"),
    demoPath: "https://asiacropsciences.com/",
    demoType: "external",
    hasDetails: true,
    detailOverview:
      "Asia CropSciences needed a website that could clearly present their product lines and crop segments while reflecting their commitment to sustainability and modern agriculture. I built a custom WordPress site that organises their fungicides, insecticides, herbicides, and plant health products into intuitive categories with clear navigation.",
    detailProblem:
      "The brand required a professional online presence that could scale with new product lines and marketing campaigns. They also wanted to highlight key crops and sustainability messaging without overwhelming visitors or making the site hard to manage for non-technical staff.",
    detailSolution:
      "Using WordPress as the CMS, I structured the site around clear top-level navigation (Our Company, Products, Crops, Sustainability, Careers) and category-driven product sections. Hero sections for each product group (Plant Health, Fungicides, Insecticides, Herbicides) help users jump directly into relevant content, while crop sections (Wheat, Maize, Rice, Sugarcane, Potato, Cotton) speak to farmers’ needs. The design is fully responsive and built to be easily editable by the client’s team.",
    techStack: ["WordPress", "Custom theme development", "Responsive HTML5/CSS3", "Basic on-page SEO"],
    responsibilities: [
      "Information architecture for product categories and crop segments.",
      "Custom WordPress theme and layout implementation.",
      "Responsive design across desktop, tablet, and mobile.",
      "Content layout for hero sections, product categories, and sustainability messaging.",
    ],
  },
  {
    id: "historical-tours-pakistan",
    title: "Historical Tours Pakistan Website",
    shortDescription:
      "WordPress site for a specialised historical tour operator, with tour detail pages, featured itineraries, curators’ bios, testimonials, and a blog for long-form historical content.",
    image: () => require("../assets/historical-tours.png"),
    demoPath: "https://historicaltourspakistan.com/",
    demoType: "external",
    hasDetails: true,
    detailOverview:
      "Historical Tours Pakistan offers highly curated tours focused on military and cultural history. I built their WordPress site to showcase signature tours, highlight their historian curators, and provide space for in-depth blog content about Pakistan’s heritage.",
    detailProblem:
      "They needed a site that could communicate credibility and depth—more than a typical travel website—while still making it easy for visitors to explore tours, understand what makes them unique, and get in touch.",
    detailSolution:
      "The site is structured around key hero tours (The Great Game Tour, The Corps of Guides, On Alexander’s Footsteps, The Raj Tour), each with clear calls to action. I added sections for ‘Featured Historical Tours’, ‘Why Choose Us’, and detailed curator biographies, along with testimonials and a blog/news area. The layout supports long-form historical content while keeping navigation simple.",
    techStack: ["WordPress", "Custom theme configuration", "Responsive HTML5/CSS3"],
    responsibilities: [
      "Designed page layouts for tour listings, detail pages, and curators’ profiles.",
      "Configured WordPress to support tours, blog posts, and testimonials.",
      "Implemented responsive, content-heavy pages that remain readable on mobile.",
    ],
  },
  // 3) React and static portfolio projects (original sequence)
  {
    id: "typing-test-app",
    title: "Typing Test App",
    shortDescription:
      "A JavaScript-powered typing speed test that measures WPM, accuracy, and mistakes in real time with dynamic word streams and animated feedback.",
    image: () => require("../assets/typing.png"),
    demoPath: "/projects/typing-test",
    demoType: "internal",
    hasDetails: true,
    detailOverview:
      "A browser-based typing test focused on measuring real-world typing performance rather than just raw speed. The app shuffles a large reference text, streams it in lines, and tracks how accurately and quickly the user types each word.",
    detailProblem:
      "Most simple typing tests either ignore accuracy or don’t give enough feedback about which words were mistyped. I wanted to build a tool that clearly separates correct and incorrect words, supports different time windows, and provides an at-a-glance summary when the test ends.",
    detailSolution:
      "Using React state and effects, the app shuffles a reference word list, renders it as a line, and listens to the user’s input. Each space-separated word is compared against the target; correct and wrong words are counted and visually highlighted (green vs red). A countdown timer (15/30/60 seconds) drives the session, and when it hits zero, the app shows WPM, accuracy, and incorrect word counts. The next line of text is loaded automatically after the user completes the current one.",
    techStack: ["React", "Framer Motion", "JavaScript"],
    responsibilities: [
      "Implemented timed test logic and dynamic word-line rotation.",
      "Built accuracy and WPM calculations based on typed vs reference words.",
      "Added visual highlighting and animated transitions for an engaging experience.",
    ],
  },
  {
    id: "advance-calculator",
    title: "Advance Calculator",
    shortDescription:
      "A modern advanced calculator UI with expression history, Ans recall, input sanitization, and support for chained operations.",
    image: () => require("../assets/calculator-advance.jpg"),
    demoPath: "/projects/calculator-advance",
    demoType: "internal",
    hasDetails: true,
    detailOverview:
      "A desktop-style calculator built in React with a focus on UX details: expression preview, last-answer recall, and a layout optimised for both mouse and touch input.",
    detailProblem:
      "I wanted more than a basic calculator: it should handle chained operations, show the full expression being evaluated, and let users reuse the previous answer without retyping it, similar to physical scientific calculators.",
    detailSolution:
      "The app maintains separate state for the current expression, current result, last answer, and evaluation state. Inputs are appended to a string that represents the expression, which is sanitised before evaluation to avoid leading zero issues. When the user presses =, the expression is stored, the result is calculated and displayed, and the last answer is cached so the Ans key can append it to the current input. Special keys handle clear, delete, and basic functions like parentheses and modulus.",
    techStack: ["React", "JavaScript", "CSS"],
    responsibilities: [
      "Designed and implemented the calculator layout and button matrix.",
      "Handled expression sanitisation and error handling for invalid input.",
      "Added quality-of-life features such as Ans recall and expression history display.",
    ],
  },
  {
    id: "todo-list-app",
    title: "Todo List App",
    shortDescription:
      "A task management app with add/edit/delete, completion tracking, filtering, and smooth animations for each state change.",
    image: () => require("../assets/todo.png"),
    demoPath: "/projects/todo-list-app",
    demoType: "internal",
    hasDetails: true,
    detailOverview:
      "A fully interactive todo list app that focuses on day-to-day usability: quickly adding tasks, marking them complete, editing them inline, and keeping the UI feeling alive with animations.",
    detailProblem:
      "Simple todo examples rarely include real UX features like filtering, inline editing, and animated feedback. I wanted a small project that demonstrates how to handle all of these while keeping the state management clean.",
    detailSolution:
      "The app uses React state to store a list of tasks, each with an id, text, and completion flag. Users can add tasks, toggle completion via a custom checkbox UI, filter by All vs Completed, and edit an existing task via a modal powered by styled-components and react-animations. Framer Motion animates list items entering and exiting the DOM to keep the interface smooth when tasks are added, edited, or removed.",
    techStack: ["React", "Framer Motion", "styled-components", "JavaScript", "CSS"],
    responsibilities: [
      "Built CRUD operations for tasks with optimistic UI updates.",
      "Implemented filtering logic and custom checkbox styling.",
      "Integrated Framer Motion and styled-components for polished animations and modals.",
    ],
  },
  {
    id: "weather-app",
    title: "Weather App",
    shortDescription:
      "A weather dashboard that fetches live data from OpenWeatherMap with city autocomplete, showing temperature, conditions, and key metrics.",
    image: () => require("../assets/weather.png"),
    demoPath: "/projects/weather",
    demoType: "internal",
    hasDetails: true,
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    shortDescription:
      "A two-player Tic-Tac-Toe game with win detection, animated board interactions, and persistent score tracking for X and O.",
    image: () => require("../assets/tic.PNG"),
    demoPath: "/projects/tic-tac-toe",
    demoType: "internal",
    hasDetails: true,
    detailOverview:
      "A classic Tic-Tac-Toe implementation focused on clean game logic, visual feedback, and a persistent score counter so players can track multiple rounds.",
    detailProblem:
      "The goal was to build a simple yet polished game that cleanly encapsulates win detection logic, turn management, and resetting state between rounds without reloading the page.",
    detailSolution:
      "The game stores the board as a 9-cell array and checks each winning combination after every move. When a line is completed, it sets the winner and increments the relevant player’s win counter (X or O). A separate reset button clears the board but preserves the scores, and another button resets the score counters. Styling emphasises turns (X vs O colours) and adds hover animations to make interactions feel responsive.",
    techStack: ["React", "JavaScript", "Tailwind/CSS utility classes"],
    responsibilities: [
      "Implemented game state, turn logic, and winner detection.",
      "Added score tracking across rounds with reset controls.",
      "Styled the board and interactions for a clean, modern feel.",
    ],
  },
  {
    id: "simple-react-calculator",
    title: "Simple React Calculator",
    shortDescription:
      "A beginner-friendly React calculator demonstrating controlled inputs, refs, and basic arithmetic operations with live result updates.",
    image: () => require("../assets/Calculator.png"),
    demoPath: "/projects/calculator",
    demoType: "internal",
    hasDetails: true,
    detailOverview:
      "A minimal calculator used to practise fundamental React concepts like state updates, refs, and event handling while performing basic arithmetic on user input.",
    detailProblem:
      "This project was about learning: I wanted a simple UI to explore how React updates state, how refs work with uncontrolled inputs, and how to organise small computational helpers.",
    detailSolution:
      "The calculator keeps track of a numeric result and the currently typed value via state and refs. Button handlers perform Add, Minus, Times, and Divide operations, updating the result accordingly. Utility buttons reset either the input or the result. The UI surfaces both the computed result and what the user last typed, reinforcing how state changes propagate through the component.",
    techStack: ["React", "JavaScript"],
    responsibilities: [
      "Implemented arithmetic operations using React state and refs.",
      "Handled input validation and reset controls.",
      "Designed a simple, readable layout suitable for learning and demonstration.",
    ],
  },
  // Static/marketing clones
  {
    id: "netflix-clone",
    title: "Responsive Netflix Clone",
    shortDescription:
      "A pixel-perfect, responsive landing page inspired by Netflix, built to strengthen HTML5 and CSS3 layout, typography, and component structuring skills.",
    image: () => require("../assets/Netflix.jpg"),
    demoPath: "https://hamzasyed2985.github.io/Netflix/",
    demoType: "external",
    hasDetails: true,
  },
  {
    id: "razer-clone",
    title: "Responsive Razer Clone",
    shortDescription:
      "A responsive marketing page modeled after Razer’s website, focused on advanced CSS visuals, grid/flex layouts, and polished hover states.",
    image: () => require("../assets/Razer.png"),
    demoPath: "https://hamzasyed2985.github.io/Razer",
    demoType: "external",
    hasDetails: true,
  },
  {
    id: "johns-cafe",
    title: "Responsive Johns Cafe",
    shortDescription:
      "Final capstone for Johns Hopkins’ HTML, CSS & JavaScript for Web Developers (Coursera): a fully responsive café website using semantic HTML5, CSS3, Bootstrap, media queries, and JavaScript (including DOM manipulation, closures, and AJAX) to build interactive, mobile-first pages.",
    image: () => require("../assets/Johns Cafe.png"),
    demoPath: "https://hamzasyed2985.github.io/JOHN's-Cafe",
    demoType: "external",
    hasDetails: true,
    detailOverview:
      "This café website was the final capstone project for the Johns Hopkins 'HTML, CSS, and JavaScript for Web Developers' course on Coursera. The goal was to build a fully responsive, multi-page site that demonstrates semantic HTML5, modern CSS layout, and non-trivial JavaScript interactions.",
    detailProblem:
      "The project required taking a static design concept and turning it into a real, production-ready layout that works across devices. It also needed interactive behaviour driven by vanilla JavaScript rather than relying on heavy frameworks.",
    detailSolution:
      "I structured the site with semantic HTML5 sections for header, hero, menu, specials, and contact. CSS3 and Bootstrap were used together to create a grid-based, mobile-first layout with breakpoints that adapt from small screens to desktops. JavaScript handles interactive parts such as showing/hiding sections, updating content, and working with the DOM to respond to user actions. Throughout the build, I applied course concepts like closures and scope in small utilities and used AJAX patterns where appropriate to keep data and layout decoupled.",
    techStack: ["HTML5", "CSS3", "Bootstrap", "JavaScript (ES6+)", "Responsive design"],
    responsibilities: [
      "Transformed course requirements into a cohesive café brand and layout.",
      "Implemented responsive navigation and section layouts using Bootstrap and custom CSS.",
      "Used vanilla JavaScript for DOM manipulation and small interactive behaviours.",
    ],
  },
  // (duplicates of client projects were removed here to avoid repeating cards)
];

export function findProjectById(id) {
  return projects.find((p) => p.id === id);
}

function Projects() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className="main-projects px-4 sm:px-6 lg:px-8 py-10">
      <h1
        className={styles.title}
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="0"
        data-aos-easing="ease-out"
      >
        My Projects Gallery
      </h1>
      <div
        className={styles.galleryItem}
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-easing="ease-out"
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.shortDescription}
            imageSrc={project.image()}
            demoPath={project.demoPath}
            demoType={project.demoType}
            hasDetails={project.hasDetails}
            detailId={project.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;