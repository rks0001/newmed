import React, { useState } from "react";
import "../styles/Checkoutcard.css";

const Checkoutcard = (props:any) => {

  const handleDelete = async () => {
    const ide = props.id;
    try
    {
    const response = await fetch(`http://localhost:5000/api/cards/deleteproduct/${ide}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json = await response.json();
    console.log(json);

    console.log("Deleting the card" + ide);
  } catch (error) {
    console.log("Error deleting the card:", error);
  }
  
    
  };



  return (
    <div className="allproduct card mt-3" style={{ width: "18rem", maxHeight: "450px" }}>
      <div className="smallimg">
        <img src={props.imgSrc}  
          style={{ height: "190px", objectFit: "fill" }}/>
      </div>
      <div className="card-body">
        <div className="proname">{props.subProduct}</div>
        <div className="card-title">{props.productName}</div>
        <hr />
        <div className="container w-100"> 
            <div className="card-text">Total Price:{props.totalPrice}</div>
          <div className="card-text">Quantity:{props.qty}</div>
          <button className="btn btn-success justify-center ms-2" onClick={handleDelete}>
            Delete Card
          </button>
        </div>
    
        
        
      </div>
      
        
        
     
    </div> 
      
    
  );
};

export default Checkoutcard;


 