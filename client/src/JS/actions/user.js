import axios from "axios";
import {
  LOAD_USER,
  REGISTER_USER,
  FAIL_USER,
  LOGIN_USER,
  CURRENT_USER,
  LOGOUT_USER,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_LOAD,
  GET_USER,
} from "../constants/user";

export const register = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/register", user);
    //succees action
    dispatch({ type: REGISTER_USER, payload: result.data }); //{user,token,msg}
    history.push("/profile");
  } catch (error) {
    error.response.data.errors.map((el) => alert(el.msg));
    // fail
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const { data } = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: data }); //{msg,token,user}
    data?.user?.role === "admin"
      ? history.push("./admin")
      : history.push("./profile");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const current = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

// logout
export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const videErrors = () => {
  return {
    type: "VIDE_ERRORS",
  };
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_LOAD });
  try {
    const { data } = await axios.get("/api/user/admin/users");
    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/user/admin/users/${id}`);
    dispatch(getAllUsers());
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
};

export const getUser = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    await axios.get(`/api/editProfile/user/${id}`);
    dispatch(current());
  } catch (error) {
    dispatch({ type: FAIL_USER });
  }
};
export const editUser = (user, history) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/user/editProfile`, user, config);
    alert("Profile Updated");

    dispatch(current());
    history.push("/profile");
  } catch (error) {
    dispatch({ type: FAIL_USER });
  }
};
