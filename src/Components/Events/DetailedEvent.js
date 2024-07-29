import React, { useEffect, useState } from "react";
import "../../Styles/detailedEvent.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";
import { toast } from "react-toastify";

export default function DetailedEvent() {
  const { state } = useLocation();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [state]);

  const handleRegisterClick = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to register for this event?"
    );

    if (!confirmed) return;

    try {
      await axios.post("/api/events/registerForEvent", {
        eventId: event._id,
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
    } catch (error) {
      console.log(error);
      alert("Error during registration");
    }
  };

  if (!event) {
    return <Loading />;
  }
  if (isLoading) {
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
        <p className="detailed-event-id">Event ID: {event._id}</p>
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
