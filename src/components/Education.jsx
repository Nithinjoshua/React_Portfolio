const education = [
  {
    icon: '🎓',
    degree: 'B.E. Computer Science & Engineering (AIML)',
    school: 'Sri Eshwar College of Engineering',
    year: '2024 – 2028',
    score: 'CGPA: 7.27 (upto 3rd Sem)',
    scoreColor: 'green',
  },
  {
    icon: '🏫',
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'Erode District Government Model School',
    year: '2023 – 2024',
    score: '71.16%',
    scoreColor: 'cyan',
  },
  {
    icon: '📚',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    school: 'Railway Colony MPL Hr Sec School',
    year: '2021 – 2022',
    score: '71.4%',
    scoreColor: 'purple',
  },
];

const scoreStyles = {
  green:  { color: 'var(--accent-green)',  bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.2)' },
  cyan:   { color: 'var(--accent-cyan)',   bg: 'rgba(34,211,238,0.1)',  border: 'rgba(34,211,238,0.2)' },
  purple: { color: 'var(--accent-primary)',bg: 'rgba(99,102,241,0.1)',  border: 'rgba(99,102,241,0.2)' },
};

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic Journey</span>
          <h2 className="section-title">Education</h2>
          <p className="section-desc">Building a strong foundation in Computer Science with a specialization in AI &amp; Machine Learning.</p>
        </div>

        <div className="education-timeline">
          {education.map((edu, i) => {
            const s = scoreStyles[edu.scoreColor];
            return (
              <div className="edu-item" key={i}>
                <div className="edu-icon-wrap">{edu.icon}</div>
                <div className="edu-content">
                  <div className="edu-header">
                    <div className="edu-degree">{edu.degree}</div>
                    <span className="edu-year">{edu.year}</span>
                  </div>
                  <div className="edu-school">🏛️ {edu.school}</div>
                  <span
                    className="edu-score"
                    style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}
                  >
                    ✦ {edu.score}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
