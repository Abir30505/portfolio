import React from "react";

const Product = ({ name, price, image }) => {
  return (
          <div className="product bg-warning">
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="name-price">
            <h6 className="mt-1">price:{price}</h6><h6>{name}</h6>
            </div>
            <div className=" product-btn d-flex justify-content-center align-item-center">
              <button className="btn btn-dark btn-sm">Buy</button>
            </div>
          </div>
  );
};

export default Product;
