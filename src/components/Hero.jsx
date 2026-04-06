import { FiMail, FiPhone, FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot" />
              Open to Internships &amp; Collaborations
            </div>

            <h1 className="hero-title">
              Hi, I'm{' '}
              <span className="gradient-text">Nithin&nbsp;Joshua&nbsp;J</span>
            </h1>

            <p className="hero-subtitle">
              B.E. CSE (AIML) student at Sri Eshwar College of Engineering,
              passionate about building accessible technology and solving
              real-world problems through code.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary" id="view-projects-btn">
                View Projects <FiArrowRight />
              </a>
              <a href="mailto:nithinjoshuaj@gmail.com" className="btn-outline" id="contact-btn">
                Get in Touch <FiMail />
              </a>
            </div>

            <div className="hero-contact-row">
              <div className="hero-contact-item">
                <FiPhone size={14} />
                <span>+91 9345759419</span>
              </div>
              <div className="hero-contact-item">
                <FiMail size={14} />
                <span>nithinjoshuaj@gmail.com</span>
              </div>
              <a
                href="https://github.com/Nithinjoshua"
                target="_blank"
                rel="noreferrer"
                className="hero-contact-item"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                <FiGithub size={14} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hero-contact-item"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                <FiLinkedin size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right — Avatar & Stats */}
          <div className="hero-card">
            <div className="hero-avatar-container">
              <div className="hero-avatar-ring">
                <div className="hero-avatar-inner">
                  🧑‍💻
                </div>
              </div>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">650+</div>
                <div className="hero-stat-label">Problems Solved</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">7.27</div>
                <div className="hero-stat-label">CGPA</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">3</div>
                <div className="hero-stat-label">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
