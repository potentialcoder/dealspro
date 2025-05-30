"use client";
import React from "react";

export default function ProductDetail({ mainContent, sidebar }) {
  return (
    <div className="product-detail-container">
      <div className="product-detail-main">{mainContent}</div>
      <aside className="product-detail-sidebar">{sidebar}</aside>

      <style jsx>{`
        .product-detail-container {
          display: flex;
          gap: 20px;
        }

        .product-detail-main {
          flex: 1;
        }

        .product-detail-sidebar {
          width: 300px;
          flex-shrink: 0;
        }

        @media (max-width: 991px) {
          .product-detail-container {
            flex-direction: column;
          }

          .product-detail-sidebar {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
