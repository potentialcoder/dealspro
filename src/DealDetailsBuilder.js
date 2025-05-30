"use client";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Breadcrumb from "./components/Breadcrumb";
// import ProductGallery from "./components/ProductGallery";

import VerticalImageGallery from "./components/VerticalImageGallery";
import TabNavigation from "./components/TabNavigation";
import DealDetailsSection from "./components/DealDetailsSection";
import ProductDescription from "./components/ProductDescription";
import AttachmentsSection from "./components/AttachmentsSection";
import BrokerDetails from "./components/BrokerDetails";
import CharityDetails from "./components/CharityDetails";
import CompanyInfo from "./components/CompanyInfo";



export default function DealDetailsBuilder() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-section">
        <Header />
        <main className="main-content">
          <Breadcrumb />

          <div className="product-detail-container">
            <div className="product-detail-main">
              {/* <ProductGallery /> */}
              <VerticalImageGallery />
              <TabNavigation />
              <DealDetailsSection />
              <ProductDescription />
              <AttachmentsSection />
              <BrokerDetails />
              <CharityDetails />
            </div>
            <CompanyInfo />
          </div>
        </main>
      </div>

      <style jsx>{`
        .app-layout {
          display: flex;
          min-height: 100vh;
        }

        .main-section {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

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

        .product-detail-container {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .product-detail-container {
            flex-direction: column;
          }
        }

        .product-detail-main {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
