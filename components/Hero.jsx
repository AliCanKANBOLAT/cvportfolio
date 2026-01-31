'use client';

import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const GMAIL_LINK =
  'https://mail.google.com/mail/?view=cm&fs=1&to=kanbolat.alican@gmail.com';
  const { language } = useLanguage();
  const t = content[language];

  const cvPath = language === 'tr' 
    ? '/Ali_Can_Kanbolat_tr_techn.pdf' 
    : '/Ali_Can_Kanbolat_tech_en.pdf';

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-6">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base">
            {t.hero.greeting}
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            {t.hero.name}
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground leading-tight">
            {t.hero.title}
          </h2>

          {/* Description */}
          <p className="max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-all duration-300"
            >
              {t.hero.cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={cvPath}
              download
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-all duration-300"
            >
              <Download size={16} />
              {t.hero.downloadCV}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-8">
            <a
              href="https://github.com/alicankanbolat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/alicankanbolat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={GMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <div className="h-px w-24 bg-muted-foreground/30 ml-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
