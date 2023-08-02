import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Forgotpassword from './Forgotpassword';
import ChangePassword from './ChangePassword';
import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard"
import Edit_profile from './Edit_profile';
import Profile_photo from './Profile_photo';
import OTP from './OTP';
import Ve_OTP from './Ve_OTP';
import Re_OTP from './Re_OTP';

function App(){
  return(
    <React.Fragment>
    <Router>
      <Link to="/Dashboard">Dashboard</Link>  | 
      <Link to="/Login">Login</Link>  |   
      <Routes>  
        <Route path='/' element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path ="/Login" element = {<Login/>}/>
        <Route path ="/ChangePassword" element = {<ChangePassword/>}/>
        <Route path ="/Forgotpassword" element = {<Forgotpassword/>}/>
        <Route path ="/Edit_profile" element = {<Edit_profile/>}/>   
        <Route path='/Profile_photo' element= {<Profile_photo />}/>
        <Route path='/OTP' element={<OTP />}/>
        <Route path='/Ve_OTP' element={<Ve_OTP />}/>
        <Route path='/Re_OTP' element={<Re_OTP />}/>
      </Routes>
    </Router>
    </React.Fragment>
  )
}
export default App;