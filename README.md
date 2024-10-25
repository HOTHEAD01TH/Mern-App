# Simple MERN App

## Overview
This **Simple MERN App** is a full-stack application built with the MERN stack: MongoDB, Express, React, and Node.js. The app integrates **Redux** for state management, **OAuth** for third-party authentication, **Firebase** for file storage and notifications, and **JWT** for secure user authentication.

## Table of Contents
- Features
- Tech Stack
- Installation
- Configuration
- Usage
- API Documentation
- Contributing
- License

## Features
- **User Authentication**: Secure user signup/login with JWT.
- **OAuth Integration**: Allows third-party logins (Google, Facebook, etc.).
- **Firebase Storage**: Stores user-uploaded files and handles notifications.
- **Redux State Management**: Efficient global state management for React components.
- **Secure Routes**: Protects specific routes with JWT-based authentication.
- **Simple UI**: Responsive UI built with React.

## Tech Stack
- **MongoDB**: NoSQL database for storing user data.
- **Express**: Fast and minimalist Node.js framework for handling routes and middleware.
- **React**: Frontend library for building interactive UIs.
- **Node.js**: JavaScript runtime for the server side.
- **Redux**: State management library for consistent state sharing across components.
- **OAuth**: Used for third-party authentication.
- **Firebase**: Provides storage, notifications, and database features.
- **JWT (JSON Web Tokens)**: Secure token-based authentication.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/simple-mern-app.git
    cd simple-mern-app
    ```

2. **Install server dependencies**:
    ```bash
    cd backend
    npm install
    ```

3. **Install client dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Build the frontend**:
    ```bash
    npm run build
    ```

## Configuration
Create a `.env` file in both `backend` and `frontend` directories and add the following variables:

### Backend `.env`:
    PORT=5000
    MONGO_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    OAUTH_CLIENT_ID=your-oauth-client-id
    OAUTH_CLIENT_SECRET=your-oauth-client-secret
    FIREBASE_API_KEY=your-firebase-api-key
    FIREBASE_PROJECT_ID=your-firebase-project-id

### Frontend `.env`:
    REACT_APP_API_URL=http://localhost:5000
    REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
    REACT_APP_OAUTH_CLIENT_ID=your-oauth-client-id

## Usage

1. **Start the server**:
    ```bash
    cd backend
    npm run dev
    ```

2. **Start the client**:
    ```bash
    cd ../frontend
    npm start
    ```

3. **Access the app** at `http://localhost:3000`

## API Documentation

| Endpoint               | Method | Description                  |
|------------------------|--------|------------------------------|
| `/api/auth/signup`     | POST   | Registers a new user         |
| `/api/auth/login`      | POST   | Authenticates user           |
| `/api/auth/oauth`      | GET    | OAuth login with third-party |
| `/api/user/profile`    | GET    | Fetches user profile         |
| `/api/user/upload`     | POST   | Uploads files to Firebase    |

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License
This project is licensed under the MIT License.
