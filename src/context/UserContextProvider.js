// UserContextProvider.js
import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import axios from "axios";

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post("/api/users/me");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
