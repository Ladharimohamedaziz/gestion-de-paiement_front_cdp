import React from "react";
import "../login/style.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <div className="login-container1">
        <div className="login-section1">
          <img src="cdp.png" alt="College de Paris" className="logo1" />
          <h2>Login</h2>
          <form >
            <input
              type="email"
              pla
              ceholder="Email"
            />
            <input
              type="password"
              placeholder="Password"

            />
            <Link to="/main">
            <button type="submit" className="btn1 primary1">
              Sign in
            </button>
            </Link>
            <button type="button" className="btn1 secondary1">
              Connect With Alma
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
