import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import SidebarAdmin from "../sidebar/sidebarAdmin";
import SidebarTeacher from "../sidebar/sidebarTeacher"; // إضافة Sidebar للمعلم
import SidebarStudent from "../sidebar/sidebarStudent"; // إضافة Sidebar للطالب

const DashboardLayout = ({ role }) => {
  let SidebarComponent;

  if (role === "admin") {
    SidebarComponent = SidebarAdmin;
  } else if (role === "teacher") {
    SidebarComponent = SidebarTeacher;
  } else if (role === "student") {
    SidebarComponent = SidebarStudent;
  }

  return (
    <div className="admin-dashboard">
      <Navbar role={role} /> {/* تمرير الدور للنافبار إذا يلزم */}
      <div className="dashboard-content">
        <SidebarComponent />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
