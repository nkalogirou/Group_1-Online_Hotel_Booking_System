// Nikos K.
// Requirement: 5.7.1 Admin Dashboard Page

import React from "react";

export default function AdminDashboard() {
  // For now this is just static demo data (no backend connection yet)
  const sampleBookings = [
    { id: 1, user: "John Doe", hotel: "Hotel A", status: "Confirmed" },
    { id: 2, user: "Jane Smith", hotel: "Hotel B", status: "Cancelled" },
  ];

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>This is a simple placeholder page for administrators.</p>

      <section>
        <h3>Quick Actions</h3>
        <ul>
          <li>Add new hotel</li>
          <li>View bookings</li>
          <li>Generate reports</li>
        </ul>
      </section>

      <section>
        <h3>Recent Bookings (demo data)</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Hotel</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleBookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.user}</td>
                <td>{b.hotel}</td>
                <td>{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
