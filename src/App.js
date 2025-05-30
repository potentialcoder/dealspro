import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./AppAnimations.css"; // For fade-in animation etc.
import valuesImg from './assets/images/values.avif';
import softwareImg from './assets/images/software-on-mission.avif';
import dealImg from './assets/images/deal.jpg';
import aiImg from './assets/images/ai-image.png';
import businessVideo from "./assets/videos/business.mp4";

import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

function App() {
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [phone, setPhone] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !phone || !formData.message) {
      setSubmitStatus("Please fill all fields.");
      return;
    }

    // Here you would typically call an API or EmailJS to send email.
    // For demo, just logging and showing success message:
    console.log("Contact form submitted:", { ...formData, phone });

    setSubmitStatus("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
    setPhone("");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <a className="navbar-brand" href="#">DealsPro</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Invest</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Video Banner */}
      <div className="video-banner">
        <video autoPlay muted loop playsInline className="video-content">
          <source src={businessVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay d-flex flex-column justify-content-center align-items-center text-white text-center">
          <div className="overlay-glass p-4 rounded shadow-lg">
            <h1 className="display-4 fw-bold mb-3">Welcome to DealsPro</h1>
            <p className="lead mb-4">Where smart deals meet smart people.</p>
            <div>
              <button className="btn btn-primary btn-lg mx-2">Get Started</button>
              <button className="btn btn-outline-light btn-lg mx-2">Request a Demo</button>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Where Values and Business Meet</h2>
            <p>
              We believe in alignment, transparency, accountability, safety, autonomy,
              and charity with every deal and interaction.
            </p>
          </div>
          <div className="col-md-6">
            <img src={valuesImg} alt="Values" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/* Software on a Mission */}
      <div className="container py-5 bg-light fade-in">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={softwareImg} alt="Software Mission" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2>Software on a Mission</h2>
            <p>
              Our platform embodies these values in every interaction. We’re not just managing
              deals – we’re driving impact through thoughtful design and ethical innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Deal Management Platform */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Deal Management Platform</h2>
            <ul>
              <li>Track and manage your deals in real-time</li>
              <li>Partner dashboard with analytics</li>
              <li>Smart workflows and notifications</li>
              <li>Audit-ready reports and logs</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={dealImg} alt="Deal Platform" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/* AI Built For You */}
      <div className="container py-5 bg-light fade-in">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>AI Built For You</h2>
            <p>
              Our AI features are tailor-made to help you close deals faster and smarter, offering
              predictive insights and automation tools for efficiency and growth.
            </p>
          </div>
          <div className="col-md-6">
            <img src={aiImg} alt="AI image" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="container py-5">
        <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="q1">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="true" aria-controls="a1">
                What is DealsPro?
              </button>
            </h2>
            <div id="a1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body faq-answer">
                DealsPro is a next-gen deal registration and management platform.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="q2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="a2">
                How do I register my deals?
              </button>
            </h2>
            <div id="a2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body faq-answer">
                You can sign up and use our partner dashboard to submit deals easily.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              onlyCountries={["us", "in", "ca"]}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: false,
              }}
              containerClass="phone-input-container"
              inputClass="form-control form-control-lg"
              // buttonClass="btn btn-outline-secondary"
              buttonClass="flag-dropdown"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control form-control-lg"
              rows="5"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {submitStatus && (
            <div className={`mb-3 text-center ${submitStatus.startsWith("Thank") ? "text-success" : "text-danger"}`}>
              {submitStatus}
            </div>
          )}

          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg px-5">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Newsletter */}
      <div className="container py-5 text-center bg-dark text-white">
        <h2>Subscribe to our Newsletter</h2>
        <p>Get exclusive updates and insights.</p>
        <div className="d-flex justify-content-center">
          <input type="email" className="form-control w-50 me-2" placeholder="Your Email" />
          <button className="btn btn-outline-light">Subscribe</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 fade-in">
        <p className="mb-0">© 2025 DealsPro. All rights reserved.</p>
        <small>Built with ❤️ using React + Bootstrap</small>
      </footer>
    </div>
  );
}

export default App;
