import { useState } from "react";
import "../sidebar_admin/style.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        class="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        <i class="bi bi-list "></i>
      </button>

      <div
        class="offcanvas offcanvas-start n-css"
        data-bs-backdrop="static"
        tabindex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="staticBackdropLabel"></h5>
          <div className="logo">
            <img className="logo" src="cdp.png" alt="" />
          </div>
          <div data-bs-theme="dark">
            <button
              type="button"
              class="btn-close "
              data-bs-dismiss="offcanvas"
              // disabled
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div class="offcanvas-body">
          <div>
            <div class="gap-4 mt-5 mb-5 col-10 mx-auto p-4">
              <button class="btn btn-blue rounded-3 f" type="button">
                <i class="bi bi-columns-gap"></i> Dashboard
              </button>
              <button class="btn btn-blue rounded-3" type="button">
                <i class="bi bi-person-plus"></i> User Management
              </button>
              <button class="btn btn-blue  rounded-3" type="button">
                <i class="bi bi-clipboard2-plus"></i> Modules
              </button>
              <button class="btn btn-blue rounded-3" type="button">
                <i class="bi bi-door-open"></i> Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
