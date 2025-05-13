import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import "./index.css";
import Home from "./views/dashboardAdmin/dashHome/dashHome";
import Teacher from "../src/views/dashboardAdmin/teacher_dash/teacherdash";
import AdminManagement from "./views/dashboardAdmin/Admin_Management/AdminManagement";
import Studentdash from "../src/views/dashboardAdmin/studentdash/studentdash";
import Profileprops from "./utils/profile/Profile";
import ProfileAdmin from "./views/dashboardAdmin/profile_Admin/profileAdmin";
import ProfileStudent from "./views/dashboardStudent/profile_Student/profileStudent";
import ProfileTeacher from "./views/dashboardTeacher/profile_Teacher/profileTeacher";
import UserManagment from "./utils/UserManagement/UserManagment";
import AddUser from "./utils/UserManagement/addUser/addUser";
import UserDetails from "./utils/UserManagement/UserDetails/userDetails";
import AddAdmin from "./views/dashboardAdmin/Admin_Management/addAdmin/addAdmin";
import AdminDetails from "./views/dashboardAdmin/Admin_Management/adminDetails/AdminDetails";
import Login from "./views/login/login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/main",
    element: <Home />,
  },
  {
    path: "/AdminManagement",
    element: <AdminManagement />,
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
  {
    path: "/profileAdmin",
    element: <ProfileAdmin />,
  },
  {
    path: "/profileStudent",
    element: <ProfileStudent />,
  },
  {
    path: "/profileTeacher",
    element: <ProfileTeacher />,
  },
  {
    path: "/userManagement",
    element: <UserManagment />,
  },
  {
    path: "/addUser",
    element: <AddUser />,
  },
  {
    path: "/userDetails",
    element: <UserDetails />,
  },

  {
    path: "/addAdmin",
    element: <AddAdmin />,
  },
  {
    path: "/adminDetails",
    element: <AdminDetails />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default router;
