import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import medlogo from "../images/logo3.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import ModalDialog from "./ModalDialog";

const Header = () => {
  const iconStyles = { color: "#091818", fontSize: "1.2em" };

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="mainlogosec">
      <nav className=" navbarmain navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div className="logo">
              <div>
                <Link to="/">
                  <img className="logoimg " src={medlogo} alt="Logo" />
                </Link>
              </div>

              <div className="logotxt">
                <Link to="/">
                  Aid 24x7
                  <br /> Pharmacy with Aim
                </Link>
              </div>
            </div>
          </Link>
          <div className="cart">
            <span className="icontext">
              {" "}
              <Link to="/categories">Shop by Category</Link>
            </span>
          </div>
          {/* // demo prescription */}
          <div className="cart">
            <Link to="/prescription">Add Prescription</Link>
          </div>
          <div className="cart">
            <button className="downloadapp">
              <Link to="/prescription">Download App</Link>
            </button>
          </div>
          <div className="cart">
            <FaShoppingCart style={iconStyles} />
            <span className="icontext">
              {" "}
              <Link to="/checkout">Cart</Link>
            </span>
          </div>

          <div>
            {!localStorage.getItem("token") ? (
              <div onClick={handleOpen}>
                <CgProfile style={iconStyles} />
                <span className="icontext">Sign Up</span>
              </div>
            ) : (
              <div className="logoutbtn" onClick={handleOpen}>
                <FaSignOutAlt style={iconStyles} />
                <span className="icontext" onClick={handleLogout}>
                  Log Out
                </span>
              </div>
            )}
            <ModalDialog open={open} handleClose={handleClose} />
          </div>
        </div>
      </nav>
      {/* <div className="secondheader">
        <div className="medcareitems">
          <Link to="/allopathic">Allopathic Medicines</Link>
        </div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Ayurvedic Medicines</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Generic Medicines</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Mom & Baby</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Diabetic Care</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Pain Relief</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Surgical and Dressing Items</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Skin Care</div>
      </div>
      <div className="thirdheader">
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Hair Care</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Sexual Wellness</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Covid Essentials</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Devices </div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Intimate Care & Hygiene</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Home Care</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Fitness & Supplements</div>
        <Link to="/allopathic"></Link>
        <div className="medcareitems">Mobility and Support</div>
      </div> */}
    </div>
  );
};

export default Header;
