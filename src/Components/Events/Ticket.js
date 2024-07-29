import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../../Styles/ticket.css";

export default function Ticket() {
  const { state } = useLocation();
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    if (state && state.eventId) {
      axios
        .get(`/api/events/ticket/${state.eventId}`)
        .then((response) => {
          setTicketData(response.data);
        })
        .catch((error) => {
          console.error(
            "Error fetching ticket:",
            error.response?.data?.Message
          );
        });
    }
  }, [state]);
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="ticket-container">
      {ticketData ? (
        <div>
          <div className="ticket-header">
            <h2>Ticket Details</h2>
          </div>
          <div className="ticket-details">
            <p>
              <strong>Ticket Number:</strong> {ticketData.ticketNumber}
            </p>
            <p>
              <strong>Attendee Name:</strong> {ticketData.attendeeName}
            </p>
            <p>
              <strong>Event Name:</strong> {ticketData.eventName}
            </p>
            <p>
              <strong>Event Date:</strong>{" "}
              {new Date(ticketData.eventDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Location:</strong> {ticketData.location}
            </p>
            <p>
              <strong>Purchase Date:</strong>{" "}
              {new Date(ticketData.purchaseDate).toLocaleDateString()}
            </p>
          </div>
          <button className="print-button" onClick={handlePrint}>
            Print Ticket
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
