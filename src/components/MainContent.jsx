"use client";
import React from "react";

export default function MainContent({ children }) {
  return (
    <main className="main-content">
      {children}

      <style jsx>{`
        .main-content {
          flex: 1;
          padding: 20px;
        }
        @media (max-width: 991px) {
          .main-content {
            padding: 16px;
          }
        }
        @media (max-width: 640px) {
          .main-content {
            padding: 12px;
          }
        }
      `}</style>
    </main>
  );
}
