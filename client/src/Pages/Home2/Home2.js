import React from "react";
import "./Home2.css";
import { Link } from "react-router-dom";
import { ContactUs } from "../../Components/ContacUS";
import Footer from "../../Components/Footer";
function Home2() {
  return (
    <div>
      <div className="contain">
        <div className="abt">
          <h1
            style={{
              color: "rgb(24, 33, 109)",
              fontSize: "56px",
              fontFamily: "Motiva Sans Bold",
              lineHeight: "1.18",
              textAlign: "left",
              marginLeft: "5%",
            }}
          >
            About Us
          </h1>
          <p className="aboutus">
            The Petrel E&P software platform provides a full range of tools to
            solve the most complex structural and stratigraphic challenges,
            especially for master's students in geology. Through this website,
            we wanted to help students in master's degree in geology, having
            difficulties to use this software. as well as understand the use of
            this software.
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button className="boutton">
              {" "}
              <Link
                to="/login"
                style={{
                  color: "white",
                  fontSize: "18px",
                  marginLeft: "6%",
                  fontFamily: "serif",
                }}
              >
                {" "}
                Login
              </Link>
            </button>
            <button className="boutton1">
              {" "}
              <Link
                to="/forum"
                style={{
                  color: "darckblue",
                  fontSize: "18px",
                  marginLeft: "6%",
                  fontFamily: "serif",
                }}
              >
                {" "}
                Forum
              </Link>
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://landy.website/img/svg/developer.svg"
            alt="bib"
            className="img3"
          />
        </div>
      </div>
      <div>
        <h1
          style={{
            color: "rgb(24, 33, 109)",
            fontSize: "56px",
            fontFamily: "Motiva Sans Bold",
            lineHeight: "1.18",
            marginTop: "16%",
          }}
        >
          About Petrel
          <br />
          Software
        </h1>
        <p className="petrelDesc">
          Petrel is a software platform used in the exploration and production
          sector of the petroleum industry. It allows the user to interpret
          seismic data, perform well correlation, build reservoir models,
          visualize reservoir simulation results, calculate volumes, produce
          maps and design development strategies to maximize reservoir
          exploitation. Risk and uncertainty can be assessed throughout the life
          of the reservoir.Although some other oil servicing companies hire the
          services of this software, Petrel is developed and built by
          Schlumberger.
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button className="boutton3">
            {" "}
            <Link
              to="/topics"
              style={{
                color: "white",
                fontSize: "18px",
              }}
            >
              {" "}
              Getting Started With Petrel
            </Link>
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10%",
        }}
      >
        <div>
          <img
            className="img2"
            src="https://landy.website/img/svg/waving.svg"
            alt="bib"
            className="img2"
          />
        </div>
        <div className="serv">
          <h1
            style={{
              color: "rgb(24, 33, 109)",
              fontSize: "56px",
              fontFamily: "Motiva Sans Bold",
              lineHeight: "1.18",
              textAlign: "left",
              marginLeft: "5%",
            }}
          >
            Our Services
          </h1>
          <p style={{ textAlign: "justify" }} className="aboutus">
            First we will guide you step by step to install the software. Seconf
            w gonna provide you a full suite of tutorials that helps you
            creating your first Petrel project and also: <br />
            - Generate well correlation panels <br />- Stratigraphic
            interpretation, contouring, map editing, and evaluation of
            structural complexity prior to geocellular modeling. <br />- Analyze
            data geostatistically prior to populating the geocellular model with
            facies and petrophysical properties, using a range of deterministic
            and stochastic algorithms.
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button className="boutton1">
              {" "}
              <Link
                to="/topics"
                style={{
                  color: "darkblue",
                  marginLeft: "9px",
                  fontSize: "18px",
                }}
              >
                {" "}
                See More
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default Home2;
