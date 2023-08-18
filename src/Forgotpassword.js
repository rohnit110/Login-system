import React from "react";
import Axios from "axios";
import './Style.css';
function Forgotpassword() {
    const [data, setData] = React.useState({});
    const onChangeEvent = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value}));
    }
    const onSubmitValue = (event) => {
        event.preventDefault();
        var myfrmData = new FormData();
        myfrmData.append("st_email", data.txt);

        Axios.post("https://akashsir.in/myapi/crud/student-forgot-password-api.php", myfrmData)
            .then(function (response) {
                console.log(response);
                if(response.data.flag === "1") {
                    var msg = response.data.message;
                    alert(" " + msg);
                } else {
                    alert(" Wrong Email Id ");
                }
            }).catch(function (response) {
                console.log(response);
            });
    }
    return (
        <div>
            <h1>Forgot Password</h1>
            <form onSubmit={onSubmitValue}>
                Email: <input type="email" name="txt" onChange={onChangeEvent} /><br />
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default Forgotpassword;