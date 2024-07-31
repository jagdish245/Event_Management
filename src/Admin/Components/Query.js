import React, { useEffect, useState } from "react";
import "../Styles/query.css";
import axios from "axios";

export default function Query() {
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    axios
      .get("/api/contact/getQuery")
      .then((response) => {
        setQueries(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleMarkResolved = (queryId) => {
    axios
      .delete(`/api/contact/deleteQuery/${queryId}`)
      .then((response) => {
        console.log("Query deleted:", response.data);
        setQueries((prevQueries) =>
          prevQueries.filter((query) => query._id !== queryId)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="userlist">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Event ID</th>
            <th>Query</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query, index) => (
            <tr key={query._id}>
              <td>{index + 1}</td>
              <td>{query.firstName}</td>
              <td>{query.email}</td>
              <td>{query.eventId}</td>
              <td>{query.query}</td>
              <td>
                <button onClick={() => handleMarkResolved(query._id)}>
                  Mark Resolved
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
