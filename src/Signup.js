import React from "react";
import Axios from "axios";
import './Style.css';
import {useNavigate } from "react-router-dom";
 
function Signup() {
    const [myData, myDataUpdate] = React.useState({});
    let  navigate = useNavigate();
    const onChangeEvent = (e) => {
        myDataUpdate((myData) => ({
            ...myData,
            [e.target.name]: e.target.value
        }));
    }
    const submitValue = (event) => {
         event.preventDefault();
                var myformdata = new FormData();
            myformdata.append("st_name", myData.txt1);
            myformdata.append("st_gender", myData.txt2);
            myformdata.append("st_email", myData.txt3);
            myformdata.append("st_mobileno", myData.txt4);
            myformdata.append("st_password", myData.txt5);
            myformdata.append("st_photo", myData.txt6);
            Axios.post("https://akashsir.in/myapi/crud/student-add-api.php",myformdata)
            .then(function(response){
                console.log(response);
                if(response.data.flag === '1'){
                    alert('You succesfully SignIn')
                    localStorage.setItem("st_photo")
                    navigate('/Login')
                }else{
                    alert("The details are wrong");
                }
                });                
            }
                        return (    
                <div>
                    <h1>Signup...</h1>
                    <form onSubmit={submitValue}>
                        Name : <input type="text" name='txt1' onChange={onChangeEvent} /> <br />
                        Gender : <input type="text" name='txt2'  onChange={onChangeEvent}  /><br/>
                        Email : <input type="email" name='txt3' onChange={onChangeEvent} /><br />
                        Mobile No : <input type="number" name='txt4' onChange={onChangeEvent} /><br />
                        Password: <input type="password" name='txt5' onChange={onChangeEvent} /><br/>
                        Image: <input type="file" id="Photo" name="txt6" onChange={onChangeEvent}/><br/>
                        <input type="submit" />
                    </form>
                </div>);
}    
export default Signup;