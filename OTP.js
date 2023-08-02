import React from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OTP() {
    const[data,myData] = React.useState({});
     let navigate = useNavigate();
    const onChangeEvent=(e)=>{
        myData((data) => ({
           ...data,
           [e.target.name] : e.target.value,
        }));
    }
    const onSubmitValue=(event)=>{
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_mobileno",data.number);
        myformdata.append("st_name",data.name);
        Axios.post("https://akashsir.in/myapi/crud/login-with-otp.php",myformdata)
        .then(function(response){
            console.log(response)
            if(response.data.flag ==='1'){
                var otp = response.data.mobile_otp;
                alert("Your OTP is :" +otp)
                navigate('/Ve_OTP')
            }else{
                alert("Wrong OTP")
            }
        })
    }
    return (
        <div>
            <h1>Generate OTP</h1>
          <form onSubmit={onSubmitValue}>
         Mobile number:   <input type='number' name='number' onChange={onChangeEvent}/><br/>
         Name:  <input type='text' name='name' onChange={onChangeEvent}/><br/>
            <input type='submit'/>
          </form>
        </div>
    );
}
export default OTP;