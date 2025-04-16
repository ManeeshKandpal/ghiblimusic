// src/components/IconButton.js
import React from "react";

/**
 * Reusable Icon Button component.
 * @param {object} props - Component props.
 * @param {function} props.onClick - Click handler function.
 * @param {string} props.tooltip - Text for the tooltip.
 * @param {React.ReactNode} props.children - SVG icon or other content.
 * @param {boolean} [props.isActive=false] - Whether the button is in an active state (e.g., shuffle/repeat).
 * @param {string} [props.className=''] - Additional CSS classes.
 */
const IconButton = ({
  onClick,
  tooltip,
  children,
  isActive = false,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`btn-icon ${
      isActive ? "active-shuffle-repeat" : ""
    } ${className}`}
    data-tooltip={tooltip}
    type="button" // Explicitly set type
  >
    {children}
  </button>
);

export default IconButton;
