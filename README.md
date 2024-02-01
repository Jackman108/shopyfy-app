# Project Name

This repository contains both the backend and frontend components of the project. 

## Backend

### Description

The backend is built using Node.js and Express, providing a GraphQL API for data manipulation. It utilizes PostgreSQL as the database and includes necessary dependencies such as CORS for cross-origin resource sharing, dotenv for environment variable management, and graphql libraries for handling GraphQL queries.

### Installation

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Run `npm install` to install the required dependencies.
4. Create a `.env` file and configure your PostgreSQL connection details.

### Usage

1. Start the backend server by running `npm start`.
2. The server will be running on `http://localhost:PORT`, where `PORT` is the specified port in your `.env` file.

## Frontend

### Description

The frontend is a React application using Redux for state management. It is set up with Create React App and includes testing utilities such as Jest. 

### Installation

1. Navigate to the `client` directory.
2. Run `npm install` to install the necessary frontend dependencies.

### Usage

1. Start the frontend development server by running `npm start`.
2. Open your browser and go to `http://localhost:3000` to view the application.

### Scripts

- `npm start`: Start the development server.
- `npm build`: Build the production-ready application.
- `npm test`: Run tests.

### Development Guidelines

- Follow the coding standards defined in the `.eslintrc` file.
- Ensure tests are written for new features and bug fixes.

## Author

- [dev.js.eugene](https://github.com/Jackman108)

## License

This project is licensed under the ISC License.
