const skillCategories = [
  {
    icon: '💻',
    iconBg: 'rgba(99,102,241,0.15)',
    iconBorder: 'rgba(99,102,241,0.3)',
    title: 'Programming Languages',
    pills: ['C', 'C++', 'Python'],
  },
  {
    icon: '🌐',
    iconBg: 'rgba(34,211,238,0.15)',
    iconBorder: 'rgba(34,211,238,0.3)',
    title: 'Web Technologies',
    pills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: '📊',
    iconBg: 'rgba(16,185,129,0.15)',
    iconBorder: 'rgba(16,185,129,0.3)',
    title: 'Data Science & Analysis',
    pills: ['Pandas', 'NumPy'],
  },
  {
    icon: '🛠️',
    iconBg: 'rgba(245,158,11,0.15)',
    iconBorder: 'rgba(245,158,11,0.3)',
    title: 'Tools & Platforms',
    pills: ['VSCode', 'GitHub', 'Canva', 'Excel', 'PowerPoint'],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Skills</h2>
          <p className="section-desc">A diverse set of tools and technologies I've worked with across development, data, and design.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="skill-category" key={i}>
              <div className="skill-cat-header">
                <div
                  className="skill-cat-icon"
                  style={{ background: cat.iconBg, border: `1px solid ${cat.iconBorder}` }}
                >
                  {cat.icon}
                </div>
                <span className="skill-cat-title">{cat.title}</span>
              </div>
              <div className="skill-pills">
                {cat.pills.map(pill => (
                  <span className="skill-pill" key={pill}>{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
