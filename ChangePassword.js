import React from "react";
import Axios from "axios";
import './Style.css';
 function ChangePassword() {
    const [myData, myDataUpdate] = React.useState({});
    const onChangeEvent = (e) => {
        myDataUpdate((myData) => ({
            ...myData,
            [e.target.name]: e.target.value
        }));
    }
    const submitValue = (event) => {
         event.preventDefault();
                var myformdata = new FormData();
            myformdata.append("st_id", myData.txt1);
            myformdata.append("opass", myData.txt2);
            myformdata.append("npass", myData.txt3);
            myformdata.append("cpass", myData.txt4);
            
    Axios.post("https://akashsir.in/myapi/crud/student-change-password-api.php?st_id&opass",myformdata)
     .then(function(response){
      console.log(response);
      if (response.data.flag==="1")
      var msg = response.data.message;
      alert(" " + msg)
    });                
  } 
   return (
    <div>
       <h1>Change Password</h1>
       <form onSubmit={submitValue}>
          USER id: <input type="text" name='txt1' onChange={onChangeEvent} /> <br />
          Old Password: <input type="password" name='txt2' onChange={onChangeEvent} /><br />
          New Password: <input type="password" name='txt3' onChange={onChangeEvent} /><br />
          Conform Password: <input type="password" name='txt4' onChange={onChangeEvent} /><br />
       <input type="submit" />
     </form>
    </div>);
}   
export default ChangePassword;