import React from "react";

const Product = ({ name, price, image }) => {
  return (
          <div className="product bg-light">
            <div className="image">
              <img className="rounded-circle" src={image} alt="" />
            </div>
            <div className="name-price">
            <h6 className="mt-1">Tk.{price}
            </h6>
            <h6>{name}</h6>
            </div>
              <button className="btn btn-dark btn-sm btn-block px-5 m-0">Buy</button>
            
          </div>
  );
};

export default Product;
