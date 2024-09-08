import React from 'react';
import firebase from 'firebase/app';

const Dashboard = ({ user }) => {
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="dashboard">
      <h2>Welcome, {user.phoneNumber}</h2>
      <p>You are now logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
