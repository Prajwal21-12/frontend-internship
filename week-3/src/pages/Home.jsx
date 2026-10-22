import { Link } from "react-router-dom";
export default function Home() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Responsive, fast, and modern websites built for your needs.",
    },
    {
      number: "02",
      title: "AI Solutions",
      description:
        "Practical intelligent solutions to help solve real-world problems.",
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "Simple, accessible, and user-friendly digital experiences.",
    },
  ];

  return (
    <>
      <section className="hero" id="home">
        <p className="hero-tag">YOUR IDEAS. OUR TECHNOLOGY.</p>

        <h1>
          Build. Innovate.
          <br />
          <span className="hero-highlight">Grow with TechNova.</span>
        </h1>

        <p>
          We create modern websites and smart digital solutions
          that help turn your ideas into reality.
        </p>

        <div className="hero-actions">
          <Link to="/services" className="hero-button">
            Explore Services →
          </Link>

          <Link to="/contact" className="secondary-button">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="home-intro">
        <p className="section-label">WHAT WE DO</p>
        <h2>Technology made practical.</h2>
        <p>
          From websites to intelligent applications, TechNova
          focuses on useful, responsive, and user-friendly
          digital experiences.
        </p>
      </section>

      <section className="services" id="services">
        <p className="section-label">OUR EXPERTISE</p>
        <h2>Services built around you</h2>
        <p>
          Explore our core areas of technology and design.
        </p>

        <div className="service-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <span className="service-number">
                {service.number}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/services" className="card-link">
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <h2>Have an idea in mind?</h2>
        <p>
          Let's explore how technology can help bring it to life.
        </p>
        <Link to="/contact" className="hero-button">
          Let's Talk →
        </Link>
      </section>
    </>
  );
}