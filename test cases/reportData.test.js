import { revenueByDay, bookingsByStatus } from '../fetchReportData_AndreasKestoras.js';

const start = process.env.START_DATE || '2025-01-01';
const end   = process.env.END_DATE   || '2025-12-31';

async function main() {
  console.log('Revenue by day:', await revenueByDay(start, end));
  console.log('Bookings by status:', await bookingsByStatus(start, end));
}
main().catch(e => (console.error(e), process.exit(1)));
