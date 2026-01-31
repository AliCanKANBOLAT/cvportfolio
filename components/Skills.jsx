'use client';

import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Code2, Headphones, Settings, Briefcase } from 'lucide-react';

const icons = [Code2, Headphones, Settings, Briefcase];

export default function Skills() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">04.</span>
            {t.skills.title}
          </h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {t.skills.categories.map((category, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
