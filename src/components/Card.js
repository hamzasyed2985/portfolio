import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSpinner } from "./SpinnerContext";

const Card = ({
  index = 0,
  title,
  description,
  imageSrc,
  demoPath,
  demoType,
  hasDetails,
  detailId,
  categoryLabel,
}) => {
  const { showSpinner, hideSpinner } = useSpinner();
  const navigate = useNavigate();

  const isInternalDemo = demoType === "internal";
  const isGithubLink = demoType === "github";

  const handleDemoClick = () => {
    if (!demoPath) return;

    if (isInternalDemo) {
      showSpinner();
      setTimeout(() => {
        navigate(demoPath);
        hideSpinner();
      }, 600);
    } else {
      window.open(demoPath, "_blank", "noopener,noreferrer");
    }
  };

  const handleDetailsClick = () => {
    if (!detailId) return;
    navigate(`/projects/details/${detailId}`);
  };

  const demoLabel = isGithubLink
    ? "GitHub"
    : isInternalDemo
      ? "Open App"
      : "Live Demo";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.35), ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col border border-[#0B0F14]/12 bg-white transition-colors hover:border-teal-600/50 dark:border-white/10 dark:bg-[#121821] dark:hover:border-teal-400/40"
    >
      <div className="relative overflow-hidden border-b border-[#0B0F14]/10 dark:border-white/10">
        <img
          src={imageSrc}
          alt={title}
          className="aspect-[16/10] h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F14]/35 via-transparent to-transparent opacity-80" />
        {categoryLabel && (
          <span className="font-mono-tech absolute left-3 top-3 border border-teal-500/40 bg-[#0B0F14]/75 px-2.5 py-1 text-[10px] tracking-[0.18em] text-teal-300 backdrop-blur-sm">
            {categoryLabel}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <p className="font-mono-tech text-[10px] tracking-[0.22em] text-teal-700 dark:text-teal-400">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="font-display mt-2 text-xl font-bold leading-snug text-[#0B0F14] dark:text-[#F4F6F8]">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5c6778] dark:text-[#8b95a5]">
          {description || "Project description coming soon."}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleDemoClick}
            className="inline-flex items-center justify-center bg-[#0B0F14] px-4 py-2.5 text-sm font-semibold text-[#F4F6F8] transition-colors hover:bg-teal-700 dark:bg-teal-400 dark:text-[#0B0F14] dark:hover:bg-teal-300"
          >
            {demoLabel}
          </button>
          {hasDetails && (
            <button
              type="button"
              onClick={handleDetailsClick}
              className="inline-flex items-center justify-center border border-[#0B0F14]/25 px-4 py-2.5 text-sm font-semibold text-[#0B0F14] transition-colors hover:border-teal-600 hover:text-teal-700 dark:border-white/25 dark:text-[#F4F6F8] dark:hover:border-teal-400 dark:hover:text-teal-300"
            >
              Case study
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default Card;
