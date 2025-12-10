// src/SearchForm.jsx
import React, { useState } from 'react';

function SearchForm() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the search logic, like sending the data to an API
    console.log({
      checkInDate,
      checkOutDate,
      rooms,
      adults,
      children,
    });
  };

  return (
    <div className="search-form-container">
      <h2>Search For Rooms</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Check-in Date</label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Check-out Date</label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Rooms</label>
          <input
            type="number"
            min="1"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Adults</label>
          <input
            type="number"
            min="1"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Children</label>
          <input
            type="number"
            min="0"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
