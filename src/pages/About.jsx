import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-page fade-in">
      {/* HERO SECTION */}
      <section className="about-hero ">
        <h1>
          About <span className="orange">EVE GLOBAL</span>
        </h1>
        <div className="divider"></div>
        <p>
          Delivering trusted medical and laboratory equipment solutions to
          hospitals and clinics across Nigeria.
        </p>
      </section>

      {/* COMPANY STORY */}
      <section className="about-section">
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            EVE GLOBAL is a trusted supplier of high-quality medical and
            laboratory equipment. We specialize in providing reliable, durable,
            and modern healthcare solutions to hospitals, clinics, and
            diagnostic centers.
          </p>
          <p>
            With a commitment to excellence and customer satisfaction, we ensure
            that every product meets professional healthcare standards and
            supports better patient outcomes.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision">
        <div className="mv-card">
          <h3>Our Mission</h3>
          <p>
            To provide healthcare institutions with dependable and innovative
            medical equipment that enhances service delivery and patient care.
          </p>
        </div>

        <div className="mv-card">
          <h3>Our Vision</h3>
          <p>
            To become a leading medical equipment supplier recognized for
            quality, integrity, and exceptional customer service.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">
        <h2>Why Choose Us</h2>
        <div className="divider"></div>

        <div className="why-grid">
          <div className="why-card">
            <h4>✔ Quality Assurance</h4>
            <p>All products meet industry and healthcare standards.</p>
          </div>

          <div className="why-card">
            <h4>✔ Reliable Supply</h4>
            <p>We ensure timely and consistent product availability.</p>
          </div>

          <div className="why-card">
            <h4>✔ Professional Support</h4>
            <p>Dedicated assistance to meet hospital and clinic needs.</p>
          </div>

          <div className="why-card">
            <h4>✔ Trusted Partner</h4>
            <p>Building long-term relationships through integrity.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
