import React from "react";
import Axios from "axios";
import './Style.css';
import { useNavigate, Link } from "react-router-dom";
function Login() {
    const [data, setData] = React.useState({});
    let navigate= useNavigate();
    const onChangeEvent = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value
        })  
        );
    }
    const onSubmitValue = (event) => {
        event.preventDefault();
        var myformData = new FormData();3
        myformData.append("st_email", data.txt1);
        myformData.append("st_password", data.txt2);
        Axios.post("https://akashsir.in/myapi/crud/student-login-api.php", myformData)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === "1") {
                    alert("SucessFully LoggedIn");
                    var a = response.data.st_id
                    var b = response.data.st_name
                    var c = response.data.st_photo
                    localStorage.setItem("st_id", JSON.stringify(a))
                    localStorage.setItem("st_name", JSON.stringify(b))
                    localStorage.setItem("st_photo", JSON.stringify(c))
        
                   navigate("/Dashboard")      
                } else {
                    alert("You Enteres Wrong Email Id Or Pass");
                }
            }).catch(function (response) {
                console.log(response);
            });
    }
    return (
        <div>
            <h1>Login...</h1>
            <form onSubmit={onSubmitValue}>
                Email: <input type="email" name="txt1" onChange={onChangeEvent} /><br />
                Password: <input type="password" name="txt2" onChange={onChangeEvent} /><br />
                <input type="submit"></input> 
            </form>
            <Link to="/SignUp">SignUp</Link> |
            <Link to="/ForgotPassword">Forgot Password</Link> |
            <Link to="/OTP">Send OTP</Link>
        </div>
    )
}
export default Login;