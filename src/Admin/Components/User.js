import React, { useEffect, useState } from "react";
import "../Styles/user.css";
import axios from "axios";

export default function User() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/users/getusers")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="userlist">
      <table>
        <tr>
          <th>No</th>
          <th>Fullname</th>
          <th>Email</th>
          <th>Username</th>
          <th>Created at</th>
        </tr>
        {data.map((user, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{user.fullname}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.createdAt}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
