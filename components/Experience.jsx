'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { ChevronRight, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const { language } = useLanguage();
  const t = content[language];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            {t.experience.title}
          </h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {t.experience.jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-colors ${
                  activeTab === index
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {job.company}
                {activeTab === index && (
                  <span className="absolute bottom-0 md:bottom-auto md:left-0 left-0 right-0 md:right-auto h-0.5 md:h-full md:w-0.5 w-full bg-primary md:top-0" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[300px]">
            {t.experience.jobs.map((job, index) => (
              <div
                key={index}
                className={`${activeTab === index ? 'block' : 'hidden'}`}
              >
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {job.title}
                  <span className="text-primary"> @ {job.company}</span>
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                </div>

                <ul className="space-y-3">
                  {job.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
