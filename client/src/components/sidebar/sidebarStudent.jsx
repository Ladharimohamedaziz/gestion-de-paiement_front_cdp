import { useState } from "react";
// import { Link } from "react-router-dom";
function SidebarStudent() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#staticBackdrop"
          aria-controls="staticBackdrop"
        >
          <i className="bi bi-list"></i>
        </button>

        <div
          className="offcanvas offcanvas-start n-css"
          data-bs-backdrop="static"
          tabIndex="-1"
          id="staticBackdrop"
          aria-labelledby="staticBackdropLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="staticBackdropLabel"></h5>
            <div className="logo">
              <img className="logo" src="cdp.png" alt="Logo" />
            </div>
            <div data-bs-theme="dark">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div className="offcanvas-body">
            <div
              className="gap-4 mt-5 mb-5 col-10 mx-auto p-4
            d-flex flex-column justify-content-start align-items-start"
            >
              {/* <Link to="/main"> */}
                <button className="btn btn-blue rounded-3" type="button">
                  <i className="bi bi-columns-gap"></i> Dashboard
                </button>
              {/* </Link> */}
              
                <button className="btn btn-blue rounded-3" type="button">
                  <i className="bi bi-person-circle"></i> Profile
                </button>
              <button className="btn btn-blue rounded-3" type="button">
                <i className="bi bi-calendar-day"></i> schedule
              </button>
              {/* <Link to="/"> */}
                <button className="btn btn-blue rounded-3" type="button">
                  <i className="bi bi-door-open"></i> Log Out
                </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarStudent;
