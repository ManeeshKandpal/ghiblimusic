// src/views/PlaylistsView.js
import React from "react";
import PlaylistCard from "../components/PlaylistCard";
import { mockFeaturedPlaylists } from "../data/mockData"; // Import mock data

/**
 * Component for the Playlists view.
 * Displays user's playlists and an option to create new ones.
 */
const PlaylistsView = () => (
  // Use 'view' class, active state managed by parent
  <div id="view-playlists" className="view">
    <h1 className="font-ghibli-title text-4xl mb-6">Your Playlists</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {/* Map over all mock playlists */}
      {mockFeaturedPlaylists.map((p) => (
        <PlaylistCard key={p.id} playlist={p} />
      ))}

      {/* Add New Playlist Button */}
      <div className="playlist-card bg-accent border-2 border-dashed border-themed rounded-lg shadow-themed overflow-hidden flex items-center justify-center flex-col h-full min-h-[180px] hover:border-accent-gold hover:text-accent-gold cursor-pointer">
        {/* Plus Icon */}
        <svg
          className="w-12 h-12 mb-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-semibold">Create Playlist</span>
      </div>
    </div>
  </div>
);

export default PlaylistsView;
