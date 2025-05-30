"use client";
import React from "react";

export default function CharityDetails() {
  const charityInfo = [
    { label: "Charitable Causes", value: "Engenia Technology" },
    { label: "Organization", value: "Child Education" },
    { label: "Charity Amount", value: "$200" },
  ];

  return (
    <section id="charity" className="charity-section" aria-labelledby="charity-heading">
      <h2 id="charity-heading" className="section-title">
        Charity Details
      </h2>
      <div className="details-grid">
        {charityInfo.map((detail, index) => (
          <div key={index} className="detail-item">
            <dt className="detail-label">{detail.label}</dt>
            <dd className="detail-value">{detail.value}</dd>
          </div>
        ))}
      </div>

      <style jsx>{`
        .charity-section {
          width: 100%;
          border-radius: 5px;
          border: 1px solid rgba(34, 34, 34, 0.15);
          background-color: #fafafa;
          padding: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 640px) {
          .charity-section {
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
      `}</style>
    </section>
  );
}
