import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Services.css";
import { Link } from 'react-router-dom';



export default function Services() {
  
  return (
      <>
    <div style={{display:"flex", justifyContent:"space-around", marginTop:"1%", backgroundColor:"rgb(183, 216, 230)", paddingTop:"102px", paddingBottom:"122px", borderRadius:"5px"}}>
    <Card style={{ width:"25%" }}>
      <CardMedia 
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.ytimg.com/vi/IdO-PAJGVu4/sddefault.jpg"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" style={{color:"darkblue"}}>
          Petrel installation Guide
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This guide explains how to install the Petrel E&P Software Platform 2017. <br/>
          These topics are discussed: <br/>
          • Installing on a workstation using a local license.
        </Typography>
        <CardActions>
        <Button> 
        <Link to ="/installation" style={{padding:"2px", backgroundColor:"rgb(155, 212, 245)", margin:"auto", borderRadius:"5px", fontFamily:"Georgi"}}>Learn more</Link>
        </Button>
      </CardActions>
      </CardContent>
      
    </Card>
    <Card style={{ width:"25%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="data:image/jpeg;base64,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"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"darkblue"}}>
          Petrel Tutorials
        </Typography>
        <Typography variant="body2" color="text.secondary">
          In this section you will find a number of tutorials that explain how to creat a project on Petrel.<br/>
          These topics are discussed: <br/>
          • Setting project on Petrel. <br/>
          • Import seismic an well data. <br/>
          • Well Tie. <br/>
          • Horizon and Faults mapping. <br/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
        <Link to ="/tutorials" style={{padding:"2px", backgroundColor:"rgb(155, 212, 245)", margin:"auto", borderRadius:"5px", fontFamily:"Georgi"}}>Learn more</Link>
        </Button>
      </CardActions>
    </Card>
    <Card style={{ width:"25%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdjvfx1RX2sQj60Jh8XObiCaBt4Nd5zXhaw&usqp=CAU"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"darkblue"}}>
          Petrel cours
        </Typography>
        <Typography variant="body2" color="text.secondary">
          In this part you will find so many cours.<br/>
          These topics are discussed: <br/>
          • Seismic Stratigraphy. <br/>
          • Exampls of seismic interpretation. <br/>
          • Seismic data analysis. <br/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button >
          <Link to ="/cours" style={{padding:"2px", backgroundColor:"rgb(155, 212, 245)", margin:"auto", borderRadius:"5px", fontFamily:"Georgi"}}>Learn more</Link>
        </Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}