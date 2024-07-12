import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchbar";


const Navbar = () => {
  const [barIsActive, setBarIsActive] = useState(true);
  const [crossIsActive, setCrossIsActive] = useState(false);

  function barClick() {
    setBarIsActive(!barIsActive);
    setCrossIsActive(!crossIsActive);
  }

  function crossClick() {
    setBarIsActive(!barIsActive);
    setCrossIsActive(!crossIsActive);
  }

  return (
    <div className={`nav mt-sm-3   ${barIsActive ? 'null': 'nav-div '}  `}>
           <div className="small-nav d-flex align-items-center">
           <div className="icon d-flex d-sm-none m-4">
      
                  <i
                      className={`fa-solid mt-2 fa-bars ${barIsActive ? "active" : "inactive"}`}
                    onClick={barClick}
                     ></i>
                    <i
                       className={`fa-solid mt-2 fa-xmark ${crossIsActive ? "active" : "inactive"
                     }`}
                    onClick={crossClick}
                     ></i>
          
          </div>
          <div className={`d-sm-none ${barIsActive ? 'd-block': 'd-none'}`}>
          <SearchBar/> 
          </div>
           </div>
            <div
        className={`  nav-content  gap-4 ${barIsActive ? "d-none d-sm-flex" : "d-flex flex-column align-items-center m-3"
          }`}
      >

       
        <div
          className={`list-item d-flex flex-column mx-3 flex-sm-row gap-2 gap-sm-4 mx-2 ${barIsActive ? "d-none d-sm-flex" : "d-block d-sm-flex"
            }`}
        >
          <div className="d-none d-sm-block">  <SearchBar/></div>
          <li key="home" className="list">
            <Link  to="/" className="link">Home</Link>
          </li>
          <li key="about">
            <Link to="/about" className="link">About</Link>
          </li>
          <li key="contact">
            <Link to="/contact" className="link">Contact</Link>
          </li>
          <li key="products">
            <Link to="/products"className="link" >Products</Link>
          </li>
          <Link to="/signup" className="link">
            <button
              type="button"
              className="btn btn-light btn-sm"
            > 
              <i class="fa-solid fa-user"></i>
            </button>
          </Link>
        </div>
          </div>

   
    </div>
  );
};

export default Navbar;
