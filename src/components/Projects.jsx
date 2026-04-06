const projects = [
  {
    icon: '👁️',
    iconBg: 'rgba(34,211,238,0.12)',
    iconBorder: 'rgba(34,211,238,0.25)',
    title: 'Vision Max',
    year: '2025',
    description:
      'Developed Vision Max to assist visually impaired individuals by identifying obstacles in their path and guiding them safely. Built using Flutter for the frontend and Python for backend processing. Took initiative from concept to deployment, focusing on accessibility and user-centered design.',
    tags: ['Flutter', 'Python', 'Accessibility', 'Computer Vision'],
    tagColor: 'rgba(34,211,238,0.12)',
    tagBorder: 'rgba(34,211,238,0.25)',
    tagText: 'var(--accent-cyan)',
  },
  {
    icon: '🛒',
    iconBg: 'rgba(99,102,241,0.12)',
    iconBorder: 'rgba(99,102,241,0.25)',
    title: 'E-Commerce Website',
    year: '2025',
    description:
      'Collaboratively built an e-commerce website using HTML, CSS, and JavaScript, featuring responsive design and user-friendly navigation. Implemented product listings, shopping cart functionality, and basic form validation for checkout. Worked closely with a team to plan, design, and deliver the project within deadlines.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Team Project'],
    tagColor: 'rgba(99,102,241,0.12)',
    tagBorder: 'rgba(99,102,241,0.25)',
    tagText: 'var(--accent-primary)',
  },
  {
    icon: '🩸',
    iconBg: 'rgba(236,72,153,0.12)',
    iconBorder: 'rgba(236,72,153,0.25)',
    title: 'Blood Bank Management System',
    year: '2025',
    description:
      'Developed a Blood Bank Management System using C++ to efficiently manage donor and recipient data, blood inventory, and request processing. Implemented core functionalities like data storage, search, and record updates using object-oriented programming principles.',
    tags: ['C++', 'OOP', 'Data Management', 'CLI'],
    tagColor: 'rgba(236,72,153,0.12)',
    tagBorder: 'rgba(236,72,153,0.25)',
    tagText: 'var(--accent-pink)',
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-desc">A collection of projects that reflect my problem-solving skills and passion for impactful technology.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i} id={`project-${p.title.toLowerCase().replace(/\s+/g,'-')}`}>
              <div className="project-top">
                <div
                  className="project-icon"
                  style={{ background: p.iconBg, border: `1px solid ${p.iconBorder}` }}
                >
                  {p.icon}
                </div>
                <span className="project-year">{p.year}</span>
              </div>

              <div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
              </div>

              <div className="project-tags">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="tag"
                    style={{
                      background: p.tagColor,
                      border: `1px solid ${p.tagBorder}`,
                      color: p.tagText,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
