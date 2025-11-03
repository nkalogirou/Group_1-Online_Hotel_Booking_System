// Nikos K.
// Requirement: 5.8.1 Reports Page UI

import React from "react";

export default function ReportsPage() {
  // Demo data for now
  const reports = [
    { id: 1, title: "Monthly Revenue", total: "€4,250" },
    { id: 2, title: "Bookings Summary", total: "82 bookings" },
    { id: 3, title: "Cancelled Bookings", total: "6 cancellations" },
  ];

  return (
    <div>
      <h2>Reports Page</h2>
      <p>This placeholder shows example reports for the admin view.</p>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>ID</th>
            <th>Report Title</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.title}</td>
              <td>{r.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
