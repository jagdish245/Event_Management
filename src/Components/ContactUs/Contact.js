import React, { useState } from "react";
import axios from "axios";
import "../../Styles/contact.css";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    eventId: "",
    query: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await axios.post("/api/contact/query", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        eventId: "",
        query: "",
      });

      toast.success("Registered!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <div className="heading">GET IN TOUCH WITH US</div>
        <br />
        <p>
          For general business and press inquiries <br />
          hello@harmonievents.com <br />
          P.H: 814-128-7725
          <br />
          <br />
          For event inquiries, please fill out the form below and one of <br />
          our team members will get back to you within 24 hours.
        </p>
      </div>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="eid">Event ID</label>
          <input
            type="text"
            id="eid"
            name="eventId"
            value={formData.eventId}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="query">Your Query (please keep it short)</label>
          <textarea
            id="query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>

          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}
