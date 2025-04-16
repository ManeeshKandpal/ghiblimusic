// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot for React 18+
import "./styles/GlobalStyles.css"; // Import global styles
import App from "./App";

// Find the root element in your HTML (usually <div id="root"></div>)
const rootElement = document.getElementById("root");

// Create a root and render the App component
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error(
    'Failed to find the root element. Make sure your HTML has an element with id="root".'
  );
}
