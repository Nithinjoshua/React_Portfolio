import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-social">
          <a href="https://github.com/Nithinjoshua" target="_blank" rel="noreferrer" className="social-link" id="footer-github" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" id="footer-linkedin" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:nithinjoshuaj@gmail.com" className="social-link" id="footer-email" aria-label="Email">
            <FiMail />
          </a>
          <a href="tel:+919345759419" className="social-link" id="footer-phone" aria-label="Phone">
            <FiPhone />
          </a>
        </div>
        <p className="footer-text">
          Designed &amp; built with ❤️ by <span>Nithin Joshua J</span> · {new Date().getFullYear()}
        </p>
        <p className="footer-text" style={{ marginTop: '8px', fontSize: '0.75rem' }}>
          B.E. CSE (AIML) · Sri Eshwar College of Engineering
        </p>
      </div>
    </footer>
  );
}
