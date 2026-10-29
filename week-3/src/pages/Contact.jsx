import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please complete all fields.");
      return;
    }

    setStatus(
      "Thanks for contacting TechNova! Your form passed validation."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="contact-page">
      <div className="contact-heading">
        <p className="section-label">GET IN TOUCH</p>
        <h1>Let's build something great.</h1>
        <p>
          Have a question or a project idea? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-layout">
        <aside className="contact-info">
          <h2>Contact TechNova</h2>
          <p>
            Tell us what you're working on, and let's explore your idea.
          </p>

          <div className="contact-detail">
            <span>Email</span>
            <a href="mailto:hello@technova.example">
              hello@technova.example
            </a>
          </div>

          <div className="contact-detail">
            <span>Response time</span>
            <p>We aim to respond within 1–2 business days.</p>
          </div>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can we help?"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your idea..."
            rows={5}
            required
          />

          <button type="submit">Send Message →</button>

          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}