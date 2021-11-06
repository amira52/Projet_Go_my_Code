import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
    <div>
        <div className="home">
           <h1>Making the <br/> complex Simple ...</h1>
           <button style={{ color: "rgb(235, 94, 13)", fontFamily:"serif", backgroundColor:"white", borderRadius:"5px", borderColor:"white" }}><Link to ="/contactus"> Question? Contact us</Link></button> <br/>
           <button style={{ marginTop:"8px",color: "rgb(235, 94, 13)", fontFamily:"serif", backgroundColor:"white", borderRadius:"5px", borderColor:"white" }}><Link to ="/Forum"> Visit Our Forum ...</Link></button>
        </div>
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", marginLeft:"auto",
    marginRight: "auto", width:"50%", marginTop:"32px", marginBottom:"5%" }}>
            <h2>About us !</h2>
            <p1>We are a group of students from the Geolgoie Department of the Faculty of Science of Tunis.
                In this Webpage you will find every thing about the PETREL geological Softwar.
                We gonne help you installING the Softwar step by step and
                also how tu use this software. </p1>
        </div>
    </div>          
    )
}

export default Home
