import React, { useRef, UseEffect } from "react";
import { WebViewer } from "@pdftron/webviewer";
import "./Cours.css";

const Cours = () => {
  return (
    <>
      <div className="section">
        <h4>Let's read...</h4>
        <div className="vdo">
          <h5>
            Here you can find courses on seismostratigraphy, geophysics. <br />
            ** Please keep it for your private use only **
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "3%",
          }}
        >
          <h2 style={{ color: "rgb(235, 182, 35)" }}>Course Title</h2>
          <h3 style={{ color: "blue" }}>Petrel Velocity Model</h3>
          <a
            href="https://www.researchgate.net/publication/337534419_Velocity_model_building_using_Petrel_software"
            target="_blank"
          >
            open file
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "3%",
          }}
        >
          <h2 style={{ color: "rgb(235, 182, 35)" }}>Course Title</h2>
          <h3 style={{ color: "blue" }}>Mapping Reservoir Fluid</h3>
          <a
            href="https://www.researchgate.net/publication/266638528_Mapping_Reservoir_Fluid_Using_AVO_Inversion_Spectral_Decomposition_and_Facies_Classification"
            target="_blank"
          >
            open file
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "3%",
          }}
        >
          <h2 style={{ color: "rgb(235, 182, 35)" }}>Course Title</h2>
          <h3 style={{ color: "blue" }}>Data import</h3>
          <a
            href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=https%3A%2F%2Fkau.edu.sa%2Ffiles%2F0002053%2Fsubjects%2Fweek2.pdf&clen=1782254&chunk=true"
            target="_blank"
          >
            open file
          </a>
        </div>
      </div>
    </>
  );
};

export default Cours;
