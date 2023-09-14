import React from "react";
import "./App.css";

export default function Product(props) {
  return (
    <>
    <div className="card">
      <img className="product--image" src={props.url} style={{ width: '100px', height: '100px' }}  alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">Rs. {props.price}</p>
      <p>{props.description}</p>
      <p>
        <button className="btn">Add to Cart</button>
      </p>
    </div>
    <p className="empt" />
    </>
  );
}
