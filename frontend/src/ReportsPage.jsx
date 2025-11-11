// src/ReportsPage.jsx
import React, { useState, useMemo } from "react";

// Mock data just for demo
const mockBookings = [
  { id: 1, hotel: "City Hotel", date: "2025-11-01", revenue: 120, status: "confirmed" },
  { id: 2, hotel: "Beach Resort", date: "2025-11-02", revenue: 200, status: "cancelled" },
  { id: 3, hotel: "Mountain Inn", date: "2025-11-03", revenue: 90, status: "confirmed" },
  { id: 4, hotel: "City Hotel", date: "2025-11-05", revenue: 150, status: "confirmed" },
];

function ReportsPage() {
  const [reportType, setReportType] = useState("revenue");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredBookings = useMemo(
    () =>
      mockBookings.filter((b) => {
        if (startDate && b.date < startDate) return false;
        if (endDate && b.date > endDate) return false;
        return true;
      }),
    [startDate, endDate]
  );

  const totalRevenue = useMemo(
    () =>
      filteredBookings.reduce(
        (sum, b) => sum + (b.status === "confirmed" ? b.revenue : 0),
        0
      ),
    [filteredBookings]
  );

  const totalBookings = filteredBookings.length;
  const cancelledCount = filteredBookings.filter((b) => b.status === "cancelled").length;
  const occupancyRate =
    reportType === "occupancy" && totalBookings > 0
      ? `${Math.round(((totalBookings - cancelledCount) / totalBookings) * 100)}%`
      : "-";

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Admin Reports</h1>
      <p>
        Demo reports page for hotel administrators. This uses mock data for now and later will be
        connected to the real booking database.
      </p>

      <section style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
        <h2>Filters</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <label>
            Report type:{" "}
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="revenue">Revenue</option>
              <option value="occupancy">Occupancy</option>
            </select>
          </label>

          <label>
            From:{" "}
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>

          <label>
            To:{" "}
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>
      </section>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2>Summary</h2>
        <ul>
          <li>Total bookings: {totalBookings}</li>
          <li>Cancelled bookings: {cancelledCount}</li>
          <li>Total revenue (confirmed only): €{totalRevenue.toFixed(2)}</li>
          {reportType === "occupancy" && <li>Approx. occupancy rate: {occupancyRate}</li>}
        </ul>
      </section>

      <section>
        <h2>Detailed Bookings (mock data)</h2>
        <table border="1" cellPadding="6">
          <thead>
            <tr>
              <th>ID</th>
              <th>Hotel</th>
              <th>Date</th>
              <th>Status</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.hotel}</td>
                <td>{b.date}</td>
                <td>{b.status}</td>
                <td>€{b.revenue.toFixed(2)}</td>
              </tr>
            ))}
            {filteredBookings.length === 0 && (
              <tr>
                <td colSpan={5}>No bookings for the selected range.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default ReportsPage;
