import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) return;

    // Primary WhatsApp number (first phone listed)
    const phone = "2348036750346";

    const text =
      `*New message from your website*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Subject:* ${subject}\n\n` +
      `*Message:*\n${message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="contact-page fade-in">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Let's Work Together</h1>
        <p>Have a project in mind? We're ready to bring your vision to life.</p>
      </div>

      {/* Contact Content */}
      <div className="contact-container">
        {/* Left Side - Info */}
        <div className="contact-info">
          <div className="info-card">
            <h3>📍 Location</h3>
            <p>
              Plot 37 Adewale Olatunji Str, Magodo Phase 1, Isheri, Lagos,
              Nigeria
            </p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+234 803 675 0346</p>
            <p>+234 806 880 6887</p>
            <p>+234 705 041 9993</p>
          </div>

          <div className="info-card">
            <h3>✉ Email</h3>
            <p>princessevelyn78@gmail.com</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="contact-form" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Your Message..."
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
