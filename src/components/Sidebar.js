// src/components/Sidebar.js
import React from "react";
import IconButton from "./IconButton"; // Import reusable button

/**
 * Sidebar component for navigation and theme switching.
 * @param {object} props - Component props.
 * @param {string} props.currentView - The currently active view ID.
 * @param {function} props.setCurrentView - Function to change the current view.
 * @param {string} props.currentTheme - The currently active theme ID.
 * @param {function} props.setCurrentTheme - Function to change the current theme.
 */
const Sidebar = ({
  currentView,
  setCurrentView,
  currentTheme,
  setCurrentTheme,
}) => {
  // Theme configuration
  const themes = [
    { id: "theme-totoro", name: "Totoro Forest", color: "#A9C4A9" },
    { id: "theme-spirited", name: "Chihiro's Bathhouse", color: "#B0C4DE" },
    { id: "theme-howl", name: "Howl's Castle", color: "#D2B48C" },
  ];

  // Navigation items configuration
  const navItems = [
    {
      id: "home",
      tooltip: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      id: "library",
      tooltip: "Library",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      ),
    },
    {
      id: "search",
      tooltip: "Search",
      icon: (
        <svg
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
      ),
    },
    {
      id: "playlists",
      tooltip: "Playlists",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M7 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zM6 7a1 1 0 000 2h8a1 1 0 100-2H6zM4 11a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM3 15a1 1 0 000 2h14a1 1 0 100-2H3z" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="sidebar-bamboo w-20 flex flex-col items-center py-6 space-y-8 flex-shrink-0">
      {/* Profile Icon */}
      <div
        className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md cursor-pointer"
        data-tooltip="Profile & Settings"
      >
        {/* Placeholder User Icon */}
        <svg
          className="themed-icon h-6 w-6"
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

      {/* Navigation */}
      <nav className="flex flex-col items-center space-y-4">
        {navItems.map((item) => (
          <IconButton
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            tooltip={item.tooltip}
            className={`sidebar-icon ${
              currentView === item.id ? "active" : ""
            }`}
          >
            {item.icon}
          </IconButton>
        ))}
      </nav>

      {/* Theme Switcher */}
      <div className="mt-auto flex flex-col items-center space-y-2">
        <span className="text-xs text-center text-themed font-semibold mb-1">
          Theme
        </span>
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setCurrentTheme(theme.id)}
            className="w-6 h-6 rounded-full border-2 shadow-sm"
            style={{
              backgroundColor: theme.color,
              borderColor:
                currentTheme === theme.id
                  ? "var(--accent-gold)"
                  : "var(--border-color)",
            }}
            data-tooltip={theme.name}
            type="button" // Explicitly set type
          />
        ))}
      </div>

      {/* Help Icon */}
      <IconButton tooltip="Help / FAQ" className="sidebar-icon mt-4">
        {/* Placeholder Help Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.501l-1.133 2.267a1 1 0 00.633 1.434l3.867 1.933a1 1 0 001.434-.633l2.267-1.133A1 1 0 0012 10a1 1 0 00-1-1H9.414l-.707-.707A1 1 0 008 7zm-1 4a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
      </IconButton>
    </aside>
  );
};

export default Sidebar;
