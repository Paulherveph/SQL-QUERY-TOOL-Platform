/**
 * utils.js
 *
 * This file contains utility functions that are used throughout the application.
 * These functions provide common functionality and help to keep the code organized
 * and reusable.
 */

/**
 * Function to format a date string into a more readable format (example).
 * @param {string} dateString - The date string to format.
 * @returns {string} - The formatted date string.
 */
function formatDate(dateString) {
  try {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options); // Uses user's locale
  } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid Date';
  }
}

/**
* Function to escape HTML characters in a string to prevent XSS vulnerabilities.
* @param {string} str - The string to escape.
* @returns {string} - The escaped string.
*/
function escapeHTML(str) {
  return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
}

/**
* Function to convert an object to query string
* @param {object} obj - The object to convert
* @returns {string} - the query string.
*/
function objectToQueryString(obj) {
  return Object.entries(obj)
      .map(([key, value]) => `<span class="math-inline">\{encodeURIComponent\(key\)\}\=</span>{encodeURIComponent(value)}`)
      .join('&');
}