import React from "react";
import { Link } from "react-router-dom";


function Login() {
  const backgroundStyle = {
    backgroundImage: "url('paris_night.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  const trasnparent = {
    background: "rgba(255,255,255, 0.10)",
    borderRadius: "16px",
    backdropFilter: "blur(2px)",
    webkitBackdropFilter: "blur(2px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    border: " 1px solid rgba(f, f, f, 0.07)",
  };

  return (
    <div>
      <div>
        <div
          style={backgroundStyle}
          className="d-flex align-items-center justify-content-left "
        >
          <div
            style={trasnparent}
            className=" h-100 p-5 d-flex align-items-center justify-content-center"
          >
            <div className="">
              <img
                src="cdp.png"
                alt="Logo"
                className="img-fluid mb-4"
                style={{ width: "200px" }}
              />
              <div className="text-center">
                <div className="mb-3">
                  <input
                    type="email"
                    className="login-section p-2 m-1"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="login-section p-2"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="mt-5 d-grid gap-3">
                  <Link to="/main" className="d-blockd-block mb-3"> 
                  <button id="color" type="button" className="btn p2 login-sectionx">
                    Login
                  </button>
                  </Link>
                  <button id="btn-secondary" type="button" className="btn p-2">
                    Connect With Alma
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
