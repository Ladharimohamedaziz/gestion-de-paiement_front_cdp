import React from "react";
import "../main/style.css";
import Sidebar from "../../sidebar_admin/sidebar";

function Main() {
  return (
    <div>
      <div className="mynav">
        <Sidebar/>
      </div>
      <h1>hello im dachboard main</h1>
    </div>
  );
} 
export default Main;
