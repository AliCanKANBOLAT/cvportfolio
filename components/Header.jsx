'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const t = content[language];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#education', label: t.nav.education },
    { href: '#experience', label: t.nav.experience },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          
<div className="text-xl md:text-2xl font-bold">
  <span className="italic bg-gradient-to-r from-primary via-green-400 to-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block cursor-pointer"
        style={{fontFamily: 'mono, serif'}}>
    Ali Can Kanbolat
  </span>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary font-mono text-xs mr-1">
                  0{index + 1}.
                </span>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-xs font-mono border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
            >
              {language === 'tr' ? 'EN' : 'TR'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-mono border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
            >
              {language === 'tr' ? 'EN' : 'TR'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary font-mono text-xs mr-2">
                    0{index + 1}.
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
