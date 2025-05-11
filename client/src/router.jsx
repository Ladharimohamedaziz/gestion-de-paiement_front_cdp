import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import "./index.css";
import Login from "./login/login";
import Main from "./views/dashboardAdmin/main/main";
import Teacher from "../src/views/dashboardAdmin/teacher_dash/teacherdash";
import Admindash from "../src/views/dashboardAdmin/admindash/admindash";
import Studentdash from "../src/views/dashboardAdmin/studentdash/studentdash";
import Profileprops from "./utils/profile/Profile";
const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Main />,
  },

  {
    path: "/admindash",
    element: <Admindash />,
  },
  {
    path: "/teacherdash",
    element: <Teacher />,
  },
  {
    path: "/studentdash",
    element: <Studentdash />,
  },
    {
    path: "/profile",
    element: <Profileprops />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default router;
