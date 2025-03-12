import React, { useState } from "react";
import "../styles/RideBooking.css"; // Correct file path for styles

const RideBooking = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [hospital, setHospital] = useState("");
  const [rideType, setRideType] = useState("Emergency");

  const handleBooking = () => {
    alert(`Ride booked!\nPickup: ${pickup}\nDrop-off: ${dropoff}\nHospital: ${hospital}\nRide Type: ${rideType}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Book a Ride</h2>

        <label>Pickup Location:</label>
        <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Enter pickup location" />

        <label>Drop-off Location:</label>
        <input type="text" value={dropoff} onChange={(e) => setDropoff(e.target.value)} placeholder="Enter drop-off location" />

        <label>Select Hospital:</label>
        <select value={hospital} onChange={(e) => setHospital(e.target.value)}>
          <option value="">Select a hospital</option>
          <option value="City Hospital">City Hospital</option>
          <option value="General Hospital">General Hospital</option>
          <option value="Care Medical Center">Care Medical Center</option>
        </select>

        <label>Ride Type:</label>
        <select value={rideType} onChange={(e) => setRideType(e.target.value)}>
          <option value="Emergency">Emergency</option>
          <option value="Non-Emergency">Non-Emergency</option>
          <option value="Private">Private</option>
        </select>

        <button onClick={handleBooking} className="book-btn">Book Now</button>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default RideBooking;
