// src/components/PlaylistCard.js
import React from "react";

/**
 * Component to display a playlist card.
 * @param {object} props - Component props.
 * @param {object} props.playlist - Playlist data object.
 * @param {string} props.playlist.img - URL for the playlist cover image.
 * @param {string} props.playlist.name - Name of the playlist.
 * @param {string} [props.playlist.description] - Optional description.
 * @param {number} [props.playlist.songCount] - Optional song count.
 */
const PlaylistCard = ({ playlist }) => (
  <div className="playlist-card bg-secondary rounded-lg shadow-themed overflow-hidden">
    <img
      src={playlist.img}
      alt={`${playlist.name} Cover`}
      className="w-full h-32 object-cover"
      // Add error handling for images
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/300x200/cccccc/969696?text=Error";
      }}
    />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-1 truncate" title={playlist.name}>
        {playlist.name}
      </h3>
      <p className="text-sm text-secondary">
        {playlist.description || `${playlist.songCount || 0} Songs`}
      </p>
    </div>
  </div>
);

export default PlaylistCard;
