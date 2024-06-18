# Poll System

## Overview

This project is a web application that allows users to create, read, update, and delete user account information. An institute can create polls, and teachers or students can participate in the polling based on the institute's selection.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MySQL

## Features

- **Authentication**: Register, Login, Logout
- **User Management**: Create, Read, Update, Delete users
- **Poll Management**:
  - Institutes can create polls
  - Polls appear only for selected roles (Teachers or Students)

## Installation

### Prerequisites

- Node.js and npm
- MySQL server

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/poll-system.git
   cd poll-system/backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add the following:

   ```env
   DB_HOST=localhost
   DB_USER=poll_user
   DB_PASSWORD=your_password
   DB_NAME=poll_system
   JWT_SECRET=your_jwt_secret
   ```
4. Set up the database:

   - Start MySQL server
   - Log into MySQL and create the database and user:

     ```sql
     CREATE DATABASE poll_system;

     CREATE USER 'poll_user'@'localhost' IDENTIFIED BY 'your_password';
     GRANT ALL PRIVILEGES ON poll_system.* TO 'poll_user'@'localhost';
     FLUSH PRIVILEGES;
     ```
   - Create tables:

     ```sql
     USE poll_system;

     CREATE TABLE users (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(100),
         email VARCHAR(100) UNIQUE,
         phone VARCHAR(15),
         role ENUM('Teacher', 'Student', 'Institute'),
         password VARCHAR(255)
     );

     CREATE TABLE polls (
         id INT AUTO_INCREMENT PRIMARY KEY,
         title VARCHAR(255),
         description TEXT,
         created_by INT,
         role ENUM('Teacher', 'Student'),
         FOREIGN KEY (created_by) REFERENCES users(id)
     );
     ```
5. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the frontend server:

   ```bash
   npm start
   ```

## Usage

1. **Register** as a user (Teacher, Student, or Institute) via the registration form.
2. **Login** with your credentials.
3. **Create, Read, Update, and Delete** users as needed.
4. As an **Institute**, create polls for specific roles.
5. **Teachers and Students** will see the polls created for their roles and can participate.

## Project Structure

poll-system/
│
├── backend/
│   ├── controller/
│   ├── routes/
│   ├── .env
│   ├── db.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

This `README.md` file provides an overview of the project, installation instructions, usage details, and project structure. Adjust the details (like the repository URL) as necessary for your specific project.
