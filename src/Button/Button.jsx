import React from "react";
import "./Button.css";
import { useContext } from "react";
import { NewOrderContext } from "../NewOrderContext/NewOrderContext.jsx";
export default function Button({ handlePopUp, value }) {
  const { handleItemData } = useContext(NewOrderContext);
  return (
    <>
      {value === "Start New Order" ? (
        <button
          className="btn"
          onClick={() => {
            handlePopUp();
            handleItemData();
          }}
        >
          {value}
        </button>
      ) : (
        <button className="btn" onClick={handlePopUp}>
          {value}
        </button>
      )}
    </>
  );
}
