# Components & Team Responsibilities – Online Hotel Booking System

Component / Feature | Primary Developer | Backup Developer | Notes
------------------- | ----------------- | ---------------- | -----
Project setup (repo, env) | Nikos K. | Andreas A. | Frontend & backend structure
Database schema & data access | Andreas K. | Christos M. | SQLite tables + queries
Authentication system (backend logic) | Christos M. | Nikos K. | Account creation + login security
5.1 User Registration | Vasilis P. | Nikos K. | UI + data submission
5.1.1 Registration Page Navigation | Vasilis P. | Nikos K. | Routing from home/login
5.1.2 Registration Form | Vasilis P. | Nikos K. | Field layout & styling
5.1.3 Input Validation | Vasilis P. | Christos M. | Frontend + backend rules
5.1.4 Account Creation | Christos M. | Andreas K. | Insert hashed credentials
5.1.5 Email Confirmation (send) | Christos M. | Andreas K. | Trigger confirmation email
5.1.6 Email Confirmation by User (verify) | Nikos K. | Vasilis P. | Activate account feedback UI
5.2 User Login | Vasilis P. | Nikos K. | UI + API call
5.2.1 Login Form | Vasilis P. | Nikos K. | Username/password form
5.2.2 Login Validation | Vasilis P. | Andreas K. | Authenticate, return session token
5.2.3 Authenticate User | Christos M. | Andreas K. | Session creation & security
5.3 Booking a Room (Place Order) | Christos M. | Andreas K. | Main booking workflow
5.3.1 Booking Page | Vasilis P. | Nikos K. | UI for selecting room
5.3.2 Booking Process | Christos M. | Andreas K. | Create booking record
5.3.3 Booking List (Selection Overview) | Vasilis P. | Andreas A. | Display results + details
5.4 Cancelling a Booking | Christos M. | Andreas K. | Update status + refund logic
5.4.1 Cancelling a Booking Action | Vasilis P. | Andreas A. | UI cancel button
5.4.2 Eligibility Check | Christos M. | Andreas K. | 24-hour cancellation rule
5.4.3 Refund Processing | Christos M. | Andreas K. | Update DB + notify user
5.5 View Booking History | Andreas A. | Vasilis P. | List past & upcoming bookings
5.5.1 View History Page | Andreas A. | Vasilis P. | UI table display
5.5.2 Fetch Booking Data | Andreas K. | Christos M. | DB query + ordering
5.6 Log-Out | Nikos K. | Vasilis P. | Remove authentication session
5.6.1 Logout Menu Access | Nikos K. | Vasilis P. | UI dropdown / button
5.6.2 Logout Action | Christos M. | Andreas A. | Session invalidation
5.7 Add New Hotels to the Platform (Admin) | Christos M. | Nikos K. | Insert new hotel record
5.7.1 Admin Dashboard Page | Nikos K. | Vasilis P. | UI for admin features
5.7.2 Add Hotel Form | Vasilis P. | Andreas A. | UI for fields & input
5.7.3 Hotel Validation & Save | Christos M. | Andreas K. | Backend validation
5.8 Generate Reports (Admin) | Andreas K. | Nikos K. | Revenue & occupancy reporting
5.8.1 Reports Page UI | Nikos K. | Vasilis P. | Table or simple chart display
5.8.2 Fetch Report Data | Andreas K. | Christos M. | SQL aggregation logic
Front-end Admin Dashboard | Nikos K. | Vasilis P. | Manage hotels/bookings
Front-end User UI (pages integration) | Vasilis P. | Andreas A. | Home, search, pages
Testing & Integration | Andreas A. | All | Postman backend tests
Documentation & Presentation | Nikos K. | All | Final report & slides
