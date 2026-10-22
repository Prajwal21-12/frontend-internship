import { Link } from "react-router-dom";
const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive, fast, and accessible websites designed to work smoothly across mobile, tablet, and desktop.",
    features: ["Responsive layouts", "Modern frontend", "Performance"],
  },
  {
    number: "02",
    title: "AI Solutions",
    description:
      "Practical AI-powered experiences that help make information easier to understand and everyday tasks easier to manage.",
    features: ["AI integration", "Data-driven ideas", "Smart tools"],
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Clear and user-friendly interfaces with thoughtful layouts, consistent styling, and intuitive navigation.",
    features: ["User-focused design", "Simple navigation", "Consistency"],
  },
];

export default function Services() {
  return (
    <section className="services services-page">
      <p className="section-label">WHAT WE OFFER</p>
      <h2>Our Services</h2>
      <p className="services-intro">
        Thoughtful technology and design for useful digital experiences.
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <ul className="service-features">
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="services-cta">
        <h2>Have a project in mind?</h2>
        <p>Visit our contact page to tell us about your idea.</p>
        <Link to="/contact" className="hero-button">
          Contact TechNova →
        </Link>
      </div>
    </section>
  );
}