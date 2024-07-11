import React from 'react'
import { Link } from 'react-router-dom';
import signin from '../../public/assets/signin-image.jpg';
import { useState } from 'react';
const Login = () => {
  const [eyeActive, setEyeActive] = useState(true);

  function eyeClick(){
    setEyeActive(!eyeActive)
  }
  function eyeSlashClick(){
    setEyeActive(!eyeActive)
  }

  return (
    <div className="sigin d-flex justify-content-center align-items-center">
    <div className="form-container d-flex justify-content-center align-items-center ">
        <div className="form-left m-3">
          <form action="">
            <div className="email position-relative">
            <input placeholder='email' type="email" className="positon-absolute rounded border border-info my-1" />
            </div>
            <div className="password position-relative">
            
             <div className="input-group">
             <input placeholder='password' type={ eyeActive ? "password" : "text"} className=" positon-absolute rounded border border-info " minLength={6} maxLength={10} />
            <span className="input-group-text">
            { eyeActive ?<i class="fa-sharp fa-solid fa-eye" onClick={eyeClick}> </i>
              :<i class="fa-sharp fa-solid fa-eye-slash " onClick={eyeSlashClick}></i> }
            </span>
            
             </div>
            </div>
            <div className=" d-flex justify-content-center my-3">
            <button type="submit"className="btn btn-dark btn-sm">Login</button>
            </div>
          </form>
          <div className="log-in d-flex justify-content-center">
            <Link to='/signup'>Sign up</Link>
          </div>
        </div>
        <div className="form-right m-3">
          <img className="d-none d-sm-block" src= {signin} alt="" />
        </div>
      </div>

     </div>
    
  )
}

export default Login;