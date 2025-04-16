// src/views/HomeView.js
import React from "react";
import PlaylistCard from "../components/PlaylistCard";
import LibraryItem from "../components/LibraryItem";
import { mockFeaturedPlaylists, mockLibraryItems } from "../data/mockData"; // Import mock data

/**
 * Component for the Home view.
 * Displays featured playlists and recently played items.
 * @param {object} props - Component props.
 * @param {function} props.onPlay - Function to play a song by index.
 */
const HomeView = ({ onPlay }) => (
  // Use 'view active' classes for initial display if needed, or manage via parent
  <div id="view-home" className="view active">
    <h1 className="font-ghibli-title text-4xl mb-6">
      Welcome to Your Music Grove
    </h1>
    {/* Featured Playlists */}
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-accent-gold pb-2 inline-block">
        Featured Playlists
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Display first 4 featured playlists */}
        {mockFeaturedPlaylists.slice(0, 4).map((p) => (
          <PlaylistCard key={p.id} playlist={p} />
        ))}
      </div>
    </section>
    {/* Recently Played */}
    <section>
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-accent-gold pb-2 inline-block">
        Recently Played
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Example: Filter library items that match recently played IDs/indices */}
        {/* Assuming items 'l1' and 'l2' were recently played */}
        {mockLibraryItems
          .filter((item) => item.id === "l1" || item.id === "l2")
          .map((item) => (
            <LibraryItem key={item.id} item={item} onPlay={onPlay} />
          ))}
      </div>
    </section>
  </div>
);

export default HomeView;
