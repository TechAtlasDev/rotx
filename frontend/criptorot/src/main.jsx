import { Routes, BrowserRouter, Route } from "react-router-dom";

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
);
