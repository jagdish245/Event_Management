import React, { useState } from "react";
import "../Styles/eventpost.css";
import axios from "axios";

export default function Event() {
  const [data, setData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    ticket: "",
    image: null,
  });

  function handleChange(e) {
    if (e.target.name === "image") {
      setData({ ...data, [e.target.name]: e.target.files[0] });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      const response = await axios.post("/api/events/postEvent", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        alert("Event created Successfully ✅");
        window.location.reload();
      } else {
        alert("Failed ❌");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="event-container">
      <div className="title">Create an Event</div>
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <input
          type="text"
          name="name"
          placeholder="Event name"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          cols={25}
          rows={4}
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="date"
          onChange={handleChange}
          required
        />
        <textarea
          name="location"
          cols={25}
          rows={4}
          placeholder="Location"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="ticket"
          placeholder="Ticket Price"
          onChange={handleChange}
          required
        />
        <input type="file" name="image" required onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
