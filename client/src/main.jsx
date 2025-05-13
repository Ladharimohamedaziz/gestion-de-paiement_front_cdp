import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
// import "../src/assets/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvide router={router} />
  </React.StrictMode>
);
