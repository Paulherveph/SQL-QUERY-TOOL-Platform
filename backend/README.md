# Backend Documentation

## Overview

The backend of the SQL Query Tool is a Node.js application built using Express.js. It acts as an intermediary between the frontend and the PostgreSQL database. It receives SQL queries from the frontend, executes them against the database, and sends the results back to the frontend.

## Key Features

* **SQL Query Execution:** Handles SQL queries sent from the frontend.
* **PostgreSQL Interaction:** Connects to and interacts with the PostgreSQL database.
* **Data Retrieval:** Fetches data from the database based on the provided SQL queries.
* **Error Handling:** Properly handles database errors and sends informative error messages to the frontend.
* **CORS Support:** Enables Cross-Origin Resource Sharing to allow requests from the frontend.
* **Environment Configuration:** Uses a `.env` file to manage database credentials and other sensitive information.

## Technologies Used

* **Node.js:** JavaScript runtime environment.
* **Express.js:** Web application framework.
* **pg:** PostgreSQL client for Node.js.
* **cors:** Middleware for enabling CORS.
* **dotenv:** For loading environment variables from a `.env` file.

## Files

* `.env`:  Stores sensitive information such as database credentials (this file should not be committed to version control).
* `package.json`:  Defines project dependencies and scripts.
* `server.js`:  Contains the main application logic for the backend server.

## Functionality

1.  **Receiving Queries:**
    * The backend listens for POST requests on the `/api/query` endpoint.
    * The SQL query is included in the request body.
2.  **Database Interaction:**
    * The backend uses the `pg` library to connect to the PostgreSQL database.
    * It executes the provided SQL query using the `pool.query()` method.
3.  **Sending Results:**
    * If the query is executed successfully, the backend sends the results (as an array of objects) back to the frontend in JSON format.
    * If an error occurs, the backend sends an appropriate HTTP error response (e.g., 500 for server error, 400 for bad request) with an error message.

## Running the Backend

1.  **Prerequisites:**
    * Node.js installed.
    * PostgreSQL database set up and running.
    * Database credentials (username, host, database name, password).

2.  **Installation:**
    * Clone the repository.
    * Navigate to the `backend` directory: `cd backend`
    * Install the dependencies: `npm install`
    * Create a `.env` file in the `backend` directory and add your database credentials:

        ```text
        DB_USER=your_db_user
        DB_HOST=your_db_host
        DB_NAME=your_db_name
        DB_PASSWORD=your_db_password
        DB_PORT=5432  # Default PostgreSQL port
        DB_SSL=false # Set to true if your PostgreSQL server requires SSL
        ```

        * **Important:** Replace the placeholder values with your actual database credentials.  Do not commit the `.env` file to version control.

3.  **Running the Server:**
    * Run the command: `npm start`
    * The server will start and listen on port 3000 (or the port specified in your `.env` file or environment).
    * The message "Server is running on port [port]" and "Connected to PostgreSQL database" will be displayed in the console.

## Working Perfectly

The backend is working perfectly in the following aspects:

* Successfully connects to the PostgreSQL database and any other database.
* Executes SQL queries received from the frontend.
* Returns query results in JSON format.
* Handles errors gracefully and sends appropriate error responses.
* Implements CORS to allow cross-origin requests.
* Uses environment variables for configuration.
