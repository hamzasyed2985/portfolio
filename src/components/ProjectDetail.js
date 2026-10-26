import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { findProjectById } from "./Projects";
import { useSpinner } from "./SpinnerContext";

const ease = [0.22, 1, 0.36, 1];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showSpinner, hideSpinner } = useSpinner();

  const project = findProjectById(id);

  if (!project) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#F4F6F8] px-4 dark:bg-[#0B0F14]">
        <div className="max-w-md text-center">
          <p className="font-mono-tech text-xs tracking-[0.28em] text-teal-600 dark:text-teal-400">
            404
          </p>
          <h1 className="font-display mt-3 text-3xl font-bold text-[#0B0F14] dark:text-[#F4F6F8]">
            Project not found
          </h1>
          <p className="mt-3 text-[#5c6778] dark:text-[#8b95a5]">
            This project doesn&apos;t exist or details aren&apos;t available yet.
          </p>
          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="mt-8 inline-flex bg-teal-500 px-6 py-3 text-sm font-semibold text-[#0B0F14] transition-colors hover:bg-teal-400"
          >
            Back to projects
          </button>
        </div>
      </div>
    );
  }

  const imageSrc = project.image();
  const videoSrc = project.videoSrc ? project.videoSrc() : null;
  const isGithubLink = project.demoType === "github";
  const isInternal = project.demoType === "internal";

  const openDemo = () => {
    if (!project.demoPath) return;
    if (isInternal) {
      showSpinner();
      setTimeout(() => {
        navigate(project.demoPath);
        hideSpinner();
      }, 600);
    } else {
      window.open(project.demoPath, "_blank", "noopener,noreferrer");
    }
  };

  const demoLabel = isGithubLink
    ? "GitHub"
    : isInternal
      ? "Open App"
      : "Live Demo";

  return (
    <div className="relative overflow-hidden bg-[#F4F6F8] text-[#0B0F14] dark:bg-[#0B0F14] dark:text-[#F4F6F8]">
      <div className="pointer-events-none absolute inset-0 terminal-grid opacity-40 dark:opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.button
          type="button"
          onClick={() => navigate("/projects")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono-tech text-xs tracking-[0.2em] text-[#5c6778] transition-colors hover:text-teal-700 dark:text-[#8b95a5] dark:hover:text-teal-300"
        >
          ← BACK TO PROJECTS
        </motion.button>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="space-y-5"
          >
            <div className="overflow-hidden border border-[#0B0F14]/12 dark:border-white/10">
              <img
                src={imageSrc}
                alt={project.title}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            {videoSrc && (
              <video
                src={videoSrc}
                controls
                className="w-full border border-[#0B0F14]/12 dark:border-white/10"
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="space-y-6"
          >
            <div>
              <p className="font-mono-tech text-xs tracking-[0.28em] text-teal-600 dark:text-teal-400">
                CASE STUDY
              </p>
              <h1 className="font-display mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                {project.title}
              </h1>
            </div>

            {project.shortDescription && (
              <p className="text-base leading-relaxed text-[#5c6778] dark:text-[#8b95a5]">
                {project.shortDescription}
              </p>
            )}

            {project.detailOverview && (
              <p className="text-base leading-relaxed text-[#3d4654] dark:text-[#c5ccd6]">
                {project.detailOverview}
              </p>
            )}

            {!project.detailOverview && !project.shortDescription && (
              <p className="text-base text-[#5c6778] dark:text-[#8b95a5]">
                Detailed description for this project will be added soon.
              </p>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              {project.demoPath && (
                <button
                  type="button"
                  onClick={openDemo}
                  className="inline-flex bg-[#0B0F14] px-6 py-3 text-sm font-semibold text-[#F4F6F8] transition-colors hover:bg-teal-700 dark:bg-teal-400 dark:text-[#0B0F14] dark:hover:bg-teal-300"
                >
                  {demoLabel}
                </button>
              )}
              <Link
                to="/contact"
                className="inline-flex border border-[#0B0F14]/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-teal-600 hover:text-teal-700 dark:border-white/25 dark:hover:border-teal-400 dark:hover:text-teal-300"
              >
                Discuss similar work
              </Link>
            </div>
          </motion.div>
        </div>

        {(project.detailProblem ||
          project.detailSolution ||
          project.detailImpact) && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="mt-16 grid gap-0 border border-[#0B0F14]/10 dark:border-white/10 md:grid-cols-3"
          >
            {[
              { title: "Problem", body: project.detailProblem },
              { title: "Solution", body: project.detailSolution },
              { title: "Impact", body: project.detailImpact },
            ]
              .filter((block) => block.body)
              .map((block, index) => (
                <div
                  key={block.title}
                  className="border-[#0B0F14]/10 p-6 dark:border-white/10 md:border-r md:last:border-r-0"
                >
                  <p className="font-mono-tech text-[10px] tracking-[0.22em] text-teal-700 dark:text-teal-400">
                    {String(index + 1).padStart(2, "0")} · {block.title.toUpperCase()}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5c6778] dark:text-[#8b95a5]">
                    {block.body}
                  </p>
                </div>
              ))}
          </motion.section>
        )}

        {(project.techStack || project.responsibilities) && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="mt-10 grid gap-8 lg:grid-cols-2"
          >
            {project.techStack && (
              <div className="border border-[#0B0F14]/10 bg-white/70 p-6 dark:border-white/10 dark:bg-[#121821]/60 sm:p-8">
                <p className="font-mono-tech text-xs tracking-[0.28em] text-teal-600 dark:text-teal-400">
                  TECH STACK
                </p>
                <ul className="mt-5 space-y-3">
                  {project.techStack.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-teal-500/60 pl-3 text-sm text-[#3d4654] dark:text-[#c5ccd6]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.responsibilities && (
              <div className="border border-[#0B0F14]/10 bg-white/70 p-6 dark:border-white/10 dark:bg-[#121821]/60 sm:p-8">
                <p className="font-mono-tech text-xs tracking-[0.28em] text-teal-600 dark:text-teal-400">
                  WHAT I DID
                </p>
                <ul className="mt-5 space-y-3">
                  {project.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-teal-500/60 pl-3 text-sm text-[#3d4654] dark:text-[#c5ccd6]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
