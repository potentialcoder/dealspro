import React from "react";

const Header = () => {
  const styles = {
    headerContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "0 20px",
      height: "60px",
      backgroundColor: "#222",
      color: "white",
      fontFamily: "Arial, sans-serif",
    },
    recordingIndicator: {
      display: "flex",
      alignItems: "center",
      marginRight: 20,
      fontWeight: "bold",
      fontSize: 14,
      color: "#ff4c4c",
    },
    recordingDot: {
      width: 10,
      height: 10,
      backgroundColor: "#ff4c4c",
      borderRadius: "50%",
      marginRight: 6,
      boxShadow: "0 0 8px #ff4c4c",
    },
    balanceDisplay: {
      marginRight: 20,
      fontWeight: 600,
      fontSize: 16,
    },
    charityButton: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#ff6b6b",
      border: "none",
      color: "white",
      fontWeight: 600,
      padding: "8px 14px",
      borderRadius: 20,
      cursor: "pointer",
      marginRight: 20,
      fontSize: 14,
      transition: "background-color 0.2s ease",
    },
    charityIcon: {
      width: 18,
      height: 18,
      marginRight: 8,
      fill: "white",
    },
    divider: {
      width: 1,
      height: 24,
      backgroundColor: "#444",
      marginRight: 20,
    },
    walletButton: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "transparent",
      border: "none",
      color: "white",
      fontWeight: 600,
      cursor: "pointer",
      marginRight: 20,
      fontSize: 14,
    },
    walletIcon: {
      width: 20,
      height: 20,
      marginRight: 6,
      fill: "white",
    },
    walletAmount: {
      fontWeight: 600,
    },
    notificationButton: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: 0,
      color: "white",
    },
    notificationIcon: {
      width: 24,
      height: 24,
      fill: "white",
    },
  };

  // Handle hover for charity button inline with React hooks if needed (basic version here)

  return (
    <header style={styles.headerContainer}>
      <div style={styles.recordingIndicator}>
        <span style={styles.recordingDot} />
        REC
      </div>

      <div style={styles.balanceDisplay}>$216.36</div>

      <button
        type="button"
        aria-label="Give Charity"
        style={styles.charityButton}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#ff4c4c")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#ff6b6b")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={styles.charityIcon}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
          4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 
          16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        Give Charity
      </button>

      <div style={styles.divider} />

      <button type="button" aria-label="Wallet Balance" style={styles.walletButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={styles.walletIcon}
        >
          <path d="M21 7H3c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h18c1.1 0 
          2-0.9 2-2v-6c0-1.1-0.9-2-2-2zm0 8H3v-6h18v6z" />
        </svg>
        {/* Removed the duplicate 216.36 here */}
      </button>

      <button type="button" aria-label="Notifications" style={styles.notificationButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={styles.notificationIcon}
        >
          <path d="M12 22c1.1 0 2-0.9 2-2h-4c0 1.1 0.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-0.83-0.67-1.5-1.5-1.5S10.5 
          3.17 10.5 4v0.68C7.63 5.36 6 7.92 6 11v5l-1.99 2H20l-2-2z" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
