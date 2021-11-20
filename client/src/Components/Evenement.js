import React from "react";
import { Link } from "react-router-dom";
const Evenement = () => {
  return (
    <div>
      <h2
        style={{
          color: "black",
          fontFamily: "sans-serif",
          marginTop: "3%",
          marginBottom: "5%",
        }}
      >
        {" "}
        No Events Available Right Now{" "}
      </h2>
      <button
        style={{
          color: "rgb(235, 94, 13)",
          fontFamily: "serif",
          backgroundColor: "white",
          borderRadius: "5px",
          borderColor: "white",
        }}
      >
        <Link to="/contactus"> Question? Contact us</Link>
      </button>{" "}
    </div>
  );
};

export default Evenement;
