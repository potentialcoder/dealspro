"use client";
import React from "react";

export default function DealDetailsSection() {
  const dealDetails = [
    { label: "Transaction Category", value: "Physical Products" },
    { label: "Transaction Subcategory", value: "Anesthesia Products" },
    { label: "Industry Type", value: "Healthcare Industry" },
    { label: "Start Date & Time", value: "01-23-2022, 12:00 AM" },
    { label: "End Date & Time", value: "05-24-2022, 11:59 PM" },
    { label: "Deal Location", value: "Agoura, Arkansas, US" },
    { label: "Is this a Featured Deal?", value: "Yes", disabled: true },
    { label: "Is this deal open for referral?", value: "No", disabled: true },
  ];

  return (
    <section
      className="deal-details-section"
      aria-labelledby="deal-details-heading"
    >
      <h2 id="deal-details-heading" className="section-title">
        Deal Details
      </h2>
      <div className="details-grid">
        {dealDetails.map((detail, index) => (
          <div key={index} className="detail-item">
            <dt
              className={`detail-label ${detail.disabled ? "detail-disabled" : ""}`}
            >
              {detail.label}
            </dt>
            <dd
              className={`detail-value ${detail.disabled ? "detail-disabled" : ""}`}
            >
              {detail.value}
            </dd>
          </div>
        ))}
      </div>

      <style jsx>{`
        .deal-details-section {
          width: 100%;
          border-radius: 5px;
          border: 1px solid rgba(34, 34, 34, 0.15);
          background-color: #fafafa;
          padding: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 640px) {
          .deal-details-section {
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
        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        @media (max-width: 640px) {
          .details-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 16px;
          }
        }
        .detail-item {
          display: flex;
          justify-content: space-between;
        }
        @media (max-width: 640px) {
          .detail-item {
            flex-direction: column;
            gap: 4px;
          }
        }
        .detail-label {
          color: #222;
          font-family: Manrope;
          font-size: 15px;
          font-weight: 500;
          margin: 0;
        }
        @media (max-width: 640px) {
          .detail-label {
            font-size: 14px;
          }
        }
        .detail-value {
          color: #222;
          font-family: Manrope;
          font-size: 15px;
          font-weight: 400;
          margin: 0;
        }
        @media (max-width: 640px) {
          .detail-value {
            font-size: 14px;
          }
        }
        .detail-disabled {
          opacity: 0.5;
        }
        .detail-disabled:last-child {
          opacity: 0.25;
        }
      `}</style>
    </section>
  );
}
