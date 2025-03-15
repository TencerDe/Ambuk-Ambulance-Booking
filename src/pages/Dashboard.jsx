import React from "react";
import "../styles/Dashboard.css"; // Import styles

const Dashboard = () => {
  const userName = "John Doe"; // Later replace with dynamic user data

  // Dummy data for ride history
  const rideHistory = [
    { id: 1, from: "Location A", to: "City Hospital", date: "March 10, 2025", status: "Completed" },
    { id: 2, from: "Location B", to: "General Hospital", date: "March 11, 2025", status: "Cancelled" },
  ];

  // Dummy data for upcoming rides
  const upcomingRides = [
    { id: 3, from: "Home", to: "Care Medical Center", date: "March 13, 2025", status: "Scheduled" },
  ];

  return (
    <div className="dashboard-container">
      <h2>Welcome, {userName}!</h2>

      {/* Quick Actions */}
      <div className="dashboard-actions">
        <button className="action-btn">Book a Ride</button>
        <button className="action-btn">View Profile</button>
        <button className="logout-btn">Logout</button>
      </div>

      {/* Upcoming Rides */}
      <div className="section">
        <h3>Upcoming Rides</h3>
        {upcomingRides.length > 0 ? (
          <ul>
            {upcomingRides.map((ride) => (
              <li key={ride.id}>
                <strong>{ride.from} → {ride.to}</strong> | {ride.date} | Status: {ride.status}
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming rides.</p>
        )}
      </div>

      {/* Ride History */}
      <div className="section">
        <h3>Ride History</h3>
        {rideHistory.length > 0 ? (
          <ul>
            {rideHistory.map((ride) => (
              <li key={ride.id}>
                <strong>{ride.from} → {ride.to}</strong> | {ride.date} | Status: {ride.status}
              </li>
            ))}
          </ul>
        ) : (
          <p>No ride history available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
