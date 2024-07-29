import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "../../Styles/registeredevent.css";
import Loading from "../Loading";

export default function RegisteredEvent() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/events/getRegisteredEvents")
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response?.data?.Message || "Error fetching events");
        setLoading(false);
      });
  }, []);

  const handleCancel = (eventId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this registration?"
    );

    if (!confirmCancel) return;
    setDeleting(true);
    axios
      .delete(`/api/events/cancelRegistration/${eventId}`)
      .then((response) => {
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.event._id !== eventId)
        );
        setDeleting(false);
        toast.success("Registration Cancelled", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        setError(
          error.response?.data?.Message || "Error canceling registration"
        );
        setDeleting(false);
      });
  };

  const handleViewTicket = (eventId) => {
    navigate("/ticket", { state: { eventId } });
  };

  const handleEventClick = (eventId) => {
    navigate("/eventdetailed", { state: { eventId } });
  };

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {deleting && <Loading />}
      {events.length === 0 ? (
        <p>No registered events found.</p>
      ) : (
        events.map((eventEntry) => (
          <div
            key={eventEntry._id}
            className="registered-event-card"
            onClick={() => handleEventClick(eventEntry.event._id)}
          >
            <img
              src={`http://${eventEntry.event.image}`}
              alt={eventEntry.event.name}
              className="registered-event-image"
            />
            <div className="registered-event-details">
              <h3>{eventEntry.event.name}</h3>
              <p>{eventEntry.event.description}</p>
              <p>
                Date: {new Date(eventEntry.event.date).toLocaleDateString()}
              </p>
              <p>Location: {eventEntry.event.location}</p>
              <div className="registered-event-buttons">
                <button onClick={() => handleCancel(eventEntry.event._id)}>
                  Cancel Registration
                </button>
                <button onClick={() => handleViewTicket(eventEntry.event._id)}>
                  View Ticket
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
