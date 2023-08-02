/*import React from 'react';
import  Axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Ve_OTP(){
    const[otp, verifyOTP] = React.useState();
    let navigate = useNavigate();
    const onChangeEvent= (e) =>{
        verifyOTP((otp)= ({
            ...verifyOTP,
            [e.target.name] : e.target.value
        }))
    }
    const onSubmitValue =(event) =>{
      event.preventDefault();
      let myformdata = new FormData();
      myformdata.append("st_mobileno",otp.number)
      myformdata.append("mobile_otp", otp.num)
      Axios("https://akashsir.in/myapi/crud/verify-mobile-otp.php",myformdata)
      .then(function(response){
        console.log(response)
        if(response.data.flag ==='1')
        {
            alert("Successfully verified :" )
            navigate('/Dashboard')
        }else{
            alert("wrong otp")
        }
      })
    }

     return(
        <div>
            <h1>Verify OTP</h1>
        <form onSubmit={onSubmitValue}>
            Mobile Number: <input type='number' name='number' onChange={onChangeEvent}></input><br />
            OTP : <input type='number' name='num' onChange={onChangeEvent}></input><br />
            <input type='submit'/>
        </form>
        <Link to= "/Re_OTP"></Link>
        </div>
    )
}
export default Ve_OTP;*/

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Ve_OTP() {
    const [ myVeotp, setVerifyotp] = React.useState({});
    let navigate = useNavigate();
    const onChangeEvent = (e) => {
        setVerifyotp((myVeotp) => ({
            ...myVeotp,
            [e.target.name]: e.target.value
        }));
    }

    const submitValue = (event) => {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_mobileno", myVeotp.no);
        myformdata.append("mobile_otp", myVeotp.num);

        axios.post("https://akashsir.in/myapi/crud/verify-mobile-otp.php", myformdata)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === "1") {
                    alert(response.data.message);
                    navigate('/Dashboard');
                }
                else {
                    alert("Wrong details entered");
                }
            })
    }

    return (
        <div>
            <h2>Verify OTP</h2>
            <form onSubmit={submitValue} >
                Mobile no : <input type="number" name="no" onChange={onChangeEvent} /><br />
                Mobile OTP : <input type="number" name="num" onChange={onChangeEvent} /><br />
                <input type="submit" />
            </form>
            <Link to="/Re_OTP">Resend OTP</Link>
        </div>
    );
}

export default Ve_OTP;