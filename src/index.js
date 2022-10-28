import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import MouseContextProvider from "./features/MouseContext";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </React.StrictMode>
);
