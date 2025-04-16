// src/components/LibraryItem.js
import React from "react";

/**
 * Component to display an item in the library grid.
 * @param {object} props - Component props.
 * @param {object} props.item - Library item data object.
 * @param {string} props.item.img - URL for the item's image.
 * @param {string} props.item.title - Title of the item (song/album).
 * @param {string} props.item.artist - Artist name.
 * @param {number} props.item.index - Index in the main playlist (-1 if not directly playable).
 * @param {function} props.onPlay - Function to call when the item is clicked to be played.
 */
const LibraryItem = ({ item, onPlay }) => {
  // Only make playable if index is valid
  const isPlayable = item.index >= 0;
  const handleClick = () => {
    if (isPlayable) {
      onPlay(item.index);
    } else {
      console.log("Item not directly playable from this view:", item.title);
      // Optionally navigate to album/artist view later
    }
  };

  return (
    <div
      className={`text-center group ${
        isPlayable ? "cursor-pointer" : "cursor-default"
      }`}
      onClick={handleClick}
      title={isPlayable ? `Play ${item.title}` : item.title}
    >
      <img
        src={item.img}
        alt="Album Art"
        className="rounded-md shadow-themed group-hover:shadow-themed-lg transition-shadow duration-300 mb-2 w-full aspect-square object-cover"
        // Add error handling for images
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/150x150/cccccc/969696?text=Error";
        }}
      />
      <p className="text-sm font-medium truncate">{item.title}</p>
      <p className="text-xs text-secondary truncate">{item.artist}</p>
    </div>
  );
};

export default LibraryItem;
