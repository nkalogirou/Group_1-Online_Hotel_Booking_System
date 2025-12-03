// Simple test for fetchBookingData()
// This script calls the backend function and prints SUCCESS or FAIL,
// so we can quickly verify that it works with real data in the database.

// Import the fetchBookingData function from the backend folder.
// We use { fetchBookingData } because it is a named export in fetchBookingData.js.
import { fetchBookingData } from '../backend/fetchBookingData.js';

// Declare an async main() function that will run our test logic.
async function main() {
  // Read the user ID that we want to test with from the environment variable TEST_USER_ID.
  // If TEST_USER_ID is not set, we use 1 as the default user id.
  const userId = Number(process.env.TEST_USER_ID || 1);

  // Start a try/catch block so we can handle any errors that happen during the test.
  try {
    // Call the backend function fetchBookingData(userId) and wait for the result.
    // This should return an array of booking rows for the given user.
    const bookings = await fetchBookingData(userId);

    // Check if the result is actually an array (what we expect for a list of bookings).
    if (Array.isArray(bookings)) {
      // If it is an array, print a SUCCESS message with how many rows we got back.
      console.log(
        'SUCCESS: fetchBookingData returned',
        bookings.length,
        'rows for user',
        userId
      );
      // Exit the Node.js process with code 0, which means "success".
      process.exit(0);
    } else {
      // If the result is not an array, print a FAIL message explaining the problem.
      console.log(
        'FAIL: fetchBookingData did not return an array. Actual value:',
        bookings
      );
      // Exit the process with code 1, which usually means "error / failure".
      process.exit(1);
    }
  } catch (err) {
    // If an exception happens (for example, DB error), we catch it here.
    // Print a FAIL message and include the error message so we know what went wrong.
    console.error('FAIL: Error while calling fetchBookingData:', err);
    // Exit the process with code 1 to indicate that the test failed.
    process.exit(1);
  }
}

// Call the main() function so that the script actually runs when we execute this file.
main();
