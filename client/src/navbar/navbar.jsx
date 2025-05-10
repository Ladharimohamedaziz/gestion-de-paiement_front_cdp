import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // لازم!
import Sidebar from "../sidebar_admin/sidebar";

const Nav = () => {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="d-flex justify-content-between align-items-center bg-light shadow-sm px-4 py-2 rounded">
              <Sidebar />
      <div className="text-muted fs-6">{today}</div>
      {/* Dropdown */}
      <div className="dropdown">
        <button
          className="btn d-flex align-items-center"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="rounded-circle me-2"
            width="35"
            height="35"
          />
          <span className="fw-semibold me-1">Mr Aziz</span>
          <i className="bi bi-caret-down-fill"></i>
        </button>

        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownMenuButton"
        >
          <li className="btn-gold px-3 text-muted small">Aziz@example.com</li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className=" btn-gold dropdown-item" href="#">
              <i className="bi bi-box-arrow-right me-2"></i> Log Out
            </a>
          </li>
          <li>
            <a className="btn-gold dropdown-item" href="#">
              <i className="bi bi-gear me-2"></i> Language
            </a>
          </li>
          <li>
            <a className="btn-gold dropdown-item" href="/profile">
              <i className="bi bi-person me-2"></i> Profile
            </a>
          </li>
          <li>
            <a className="btn-gold dropdown-item" href="#">
              <i className="bi bi-moon me-2"></i> Dark Mode
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
