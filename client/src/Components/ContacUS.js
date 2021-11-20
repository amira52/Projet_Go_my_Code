import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_h5ghqm2",
        e.target,
        "user_i6OikfQd7WbuDRkC9K1Iu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "15%",
        marginLeft: "12%",
        height: "100vh",
      }}
    >
      <div className="contact">
        <h4
          style={{
            color: "rgb(24, 33, 109)",
            fontFamily: "Motiva Sans Bold",
            fontSize: "56px",
            lightingColor: "1.18",
            textDecoration: "none",
          }}
        >
          Contact Form
        </h4>
        <h6
          style={{
            color: "rgb(81, 113, 177)",
            fontSize: "21px",
            lightingColor: "1.41",
            fontFamily: "Motiva Sans Light",
            textAlign: "left",
            marginTop: "6%",
          }}
        >
          {" "}
          Email us with any question. We would be happy to answer your
          questions.
        </h6>
      </div>
      <div className="info">
        <form className="frm" ref={form} onSubmit={sendEmail}>
          <label className="lbl">Name</label>
          <input className="inpt" type="text" name="name" />
          <label className="lbl">Subject</label>
          <input className="inpt" type="text" name="Subject" />
          <label className="lbl">Email</label>
          <input className="inpt" type="email" name="email" />
          <label className="lbl">Message</label>
          <textarea
            style={{ padding: "20px", marginTop: "2%", borderColor: "black" }}
            name="message"
          />
          <input
            className="boutton"
            style={{ marginTop: "2%", marginLeft: "75%" }}
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};
