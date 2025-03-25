import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import "../../assets/css/login.css"
import { Toaster } from '../../Toaster';
export const Login = () => {

  const navigate = useNavigate();

  const {register, handleSubmit} = useForm();
  const submitHandler = async(data) => {
    //console.log(data);
    //login api... http://localhost:3000/user/login
    const res = await axios.post("http://localhost:3000/user/login", data)
    console.log(res.data)
    if(res.status === 200){
      Toaster("Login Success", "success") //tost...
      localStorage.setItem("id",res.data.data._id);
      localStorage.setItem("role",res.data.data.roleId.name);
    
        navigate("/user") //check in app.js

      // if(res.data.data.roleId.name === "USER"){
      // }





    }
    else{
      Toaster("Login Failed", "error")
    }
  }

  return (
    // <div style={{ textAlign: "center" }}>
    //   <h1>LOGIN USER</h1>
    //   <form onSubmit={handleSubmit(submitHandler)}>
    //     <div>
    //       <label>EMAIL</label>
    //       <input type="text" {...register("email")} placeholder='enter email'/>
    //     </div>
    //     <div>
    //       <label>Password</label>
    //       <input type="password" {...register("password")} placeholder='enter password'/>
    //     </div>
    //     <div>
    //       <input type="submit"></input>
    //     </div>
    //   </form>
    // </div>
    <div className="login">
      
    <div className="login-card">
      <div className="brand">
        <div className="brand-logo"></div>
        <h1>LOGIN USER</h1>
        <p>Enter your credentials to access your account</p>
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
      
        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            id="email"
            {...register("email")}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Enter password"
          />
        </div>
        <div className="remember-forgot">
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <div className="social-login">
        <p>Or login with</p>
        <div className="social-buttons">
          <div className="social-btn">G</div>
          <div className="social-btn">F</div>
        </div>
      </div>
      <div className="signup-link">
        <p>
          Don't have an account? <Link to="/Signup">Sign up</Link>
        </p>
      </div>
    </div>
  </div>
  )
}
