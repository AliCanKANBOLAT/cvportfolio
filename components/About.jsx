'use client';

import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function About() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            {t.about.title}
          </h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Description */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>

            {/* Qualities List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
              {t.about.qualities.map((quality, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <svg 
                    className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{quality}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile Image with Glowing Animated Border */}
          <div className="relative group">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glowing animated border - Matrix green theme */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient bg-[length:200%_auto]" />
              
              {/* Image container */}
              <div className="relative w-full h-full bg-background rounded-2xl overflow-hidden shadow-2xl">
                {/* Image */}
                <img
                  src="/images/profilecv.jpeg"
                  alt="Ali Can Kanbolat"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay on hover - Green tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Matrix Scan Line Effect */}
                <div className="scan-line absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_5px_rgba(52,211,153,0.8)]" />
              </div>

              {/* Floating decorative elements */}
              

              {/* Floating Particles Effect on Hover */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-emerald-400/70 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
              <div className="absolute top-1/2 -right-3 w-1 h-1 bg-emerald-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Animation Keyframes */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes scan {
          0% {
            top: -5%;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            top: 105%;
            opacity: 0;
          }
        }
        .scan-line {
          top: 0;
          opacity: 0;
        }
        .group:hover .scan-line {
          animation: scan 1.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
