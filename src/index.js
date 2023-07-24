import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const notes = [
  {
    id: 1,
    tech: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    tech: "React JS",
    important: false,
  },
  {
    id: 3,
    tech: "Node Js",
    important: true,
  },
  {
    id: 4,
    tech: "Mongo DB",
    important: true,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>
);
