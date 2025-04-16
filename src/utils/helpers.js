// src/utils/helpers.js

/**
 * Formats time in seconds to a mm:ss string.
 * @param {number} seconds - The time in seconds.
 * @returns {string} Formatted time string (e.g., "3:45").
 */
export function formatTime(seconds) {
  if (isNaN(seconds) || seconds === Infinity || seconds < 0) {
    return "0:00";
  }
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} string - The input string.
 * @returns {string} String with the first letter capitalized.
 */
export function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}
