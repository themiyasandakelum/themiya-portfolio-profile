import React, { useState } from 'react';

const SKILLS = {
  languages: [
    { name: 'C# / .NET Core', level: 90 },
    { name: 'TypeScript / JavaScript', level: 85 },
    { name: 'Java (Spring Boot)', level: 75 },
    { name: 'SQL (MySQL, MsSQL, Postgres)', level: 85 },
    { name: 'HTML5 & CSS3 / Styling', level: 80 }
  ],
  frameworks: [
    { name: 'Angular (with NgRx)', level: 85 },
    { name: 'Vue.js / PlatformOne', level: 80 },
    { name: 'React.js / Next.js', level: 75 },
    { name: 'ASP.NET / Web API', level: 90 },
    { name: 'Node.js', level: 70 }
  ],
  tools: [
    { name: 'Azure Graph API & MSAL', level: 85 },
    { name: 'Identity Server 4', level: 80 },
    { name: 'RabbitMQ & Message Brokers', level: 75 },
    { name: 'Elasticsearch & Kibana', level: 75 },
    { name: 'Docker', level: 70 },
    { name: 'AI Platforms (Gemini, Vertex AI)', level: 80 }
  ]
};

export default function About() {
  const [activeTab, setActiveTab] = useState('languages');

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '3+', label: 'Enterprise Systems' },
    { value: '25+', label: 'Technologies Mastered' },
    { value: '100%', label: 'Commitment to Quality' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid-2 about-layout">
          <div className="about-details">
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <div style={{ flexShrink: 0, margin: '0 auto' }}>
                <div style={{
                  position: 'relative',
                  width: '180px',
                  height: '180px',
                  borderRadius: '24px',
                  padding: '3px',
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  boxShadow: 'var(--shadow-glow)'
                }}>
                  <img 
                    src="/profile.jpg" 
                    alt="Themiya Sandakelum" 
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '21px',
                      objectFit: 'cover',
                      display: 'block',
                      background: 'var(--bg-secondary)'
                    }}
                  />
                </div>
              </div>
              <div style={{ flex: '1', minWidth: '280px' }}>
                <h3 className="about-subheading" style={{ marginTop: 0 }}>
                  Building Premium Full-Stack Solutions and <span className="text-gradient">Scalable Architectures</span>
                </h3>
                <p className="about-text">
                  I am a Senior Software Engineer with a passion for building robust backend services and dynamic, responsive frontends. I have extensive experience in designing and optimizing APIs using .NET, C#, and Entity Framework, as well as crafting seamless user interfaces with Angular and Vue.js.
                </p>
                <p className="about-text">
                  Throughout my career, I've successfully engineered lawyer case management systems, microservices-based insight community products, and automated email and user management pipelines integrating Azure Graph and MSAL services. I value clean code, agile practices, and integrating modern AI capabilities like Gemini and Vertex AI to solve real-world problems.
                </p>
              </div>
            </div>
            
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card glass-panel">
                  <div className="stat-value text-gradient">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-container glass-panel">
            <h3 className="skills-title">Technical Competencies</h3>
            <p className="skills-intro">Select a tab to view my proficiency across different technology domains:</p>
            
            <div className="skills-tabs">
              <button
                className={`tab-btn ${activeTab === 'languages' ? 'active-tab-btn' : ''}`}
                onClick={() => setActiveTab('languages')}
              >
                Languages
              </button>
              <button
                className={`tab-btn ${activeTab === 'frameworks' ? 'active-tab-btn' : ''}`}
                onClick={() => setActiveTab('frameworks')}
              >
                Frameworks &amp; Web
              </button>
              <button
                className={`tab-btn ${activeTab === 'tools' ? 'active-tab-btn' : ''}`}
                onClick={() => setActiveTab('tools')}
              >
                Tools &amp; Platforms
              </button>
            </div>
            
            <div className="skills-list">
              {SKILLS[activeTab].map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ 
                        width: `${skill.level}%`,
                        background: activeTab === 'tools' 
                          ? 'linear-gradient(90deg, var(--accent-tertiary), var(--accent-primary))' 
                          : activeTab === 'frameworks'
                          ? 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))'
                          : 'linear-gradient(90deg, var(--accent-secondary), var(--accent-primary))'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
