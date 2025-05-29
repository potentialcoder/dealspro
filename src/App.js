import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./AppAnimations.css"; // We'll define this for animation classes
import valuesImg from './assets/images/values.avif';
import softwareImg from './assets/images/software-on-mission.avif';
import dealImg from './assets/images/deal.jpg';
import aiImg from './assets/images/ai-image.png';

function App() {
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
          <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay text-center text-white">
          <h1 className="display-4">Welcome to DealsPro</h1>
          <p className="lead">Where smart deals meet smart people.</p>
          <div>
            <button className="btn btn-primary m-2">Get Started</button>
            <button className="btn btn-outline-light m-2">Request a Demo</button>
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

          {/* <img
  src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80"
  alt="Values"
  className="img-fluid rounded"
/> */}

          </div>
        </div>
      </div>

      {/* Software on a Mission */}
      <div className="container py-5 bg-light fade-in">
        <div className="row align-items-center">
          <div className="col-md-6">
          <img src={softwareImg} alt="Software Mission" className="img-fluid rounded" />
          {/* <img
  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  alt="Software Mission"
  className="img-fluid rounded"
/> */}
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
          {/* <img
  src="https://unsplash.com/photos/man-using-smartphone-on-chair-8YG31Xn4dSw?auto=format&fit=crop&w=800&q=80"
  alt="Deal Platform"
  className="img-fluid rounded"
/> */}

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
          {/* <img
  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
  alt="AI Tools"
  className="img-fluid rounded"
/> */}

          </div>
        </div>
      </div>

      {/* FAQ */}
<div className="container py-5">
  <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
  <div className="accordion" id="faqAccordion">
    <div className="accordion-item">
      <h2 className="accordion-header" id="q1">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#a1"
          aria-expanded="true"
          aria-controls="a1"
        >
          What is DealsPro?
        </button>
      </h2>
      <div
        id="a1"
        className="accordion-collapse collapse show"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body faq-answer">
          DealsPro is a next-gen deal registration and management platform.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="q2">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#a2"
          aria-expanded="false"
          aria-controls="a2"
        >
          How do I register my deals?
        </button>
      </h2>
      <div
        id="a2"
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >
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
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
          </div>
          <div className="text-center">
            <button className="btn btn-primary">Submit</button>
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
        <p className="mb-1">© {new Date().getFullYear()} DealsPro. All rights reserved.</p>
        <small>Built with ❤️ using React + Bootstrap</small>
      </footer>
    </div>
  );
}

export default App;
