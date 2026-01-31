'use client';

import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { ExternalLink, Github, Folder } from 'lucide-react';

export default function Projects() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">05.</span>
            {t.projects.title}
          </h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <Folder size={40} className="text-primary" />
                <div className="flex items-center gap-4">
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                    {techIndex < project.tech.length - 1 && (
                      <span className="text-primary ml-2">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* More Projects Coming Soon Card */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg border border-dashed border-border bg-card/30 min-h-[200px]">
            <Folder size={40} className="text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground text-sm text-center">
              {language === 'tr' ? 'Daha fazla proje yakında...' : 'More projects coming soon...'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
