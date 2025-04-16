// src/components/MainContent.js
import React from "react";
import PlayerControls from "./PlayerControls";
// Import View Components
import HomeView from "../views/HomeView";
import LibraryView from "../views/LibraryView";
import SearchView from "../views/SearchView";
import PlaylistsView from "../views/PlaylistsView";
import { capitalizeFirstLetter } from "../utils/helpers"; // Import helper

/**
 * Main content area component. Renders the current view and the player controls.
 * @param {object} props - Component props including current view, panel visibility, play handler, and player props.
 */
const MainContent = ({
  currentView,
  showLyricsPanel,
  showQueuePanel,
  onPlay, // Function to play a song by index
  ...playerProps // Pass remaining player state/handlers to PlayerControls
}) => {
  // Dynamically render the active view component
  const renderView = () => {
    switch (currentView) {
      case "library":
        return <LibraryView onPlay={onPlay} />;
      case "search":
        return <SearchView />;
      case "playlists":
        return <PlaylistsView />;
      case "home":
      default:
        return <HomeView onPlay={onPlay} />; // Pass onPlay to HomeView
    }
  };

  // Define titles for each view
  const viewTitles = {
    home: "Home",
    library: "Library",
    search: "Search",
    playlists: "Playlists",
  };

  return (
    <main className="flex-1 flex flex-col overflow-hidden">
      {/* Enhanced Header */}
      <header className="h-16 flex-shrink-0 flex items-center justify-between px-6 border-b border-themed">
        {/* Display current view title */}
        <h2 className="text-xl font-semibold">
          {viewTitles[currentView] || "Music Grove"}
        </h2>
        {/* Placeholder User Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-sm font-medium hidden sm:inline">
            User Name
          </span>
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm shadow-sm">
            {/* Placeholder User Icon */}
            <svg
              className="themed-icon h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Scrollable Content Area */}
      <div
        id="content-area"
        className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 relative"
      >
        {/* Main View Content */}
        {renderView()}

        {/* Placeholder Panels for Lyrics and Queue */}
        {/* These panels are conditionally displayed based on state from App.js */}
        <section
          id="lyrics-section"
          className={`content-panel mt-10 ${showLyricsPanel ? "active" : ""}`}
        >
          <h2 className="text-2xl font-semibold mb-4">Lyrics</h2>
          <div className="placeholder-panel">
            Lyrics for {playerProps.currentSong?.title || "current song"}...
          </div>
        </section>
        <section
          id="queue-section"
          className={`content-panel mt-10 ${showQueuePanel ? "active" : ""}`}
        >
          <h2 className="text-2xl font-semibold mb-4">Queue</h2>
          <div className="placeholder-panel">
            Up next... (Queue items placeholder)
          </div>
        </section>
      </div>

      {/* Player Controls Component */}
      <PlayerControls {...playerProps} />
    </main>
  );
};

export default MainContent;
