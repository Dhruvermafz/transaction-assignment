import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
