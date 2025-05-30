"use client";
import React, { useState, useEffect } from "react";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("deal-details");

  const tabs = [
    { id: "deal-details", label: "Deal Details" },
    { id: "description", label: "Description & Keywords" },
    { id: "attachments", label: "Attachments & Milestones" },
    { id: "broker", label: "Broker Details" },
    { id: "charity", label: "Charity Details" },
  ];

  // Scroll handler for scroll spy
  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position + some offset for sticky header
      const scrollPosition = window.scrollY + 100; // Adjust 100 if needed

      // Find the tab whose section is currently in view
      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].id);
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveTab(tabs[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case user reloads page scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tabs]);

  const handleTabClick = (id, e) => {
    e.preventDefault();
    setActiveTab(id);

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust based on sticky header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="tab-navigation"
      role="tablist"
      aria-label="Product information tabs"
    >
      <div className="tab-container">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            id={`${tab.id}-tab`}
            href={`#${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            className={`tab-button ${activeTab === tab.id ? "tab-active" : ""}`}
            onClick={(e) => handleTabClick(tab.id, e)}
          >
            {tab.label}
          </a>
        ))}
      </div>

      <style jsx>{`
        .tab-navigation {
          width: 100%;
          border-radius: 5px;
          border: 1px solid rgba(34, 34, 34, 0.15);
          background-color: #fafafa;
          padding: 4px;
          margin-bottom: 20px;
          position: sticky;   /* Make sticky */
          top: 0;
          z-index: 100;
        }
        @media (max-width: 640px) {
          .tab-navigation {
            margin-bottom: 16px;
          }
        }
        .tab-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .tab-container {
            gap: 16px;
          }
        }
        @media (max-width: 640px) {
          .tab-container {
            gap: 12px;
            flex-wrap: wrap;
          }
        }
        .tab-button {
          color: #222;
          font-family: Manrope;
          font-size: 16px;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 0;
          transition: all 0.2s;
          position: relative;
          text-decoration: none;
        }
        @media (max-width: 640px) {
          .tab-button {
            font-size: 14px;
          }
        }
        .tab-button:hover {
          color: #1262ab;
        }
        .tab-active {
          color: #1262ab;
          font-weight: 700;
          border-bottom: 2px solid #1262ab;
        }
        .tab-button:focus {
          outline: 2px solid #1262ab;
          outline-offset: 2px;
        }
      `}</style>
    </nav>
  );
}
