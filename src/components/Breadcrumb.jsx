"use client";
import React from "react";

export default function Breadcrumb() {
  return (
    <nav className="breadcrumb-container" aria-label="Breadcrumb">
      <div className="breadcrumb-content">
        <span className="breadcrumb-item">Deals</span>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="breadcrumb-arrow"> <path d="M5.35981 4.6431L0.862836 0.147619C0.665512 -0.0492065 0.345816 -0.0492065 0.147993 0.147619C-0.049331 0.344445 -0.049331 0.664142 0.147993 0.860968L4.28827 4.99975L0.148491 9.13853C-0.0488327 9.33536 -0.0488327 9.65506 0.148491 9.85238C0.345816 10.0492 0.666011 10.0492 0.863335 9.85238L5.36031 5.3569C5.55464 5.16211 5.55464 4.83739 5.35981 4.6431Z" fill="#222222"></path> </svg>',
          }}
        />
        <span className="breadcrumb-item breadcrumb-current">
          Product detail to Types of Ultrasound Machines
        </span>
      </div>

      <div className="back-button-container">
        <button className="back-button" aria-label="Go back">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="back-icon"> <path d="M13.4959 5.9359L3.68775 5.93504L7.86556 1.81768C8.28762 1.40226 8.28762 0.72807 7.86556 0.312049C7.44416 -0.104016 6.76025 -0.104016 6.33823 0.312049L0.317844 6.24691C0.267041 6.29699 0.22188 6.35178 0.182802 6.40957C0.166301 6.43311 0.155663 6.45965 0.140466 6.48341C0.121143 6.51958 0.0989987 6.55404 0.0831524 6.59235C0.0696916 6.62402 0.0625272 6.65656 0.0531915 6.6878C0.0423362 6.72269 0.0288752 6.75629 0.0214937 6.79203C0.0102038 6.84597 0.00564439 6.90161 0.00434216 6.9564C0.00434216 6.97074 0 6.98465 0 6.99942C0 7.01633 0.0043422 7.03131 0.00499349 7.04822C0.00716459 7.1013 0.0108552 7.15416 0.0214937 7.20681C0.0299607 7.24555 0.0429877 7.28022 0.054277 7.31703C0.062744 7.34699 0.0701264 7.37717 0.0829353 7.40542C0.100304 7.44716 0.1231 7.4859 0.145245 7.52378C0.157403 7.54582 0.16739 7.56851 0.180634 7.58948C0.221451 7.64877 0.266177 7.7042 0.31785 7.75364L6.33657 13.688C6.54739 13.8953 6.82419 14 7.10101 14C7.3774 14 7.6529 13.8958 7.86457 13.688C8.28663 13.2719 8.28663 12.5975 7.86457 12.1817L3.68937 8.06468H13.4958C15.8914 8.06468 17.8389 9.98535 17.8389 12.346C17.8389 12.9346 18.3233 13.4112 18.9199 13.4112C19.5169 13.4112 20 12.9344 20 12.3462C19.9998 8.8118 17.0825 5.93467 13.4961 5.93576" fill="#1262AB"></path> </svg>',
            }}
          />
          <span className="back-text">Back</span>
        </button>
      </div>

      <style jsx>{`
        .breadcrumb-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        @media (max-width: 640px) {
          .breadcrumb-container {
            margin-bottom: 16px;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
        .breadcrumb-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .breadcrumb-item {
          color: #222;
          font-family: Manrope;
          font-size: 12px;
          font-weight: 400;
        }
        .breadcrumb-current {
          font-weight: 500;
        }
        .breadcrumb-arrow {
          width: 6px;
          height: 10px;
          fill: #222;
        }
        .back-button-container {
          display: flex;
          justify-content: flex-end;
        }
        @media (max-width: 640px) {
          .back-button-container {
            align-self: flex-end;
          }
        }
        .back-button {
          width: 95px;
          height: 34px;
          border-radius: 5px;
          border: 1px solid #1262ab;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        @media (max-width: 640px) {
          .back-button {
            width: 80px;
            height: 30px;
          }
        }
        .back-button:hover {
          background-color: #f8f9fa;
        }
        .back-icon {
          width: 20px;
          height: 14px;
          fill: #1262ab;
        }
        @media (max-width: 640px) {
          .back-icon {
            width: 16px;
            height: 12px;
          }
        }
        .back-text {
          color: #1262ab;
          font-family: Manrope;
          font-size: 14px;
          font-weight: 500;
        }
        @media (max-width: 640px) {
          .back-text {
            font-size: 12px;
          }
        }
      `}</style>
    </nav>
  );
}
