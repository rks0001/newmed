import React from "react";
import "../styles/Payment.css";

const Payment = () => {
  return (
    <div className="pay">
      <div className="heading"> PAYMENT DETAILS</div>
      <div className="total">
        <div className="label">MRP Total</div>
        <div className="labelt">Rs 1200</div>
      </div>
      <div className="discount">
        <div className="label">Additional Discount</div>
        <div className="labelt">- Rs 250</div>
      </div>
      <div className="totalamount">
        <div className="label">Total Amount</div>
        <div className="labelt">Rs 950</div>
      </div>
      <div className="extracharges">
        <div className="label">Shipping/Delivery Charges</div>
        <div className="labelt">Rs 0.00</div>
      </div>
      <div className="totalpayable">
        <div className="totalpaylabel">Total Payable Rs 950</div>
        <div className="labelt">
          <button className="proceed">PROCEED</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
