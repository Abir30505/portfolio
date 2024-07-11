import React, { useState } from "react";
import { Link } from "react-router-dom";
import signup from '../../public/assets/signup-image.jpg';
const Signup = () => {

  const [eyeActive, setEyeActive] = useState(true);

  function eyeClick(){
    setEyeActive(!eyeActive)
  }
  function eyeSlashClick(){
    setEyeActive(!eyeActive)
  }


  return (
    <div className="signup-page d-flex justify-content-center align-items-center">

      <div className="form-container d-flex justify-content-center align-items-center ">
        <div className="form-left m-3">
          <form action="">
            <div className="name position-relative">
            <input placeholder="Name" className="positon-absolute rounded border border-info my-1" type="text" />
            </div>
            <div className="email position-relative">
            <input placeholder="email" type="email" className="positon-absolute rounded border border-info my-1" />
            </div>
            <div className="password position-relative">
             <div className="input-group">

             <input placeholder="password" type={ eyeActive ? "password" : "text"} className=" positon-absolute rounded border border-info " minLength={6} maxLength={10} />
            <span className="input-group-text">
            { eyeActive ?<i class="fa-sharp fa-solid fa-eye" onClick={eyeClick}> </i>
              :<i class="fa-sharp fa-solid fa-eye-slash " onClick={eyeSlashClick}></i> }
            </span>
            
             </div>
            </div>
            <div className=" d-flex justify-content-center my-3">
            <button type="submit"className="btn btn-dark btn-sm">Sign up</button>
            </div>
          </form>
          <div className="log-in d-flex justify-content-center">
            <Link to='/login'>Already have an account?</Link>
          </div>
        </div>
        <div className="form-right m-3">
          <img className="d-none d-sm-block" src= {signup} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Signup;
