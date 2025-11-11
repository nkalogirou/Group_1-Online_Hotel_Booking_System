# Admin UI Implementation Notes

- `AdminDashboard.jsx`:
  - Entry point for hotel administrators.
  - Links to hotel management, bookings, and reports (see System Design 5.7 & 5.8).

- `ReportsPage.jsx`:
  - Early version of the admin reports page.
  - Currently uses mock data to display:
    - Total bookings
    - Cancelled bookings
    - Total revenue
  - Later iterations will connect to actual bookings from the database.
