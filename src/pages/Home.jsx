import React, { useState } from "react";
import RideBooking from "./RideBooking";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>Welcome to Ambuk</h1>
      <button onClick={() => setIsModalOpen(true)} className="book-btn">Book a Ride</button>

      {/* Ride Booking Modal */}
      <RideBooking isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
