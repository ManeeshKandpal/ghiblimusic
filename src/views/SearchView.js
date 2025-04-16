// src/views/SearchView.js
import React from "react";

/**
 * Component for the Search view.
 * Contains the search input and placeholder for results.
 */
const SearchView = () => (
  // Use 'view' class, active state managed by parent
  <div id="view-search" className="view">
    <h1 className="font-ghibli-title text-4xl mb-6">Search</h1>
    <div className="relative mb-8 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search songs, artists, albums..."
        className="bg-accent text-themed placeholder-text-secondary rounded-full py-3 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-accent-gold w-full text-lg border border-themed"
        aria-label="Search music"
      />
      {/* Search Icon */}
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 themed-icon pointer-events-none">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
    {/* Placeholder for search results */}
    <div className="placeholder-panel text-center">
      Search results will appear here...
    </div>
  </div>
);

export default SearchView;
