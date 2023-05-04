import React from "react";
import "./cart.css";

const Cart = (props) => {
  const { cart, clearCart } = props;

  let total = 0;
  let quantity = 0;
  let shipping = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div>
      <h6>Order summary</h6>
      <p>Selected Items:{quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${grandTotal}</h5>
      <button
        onClick={clearCart}
        className="color btn btn-sm btn-success text-white"
      >
        Clear Cart
      </button>
      <br />

      <button className="btn btn-sm mt-3 ">
        <a className="text-white text-decoration-none" href="/order-review">
          Order Review
        </a>
      </button>
    </div>
  );
};

export default Cart;
