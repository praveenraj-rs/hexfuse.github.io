import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Users = () => {
  const axiosPrivate = useAxiosPrivate();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosPrivate.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        if (error.response && error.response.status === 403) {
          console.log("Redirecting to login page...");
          navigate("/login"); // Replace '/login' with your actual login page path
        }
      }
    };

    fetchUsers();
  }, [axiosPrivate, navigate]);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
