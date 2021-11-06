import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Authentification/Home/Home';
import Login from './Pages/Authentification/Login';
import Profile from './Pages/Authentification/Profile';
import Register from './Pages/Authentification/Register';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current, editProfile } from "./JS/actions/user";
import PrivateRoute from './router/PrivateRoute';
import Services from './Pages/Authentification/Services/Services';
import Footer from './Components/Footer';
import Installation from './Pages/Authentification/Installation/Installation';
import Tutorials from './Pages/Authentification/Tutorials/Tutorials';
import Cours from './Pages/Authentification/Cours/Cours';
import { ContactUs } from './Components/ContacUS';
import Forum from './Components/Forum/Forum';
import EditProfile from './Pages/Authentification/EditProfile';
import Admin from './Components/Admin';


function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) dispatch(current());
  }, [dispatch, token]);
  return (
    <div className="App">
        <NavBar/>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/services" component={Services}/>
        <PrivateRoute path="/profile" component={Profile}/>
        <PrivateRoute path="/installation" component={Installation}/>
        <PrivateRoute path="/tutorials" component={Tutorials}/>
        <PrivateRoute path="/cours" component={Cours}/>
        <PrivateRoute path="/editProfile" component={EditProfile}/>
        <Route path="/contactus" component={ContactUs}/>
        <Route path="/forum" component={Forum}/>
        <PrivateRoute path="/admin" component={Admin}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
