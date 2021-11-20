import React from "react";
import ReactPlayer from "react-player";
import "./installation.css";

const Installation = () => {
  // const installation= useSelector(state=>)
  // useEffect(() => {
  //   dispatch(getTopic(params.id));
  // }, []);
  return (
    <>
      <div className="section">
        <h4>Welcome to the installation guide of Petrel</h4>
        <div className="vdo">
          <ReactPlayer url="https://youtu.be/grizMcTIylc" />
          <p>
            Please follow the video's instruction for a successful installation.{" "}
            <br />
            For more information or any question do not hesitate to contact us.{" "}
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Installation;
