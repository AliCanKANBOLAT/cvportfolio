'use client';

import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle } from 'lucide-react';

const GMAIL_LINK =
  'https://mail.google.com/mail/?view=cm&fs=1&to=kanbolat.alican@gmail.com';

const WHATSAPP_LINK = 'https://wa.me/905395869548';

export default function Contact() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="mx-auto max-w-2xl text-center">
        {/* Section Title */}
        <p className="text-primary font-mono text-sm mb-4">
          06. {language === 'tr' ? 'Sırada ne var?' : "What's Next?"}
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          {t.contact.title}
        </h2>

        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          {t.contact.subtitle}.{' '}
          {language === 'tr'
            ? 'Yeni fırsatlar için her zaman açığım. İster bir sorunuz olsun ister sadece merhaba demek isteyin, size dönüş yapacağım!'
            : "I'm always open to new opportunities. Whether you have a question or just want to say hi, I'll get back to you!"}
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {/* Gmail */}
          <a
            href={GMAIL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={18} />
            <span className="text-sm">kanbolat.alican@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+905395869548"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm">+90 539 586 95 48</span>
          </a>

          {/* Location */}
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={18} />
            <span className="text-sm">{t.contact.location}</span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Gmail CTA */}
          <a
            href={GMAIL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-all duration-300"
          >
            <Send size={16} />
            {language === 'tr' ? 'Mail Gönder' : 'Send via Gmail'}
          </a>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-green-600 text-green-600 font-mono text-sm rounded hover:bg-green-600/10 transition-all duration-300"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href={t.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-green-600 hover:-translate-y-1 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
