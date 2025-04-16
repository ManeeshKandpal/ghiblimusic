// src/views/LibraryView.js
import React from "react";
import LibraryItem from "../components/LibraryItem";
import { mockLibraryItems } from "../data/mockData"; // Import mock data

/**
 * Component for the Library view.
 * Displays all items from the mock library.
 * @param {object} props - Component props.
 * @param {function} props.onPlay - Function to play a song by index.
 */
const LibraryView = ({ onPlay }) => (
  // Use 'view' class, active state managed by parent
  <div id="view-library" className="view">
    <h1 className="font-ghibli-title text-4xl mb-6">Your Library</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {/* Map over all library items */}
      {mockLibraryItems.map((item) => (
        <LibraryItem key={item.id} item={item} onPlay={onPlay} />
      ))}
    </div>
  </div>
);

export default LibraryView;
