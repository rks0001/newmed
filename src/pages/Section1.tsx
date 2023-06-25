import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import img8 from "../images/med6.svg";
import "../styles/Section1.css";

const Section1 = () => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col>
            <div>
              <img className="introimage" src={img8} alt="programming" />
            </div>
          </Col>
          <Col>
            <div className="introcontainer">
              <div className="txtcon">
                <h4 className="intro1">Shop on </h4>
                <h1 className="nameintro"> Aim 24x7</h1>
                <h5 className="intro2">Pharmacy with Aim</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
