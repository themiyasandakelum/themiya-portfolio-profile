import React, { useState, useEffect } from 'react';

const ROLES = [
  'Senior Software Engineer',
  'Full-Stack Developer',
  '.NET & Angular Specialist',
  'AI Integration Developer'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullRole = ROLES[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentFullRole) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-status-tag float-anim" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.4rem 1rem 0.4rem 0.4rem' }}>
            <img 
              src="/profile.jpg" 
              alt="Themiya" 
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid var(--accent-primary)'
              }}
            />
            <span className="pulse-indicator"></span>
            Available for new opportunities
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Themiya Sandakelum</span>
          </h1>
          
          <h2 className="hero-subtitle">
            I build <span className="typed-cursor">{displayText}</span>
            <span className="cursor-pipe">|</span>
          </h2>
          
          <p className="hero-description">
            Specializing in building robust full-stack web applications, scalable .NET API systems, dynamic Angular interfaces, and seamless AI integrations. Focused on delivering high-quality, production-ready code.
          </p>
          
          <div className="hero-actions">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <a href="/Themiya_Sandakelum_CV.pdf" download className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              Download CV
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Let's Connect
            </button>
          </div>
        </div>

        <div className="hero-graphic">
          <div className="visual-container">
            {/* Embedded interactive developer console UI */}
            <div className="terminal-mockup glass-panel">
              <div className="terminal-header">
                <span className="terminal-dot dot-red"></span>
                <span className="terminal-dot dot-yellow"></span>
                <span className="terminal-dot dot-green"></span>
                <span className="terminal-title">system_status.sh</span>
              </div>
              <div className="terminal-body">
                <p className="terminal-line"><span className="term-green">themiya@dev-node-01:~$</span> curl -s https://api.themiya.dev/status | jq</p>
                <p className="terminal-line term-gray">{"{"}</p>
                <p className="terminal-line term-gray">&nbsp;&nbsp;"status": <span className="term-cyan">"active_and_scaling"</span>,</p>
                <p className="terminal-line term-gray">&nbsp;&nbsp;"uptime": <span className="term-yellow">"99.9% (since 2021)"</span>,</p>
                <p className="terminal-line term-gray">&nbsp;&nbsp;"skills": [</p>
                <p className="terminal-line term-gray">&nbsp;&nbsp;&nbsp;&nbsp;<span className="term-purple">".NET 7"</span>, <span className="term-purple">"Angular"</span>, <span className="term-purple">"VueJS"</span>,</p>
                <p className="terminal-line term-gray">&nbsp;&nbsp;&nbsp;&nbsp;<span className="term-purple">"C#"</span>, <span className="term-purple">"TypeScript"</span>, <span className="term-purple">"AI Platforms"</span></p>
                <p className="terminal-line term-gray">&nbsp;&nbsp;],</p>
                <p className="terminal-line term-gray">&nbsp;&nbsp;"metrics": {"{"}</p>
                <p className="terminal-line term-gray">&nbsp;&nbsp;&nbsp;&nbsp;"queries_per_sec": <span className="term-cyan">12500</span>,</p>
                <p className="terminal-line term-gray">&nbsp;&nbsp;&nbsp;&nbsp;"llm_latency_ms": <span className="term-cyan">38</span></p>
                <p className="terminal-line term-gray">&nbsp;&nbsp;{"}"}</p>
                <p className="terminal-line term-gray">{"}"}</p>
                <p className="terminal-line"><span className="term-green">themiya@dev-node-01:~$</span> <span className="terminal-blink">_</span></p>
              </div>
            </div>
            {/* Tech nodes behind terminal */}
            <div className="tech-nodes">
              <div className="node node-go font-mono" style={{ background: '#178600', borderColor: '#24c000' }}>C#</div>
              <div className="node node-py font-mono" style={{ background: '#dd0031', borderColor: '#ff3b68' }}>Ng</div>
              <div className="node node-k8s font-mono" style={{ background: '#007acc', borderColor: '#33b3ff' }}>.NET</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
