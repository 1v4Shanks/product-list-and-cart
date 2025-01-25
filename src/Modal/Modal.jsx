import React from "react";
import "./Modal.css";
import Button from "../Button/Button";
import { useEffect } from "react";

export default function Modal({ items, totalPrice, handlePopUp, showPopUp }) {
  useEffect(() => {
    if (showPopUp) {
      document.body.classList.add("no-scroll");
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll"); // Clean up on unmount
    };
  }, [showPopUp]);

  if (!showPopUp) return null;

  return (
    <div className="popup-container">
      <div className="popup-content">
        <img
          className="order-confirmed-logo"
          src="./images/icon-order-confirmed.svg"
          alt="order-confirmed-logo"
        />
        <h2>Order Confirmed</h2>
        <p className="message">We hope you enjoy your food!</p>
        <div className="confirmed-order-details">
          <ul className="confirmed-order-list">
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <li>
                  <img src={item.image} alt={item.name} />
                  <div className="confirmed-items-box">
                    <h3>{item.name}</h3>
                    <div className="confirmed-price-box">
                      <p className="confirmed-quantity">{`${item.quantity}x`}</p>
                      <p className="confirmed-price">{`@ $${item.price}`}</p>
                      <p className="confirmed-total-price-of-item">{`$${(
                        item.price * item.quantity
                      ).toFixed(2)}`}</p>
                    </div>
                  </div>
                </li>
                <hr />
              </React.Fragment>
            ))}
          </ul>
          <div className="confirmed-order-total">
            <p>Order Total</p>
            <p className="confirmed-total-price">{`$${totalPrice.toFixed(
              2
            )}`}</p>
          </div>
        </div>
        <Button handlePopUp={handlePopUp} value="Start New Order" />
      </div>
    </div>
  );
}
