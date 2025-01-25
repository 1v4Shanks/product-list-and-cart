import { useReducer } from "react";
import "./App.css";
import data from "./data.js";
import ItemList from "./ItemList/ItemList.jsx";
import Cart from "./CartDetails/Cart.jsx";
import addCartReducer from "./Reducer/addCartReducer.jsx";
import React from "react";
import { NewOrderContext } from "../src/NewOrderContext/NewOrderContext.jsx"

const initialItems = [];
export default function App() {
  const [items, dispatch] = useReducer(addCartReducer, initialItems);

  //increment

  function handleIncrement(itemName) {
    dispatch({
      type: "increment",
      name: itemName,
    });
  }

  // decrement

  function handleDecrement(itemName) {
    dispatch({
      type: "decrement",
      name: itemName,
    });
  }

  // add to cart

  function handleData(itemName, itemPrice, itemThumbnail) {
    dispatch({
      type: "add_to_cart",
      name: itemName,
      quantity: 1,
      price: itemPrice.toFixed(2),
      image: itemThumbnail,
    });
  }

  // remove item from cart

  function handleRemove(itemName) {
    dispatch({
      type: "remove",
      name: itemName,
    });
  }

  // start new order

  function handleItemData() {
    dispatch({
      type: "start_new_order",
    });
  }

  return (
    <div className="main-container">
      <ItemList
        products={data}
        handleData={handleData}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        items={items}
      />
      <NewOrderContext.Provider value={{ handleItemData }}>
        <Cart
          items={items}
          handleRemove={handleRemove}
          handleItemData={handleItemData}
        />
      </NewOrderContext.Provider>
    </div>
  );
}
