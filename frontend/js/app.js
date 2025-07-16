/**
 * app.js
 *
 * This file contains the main application logic for the SQL Query Tool.
 * It handles user interactions, executes SQL queries, and updates the UI
 * to display the results or any errors.
 */

// Get references to DOM elements
const sqlQueryInput = document.getElementById('sql-query');
const executeQueryButton = document.getElementById('execute-query');
const resultsContainer = document.getElementById('results-container');
const errorMessageDisplay = document.getElementById('error-message');
const loadingIndicator = document.getElementById('loading-indicator');

/**
 * Function to display a user-friendly error message.
 * @param {string} message - The error message to display.
 */
function displayErrorMessage(message) {
    errorMessageDisplay.textContent = message;
    errorMessageDisplay.style.display = 'block';
    resultsContainer.innerHTML = ''; // Clear any previous results
}

/**
 * Function to clear the error message.
 */
function clearErrorMessage() {
    errorMessageDisplay.textContent = '';
    errorMessageDisplay.style.display = 'none';
}

/**
 * Function to display the query results in a table.
 * @param {Array<object>} results - An array of objects representing the query results.
 */
function displayResults(results) {
    if (!results || results.length === 0) {
        resultsContainer.innerHTML = '<p class="text-muted">No results to display.</p>';
        return;
    }

    const table = document.createElement('table');
    table.className = 'table table-bordered table-striped table-hover';

    const headerRow = table.insertRow();
    const headers = Object.keys(results[0]);
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    results.forEach((row, index) => {
        const dataRow = table.insertRow();
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = row[header];
            dataRow.appendChild(td);
        });
    });

    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(table);
}

/**
 * Function to execute an SQL query using the backend API.
 * @param {string} query - The SQL query to execute.
 * @returns {Promise<Array<object>>} - A promise that resolves with the query results.
 */
async function executeQuery(query) {
    const url = 'http://localhost:3000/api/query'; // Or your deployed backend URL

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to execute query');
    }

    return await response.json();
}

/**
 * Event handler for the execute query button click.
 */
async function handleExecuteQuery() {
    const query = sqlQueryInput.value.trim();
    if (!query) {
        displayErrorMessage('Please enter an SQL query.');
        return;
    }

    clearErrorMessage();
    loadingIndicator.style.display = 'flex';

    try {
        const results = await executeQuery(query);
        displayResults(results);
    } catch (error) {
        displayErrorMessage(error.message);
    } finally {
        loadingIndicator.style.display = 'none';
    }
}

// Attach event listener to the execute query button
executeQueryButton.addEventListener('click', handleExecuteQuery);