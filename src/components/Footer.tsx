import React from "react";
import "../styles/Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footermain">
        <Container>
          <Row className="mainrow">
            <Col>
              <Row className="rowitem">
                <a href="#">COMPANY</a>
              </Row>
              <Row className="rowitem">
                <a href="#">About Aim 24x7</a>
              </Row>
              <Row className="rowitem">
                <a href="#">Career</a>
              </Row>
              <Row className="rowitem">
                <a href="#">Contact</a>
              </Row>
            </Col>
            <Col>
              <Row className="rowitem">
                <a href="#">OUR POLICIES</a>
              </Row>
              <Row className="rowitem">
                <a href="#">Terms and Condtions</a>
              </Row>
              <Row className="rowitem">
                <a href="#">Privacy Policy</a>
              </Row>
              <Row className="rowitem">
                <a href="#">Fees and Payments Policy</a>
              </Row>
              <Row className="rowitem">
                <a href="#">Shipping and Delivery Policy</a>
              </Row>
              <Row className="rowitem">
                <a href="#">Return, Refund and Cancellation Policy</a>
              </Row>
            </Col>
            <Col>
              <Row className="rowitem">
                <a href="#">SHOPPING</a>
              </Row>
              <Row className="rowitem">
                <a href="#">Shop by Categories</a>
              </Row>
              <Row className="rowitem">
                <a href="#">Offers/Coupons</a>
              </Row>
              <Row className="rowitem">
                <a href="#">FAQs</a>
              </Row>
            </Col>
            <Col>
              <Row className="rowitem">
                <a href="#">DOWNLOAD</a>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
