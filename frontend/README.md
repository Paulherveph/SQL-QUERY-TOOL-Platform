# Frontend Documentation

## Overview

The frontend of the SQL Query Tool provides a user interface for executing SQL queries against a database. It is built using HTML, CSS (including Bootstrap), and JavaScript. The primary goal is to offer a clean, intuitive, and responsive experience for users to interact with the database.

## Key Features

* **SQL Input Area:** A resizable text area where users can enter their SQL queries.
* **Execute Query Button:** A button to trigger the execution of the entered SQL query.
* **Loading Indicator:** A visual indicator (spinner) displayed while the query is being processed.
* **Results Display Area:** A table-based display for showing the results of the executed query.
* **Error Message Display:** A dedicated area for showing user-friendly error messages in case of invalid queries or execution failures.

## Technologies Used

* **HTML:** For structuring the web page.
* **CSS:** For styling the user interface, including custom styles and Bootstrap for layout and components.
* **JavaScript:** For handling user interactions, sending queries to the backend, and updating the UI dynamically.
* **Bootstrap:** For responsive design and pre-built UI components.
* **Inter Font:**  For a clean and modern look

## Files

* `index.html`: The main HTML file that sets up the structure of the web page.
* `css/styles.css`: Contains custom CSS styles for the application.
* `js/app.js`: Contains the main application logic for handling user interactions and data display.
* `js/utils.js`: Contains utility functions used by the app.js file

## Functionality

1.  **User Interaction:**
    * The user enters an SQL query into the text area.
    * The user clicks the "Execute Query" button.
2.  **Query Execution:**
    * The JavaScript code (`app.js`) sends the query to the backend server (using `fetch`).
    * The loading indicator is displayed while the query is being processed.
3.  **Results Display:**
    * The backend server executes the query against the database.
    * The results are sent back to the frontend.
    * The JavaScript code updates the `results-container` with the data in a tabular format.
4.  **Error Handling:**
    * If there is an error during query execution, the backend sends an error message.
    * The JavaScript code displays the error message in the `error-message` area.

## Working Perfectly

The frontend is working perfectly in the following aspects:

* The layout is responsive and displays correctly on different screen sizes.
* The SQL input area, execute button, loading indicator, and results display area function as expected.
* User-friendly error messages are displayed when necessary.
* The application uses  modern and clean design

## Further Improvements

* Add syntax highlighting to the SQL input area.
* Implement pagination for large result sets.
* Add sorting and filtering to the results table.
* Implement a query history panel.
</markdown>
