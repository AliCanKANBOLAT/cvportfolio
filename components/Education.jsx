"use client";

import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/content";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            {t.education.title}
          </h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="space-y-6">
          {t.education.items.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-l-primary bg-card/50 rounded-lg p-6 hover:bg-card/80 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.degree}
                </h3>
              </div>

              <p className="text-lg font-medium text-primary mb-3">
                {item.school}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {item.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {item.period}
                </span>
              </div>

              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
