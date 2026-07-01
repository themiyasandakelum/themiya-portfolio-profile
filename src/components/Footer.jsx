import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-meta">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Themiya Sandakelum. All rights reserved.
          </p>
          <p className="footer-tagline">
            Designed &amp; built with <span className="term-purple">React</span> &amp; <span className="term-cyan">Vanilla CSS</span>.
          </p>
        </div>

        <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll to top">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>
    </footer>
  );
}
