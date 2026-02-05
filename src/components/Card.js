import React from "react";
import { useNavigate } from "react-router-dom";
import { useSpinner } from "./SpinnerContext";

const styles = {
  card:
    "flex flex-col w-full sm:w-[30%] max-w-sm justify-start items-stretch overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl my-4 shadow-sm hover:shadow-md transition duration-300 ease-in-out",
  image: "w-full h-48 object-cover",
  title:
    "px-5 pt-4 text-lg font-semibold tracking-tight text-slate-900 dark:text-white",
  description:
    "px-5 pt-1 pb-3 text-sm text-slate-600 dark:text-slate-300 min-h-[40px]",
  buttonRow: "px-5 pb-4 pt-1 flex flex-wrap gap-3",
  primaryButton:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:brightness-110",
  secondaryButton:
    "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition",
};

const Card = ({
  title,
  description,
  imageSrc,
  demoPath,
  demoType,
  hasDetails,
  detailId,
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

  return (
    <div className={`${styles.card} card`}>
      <div className="overflow-hidden">
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
      <p className={styles.title}>{title}</p>
      {description ? (
        <p className={styles.description}>{description}</p>
      ) : (
        <p className={styles.description + " opacity-70"}>
          Project description coming soon.
        </p>
      )}
      <div className={styles.buttonRow}>
        <button
          type="button"
          className={styles.primaryButton}
          onClick={handleDemoClick}
        >
          <span>
            {isGithubLink ? "GitHub Link" : isInternalDemo ? "Open App" : "Live Demo"}
          </span>
        </button>
        {hasDetails && (
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={handleDetailsClick}
          >
            <span>View details</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
