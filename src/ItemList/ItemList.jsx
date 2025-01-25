import React from "react";
import "./ItemList.css";

const decrement = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="2"
    fill="none"
    viewBox="0 0 10 2"
    className="decrement-quantity"
  >
    <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
  </svg>
);

const increment = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    fill="none"
    viewBox="0 0 10 10"
  >
    <path
      fill="currentColor"
      d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
    />
  </svg>
);

export default function ItemList({
  products,
  handleData,
  handleIncrement,
  handleDecrement,
  items,
}) {
  return (
    <section className="item-list">
      <h2>Desserts</h2>
      <ul className="list-container">
        {products.map((product) => {
          const existInCart = items.some((item) => item.name === product.name);
          return (
            <li key={product.name}>
              <div className="item">
                <div className="item-image">
                  <img src={product.image.desktop} alt={product.name} />
                </div>
                <button
                  className={existInCart ? "add-quantity-btn" : "add-cart-btn"}
                  onClick={() => {
                    handleData(
                      product.name,
                      product.price,
                      product.image.thumbnail
                    );
                  }}
                >
                  {existInCart ? (
                    <>
                      <div
                        className="svg-wrapper-1"
                        onClick={() => {
                          handleDecrement(product.name);
                        }}
                      >
                        {decrement}
                      </div>
                      <p className="quantity-in-btn">
                        {
                          items.find((item) => item.name === product.name)
                            .quantity
                        }
                      </p>
                      <div
                        className="svg-wrapper-2"
                        onClick={() => {
                          handleIncrement(product.name);
                        }}
                      >
                        {increment}
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src="/images/icon-add-to-cart.svg"
                        alt="add to cart logo"
                        className="cart-logo"
                      />
                      Add to Cart
                    </>
                  )}
                </button>
                <div className="item-details">
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="price">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
