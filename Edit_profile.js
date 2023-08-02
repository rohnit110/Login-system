import React from "react";
import Axios from "axios";
import './Style.css';
 function Edit_profile() {
    const [profile, editProfile] = React.useState({});
    const onChangeEvent = (e) => {
        editProfile((profile) => ({
            ...profile,
            [e.target.name]: e.target.value
        }));
    }
    const submitValue = (event) => {
         event.preventDefault();
            var myformdata = new FormData();
            myformdata.append("st_name", profile.txt1);
            myformdata.append("st_gender", profile.txt2);
            myformdata.append("st_email", profile.txt3);
            myformdata.append("st_mobileno", profile.txt4);
            myformdata.append("st_password", profile.txt5);
     Axios.get("https://akashsir.in/myapi/crud/student-edit-api.php",myformdata)
        .then(function(response){
            console.log(response);
            if (response.data.flag ==="1"){
             var  msg = response.data.message;
             alert(" " + msg);
            }
       else{
           alert(" Wrong Detail");
          }});                
      }
  return (
    <div>
        <h1>Edit Profile</h1>
        <form onSubmit={submitValue}>
            Name : <input type="text" name='txt1' onChange={onChangeEvent} /> <br />
            Gender : <input type="text" name='txt2' onChange={onChangeEvent} /><br />
            Email : <input type="text" name='txt3' onChange={onChangeEvent} /><br />
            Mobile No : <input type="text" name='txt4' onChange={onChangeEvent} /><br />
            Password: <input type="text" name='txt5' onChange={onChangeEvent} /><br />
             <input type="submit" />
        </form>
    </div>);
        }  
export default Edit_profile;