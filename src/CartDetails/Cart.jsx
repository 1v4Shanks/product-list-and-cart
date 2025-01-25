import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
import { useState } from "react";
import Modal from "../Modal/Modal";

const remove = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    fill="none"
    viewBox="0 0 10 10"
  >
    <path
      fill="currentColor"
      d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
    />
  </svg>
);

export default function Cart({ items, handleRemove }) {
  const [showPopUp, setShowPopUp] = useState(false);

  function handlePopUp() {
    setShowPopUp(!showPopUp);
  }

  let totalPrice = 0;
  let yourCart = 0;
  for (let item of items) {
    totalPrice = totalPrice + item.price * item.quantity;
    yourCart = yourCart + item.quantity;
  }

  return (
    <section className="cart-details">
      <h2>Your Cart ({yourCart})</h2>
      {items.length === 0 ? (
        <>
          <img src="./images/illustration-empty-cart.svg" alt="empty cart" />
          <p>Your added items will appear here</p>
        </>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <div className="cart-price-box">
                  <p className="quantity">{`${item.quantity}x`}</p>
                  <p className="price">{`@ $${item.price}`}</p>
                  <p className="total-price-of-item">{`$${(
                    item.price * item.quantity
                  ).toFixed(2)}`}</p>
                </div>
                <span
                  className="remove-cart-item"
                  onClick={() => handleRemove(item.name)}
                >
                  {remove}
                </span>
                <hr />
              </li>
            ))}
          </ul>
          <div className="order-total">
            <p>Order Total</p>
            <p className="total-price">{`$${totalPrice.toFixed(2)}`}</p>
          </div>
          <div className="carbon-neutral">
            <img
              src="./images/icon-carbon-neutral.svg"
              alt="icon-carbon-neutral"
            />
            <p>
              This is a <span className="highlight">carbon-neutral</span>{" "}
              delivery{" "}
            </p>
          </div>
          <Button handlePopUp={handlePopUp} value="Confirm Order" />
          {showPopUp && (
            <Modal
              items={items}
              totalPrice={totalPrice}
              handlePopUp={handlePopUp}
              showPopUp={showPopUp}
            />
          )}
        </>
      )}
    </section>
  );
}
