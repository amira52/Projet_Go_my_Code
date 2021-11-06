import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

export default function Profile() {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  return (
    
    <div className="carte">
      {isAuth?
    <Card style={{width:"45%", marginTop:"3%",marginLeft:"5%", borderRadius:"5px"}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"fantasy", textDecoration:"underline", color:"orange"}}>
            Profile information
          </Typography>
          <Typography gutterBottom variant="h5" component="div" style={{display:"flex", flexDirection:"row", alignItems: "center"}}>
            <label style={{color:"darkblue", fontWeight:"bold"}}>Name:</label>
            <h3 className="mt-0 mb-0">{user && user.name}</h3>
          </Typography>
          <Typography gutterBottom variant="h5" component="div" style={{display:"flex", flexDirection:"row", alignItems: "center"}}>
            <label style={{color:"darkblue", fontWeight:"bold"}}>Email:</label>
            <h3 className="mt-0 mb-0">{user && user.email}</h3>
          </Typography>
          <Typography gutterBottom variant="h5" component="div" style={{display:"flex", flexDirection:"row", alignItems: "center"}}>
            <label style={{color:"darkblue", fontWeight:"bold"}}>Phone:</label>
            <h3 className="mt-0 mb-0">{user && user.phone}</h3>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{backgroundColor:"rgb(214, 214, 206)", marginLeft:"70%", fontFamily:"Georgi"}} size="small" color="primary">
          <Link to={`/editProfile/${user._id}`}>
               <EditIcon/> 
            </Link>
        </Button>
      </CardActions>
    </Card>
    : <Link to ="/login"> Click here to Login</Link>}
    </div>
  );
}
