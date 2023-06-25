import React, { useState } from "react";
import "../styles/Alert.css";

interface AlertProps {
  isLoggedIn: boolean;
}

const Alert: React.FC<AlertProps> = ({ isLoggedIn }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      setShowAlert(true);
    } else {
      // Logic for adding item to cart when user is signed in
      console.log("Item added to cart.");
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className={`alert-container ${showAlert ? "show" : ""}`}>
      <div className="alert">
        <p>Please sign in to add items to your cart.</p>
        <button className="close-button" onClick={handleAlertClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Alert;
