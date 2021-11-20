import { Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar";

import Login from "./Pages/Authentification/Login";
import Profile from "./Pages/Authentification/Profile";
import Register from "./Pages/Authentification/Register";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current, editProfile } from "./JS/actions/user";
import PrivateRoute from "./router/PrivateRoute";
import Installation from "./Pages/Authentification/Installation/Installation";
import Tutorials from "./Pages/Authentification/Tutorials/Tutorials";
import Cours from "./Pages/Authentification/Cours/Cours";
import { ContactUs } from "./Components/ContacUS";

import EditUser from "./Pages/Authentification/EditUser";
import Admin from "./Components/Admin";
import TopicsList from "./Pages/Topics/TopicList";
import AddTopic from "./Pages/Topics/AddTopic";
import TopicList from "./Pages/Topics/TopicList";
import Forum from "./Pages/Forum/Forum";
import Evenement from "./Components/Evenement";

import Home2 from "./Pages/Home2/Home2";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) dispatch(current());
  }, [dispatch, token]);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home2} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/services" component={TopicList} />
        <Route path="/Topics" component={TopicsList} />
        <Route path={["/addTopic", "/editTopic/:id"]} component={AddTopic} />
        <Route path="/forum" component={Forum} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/installation" component={Installation} />
        <PrivateRoute path="/tutorials" component={Tutorials} />
        <PrivateRoute path="/cours" component={Cours} />
        <PrivateRoute path="/editProfile/:id" component={EditUser} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/evenements" component={Evenement} />
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
