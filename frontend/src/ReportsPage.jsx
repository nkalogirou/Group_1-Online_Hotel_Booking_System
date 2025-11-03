import React from "react";

export default function ReportsPage() {
  const reports = [
    { id: 1, title: "Revenue Report", status: "Ready" },
    { id: 2, title: "Bookings Summary", status: "In Progress" },
  ];

  return (
    <div>
      <h2>Reports Page</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.title}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
