import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { findProjectById } from "./Projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = findProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Project not found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            The project you are looking for does not exist or details are not
            available yet.
          </p>
          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
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

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 mb-4"
        >
          ← Back
        </button>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] items-start">
          <div className="space-y-4">
            <img
              src={imageSrc}
              alt={project.title}
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 object-cover"
            />
            {videoSrc && (
              <video
                src={videoSrc}
                controls
                className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 mt-4"
              />
            )}
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h1>

            {project.shortDescription && (
              <p className="text-base text-slate-600 dark:text-slate-300">
                {project.shortDescription}
              </p>
            )}

            {project.detailOverview && (
              <p className="text-base text-slate-600 dark:text-slate-300">
                {project.detailOverview}
              </p>
            )}

            {!project.detailOverview && !project.shortDescription && (
              <p className="text-base text-slate-600 dark:text-slate-300">
                Detailed description for this project will be added soon.
              </p>
            )}

            {(project.detailProblem || project.detailSolution || project.detailImpact) && (
              <div className="space-y-3 pt-2">
                {project.detailProblem && (
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Problem
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {project.detailProblem}
                    </p>
                  </div>
                )}
                {project.detailSolution && (
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Solution
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {project.detailSolution}
                    </p>
                  </div>
                )}
                {project.detailImpact && (
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Impact
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {project.detailImpact}
                    </p>
                  </div>
                )}
              </div>
            )}

            {(project.techStack || project.responsibilities) && (
              <div className="grid gap-4 pt-4 md:grid-cols-2">
                {project.techStack && (
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                      Tech stack
                    </h2>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
                      {project.techStack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.responsibilities && (
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                      What I did
                    </h2>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
                      {project.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-4">
              {project.demoPath && (
                <button
                  type="button"
                  onClick={() => {
                    if (project.demoType === "internal") {
                      navigate(project.demoPath);
                    } else {
                      window.open(project.demoPath, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                >
                  {isGithubLink
                    ? "GitHub Link"
                    : project.demoType === "internal"
                    ? "Open App"
                    : "Live Demo"}
                </button>
              )}
              <button
                type="button"
                onClick={() => navigate("/projects")}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Back to gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;


