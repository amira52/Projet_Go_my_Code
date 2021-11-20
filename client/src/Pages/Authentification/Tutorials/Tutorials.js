import React from "react";
import ReactPlayer from "react-player";
import "./Tutorials.css";

const Tutorials = () => {
  return (
    <>
      <div className="section">
        <h4>Hands On Start to Petrel ... </h4>
        <div className="vdo">
          <ReactPlayer url="https://youtu.be/d_x2E6NGFt8" />
          <ReactPlayer url="https://youtu.be/lCSsOhO5n4Q" />
        </div>
        <div className="vdo">
          <ReactPlayer url="https://youtu.be/skmgjiSkwTQ" />
          <ReactPlayer url="https://youtu.be/to1Ec-hisjo" />
        </div>
      </div>
    </>
  );
};

export default Tutorials;
