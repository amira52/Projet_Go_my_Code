import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../JS/actions/user";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import UserCard from "./UserCard";
const Admin = () => {
  const users = useSelector((state) => state.userReducer.users);
  console.log("users",users);
  const load = useSelector((state) => state.userReducer.load);
  const isError = useSelector((state) => state.userReducer.isError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
      {load ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <p>Can not fetch the data</p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {users.map((user) => (
            <UserCard user={user} key={user._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Admin;
