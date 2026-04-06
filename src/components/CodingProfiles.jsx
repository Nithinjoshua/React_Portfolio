const profiles = [
  {
    logo: '⚡',
    name: 'Skillrack',
    stat: '650+ Problems Solved',
    highlight: '650+',
    highlightLabel: 'problems',
    highlightGradient: 'linear-gradient(135deg, #f59e0b, #ec4899)',
    glowBg: 'rgba(245,158,11,0.05)',
    borderHover: 'rgba(245,158,11,0.3)',
    extra: '🎖️ 1 Certificate Earned',
    href: 'https://www.skillrack.com',
  },
  {
    logo: '⭐',
    name: 'HackerRank',
    stat: 'Language certifications',
    highlight: '1★',
    highlightLabel: 'C & Python',
    highlightGradient: 'linear-gradient(135deg, #10b981, #22d3ee)',
    glowBg: 'rgba(16,185,129,0.05)',
    borderHover: 'rgba(16,185,129,0.3)',
    extra: '🏅 1 Star in C, 1 Star in Python',
    href: 'https://www.hackerrank.com',
  },
  {
    logo: '🧩',
    name: 'LeetCode',
    stat: 'Active problem solver',
    highlight: '2.1M',
    highlightLabel: 'Global Rank',
    highlightGradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    glowBg: 'rgba(99,102,241,0.05)',
    borderHover: 'rgba(99,102,241,0.3)',
    extra: '🌍 Global Rank: 2,185,096',
    href: 'https://leetcode.com',
  },
];

export default function CodingProfiles() {
  return (
    <section className="section" id="coding">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Competitive Coding</span>
          <h2 className="section-title">Coding Profiles</h2>
          <p className="section-desc">Consistent practice and problem solving across major competitive programming platforms.</p>
        </div>

        <div className="coding-grid">
          {profiles.map((p, i) => (
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
              key={i}
            >
              <div
                className="coding-card"
                id={`profile-${p.name.toLowerCase()}`}
                style={{ '--card-border-hover': p.borderHover }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = p.borderHover;
                  e.currentTarget.style.background = p.glowBg;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.background = '';
                }}
              >
                <span className="coding-card-logo">{p.logo}</span>
                <div className="coding-card-name">{p.name}</div>
                <div
                  className="coding-card-highlight"
                  style={{ background: p.highlightGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  {p.highlight}
                </div>
                <div className="coding-card-stat" style={{ marginBottom: 8 }}>
                  {p.highlightLabel}
                </div>
                <div
                  className="coding-card-stat"
                  style={{
                    fontSize: '0.8rem',
                    padding: '8px 16px',
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '100px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'inline-block',
                    marginTop: 8,
                  }}
                >
                  {p.extra}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
