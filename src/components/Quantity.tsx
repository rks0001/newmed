import React, { useState } from "react";
import "../styles/Quantity.css";
interface QuantityProps {
  initialQuantity: number;
}

const Quantity: React.FC<QuantityProps> = ({ initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="quantity">
      <button className="minus" onClick={decreaseQuantity}>
        -
      </button>
      <span className="qtytxt" id="quantityValue">
        {quantity}
      </span>
      <button className="plus" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
};

export default Quantity;