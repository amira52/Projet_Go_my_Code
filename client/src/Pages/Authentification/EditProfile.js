import React from 'react'
import {TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import {  useState } from 'react'
const EditProfile = () => {
    const [profile, setProfile] = useState({});
    const user = useSelector((state) => state.userReducer.user);
    const handleChange= (e)=>(
    setProfile({...profile, [e.target.name]: e.target.value})
);
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <h1 style={{color:"grey", fontSize:"35px"}}> Update profile informations </h1>
        <form>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <TextField style={{marginTop:"1%", width:"25%"}}
        id="outlined-number"
        label="Name"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        name="Name"
        onChange={handleChange}
        value={user.name}
      />
      <TextField style={{marginTop:"1%", width:"25%"}}
        id="outlined-number"
        label="Email"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        name="Email"
        onChange={handleChange}
        value={user.email}
      />{" "}
      <TextField style={{marginTop:"1%",  width:"25%"}}
        id="outlined-number"
        label="Phone Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
        value={user && user.phone}
        name="PhoneNumber"
        
      />
      </div>
      <div >
      <button style={{marginTop:"1%", backgroundColor:"red", borderRadius:"5px", fontFamily:"inheret"}}>Update Profile</button>
      </div>
    </form>
        </div>
    )
}

export default EditProfile
