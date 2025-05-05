// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./App";
// const router = createBrowserRouter([

//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/admindach",
//     element: <Admindach />,
//   },
//   {
//     path: "/app",
//     element: <App />,
//   },
// ]);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>

//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// export default router;

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import "./index.css";
import Login from "./login/login";
import Main from "./dashboardAdmin/main/main";


const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path:"/main",
    element :<Main/>
  }

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default router;
