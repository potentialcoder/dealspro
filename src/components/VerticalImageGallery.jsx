import React, { useState } from "react";

// Import images statically
import deal1 from "../assets/images/software-on-mission.avif";
import deal2 from "../assets/images/deal.jpg";
import deal3 from "../assets/images/deal.jpg";

const images = [
  { src: deal1, alt: "Deal Image 1" },
  { src: deal2, alt: "Deal Image 2" },
  { src: deal3, alt: "Deal Image 3" },
];

export default function VerticalImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [referred, setReferred] = useState(false);

  return (
    <div
      className="d-flex align-items-start"
      style={{ gap: "2rem", flexWrap: "wrap" }}
    >
      {/* Left: Thumbnails & Main Image */}
      <div className="d-flex align-items-start" style={{ gap: "1rem" }}>
        {/* Thumbnails */}
        <div className="d-flex flex-column">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              onClick={() => setSelectedIndex(idx)}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "6px",
                border:
                  selectedIndex === idx
                    ? "3px solid #1262ab"
                    : "2px solid #ccc",
                marginBottom: idx !== images.length - 1 ? "10px" : 0,
                cursor: "pointer",
                transition: "border 0.3s ease",
              }}
              className="thumbnail-image"
            />
          ))}
        </div>

        {/* Main Image */}
        <div
          className="main-image-container"
          style={{
            maxWidth: "360px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              display: "block",
            }}
            className="main-product-image"
          />
        </div>
      </div>

      {/* Right: Deal Info */}
      <div
        className="deal-info"
        style={{
          flex: 1,
          minWidth: "250px",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "12px",
            gap: "12px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: 0 }}>
            Important Deal
          </h2>

          {/* Icons Container */}
          <div style={{ display: "flex", gap: "16px" }}>
            {/* Bookmark Button */}
            <button
              aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
              onClick={() => setBookmarked(!bookmarked)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
              }}
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={bookmarked ? "#1262ab" : "none"}
                stroke="#1262ab"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </button>

            {/* Refer Button */}
            <button
              aria-label={referred ? "Unmark refer" : "Mark as refer"}
              onClick={() => setReferred(!referred)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
              }}
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={referred ? "#1262ab" : "#1262ab"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
          </div>
        </div>

        <p style={{ marginBottom: "8px", fontSize: "16px", color: "#333" }}>
          <strong>Deal ID:</strong> #DEAL123456
        </p>

        <p style={{ marginBottom: "8px", fontSize: "16px", color: "#333" }}>
          <strong>Published By:</strong> John Doe
        </p>

        <p style={{ marginBottom: "8px", fontSize: "16px", color: "#333" }}>
          <strong>Amount:</strong> $500,000
        </p>
      </div>
    </div>
  );
}
