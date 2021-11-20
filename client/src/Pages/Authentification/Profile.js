import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Profile() {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="carte" style={{ height: "100vh" }}>
      {isAuth ? (
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div
              style={{ marginTop: "0%", width: "25%", marginLeft: "37%" }}
              className="row container1 d-flex justify-content-center "
            >
              <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-white">
                        <div className="m-b-25">
                          {" "}
                          <img
                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                            className="img-radius"
                            alt="User-Profile-Image"
                          />{" "}
                          <div>
                            <Button
                              style={{
                                backgroundColor: "rgb(214, 214, 206)",
                                fontFamily: "Georgi",
                              }}
                              size="small"
                              color="primary"
                            >
                              <Link
                                to={`/editProfile/${user._id}`}
                                style={{ marginLeft: "0px" }}
                              >
                                Edit Profile
                              </Link>
                            </Button>
                          </div>
                        </div>
                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="card-block">
                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                          Your Profile Information
                        </h6>
                        <div className="row">
                          <div className="col-sm-6">
                            <p
                              style={{ color: "darkblue" }}
                              className="m-b-10 f-w-600"
                            >
                              Name
                            </p>
                            <h6 className="text-muted f-w-400">
                              {user && user.name}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <p
                              style={{ color: "darkblue" }}
                              className="m-b-10 f-w-600"
                            >
                              Email
                            </p>
                            <h6 className="text-muted f-w-400">
                              {user && user.email}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <p
                              style={{ color: "darkblue" }}
                              className="m-b-10 f-w-600"
                            >
                              Phone
                            </p>
                            <h6 className="text-muted f-w-400">
                              {user && user.phone}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Link to="/login"> Click here to Login</Link>
      )}
    </div>
  );
}
