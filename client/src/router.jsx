import React from "react";

import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Login from "./views/login/login";
import DashboardLayout from "./components/layouts/DashboardLayout";
import AdminHome from "./views/dashboard/admin/home/Home";
import TeacherHome from "./views/dashboard/teacher/home/Home";
import StudentHome from "./views/dashboard/student/home/Home";
import ProfileAdmin from "./views/dashboard/admin/AdminProfile";
import ProfileStudent from "./views/dashboard/student/StudentProfile";
import ProfileTeacher from "./views/dashboard/teacher/TeacherProfile";
import AdminDetails from "./views/dashboard/admin/Admin_detaile/AdminDetails";
import UserDetails from "./utils/UserManagement/userDetails";
import Studentschedule from "./views/dashboard/student/Studentschedule";
import Teacherschedule from "./views/dashboard/teacher/Teacherschedule";
import Management from "./views/dashboard/admin/Management/Management";
import Modules from "../src/views/dashboard/admin/Modules/Modules";
import Payment from "./views/dashboard/admin/Payment/Payment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  // Admin routes
  {
    path: "/admin",
    element: <DashboardLayout role="admin" />,
    children: [
      { path: "home", element: <AdminHome /> },
      { path: "profile", element: <ProfileAdmin /> },
      { path: "admin-details", element: <AdminDetails /> }, //*  bich nbadel feha
      { path: "user-details", element: <UserDetails /> },
      { path: "management", element: <Management /> },
      { path: "modules", element: <Modules /> },
      { path: "payment", element: <Payment /> },
    ],
  },
  {
    path: "/teacher",
    element: <DashboardLayout role="teacher" />,
    children: [
      { path: "home", element: <TeacherHome /> },
      { path: "profile", element: <ProfileTeacher /> },
      { path: "schedule", element: <Teacherschedule /> },

    ],
  },
  {
    path: "/student",
    element: <DashboardLayout role="student" />,
    children: [
      { path: "home", element: <StudentHome /> },
      { path: "profile", element: <ProfileStudent /> },
      { path: "schedule", element: <Studentschedule /> },
    ],
  },
  {
    path: "*",
    element: <div>404 - Page Not Found </div>,
  },
]);
export default router;
