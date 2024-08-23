# MockSchedule

MockSchedule is a scheduling system designed to help MBA students prepare for their placements by connecting them with mentors. The application includes a backend built with Node.js, Express, and SQLite, and a frontend developed using React.

## Project Structure

The project is organized into two main directories:
- `frontend/`: Contains the React frontend code.
- `backend/`: Contains the Node.js backend code.

## Features

1. **Mentor Priority Scheduling**: Ensures that mentor availability is prioritized over student availability, scheduling back-to-back sessions when possible.
2. **Subject-Specific Mentorship**: Allows students to select mentors based on specific MBA placement preparation subjects or areas of expertise.
3. **Customizable Session Durations**: Students can choose session durations of 30, 45, or 60 minutes.
4. **Premium Mentorship**: Option for students to select specific mentors for an additional charge.
5. **Payment Integration**: Calculates costs based on session duration and mentor selection, with a simple payment confirmation page.

## Getting Started

### Prerequisites

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **SQLite** (for the database)

### Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/mahaboob-basha-a/mock-schedule.git
    cd mockschedule
    ```

2. **Backend Setup:**
    - Navigate to the `backend/` directory:
      ```bash
      cd backend
      ```
    - Install the required dependencies:
      ```bash
      npm install
      ```
    - Start the backend server:
      ```bash
      npm start
      ```
    - The backend server will run on `http://localhost:5000`.

3. **Frontend Setup:**
    - Navigate to the `frontend/` directory:
      ```bash
      cd ../frontend
      ```
    - Install the required dependencies:
      ```bash
      npm install
      ```
    - Start the frontend server:
      ```bash
      npm start
      ```
    - The frontend server will run on `http://localhost:3000`.

## API Endpoints

### Mentor Endpoints

- `GET /api/mentors`: Fetch all mentors.
- `GET /api/mentors/:id/availability`: Fetch the availability of a specific mentor.

### Booking Endpoints

- `POST /api/bookings`: Create a new booking.
- `GET /api/bookings`: Retrieve bookings for a student or mentor.

## Usage

1. **Accessing the Application:**
   - Open your browser and go to `http://localhost:3000`.
   - You’ll be greeted by the homepage, where you can view available mentors and book a session.

2. **Booking a Session:**
   - Select a mentor, choose a time slot based on their availability, and select your preferred session duration.
   - Enter your name and confirm the booking.

## Database Schema

### Mentors Table
- `id`: INTEGER PRIMARY KEY
- `name`: TEXT
- `availability`: TEXT (stored as JSON)
- `areas_of_expertise`: TEXT
- `is_premium`: INTEGER (0 or 1)

### Bookings Table
- `id`: INTEGER PRIMARY KEY
- `student_name`: TEXT
- `mentor_id`: INTEGER (Foreign key referencing `Mentors.id`)
- `duration`: INTEGER (30, 45, 60 minutes)
- `is_premium`: INTEGER (0 or 1)
- `cost`: INTEGER

*This README was generated as part of the MockSchedule project.* 
