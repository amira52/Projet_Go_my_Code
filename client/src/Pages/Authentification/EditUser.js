import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { editUser, current } from "../../JS/actions/user";
import "./EditUser.css";
const EditUser = () => {
  const [user, setUser] = useState({});
  // const [edit, setEdit] = useState(false);
  const userToEdit = useSelector((state) => state.userReducer.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(current(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    // params.id ? setEdit(true) : setEdit(false);
    setUser(userToEdit);
  }, [params.id, userToEdit]);

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleUser = () => {
    dispatch(editUser(user, history));
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "auto",
        }}
      >
        <h1 className="hhh"> Please fill in the fields </h1>
        <TextField
          style={{ marginTop: "5%" }}
          className="filed"
          id="outlined-number"
          label="Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          name="name"
          onChange={handleChange}
          value={user.name}
        />
        <TextField
          className="filed"
          id="outlined-number"
          label="Email"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          name="email"
          onChange={handleChange}
          value={user.email}
        />{" "}
        <TextField
          className="filed"
          id="outlined-number"
          label="Phone"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={user.phone}
          name="phone"
          onChange={handleChange}
        />
        <Button className="edit" onClick={handleUser}>
          {" "}
          Edit{" "}
        </Button>
      </form>
    </div>
  );
};

export default EditUser;
