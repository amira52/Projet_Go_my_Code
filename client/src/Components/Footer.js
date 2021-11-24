import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "70%",
          margin: "auto",
        }}
      >
        <div className="cadre">
          <h2 className="title">Contact</h2>
          <p className="paraghraphe">
            Do you have any question? Feel free to reach out.
          </p>
          <button className="boutton2">
            {" "}
            <Link to="/contactus"> Let's Chat</Link>
          </button>
        </div>
        <div className="cadre">
          <h2 className="title"> Adress </h2>
          <p className="paraghraphe">
            {" "}
            faculty of sciences of tunis <br />
            Geophysical Research Unit Applied to Materials and Minerals
          </p>
        </div>
        <div className="cadre">
          <h2 className="title"> Email </h2>
          <p className="paraghraphe">
            {" "}
            emira. <br />
            Phone: +
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
