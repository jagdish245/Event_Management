import React, { useEffect, useState } from "react";
import "../../Styles/event.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Event() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/api/events/getEvent")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleEventClick(eventId) {
    navigate("/eventdetailed", { state: { eventId } });
  }

  return (
    <div className="event-container">
      {events.map((event) => (
        <div
          key={event._id}
          className="event-card"
          onClick={() => handleEventClick(event._id)}
        >
          <img
            src={`http://${event.image}`}
            alt={event.name}
            className="event-image"
          />
          <div className="event-details">
            <h2 className="event-name">{event.name}</h2>
            <p className="event-date">
              {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="event-location">{event.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
