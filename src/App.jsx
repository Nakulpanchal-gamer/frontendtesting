import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserNavbar } from './components/layouts/ComNavbar'
import "./assets/css/adminlte.css"
import "./assets/css/adminlte.min.css"
import { Signup } from './components/layouts/Signup'
import { Login } from './components/layouts/Login'
import axios from 'axios'
import PrivateRoute from './hook/PrivateRoute'
import { ToastContainer } from 'react-toastify';
import  LandingPage from './Landing/LandingPage'
import { AddProduct } from './components/user/AddProduct'
import { AddProduct2 } from './components/user/AddProducts'
import { ResetPassword } from './components/layouts/resetpassword'
// import { UserDashboard } from './components/user/UserDashboard'
// import './assets/js/adminlte'
// import './assets/js/adminlte.min'

function App() {

  axios.defaults.baseURL = "http://localhost:3000"

  
 

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);
  
  
  return (

    <>
    <ToastContainer />
    <div className={
      location.pathname === "/login" || location.patahname === "/signup" 
      ? "" 
      : "app-wraper"
    }>
      <Routes>

      <Route path="/" element ={<LandingPage/>}></Route>
        <Route path="" element={<PrivateRoute />}>
        <Route path="/user" element = { <UserNavbar/> }>
            <Route path="addscreen" element={<AddProduct2 />} />
            {/* <Route path="myscreens" element ={<ViewMyScreens/>}></Route> */}
            {/* <Route path ="updateScreen/:id"element = {<UpdateMyScreen/>}></Route> */}
            </Route>
        </Route>
        {/* <Route path="/dashboard" element = {<UserDashboard/>}></Route>  */}
        <Route path="/login" element = { <Login/> }></Route>
        <Route path="/Signup" element = { <Signup/> }></Route>
        <Route path="/resetpassword/:token" element={<ResetPassword/>}></Route>
        
      </Routes>
      </div>
    </>
  )
}

export default App
