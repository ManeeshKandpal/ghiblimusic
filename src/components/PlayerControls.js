// src/components/PlayerControls.js
import React from "react";
import IconButton from "./IconButton";
import { formatTime } from "../utils/helpers"; // Import helper

/**
 * Component for the bottom player control bar.
 * Contains playback buttons, progress bar, volume control, etc.
 * @param {object} props - Component props including player state and handlers.
 */
const PlayerControls = ({
  currentSong,
  isPlaying,
  togglePlayPause,
  nextSong,
  prevSong,
  currentTime,
  handleSeek,
  volume,
  handleVolumeChange,
  isShuffle,
  toggleShuffle,
  repeatMode,
  toggleRepeat,
  toggleLyrics,
  toggleQueue,
}) => {
  // Calculate duration safely
  const duration = currentSong?.duration || 0;

  // Handle seek input change
  const onSeekChange = (event) => {
    handleSeek(event); // Pass the event up
  };

  // Handle volume input change
  const onVolumeChange = (event) => {
    handleVolumeChange(event); // Pass the event up
  };

  return (
    <footer className="bg-accent h-28 flex-shrink-0 border-t border-themed shadow-themed-lg p-4 flex items-center justify-between relative z-10">
      {/* Current Song Info */}
      <div className="flex items-center space-x-4 w-1/4 overflow-hidden">
        <div className="album-art-frame w-16 h-16 rounded-md overflow-hidden">
          <img
            id="current-album-art"
            src={
              currentSong?.art ||
              "https://placehold.co/100x100/cccccc/969696?text=?"
            }
            alt="Current Album Art"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/100x100/cccccc/969696?text=Error";
            }}
          />
        </div>
        <div className="overflow-hidden">
          <p
            id="current-song-title"
            className="font-semibold text-sm truncate"
            title={currentSong?.title}
          >
            {currentSong?.title || "No song selected"}
          </p>
          <p
            id="current-artist"
            className="text-xs text-secondary truncate"
            title={currentSong?.artist}
          >
            {currentSong?.artist || "..."}
          </p>
        </div>
      </div>

      {/* Playback Controls & Progress */}
      <div className="flex flex-col items-center w-1/2">
        <div className="flex items-center space-x-4 mb-2">
          {/* Shuffle Button */}
          <IconButton
            onClick={toggleShuffle}
            tooltip="Shuffle"
            isActive={isShuffle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
              <path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
          </IconButton>
          {/* Previous Button */}
          <IconButton onClick={prevSong} tooltip="Previous">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8.447 14.03A1 1 0 0010 13V7a1 1 0 00-1.553-.832l-4 3a1 1 0 000 1.664l4 3z" />
              <path d="M14.447 14.03A1 1 0 0016 13V7a1 1 0 00-1.553-.832l-4 3a1 1 0 000 1.664l4 3z" />
            </svg>
          </IconButton>
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="btn-play-pause mx-2"
            data-tooltip={isPlaying ? "Pause" : "Play"}
            type="button"
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          {/* Next Button */}
          <IconButton onClick={nextSong} tooltip="Next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.553 6.168A1 1 0 004 7v6a1 1 0 001.553.832l4-3a1 1 0 000-1.664l-4-3z" />
              <path d="M11.553 6.168A1 1 0 0010 7v6a1 1 0 001.553.832l4-3a1 1 0 000-1.664l-4-3z" />
            </svg>
          </IconButton>
          {/* Repeat Button */}
          <IconButton
            onClick={toggleRepeat}
            tooltip={`Repeat: ${repeatMode}`}
            isActive={repeatMode !== "none"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.885-.666A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566z"
                clipRule="evenodd"
              />
            </svg>
            {/* Display '1' if repeat mode is 'one' */}
            {repeatMode === "one" && (
              <span
                className="absolute text-xs font-bold"
                style={{ top: "2px", right: "4px" }}
              >
                1
              </span>
            )}
          </IconButton>
        </div>
        {/* Progress Bar */}
        <div className="flex items-center w-full max-w-md space-x-2">
          <span className="text-xs text-secondary w-10 text-right tabular-nums">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            value={currentTime}
            min="0"
            max={duration} // Duration can be 0 if no song is loaded
            step="0.1"
            onChange={onSeekChange} // Use the handler
            className="progress-bar flex-1 h-2 rounded-full appearance-none cursor-pointer"
            // Apply background gradient style for progress visualization
            style={{
              background: `linear-gradient(to right, var(--progress-fill) ${
                duration > 0 ? (currentTime / duration) * 100 : 0
              }%, var(--progress-bg) ${
                duration > 0 ? (currentTime / duration) * 100 : 0
              }%)`,
            }}
            aria-label="Song progress"
          />
          <span className="text-xs text-secondary w-10 tabular-nums">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Volume & Other Controls */}
      <div className="flex items-center space-x-3 w-1/4 justify-end">
        {/* Lyrics Button */}
        <IconButton onClick={toggleLyrics} tooltip="Lyrics">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v1H7V5zm0 3h6v1H7V8zm0 3h6v1H7v-1z"
              clipRule="evenodd"
            />
          </svg>
        </IconButton>
        {/* Queue Button */}
        <IconButton onClick={toggleQueue} tooltip="Queue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
          </svg>
        </IconButton>
        {/* Volume Control */}
        <div className="flex items-center group">
          <IconButton tooltip="Volume">
            {/* Placeholder Volume Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 1.102A.9.9 0 0110.9 2v16a.9.9 0 01-1.8 0V2A.9.9 0 0110 1.102zM4 6.101A.9.9 0 014.9 7v6a.9.9 0 01-1.8 0V7a.9.9 0 01.9-.899zM16 6.101a.9.9 0 01.9.899v6a.9.9 0 01-1.8 0V7a.9.9 0 01.9-.899z" />
            </svg>
          </IconButton>
          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100} // Scale volume (0-1) to range input (0-100)
            onChange={onVolumeChange} // Use the handler
            className="volume-slider w-0 group-hover:w-24 h-1 rounded-lg appearance-none cursor-pointer"
            // Apply background gradient style for volume visualization
            style={{
              background: `linear-gradient(to right, var(--progress-fill) ${
                volume * 100
              }%, var(--progress-bg) ${volume * 100}%)`,
            }}
            aria-label="Volume control"
          />
        </div>
      </div>
    </footer>
  );
};

export default PlayerControls;
