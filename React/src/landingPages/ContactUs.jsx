import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs (){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your backend API here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  }

  return (
    <div className="App">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;