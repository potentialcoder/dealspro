"use client";
import React from "react";

export default function CompanyInfo() {
  return (
    <aside className="company-sidebar" aria-label="Company information">
      {/* Company Details Section */}
      <section className="company-details bordered-section">
        <div className="company-header">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="building-icon"> <path d="M0 15.6968H16V14.6863H14.9895V6.14737L9.39789 4.61474V14.6695H8.64V0L1.01053 1.51579V14.6863H0V15.6968ZM12.6989 7.46105H13.7095V8.77474H12.6989V7.46105ZM12.6989 9.8021H13.7095V11.1158H12.6989V9.8021ZM12.6989 12.1432H13.7095V13.4568H12.6989V12.1432ZM10.6611 7.46105H11.6716V8.77474H10.6611V7.46105ZM10.6611 9.8021H11.6716V11.1158H10.6611V9.8021ZM10.6611 12.1432H11.6716V13.4568H10.6611V12.1432ZM6.34947 2.79579H7.36V4.10947H6.34947V2.79579ZM6.34947 5.13684H7.36V6.45053H6.34947V5.13684ZM6.34947 7.46105H7.36V8.77474H6.34947V7.46105ZM6.34947 9.8021H7.36V11.1158H6.34947V9.8021ZM4.31158 2.79579H5.32211V4.10947H4.31158V2.79579ZM4.31158 5.13684H5.32211V6.45053H4.31158V5.13684ZM4.31158 7.46105H5.32211V8.77474H4.31158V7.46105ZM4.31158 9.8021H5.32211V11.1158H4.31158V9.8021ZM2.27368 2.79579H3.28421V4.10947H2.27368V2.79579ZM2.27368 5.13684H3.28421V6.45053H2.27368V5.13684ZM2.27368 7.46105H3.28421V8.77474H2.27368V7.46105ZM2.27368 9.8021H3.28421V11.1158H2.27368V9.8021ZM3.85684 12.1432H5.79368V14.6863H3.85684V12.1432Z" fill="#222222"></path> </svg>',
            }}
          />
          <span className="company-name">Star Sons Pvt. Ltd.</span>
        </div>
        <div className="company-address">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="location-icon"> <path fillRule="evenodd" clipRule="evenodd" d="M5.86667 0C2.6288 0 0 2.6288 0 5.86667C0 7.44107 0.8768 9.384 1.95627 11.1381C3.51893 13.6773 5.472 15.8256 5.472 15.8256C5.57333 15.9365 5.71627 16 5.86667 16C6.01707 16 6.16 15.9365 6.26133 15.8256C6.26133 15.8256 8.2144 13.6773 9.77707 11.1381C10.8565 9.384 11.7333 7.44107 11.7333 5.86667C11.7333 2.6288 9.10453 0 5.86667 0ZM5.86667 3.2C4.39467 3.2 3.2 4.39467 3.2 5.86667C3.2 7.33867 4.39467 8.53333 5.86667 8.53333C7.33867 8.53333 8.53333 7.33867 8.53333 5.86667C8.53333 4.39467 7.33867 3.2 5.86667 3.2Z" fill="#222222"></path> </svg>',
            }}
          />
          <address className="address-text">
            1850 Sunny Day Drive, California, Los Angeles, 90017
          </address>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section bordered-section">
        <h3 className="about-title">About</h3>
        <p className="about-text">
          Our X Ray Film imager/printer is based on LASER TECHNOLOGY
          manufactured by market leader CARESTREAM USA. CARESTREAM is the
          world's largest manufacturer of X Ray Films and X Ray Film Printers.
          <span className="read-more"> read more...</span>
        </p>

        <div className="timer-section">
          <h4 className="timer-title">Time left</h4>
          <div className="timer-display">
            <span className="timer-number">08</span>
            <span className="timer-unit">h</span>
            <span className="timer-number">: 23</span>
            <span className="timer-unit">m</span>
            <span className="timer-number">: 35</span>
            <span className="timer-unit">s</span>
          </div>
        </div>
      </section>

      {/* Sticky Footer Buttons */}
      <footer className="company-buttons bordered-section">
        <button
          className="apply-button"
          disabled
          aria-label="Apply now - currently disabled"
        >
          Apply Now
        </button>

        <button
          className="connect-button"
          disabled
          aria-label="Connect - currently disabled"
        >
          Connect
        </button>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .company-sidebar {
          position: relative;
          width: 320px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f9f9f9;
          padding: 20px;
          box-sizing: border-box;
          font-family: "Arial", sans-serif;
          color: #222;
          overflow-y: auto;
          gap: 20px; /* gap between sections */
        }

        .bordered-section {
          border: 1px solid #ccc;
          border-radius: 6px;
          background: #fff;
          padding: 16px 16px 20px 16px;
        }

        .company-details {
          display: flex;
          flex-direction: column;
        }

        .company-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .building-icon path {
          fill: #222;
        }

        .company-name {
          user-select: none;
        }

        .company-address {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #555;
        }

        .location-icon path {
          fill: #222;
        }

        .address-text {
          margin: 0;
          font-style: normal;
        }

        .about-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .about-title {
          font-weight: 700;
          font-size: 1.1rem;
          margin: 0 0 8px 0;
        }

        .about-text {
          font-size: 0.9rem;
          line-height: 1.3;
          margin: 0;
          color: #444;
        }

        .read-more {
          color: #0070f3;
          cursor: pointer;
          font-weight: 600;
        }

        .timer-section {
          margin-top: 8px;
          border-top: 1px solid #ddd;
          padding-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          font-size: 0.95rem;
          color: #555;
        }

        .timer-title {
          margin: 0;
        }

        .timer-display {
          font-family: monospace;
          font-size: 1rem;
          color: #222;
        }

        .timer-number {
          margin: 0 2px;
          font-weight: 700;
        }

        .timer-unit {
          font-weight: 400;
          margin-right: 4px;
        }

        .company-buttons {
          position: sticky;
          bottom: 0;
          display: flex;
          gap: 16px;
          justify-content: center;
          padding-top: 14px;
          background: #fff;
        }

        .apply-button,
        .connect-button {
          flex: 1;
          padding: 12px 0;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 6px;
          border: none;
          cursor: not-allowed;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .apply-button {
          background-color: #ddd;
          color: #666;
        }

        .connect-button {
          background-color: #0070f3;
          color: white;
        }
      `}</style>
    </aside>
  );
}
