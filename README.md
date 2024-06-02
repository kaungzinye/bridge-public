# Bridge Application

## Project Overview

The Bridge Application is a platform designed to connect users through shared musical interests. Users can register, log in, create posts about their favorite songs or albums, and interact with other users' posts. Future milestones include integrating Spotify authentication and additional user interaction features.

## Features

- User Registration
- User Login
- JWT Authentication
- Create and Fetch Posts
- Secure Storage of JWT Tokens
- Error Handling and Input Validation

## Installation Instructions

### Prerequisites

- Node.js
- npm
- MongoDB (either local installation or MongoDB Atlas account)

### Backend Setup

1. Clone the repository:
   git clone https://github.com/your-username/bridge-backend.git
   cd bridge-backend

2. Install the dependencies:
    npm install

3. Create a .env file in the root directory and add the following environment variables:
    PORT=
    MONGO_URI=
    JWT_SECRET=

4. Start the backend server:
    node server.js
    The backend server will run on http://localhost:3000.
    
## Frontend Setup
1. Navigate to the frontend directory:
    cd ../bridge-frontend
    Install the dependencies:
    npm install

2. Start the React Native application:
    npm start
    Follow the instructions provided by the React Native CLI to run the application on your desired platform (iOS, Android, or web).
