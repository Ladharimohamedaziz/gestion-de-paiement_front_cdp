import React from "react";

import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Login from "./views/login/login";
import DashboardLayout from "./components/layouts/DashboardLayout";
import AdminHome from "./views/dashboard/admin/home/Home";
import TeacherHome from "./views/dashboard/teacher/home/Home";
import StudentHome from "./views/dashboard/student/home/Home";
import AdminManagement from "./views/dashboard/admin/Admin_Management/AdminManagement";
import TeacherManagement from "./views/dashboard/admin/Admin_for_Teacher_Management/TeacherManagment";
import StudentManagement from "./views/dashboard/admin/Admin_for_Student_Management/StudentManagment";
import ProfileAdmin from "./views/dashboard/admin/AdminProfile";
import ProfileStudent from "./views/dashboard/student/StudentProfile";
import ProfileTeacher from "./views/dashboard/teacher/TeacherProfile";
import AddAdmin from "./views/dashboard/admin/Admin_Management/addAdmin";
import AdminDetails from "./views/dashboard/admin/Admin_Management/AdminDetails";
import UserManagement from "./utils/userManagement/UserManagment";
import AddUser from "./utils/userManagement/AddUser";
import UserDetails from "./utils/userManagement/UserDetails";
import Studentschedule from "./views/dashboard/student/Studentschedule"
import Teacherschedule from "./views/dashboard/teacher/Teacherschedule";
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
      { path: "management", element: <AdminManagement /> },
      { path: "teachers", element: <TeacherManagement /> },
      { path: "students", element: <StudentManagement /> },
      { path: "profile", element: <ProfileAdmin /> },
      { path: "add-admin", element: <AddAdmin /> },
      { path: "admin-details", element: <AdminDetails /> },
      { path: "user-management", element: <UserManagement /> },
      { path: "add-user", element: <AddUser /> },
      { path: "user-details", element: <UserDetails /> },
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

  // Student routes
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
  element: <div>404 - Page Not Found  </div>
},

]);
export default router;
