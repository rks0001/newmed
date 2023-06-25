import "../styles/Catcard.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Catcard = (props: any) => {
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(props.mrp);

  const handleQtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedQty = parseInt(e.target.value);
    setQty(selectedQty);
    const newTotalPrice = (props.mrp * selectedQty).toFixed(2);
    setTotalPrice(newTotalPrice);
  };

  const handleCart = () => {
    const payload = {
      imgSrc: props.imgSrc,
      subProduct: props.subProduct,
      productName: props.productName,
      qty: qty,
      totalPrice: totalPrice,
    };

    fetch("http://localhost:5000/api/cards/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle the response from the API, if needed
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Card className="card mt-3" style={{ width: "18rem", maxHeight: "500px" }}>
        <Card.Img
          className="cardimg"
          variant="top"
          src={props.imgSrc}
          style={{ height: "200px", objectFit: "fill" }}
        />
        <Card.Body>
          <Card.Title>{props.subProduct}</Card.Title>
          <Card.Text>{props.productName}</Card.Text>
          <div className="container w-100">
            <select
              className="m-2 h-100  bg-success rounded"
              onChange={handleQtyChange}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <Card.Text >MRP: {props.mrp}</Card.Text>
            <Card.Text className="d-inline h-100 fs-5">Total Price: {totalPrice}</Card.Text>
          </div>
          <hr />
          <Button className="btn btn-success justify-center ms-2" onClick={handleCart}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Catcard;
