import React from "react";
import { useSelector } from "react-redux";

const Userprofile = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone || "No phone number available"}</p>
    </div>
  );
};

export default Userprofile;
