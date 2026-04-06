const certifications = [
  {
    icon: '📜',
    iconClass: 'purple',
    name: 'C - Programming Course (Hands-On)',
    issuer: 'Skillrack',
    badge: 'Completed',
  },
  {
    icon: '🎯',
    iconClass: 'cyan',
    name: 'Data Structures and Algorithms using C and C++',
    issuer: 'Udemy',
    badge: 'Completed',
  },
  {
    icon: '🏛️',
    iconClass: 'yellow',
    name: 'Completion of C++ Training | Tutorial Project',
    issuer: 'IIT Bombay',
    badge: 'Certified',
  },
];

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-desc">Courses and programs that have strengthened my technical foundation.</p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div className="cert-card" key={i} id={`cert-${i}`}>
              <div className={`cert-icon ${cert.iconClass}`}>{cert.icon}</div>
              <div className="cert-body">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">
                  <span>🏢</span>
                  <span>{cert.issuer}</span>
                </div>
                <span className="cert-badge">✓ {cert.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
