"use client";
import React, { useState } from "react";

export default function ProductDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  const keywords = [
    "Manufacturer 1",
    "Manufacturer 2",
    "Manufacturer 3",
    "Manufacturer 4",
    "Manufacturer 5",
  ];

  return (
    <section
     className="description-section"
     aria-labelledby="description-heading"
     id="description"  
    >
      <h2 id="description-heading" className="section-title">
        Product Description
      </h2>
      <div className="description-content">
        <p className="description-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
        <button
          className="toggle-button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="description-text"
        >
          <span className="toggle-text">See Less</span>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="toggle-icon"> <path d="M5.58482 0.710483L11.1699 5.95175L10.0529 7L5.58482 2.80699L1.11673 7L-0.000291733 5.95175L5.58482 0.710483Z" fill="#1262AB"></path> </svg>',
            }}
          />
        </button>
      </div>

      <h3 className="keywords-title">Keywords</h3>
      <div className="keywords-container">
        {keywords.map((keyword, index) => (
          <span key={index} className="keyword-tag">
            {keyword}
          </span>
        ))}
      </div>

      <style jsx>{`
        .description-section {
          width: 100%;
          border-radius: 5px;
          border: 1px solid rgba(34, 34, 34, 0.15);
          background-color: #fafafa;
          padding: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 640px) {
          .description-section {
            padding: 16px;
            margin-bottom: 16px;
          }
        }
        .section-title {
          color: #222;
          font-family: Manrope;
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 20px 0;
        }
        @media (max-width: 640px) {
          .section-title {
            font-size: 16px;
            margin-bottom: 16px;
          }
        }
        .description-content {
          margin-bottom: 20px;
        }
        .description-text {
          color: #000;
          font-family: Manrope;
          font-size: 15px;
          font-weight: 400;
          line-height: 22.5px;
          margin: 0 0 16px 0;
        }
        @media (max-width: 640px) {
          .description-text {
            font-size: 14px;
          }
        }
        .toggle-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .toggle-text {
          color: #1262ab;
          font-family: Manrope;
          font-size: 15px;
          font-weight: 500;
        }
        @media (max-width: 640px) {
          .toggle-text {
            font-size: 14px;
          }
        }
        .toggle-icon {
          width: 11px;
          height: 6px;
          fill: #1262ab;
        }
        .keywords-title {
          color: #222;
          font-family: Manrope;
          font-size: 18px;
          font-weight: 700;
          margin: 20px 0 16px 0;
        }
        @media (max-width: 640px) {
          .keywords-title {
            font-size: 16px;
          }
        }
        .keywords-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        @media (max-width: 640px) {
          .keywords-container {
            gap: 8px;
          }
        }
        .keyword-tag {
          color: #222;
          font-family: Manrope;
          font-size: 14px;
          font-weight: 400;
          padding: 5px 10px;
          border-radius: 5px;
          background-color: #f5f2f2;
        }
        @media (max-width: 640px) {
          .keyword-tag {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
