import React from 'react';
import axios from 'axios';
 function Profile_photo() {
    const [profile, setProfile] = React.useState([]);
   
    
 const onChangeEvent = (e) => {

        setProfile(e.target.files[0]);
}
   const submitValue = (event) => {
        event.preventDefault();
        var myformdata = new FormData();
        var id = 10;
        myformdata.append("st_id", id);
        myformdata.append("st_photo", profile.pic);
        const config = {
            headers: {
            'Content-type': 'multipart/form-data',
            },
            };
        axios.post("https://akashsir.in/myapi/crud/student-image-change-api.php",myformdata)
            .then(function (response) {
                console.log(response);
               if (response.data.flag === '1') {
                    
                    alert("verified");
                
                }
                else {
                    alert("invalid Detail");}
            }) }
 return (
        <div>
            <h1>Change Profile Photo</h1>
            {profile}
            <form onSubmit={submitValue} >
             
                Image : <input type='file' name='pic'  alt='pic' onChange={onChangeEvent} /><br />
   
                <input type='submit' />
            </form>
        </div>
    )
}
export default Profile_photo;

