import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Style.css';
function Dashboard(){
  const [dashboard,setDashboard] = React.useState("");
  var navigate= useNavigate();
  useEffect(() =>{
    if (localStorage.getItem("st_name")) {
          var a = localStorage.getItem("st_name");
          setDashboard(a);
    }
    else{
        window.location="/Login"; 
    }
      })

  function logout() {
    localStorage.clear();
    navigate('/')
  }
return(
        <div>
         <h1>Dashboard</h1><br/>
         <h2> My name is: {dashboard}</h2><br/>
          <Link to = "/Changepassword">Change Password</Link> |
          <Link to = "/Edit_Profile">Edit profile</Link> |
          <Link to = "/Profile_photo"> Change profile photo</Link> |
          <button onClick={logout}>Logout</button>
        </div>
)
}
export default Dashboard;