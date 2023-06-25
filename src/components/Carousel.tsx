import React from "react";
import med from "../images/banner1.png";
import "../styles/Carousel.css";

const Carousel = () => {
  return (
    <div className="section">
      <div
        id="carouselExampleAutoplaying"
        className=" cmain carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={med} className="d1 carou1 d-block w-100" alt="..." />
            {/* <div className="d1 d-block w-100"></div> */}
          </div>
          <div className="carousel-item">
            <img src={med} className="d1 carou1 d-block w-100" alt="..." />
            {/* <div className="d1 d-block w-100"></div> */}
          </div>
          <div className="carousel-item">
            <img src={med} className="d1 carou1 d-block w-100" alt="..." />
            {/* <div className="d1 d-block w-100"></div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
