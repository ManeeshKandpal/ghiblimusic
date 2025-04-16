// src/App.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { mockPlaylistData } from "./data/mockData"; // Import mock data
import { formatTime } from "./utils/helpers"; // Import helpers (optional here if only used in children)

/**
 * Root application component.
 * Manages global state like theme, view, player status, and song queue.
 */
function App() {
  // --- State ---
  const [currentTheme, setCurrentThemeState] = useState("theme-totoro"); // e.g., 'theme-totoro', 'theme-spirited'
  const [currentView, setCurrentView] = useState("home"); // e.g., 'home', 'library', 'search'
  const [playlist, setPlaylist] = useState(mockPlaylistData); // The current list of songs being played
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Index in the playlist
  const [isPlaying, setIsPlaying] = useState(false); // Player playing status
  const [currentTime, setCurrentTime] = useState(0); // Current playback time in seconds
  const [volume, setVolume] = useState(0.7); // Volume level (0 to 1)
  const [isShuffle, setIsShuffle] = useState(false); // Shuffle mode status
  const [repeatMode, setRepeatMode] = useState("none"); // Repeat mode ('none', 'one', 'all')
  const [showLyricsPanel, setShowLyricsPanel] = useState(false); // Lyrics panel visibility
  const [showQueuePanel, setShowQueuePanel] = useState(false); // Queue panel visibility

  // --- Refs ---
  // Ref for the audio element (useful if implementing actual audio playback)
  const audioRef = useRef(null);

  // --- Derived State ---
  // Get the current song object based on the index
  const currentSong = playlist[currentSongIndex];
  // Get the duration of the current song, default to 0 if no song
  const duration = currentSong?.duration || 0;

  // --- Effects ---
  // Load theme from local storage on initial mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("ghibliTheme") || "theme-totoro";
    setCurrentThemeState(savedTheme);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to set the current theme and save it to local storage
  const setCurrentTheme = (themeName) => {
    setCurrentThemeState(themeName);
    localStorage.setItem("ghibliTheme", themeName);
  };

  // --- Player Control Handlers (Defined using useCallback for stability) ---

  // Plays a specific song by its index in the playlist
  const playSongByIndex = useCallback(
    (index) => {
      if (index >= 0 && index < playlist.length) {
        setCurrentSongIndex(index);
        setCurrentTime(0); // Reset playback time
        setIsPlaying(true); // Start playing
        console.log(`Playing song index: ${index}`);
      } else {
        // Log a warning if the index is out of bounds
        console.warn(`Invalid song index: ${index}`);
      }
    },
    [playlist.length]
  ); // Recreate this function only if playlist length changes

  // Handles moving to the next song (automatically or via user click)
  const handleNextSong = useCallback(
    (isAutoNext = false) => {
      let nextIndex;
      if (isShuffle) {
        // Simple shuffle: pick a random DIFFERENT index
        if (playlist.length <= 1) {
          nextIndex = 0; // Only one song, just restart
        } else {
          do {
            nextIndex = Math.floor(Math.random() * playlist.length);
          } while (nextIndex === currentSongIndex); // Ensure it's a different song
        }
      } else {
        // Normal sequential: loop back to the start if at the end
        nextIndex = (currentSongIndex + 1) % playlist.length;
      }

      // If the song ended automatically (isAutoNext), and we looped back to the start,
      // and repeat is 'none', and shuffle is off, then stop playback.
      if (
        isAutoNext &&
        nextIndex === 0 &&
        repeatMode === "none" &&
        !isShuffle
      ) {
        console.log("Playlist ended, repeat is none.");
        setIsPlaying(false);
        setCurrentTime(duration); // Show the full duration
        return; // Exit without changing song index
      }

      // Update to the next song index and reset time
      setCurrentSongIndex(nextIndex);
      setCurrentTime(0);
      // Keep playing if it was already playing OR if triggered automatically by song end
      // (unless playback was stopped above)
      if (isPlaying || isAutoNext) {
        setIsPlaying(true);
      }
    },
    [
      currentSongIndex,
      playlist.length,
      isShuffle,
      repeatMode,
      isPlaying,
      duration,
    ]
  ); // Dependencies

  // Handles moving to the previous song or restarting the current one
  const handlePrevSong = useCallback(() => {
    // If more than 3 seconds have passed, restart the current song
    if (currentTime > 3) {
      setCurrentTime(0);
      console.log("Restarting song");
    } else {
      // Otherwise, go to the previous song (looping to the end if at the beginning)
      const prevIndex =
        (currentSongIndex - 1 + playlist.length) % playlist.length;
      setCurrentSongIndex(prevIndex);
      setCurrentTime(0); // Reset time
      console.log(`Previous song index: ${prevIndex}`);
      // If it was playing, keep playing the previous song
      if (isPlaying) setIsPlaying(true);
    }
  }, [playlist.length, currentTime, currentSongIndex, isPlaying]); // Dependencies

  // Toggles the play/pause state
  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
    console.log(isPlaying ? "Pausing..." : "Playing...");
  }, [isPlaying]); // Dependency

  // Handles seeking through the song via the progress bar
  const handleSeek = useCallback((event) => {
    const seekTime = parseFloat(event.target.value);
    setCurrentTime(seekTime);
    // If using real audio: audioRef.current.currentTime = seekTime;
    console.log(`Seek to: ${formatTime(seekTime)}`);
  }, []); // No dependencies

  // Handles volume changes from the volume slider
  const handleVolumeChange = useCallback((event) => {
    const newVolume = parseFloat(event.target.value) / 100;
    setVolume(newVolume);
    // If using real audio: audioRef.current.volume = newVolume;
    console.log(`Volume: ${event.target.value}%`);
  }, []); // No dependencies

  // Toggles shuffle mode on/off
  const toggleShuffle = useCallback(() => {
    setIsShuffle((prev) => !prev);
    console.log(`Shuffle: ${!isShuffle ? "On" : "Off"}`);
  }, [isShuffle]); // Dependency

  // Cycles through repeat modes: none -> all -> one -> none
  const toggleRepeat = useCallback(() => {
    setRepeatMode((prev) => {
      const nextMode =
        prev === "none" ? "all" : prev === "all" ? "one" : "none";
      console.log(`Repeat Mode: ${nextMode}`);
      return nextMode;
    });
  }, []); // No dependencies

  // Toggles the visibility of the lyrics panel
  const toggleLyrics = useCallback(
    () => setShowLyricsPanel((prev) => !prev),
    []
  ); // No dependencies
  // Toggles the visibility of the queue panel
  const toggleQueue = useCallback(() => setShowQueuePanel((prev) => !prev), []); // No dependencies

  // --- Effect for Time Simulation ---
  // This effect simulates the passage of time when a song is playing.
  // In a real app, this would be replaced by listening to the 'timeupdate' event
  // on the actual <audio> element.
  useEffect(() => {
    let interval;
    // Only run the interval if playing and the song has a valid duration
    if (isPlaying && duration > 0) {
      interval = setInterval(() => {
        // Use functional update to get the latest time
        setCurrentTime((prevTime) => {
          const nextTime = prevTime + 1;
          // Check if the song has ended
          if (nextTime >= duration) {
            // If repeat 'one' is active, reset time to 0 to loop
            if (repeatMode === "one") {
              console.log("Repeating one song");
              return 0;
            } else {
              // Otherwise, handle moving to the next song
              handleNextSong(true); // Pass true for auto-next
              return 0; // Reset time for the new song (or after stopping)
            }
          }
          // Otherwise, just increment the time
          return nextTime;
        });
      }, 1000); // Update every second
    } else {
      // If not playing or duration is invalid, clear any existing interval
      clearInterval(interval);
    }
    // Cleanup function: clear the interval when the component unmounts
    // or when dependencies change causing the effect to re-run.
    return () => clearInterval(interval);
    // Dependencies: Re-run this effect if playback state, duration, repeat mode,
    // or the next song handler changes.
  }, [isPlaying, duration, repeatMode, handleNextSong]);

  // --- Render ---
  return (
    // Main container div with dynamic theme class
    <div
      className={`themed ${currentTheme} flex h-screen overflow-hidden ${
        isPlaying ? "playing" : ""
      }`}
    >
      {/* Hidden Audio Element - link src to currentSong.src for real playback */}
      <audio ref={audioRef} src={currentSong?.src}></audio>

      {/* Sidebar Component */}
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
      {/* Main Content Area Component */}
      <MainContent
        currentView={currentView}
        showLyricsPanel={showLyricsPanel}
        showQueuePanel={showQueuePanel}
        onPlay={playSongByIndex} // Pass play function
        // Pass all player-related state and handlers down
        currentSong={currentSong}
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        nextSong={() => handleNextSong(false)} // User-initiated next click
        prevSong={handlePrevSong}
        currentTime={currentTime}
        handleSeek={handleSeek}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
        isShuffle={isShuffle}
        toggleShuffle={toggleShuffle}
        repeatMode={repeatMode}
        toggleRepeat={toggleRepeat}
        toggleLyrics={toggleLyrics}
        toggleQueue={toggleQueue}
      />
    </div>
  );
}

export default App;
