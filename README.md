### README.md

# Bridge

## Project Overview

Bridge is a platform designed to connect users through shared musical interests. Users can register, log in, create posts about their favorite songs or albums, and interact with other users' posts. Future milestones include integrating Spotify authentication and additional user interaction features.

Demo: https://www.youtube.com/watch?v=xKSSHfgQOsE
![Bridge Poster Version 1](https://github.com/kaungzinye/bridge-public/assets/154214243/29f8e13c-9ced-44b5-9a21-7665a4bd47e3)



## User Stories

- **Find People with Similar Music Tastes**: Users can discover and connect with others who have similar music preferences. By swiping through profiles, users can find and match with people who like the same genres or artists.
- **Chat with Matches**: Once matched, users can start conversations and chat with others who share their music interests. This feature fosters a community where users can discuss their favorite music, concerts, and more.
- **See What Others Post**: Users can see the songs and albums that their matches post on their feed. This allows users to discover new music and see what their friends are currently enjoying.

## Features

- User Registration
- User Login
- JWT Authentication
- Chat with Matches (To be added)
- Music Post Feed (To be added)

## Future Milestones

- **User Profile Management**: Implement user profile editing and viewing, profile picture upload functionality.
- **Post Interactions**: Enable users to like and comment on posts, implement notifications for post interactions.
- **Spotify Authentication Integration**: Integrate Spotify authentication using OAuth, allow users to link their Spotify account and display listening history on their profile.
- **Enhanced Security Measures**: Implement rate limiting, request throttling, and additional data validation and sanitization.
- **Deployment**: Prepare the application for deployment (either to a hosting service or local deployment instructions).
- **Features by End of June**: Implement swiping functionality for finding matches and post features to share music.

## Technology Stack

Bridge is built using the MERN stack with React Native for the mobile application:

- **MongoDB**: A NoSQL database for storing user data and posts.
- **Express.js**: A web application framework for Node.js, used for building the backend API.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime used for building the backend server.
- **React Native**: A framework for building native mobile apps using React.

## Installation Instructions

### Prerequisites

- Node.js
- npm
- MongoDB (either local installation or MongoDB Atlas account)

### Backend Setup

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/bridge-backend.git
   cd bridge-backend
   ```

2. **Install the dependencies**:

   ```sh
   npm install
   ```

3. **Create a `.env` file** in the root directory.

4. **Start the backend server**:

   ```sh
   node server.js
   ```

   The backend server will run on `http://localhost:3000`.

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```sh
   cd ../bridge-frontend
   ```

2. **Install the dependencies**:

   ```sh
   npm install
   ```

3. **Start the React Native application**:

   ```sh
   npm start
   ```

   Follow the instructions provided by the React Native CLI to run the application on your Apple Device.
