import React, { useState, useEffect } from 'react';
import ServerError from '../landingPages/serverError';; // Import the ServerError component

const FeedbackList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('https://localhost:7180/api/Feedback/GetFeebacks');
      if (!response.ok) {
        throw new Error('Failed to fetch feedbacks');
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      setError('Error fetching feedbacks: ' + error.message);
    } finally {
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
      <h1 className="mt-3 mb-4">Feedback List</h1>
      {bookings.length === 0 ? (
        <div>No Feedbacks available.....</div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Feedback ID</th>
             
              <th>User ID</th>
              <th>Service ID</th>
              <th>Rating</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.fid}</td>
                <td>{booking.userId}</td>
                <td>{booking.serviceId}</td>
                {/* <td>{booking.user_id.user_id}</td> */}
                <td>{booking.rating}</td>
                <td>{booking.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FeedbackList;
