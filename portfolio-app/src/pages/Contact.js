import React, { useState } from "react";
import "../styles/fonts.css";
import "../styles/contactStyle.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/mgvapegp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setStatusMessage(
            "Thank you for reaching out! I will get back to you soon."
          );
          setStatusType("success");
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        } else {
          setStatusMessage("Something went wrong. Please try again later.");
          setStatusType("error");
        }
      })
      .catch(() => {
        setStatusMessage("Error submitting form. Please try again.");
        setStatusType("error");
      });
  };

  return (
    <div className="contact-page fade-in">
      <h1 className="contact-header">Contact Me!</h1>
      <h2 className="subheader">Questions, Comments, Commisions, Etc.</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {statusMessage ? (
          <div className={`form-status ${statusType}`}>{statusMessage}</div>
        ) : (
          <button type="submit" className="submit-button">
            Send Message
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
