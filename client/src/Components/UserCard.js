import React from "react";
import "./UserCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
function UserCard({ user }) {
  const { name, email, phone } = user;
  return (
    <div className="container">
      <div className="card">
        <div className="card-head">
          <img
            className="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhhklLpQnJpmdcRWm07dxiiIp22D9ZaFlhzNF5S7EMPxEinocq&usqp=CAU"
            alt="Username"
          />
        </div>
        <div className="card-body">
          <div>
            <span className="Student-name">
              {name} <b>{name || ""}</b>
            </span>
            <span className="username">@{email}</span>
          </div>
          <div className="student-infos">
            <span className="Student-description">
              <p>{phone}</p>
            </span>
            <div className="bnt-card">
              <DeleteIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
