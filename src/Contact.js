import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_x3zoj59",
        "template_7he6yyj",
        formData,
        "kIdiDjEag_qr60aRX"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again later.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-form-container" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send</button>
        {/* <Footer /> */}
      </form>
    </div>
  );
};

export default Contact;
