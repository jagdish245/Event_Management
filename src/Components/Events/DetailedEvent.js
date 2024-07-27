import React, { useEffect, useState } from "react";
import "../../Styles/detailedEvent.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";

export default function DetailedEvent() {
  const { state } = useLocation();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (state && state.eventId) {
      axios
        .get(`/api/events/getEvent/${state.eventId}`)
        .then((response) => {
          setEvent(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [state]);

  const handleRegisterClick = () => {
    alert(
      "Register button clicked! Implement payment and ticket generation here."
    );
  };

  if (!event) {
    return <Loading />;
  }

  return (
    <div className="detailed-event-container">
      <img
        src={`http://${event.image}`}
        alt={event.name}
        className="detailed-event-image"
      />
      <div className="detailed-event-details">
        <h1 className="detailed-event-name">{event.name}</h1>
        <p className="detailed-event-date">
          {new Date(event.date).toLocaleDateString()} at{" "}
          {new Date(event.date).toLocaleTimeString()}
        </p>
        <p className="detailed-event-location">{event.location}</p>
        <p className="detailed-event-description">{event.description}</p>
        <p className="detailed-event-ticket-price">
          Ticket Price: ₹{event.ticket}
        </p>
        <button className="register-button" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </div>
  );
}
