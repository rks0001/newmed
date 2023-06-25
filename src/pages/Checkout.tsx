import React, { useState,useEffect } from "react";
import Checkoutcard from "./Checkoutcard";
import "../styles/Checkout.css";
import Payment from "../components/Payment";


const Checkout = () => {
  const [cards, setcards] = useState([]);

  const loadCard = async () => {
    let response = await fetch("http://localhost:5000/api/cards/fetchproduct", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    response = await response.json();
    
    

    setcards(response);
   
    

  
   
  };

  useEffect(() => {
    loadCard();
  }, []);








  return (
    <div className="sctn_main">
      
       <div className="container">
        <div className="row">
          {cards?.length > 0 ? (
            cards.map((data) => (
              <div
                key={data._id}
                className="col-12 col-md-6 col-lg-3  mx-2 mt-4"
              >
                <Checkoutcard
                  productName={data.productName}
                  subProduct={data.subProduct}
                  imgSrc={data.imgSrc}
                  totalPrice={data.totalPrice}
                  qty= {data.qty}
                  id ={data._id}
                />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>




      <div className="payment">
        <Payment />
      </div>
    </div>
  );
};

export default Checkout;
