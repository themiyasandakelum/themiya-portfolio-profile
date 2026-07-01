import React, { useState } from 'react';

const PROJECTS = [
  {
    id: 'aeliuscase',
    title: 'Aeliuscase Lawyer Portal',
    category: 'systems',
    tagline: 'Tailored enterprise legal suite managing court cases, tasks, and client documents.',
    shortDesc: 'A law firm management solution designed to handle lawyer workflows, case statuses, client interactions, and invoicing, built on a robust backend API.',
    tech: ['.NET 7', 'Entity Framework', 'Angular', 'MySQL', 'IIS', 'C#'],
    metrics: [
      { label: 'Page Load Time', value: '< 1.5s' },
      { label: 'Database Queries', value: 'Optimized via EF' },
      { label: 'User Rating', value: '4.8/5' }
    ],
    problem: 'Lawyers struggled with fragmented tools for tracking active cases, client logs, billable hours, and scheduling court appearances, leading to lost time and billing errors.',
    solution: 'Contributed to the development of Aeliuscase, designing optimized MySQL schemas and writing scalable C# APIs using .NET 7. Built a clean Angular front-end to streamline lawyer workflows, resulting in high responsiveness and automated invoicing.',
    diagramType: 'aeliuscase'
  },
  {
    id: 'platformone',
    title: 'PlatformOne Experience Suite',
    category: 'systems',
    tagline: 'High-throughput Experience Management and Insight Community platform.',
    shortDesc: 'An all-in-one experience management application leveraging a microservices architecture to process large-scale insight data under ISO-27001 standards.',
    tech: ['VueJS', 'C#.NET', 'ASP.NET Core', 'SQL Server', 'IIS', 'RabbitMQ', 'Elasticsearch', 'Docker'],
    metrics: [
      { label: 'System Compliance', value: 'ISO-27001' },
      { label: 'Log Analysis', value: 'ELK Stack' },
      { label: 'Dev Environment', value: 'Dockerized' }
    ],
    problem: 'Processing and indexing high-volume client survey responses and real-time community engagement insights introduced latency and data synchronization lag.',
    solution: 'Developed microservices to handle insight ingestion, integrating Elasticsearch and Kibana for real-time log analysis and RabbitMQ for asynchronous event brokerage. Developed clean front-end components using VueJS.',
    diagramType: 'platformone'
  },
  {
    id: 'medcube_gateway',
    title: 'Medcube Email & Identity Gateway',
    category: 'ai',
    tagline: 'Secure enterprise communications hub with automated email routing and Graph API integrations.',
    shortDesc: 'An automated email integration and authentication gateway linking Microsoft 365, Angular frontends, and .NET core backends.',
    tech: ['.NET Core Graph', 'Angular MSAL', 'Identity Server 4', 'Gmail/Yahoo SMTP', 'Gemini API', 'MySQL'],
    metrics: [
      { label: 'Authentication', value: 'MSAL / OAuth2' },
      { label: 'AI Email Drafts', value: 'Sub-3s Latency' },
      { label: 'Security Standard', value: 'Identity Server 4' }
    ],
    problem: 'Integrating corporate emails securely across multiple providers and automating draft classification required a unified identity structure and secure API brokers.',
    solution: 'Implemented MSAL/Angular and .NET Graph API solutions to synchronize user directories and emails. Leveraged Identity Server 4 for secure OAuth2 logins, and used the Gemini API/Vertex AI to generate automated draft responses for incoming client emails.',
    diagramType: 'medcube_gateway'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const renderArchitectureDiagram = (type) => {
    if (type === 'aeliuscase') {
      return (
        <svg viewBox="0 0 600 280" className="arch-svg">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#6366f1" />
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
            </marker>
          </defs>
          <rect width="600" height="280" rx="10" fill="rgba(10,11,16,0.6)" stroke="rgba(255,255,255,0.05)" />

          {/* Angular Frontend */}
          <g transform="translate(40, 95)">
            <rect width="110" height="70" rx="6" fill="#1e1b4b" stroke="#dd0031" strokeWidth="2" />
            <text x="55" y="30" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold" fontFamily="monospace">Angular App</text>
            <text x="55" y="48" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Client Portal UI</text>
          </g>

          {/* .NET 7 Web API */}
          <g transform="translate(235, 95)">
            <rect width="130" height="70" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
            <text x="65" y="30" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold" fontFamily="monospace">.NET 7 Web API</text>
            <text x="65" y="48" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">C# Controller Layer</text>
          </g>

          {/* Entity Framework & MySQL */}
          <g transform="translate(450, 95)">
            <rect width="110" height="70" rx="6" fill="#18181b" stroke="#007acc" strokeWidth="2" />
            <text x="55" y="30" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold" fontFamily="monospace">MySQL DB</text>
            <text x="55" y="48" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">EF Core Storage</text>
          </g>

          {/* Flow Lines */}
          <path d="M 150 130 L 235 130" fill="none" stroke="#dd0031" strokeWidth="2" markerEnd="url(#arrow)" className="flow-line" />
          <path d="M 365 130 L 450 130" fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" className="flow-line" />
        </svg>
      );
    }
    
    if (type === 'platformone') {
      return (
        <svg viewBox="0 0 600 280" className="arch-svg">
          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#41b883" />
            </marker>
            <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#a855f7" />
            </marker>
          </defs>
          <rect width="600" height="280" rx="10" fill="rgba(10,11,16,0.6)" stroke="rgba(255,255,255,0.05)" />

          {/* VueJS Frontend */}
          <g transform="translate(30, 95)">
            <rect width="100" height="65" rx="6" fill="#1e293b" stroke="#41b883" strokeWidth="2" />
            <text x="50" y="28" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold" fontFamily="monospace">VueJS Web App</text>
            <text x="50" y="44" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">ISO-27001 UI</text>
          </g>

          {/* RabbitMQ */}
          <g transform="translate(170, 45)">
            <rect width="110" height="60" rx="6" fill="#0f172a" stroke="#ff6600" strokeWidth="2" />
            <text x="55" y="28" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold" fontFamily="monospace">RabbitMQ Broker</text>
            <text x="55" y="44" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Async Ingestion</text>
          </g>

          {/* ASP.NET Microservices */}
          <g transform="translate(320, 95)">
            <rect width="120" height="65" rx="6" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
            <text x="60" y="28" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold" fontFamily="monospace">.NET Microservices</text>
            <text x="60" y="44" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Processing Nodes</text>
          </g>

          {/* SQL / ELK */}
          <g transform="translate(480, 95)">
            <rect width="90" height="65" rx="6" fill="#064e3b" stroke="#005a9c" strokeWidth="2" />
            <text x="45" y="28" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold" fontFamily="monospace">SQL / ES</text>
            <text x="45" y="44" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Storage & Index</text>
          </g>

          {/* Paths */}
          <path d="M 130 115 L 170 85" fill="none" stroke="#41b883" strokeWidth="2" markerEnd="url(#arrow-blue)" className="flow-line" />
          <path d="M 130 140 L 320 140" fill="none" stroke="#41b883" strokeWidth="2" markerEnd="url(#arrow-blue)" className="flow-line" />
          <path d="M 280 75 L 320 105" fill="none" stroke="#ff6600" strokeWidth="2" markerEnd="url(#arrow-purple)" className="flow-line" />
          <path d="M 440 128 L 480 128" fill="none" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow-purple)" className="flow-line" />
        </svg>
      );
    }

    if (type === 'medcube_gateway') {
      return (
        <svg viewBox="0 0 600 280" className="arch-svg">
          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
            </marker>
            <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#a855f7" />
            </marker>
          </defs>
          <rect width="600" height="280" rx="10" fill="rgba(10,11,16,0.6)" stroke="rgba(255,255,255,0.05)" />

          {/* Angular / MSAL Client */}
          <g transform="translate(20, 110)">
            <rect width="100" height="50" rx="4" fill="#0f172a" stroke="#dd0031" strokeWidth="1.5" />
            <text x="50" y="28" textAnchor="middle" fill="#f8fafc" fontSize="9" fontWeight="bold" fontFamily="monospace">Angular client</text>
            <text x="50" y="42" textAnchor="middle" fill="#cbd5e1" fontSize="7" fontFamily="monospace">MSAL Secured</text>
          </g>

          {/* Identity Server 4 */}
          <g transform="translate(140, 45)">
            <rect width="100" height="50" rx="6" fill="#18181b" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="50" y="24" textAnchor="middle" fill="#f8fafc" fontSize="9" fontWeight="bold" fontFamily="monospace">IdentityServer4</text>
            <text x="50" y="38" textAnchor="middle" fill="#93c5fd" fontSize="7" fontFamily="monospace">OAuth2 / OIDC</text>
          </g>

          {/* .NET Core Graph Service */}
          <g transform="translate(140, 155)">
            <rect width="100" height="50" rx="6" fill="#1e1b4b" stroke="#10b981" strokeWidth="1.5" />
            <text x="50" y="24" textAnchor="middle" fill="#f8fafc" fontSize="9" fontWeight="bold" fontFamily="monospace">.NET Graph API</text>
            <text x="50" y="38" textAnchor="middle" fill="#a7f3d0" fontSize="7" fontFamily="monospace">Broker Service</text>
          </g>

          {/* Microsoft Graph API Cloud */}
          <g transform="translate(320, 100)">
            <rect width="120" height="60" rx="6" fill="#064e3b" stroke="#007acc" strokeWidth="1.5" />
            <text x="60" y="26" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold" fontFamily="monospace">Microsoft Graph</text>
            <text x="60" y="42" textAnchor="middle" fill="#93c5fd" fontSize="8" fontFamily="monospace">Azure Directory Cloud</text>
          </g>

          {/* Gemini API */}
          <g transform="translate(480, 100)">
            <rect width="100" height="60" rx="6" fill="#12131e" stroke="#ef4444" strokeWidth="1.5" />
            <text x="50" y="26" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold" fontFamily="monospace">Gemini API</text>
            <text x="50" y="42" textAnchor="middle" fill="#fca5a5" fontSize="8" fontFamily="monospace">AI Draft Assistant</text>
          </g>

          {/* Paths */}
          <path d="M 70 110 L 140 70" fill="none" stroke="#dd0031" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
          <path d="M 70 160 L 140 180" fill="none" stroke="#dd0031" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
          <path d="M 240 180 L 290 180 L 290 130 L 320 130" fill="none" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
          <path d="M 440 130 L 480 130" fill="none" stroke="#007acc" strokeWidth="1.5" markerEnd="url(#arrow-purple)" className="flow-line" />
        </svg>
      );
    }
  };

  return (
    <section id="projects" className="section bg-secondary-wrap">
      <div className="container">
        <h2 className="section-title">Deep-Dive Projects</h2>
        
        <div className="filter-tabs">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active-filter' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Work
          </button>
          <button 
            className={`filter-btn ${filter === 'systems' ? 'active-filter' : ''}`}
            onClick={() => setFilter('systems')}
          >
            Core Systems
          </button>
          <button 
            className={`filter-btn ${filter === 'ai' ? 'active-filter' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI Integrations
          </button>
        </div>

        <div className="grid-3 projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              <div className="project-header">
                <span className={`badge ${project.category === 'systems' ? 'badge-primary' : 'badge-secondary'}`}>
                  {project.category === 'systems' ? 'Backend / Systems' : 'AI / ML'}
                </span>
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-tagline">{project.tagline}</p>
              
              <div className="project-metrics-strip">
                {project.metrics.slice(0, 2).map((m, i) => (
                  <div key={i} className="metric-box">
                    <span className="metric-lbl">{m.label}</span>
                    <span className="metric-val">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="project-card-footer">
                <button onClick={() => setSelectedProject(project)} className="btn btn-secondary btn-sm read-more-btn">
                  System Deep-Dive
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Modal Overlay */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-header-section">
              <span className={`badge ${selectedProject.category === 'systems' ? 'badge-primary' : 'badge-secondary'}`}>
                {selectedProject.category === 'systems' ? 'System Infrastructure' : 'AI Systems Integration'}
              </span>
              <h2 className="modal-project-title text-gradient">{selectedProject.title}</h2>
              <p className="modal-project-tagline">{selectedProject.tagline}</p>
            </div>

            <div className="modal-grid">
              <div className="modal-details-side">
                <div className="modal-section-block">
                  <h4 className="modal-section-title">The Challenge</h4>
                  <p className="modal-section-text">{selectedProject.problem}</p>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-section-title">The Solution &amp; Execution</h4>
                  <p className="modal-section-text">{selectedProject.solution}</p>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-section-title">Technology Stack</h4>
                  <div className="tech-tags-list">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="tech-tag font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-diagram-side">
                <h4 className="modal-section-title arch-title-flex">
                  System Architecture
                  <span className="arch-pulse-tag">
                    <span className="pulse-indicator"></span> Live Data Pipeline Simulated
                  </span>
                </h4>
                
                <div className="diagram-wrapper">
                  {renderArchitectureDiagram(selectedProject.diagramType)}
                </div>

                <div className="modal-metrics-container">
                  <h4 className="modal-section-title">Performance Outcomes</h4>
                  <div className="modal-metrics-grid">
                    {selectedProject.metrics.map((m, idx) => (
                      <div key={idx} className="modal-metric-card">
                        <span className="modal-metric-value text-gradient-systems">{m.value}</span>
                        <span className="modal-metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
