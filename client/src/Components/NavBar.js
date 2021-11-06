import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './NavBar.css' 
import { useSelector } from 'react-redux';
import { logout } from '../JS/actions/user';
import { useDispatch } from 'react-redux';


export default function NavBar() {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar classeName="box"style={{backgroundColor: "rgb(15, 15, 97)"}} position="static">
        <Toolbar>
          <div className="NavBtn">
            <Button color="inherit"><Link to ="/home"> Home </Link></Button>
            <Button color="inherit"><Link to ="/services"> Services </Link></Button>
            <Button color="inherit"><Link to ="/evenements"> Evenements </Link></Button>
            {isAuth? <Button color="inherit"><Link to ="/profile"> Profile </Link> </Button>: <Button color="inherit"><Link to ="/home">  </Link> </Button> }
          </div>
          <div className="NavBtn" >
            {isAuth? <Button onClick={handleLogout} className="bnt-logout" style={{ color: "rgb(235, 94, 13", fontFamily:"Franklin Gothic Medium",marginLeft:"800px" }}> Logout </Button> : <div style={{display:"flex"}}>
              <Button color="inherit" style={{marginLeft:"400%"}}><Link to ="/register"> Register </Link></Button>
              <Button color="inherit" style={{marginLeft:"20%"}}><Link to ="/login"> Login </Link></Button>
            </div>}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
