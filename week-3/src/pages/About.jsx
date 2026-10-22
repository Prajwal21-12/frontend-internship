export default function About() {
  const values = [
    {
      title: "Innovation",
      description:
        "Explore creative ideas and practical technology solutions.",
    },
    {
      title: "Simplicity",
      description:
        "Make digital experiences easy to understand and use.",
    },
    {
      title: "User Focus",
      description:
        "Design with accessibility, usability, and real needs in mind.",
    },
  ];

  return (
    <section className="about-page">
      <div className="about-hero">
        <p className="section-label">ABOUT TECHNOVA</p>
        <h1>Technology with a purpose.</h1>
        <p>
          TechNova is a technology-focused brand concept dedicated
          to building responsive websites and practical digital
          experiences.
        </p>
      </div>

      <div className="about-mission">
        <div>
          <p className="section-label">OUR MISSION</p>
          <h2>Make technology useful for everyone.</h2>
        </div>
        <p>
          We aim to combine modern web development, thoughtful
          design, and emerging technologies to create digital
          experiences that are useful, accessible, and easy to use.
        </p>
      </div>

      <div className="about-values">
        <p className="section-label">WHAT GUIDES US</p>
        <h2>Our Core Values</h2>

        <div className="service-grid">
          {values.map((value, index) => (
            <article className="service-card" key={value.title}>
              <span className="service-number">
                0{index + 1}
              </span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}