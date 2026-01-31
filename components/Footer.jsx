'use client';

import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language];
  const currentYear = new Date().getFullYear();
  const GMAIL_LINK =
  'https://mail.google.com/mail/?view=cm&fs=1&to=kanbolat.alican@gmail.com';
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links - Mobile Only */}
          <div className="flex items-center gap-6 md:hidden">
            <a
              href="https://github.com/alicankanbolat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/alicankanbolat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={GMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Credits */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm font-mono">
              {t.footer.builtWith}
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2">
              &copy; {currentYear} Ali Can Kanbolat. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
