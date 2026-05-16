import React from 'react';

const ContactCard = () => {
  return (
    <div className="ticket-card rounded-lg p-5 max-w-[280px] cursor-pointer group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-[0.25em] font-medium text-cream-300">
          Hire Me
        </span>
        <div className="flex gap-1">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-vermillion opacity-60" />
          ))}
        </div>
      </div>
      
      <div className="ticket-perforation my-3 pt-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded border border-vermillion/30 flex items-center justify-center bg-vermillion/10 group-hover:bg-vermillion/20 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C43A31" strokeWidth="2">
              <polyline points="16,18 22,12 16,6" />
              <polyline points="8,6 2,12 8,18" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-cream-200">Fi Zilalil Huda</p>
            <p className="text-xs text-cream-400 mt-0.5">Full-Stack Developer</p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <a
          href="https://www.linkedin.com/in/fi-zilalil-huda-90371324a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-vermillion hover:text-vermillion-light transition-colors underline underline-offset-2"
        >
          LinkedIn
        </a>
        <span className="text-cream-500 text-xs">·</span>
        <a
          href="https://github.com/akiyamanico"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-vermillion hover:text-vermillion-light transition-colors underline underline-offset-2"
        >
          GitHub
        </a>
        <span className="text-cream-500 text-xs">·</span>
        <a
          href="mailto:fizi8889@gmail.com"
          className="text-xs text-vermillion hover:text-vermillion-light transition-colors underline underline-offset-2"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
