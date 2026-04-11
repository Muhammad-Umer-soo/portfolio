import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiExternalLinkLine,
  RiGithubLine,
  RiLoader4Line,
} from "react-icons/ri";
import { useProjects } from "../hooks/useProjects";
import { map } from "framer-motion/client";

function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group card-glass rounded-2xl overflow-hidden hover:border-brand-500/40 hover:glow-brand transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-dark-700">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl text-dark-500">
            🖥️
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 via-transparent to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {(project.tech_stack || []).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-mono bg-brand-500/10 text-brand-400 border border-brand-500/20 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-500 hover:bg-brand-600 text-dark-900 text-xs font-semibold rounded-lg transition-colors"
            >
              <RiExternalLinkLine size={14} />
              Live Demo
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-dark-600 hover:bg-dark-500 border border-dark-500/60 text-slate-300 text-xs font-semibold rounded-lg transition-colors"
            >
              <RiGithubLine size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { projects, loading, error, filter, setFilter, allTechs } =
    useProjects();

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/20 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <div data-aos="fade-down" className="flex items-center gap-4 mb-6">
          <h2 className="font-display text-4xl font-bold text-white">
            Projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-brand-500/30 to-transparent" />
        </div>

        <p data-aos="fade-up" className="text-slate-400 mb-10 max-w-xl">
          A selection of things I've built from side projects to client work.
        </p>

        {/* Filter Tabs */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-wrap gap-2 mb-12 overflow-x-auto scrollbar-hide"
        >
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-1.5 rounded-lg text-sm font-mono transition-all whitespace-nowrap ${
                filter === tech
                  ? "bg-brand-500 text-dark-900 font-semibold shadow-lg shadow-brand-500/20"
                  : "bg-dark-700 border border-dark-500/50 text-slate-400 hover:border-brand-500/40 hover:text-brand-400"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-24">
            <RiLoader4Line className="text-brand-400 text-4xl animate-spin" />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-12 text-red-400 font-mono text-sm">
            ⚠ Could not load projects. Check your Supabase config.
          </div>
        )}

        {/* Grid */}
        {!loading && (
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {!loading && projects.length === 0 && (
          <div className="text-center py-20 text-slate-600 font-mono">
            No projects found for "{filter}"
          </div>
        )}
      </div>
    </section>
  );
}
