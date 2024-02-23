import React, { useState, useEffect } from 'react';
import ServerError from '../landingPages/serverError'; // Import the ServerError component

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('https://localhost:7180/api/Booking/GetBookings');
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }
      const data = await response.json();
      setBookings(data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching bookings: ' + error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <ServerError />; // Render ServerError component in case of error
  }

  return (
    <div className="container">
      <h1 className="mt-3 mb-4">Booking List</h1>
      {bookings.length === 0 ? (
        <div>No bookings available.....</div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Service Provider ID</th>
              <th>User ID</th>
              <th>Service ID</th>
              <th>Labour ID</th>
              <th>Address</th>
              <th>Date</th>
              <th>Payment Status</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.bookingId}</td>
                <td>{booking.spId}</td>
                <td>{booking.userId}</td>
                <td>{booking.serviceId}</td>
                <td>{booking.labourId}</td>
                <td>{booking.address}</td>
                <td>{booking.date}</td>
                <td>{booking.paymentStatus}</td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingList;
