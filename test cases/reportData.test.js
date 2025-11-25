// Import the functions we want to test from the backend
import { revenueByDay, bookingsByStatus } from '../fetchReportData.js';

// Define date range for the test
// If no environment variables exist, default dates will be used
const start = process.env.START_DATE || '2025-01-01'; // Test start date
const end = process.env.END_DATE || '2025-12-31';     // Test end date

// Main test function
async function main() {
  try {
    console.log('Running Report Data Tests...\n');

    // Test 1: Revenue by Day
    const revenueResult = await revenueByDay(start, end);

    if (Array.isArray(revenueResult)) {
      console.log('✅ SUCCESS: revenueByDay returned valid data');
    } else {
      console.log('❌ FAIL: revenueByDay did not return expected format');
    }

    // Test 2: Bookings by Status
    const statusResult = await bookingsByStatus(start, end);

    if (Array.isArray(statusResult)) {
      console.log('✅ SUCCESS: bookingsByStatus returned valid data');
    } else {
      console.log('❌ FAIL: bookingsByStatus did not return expected format');
    }

  } catch (error) {
    console.log('❌ TEST FAILED WITH ERROR:');
    console.error(error);
  }
}

// Execute the test
main();
