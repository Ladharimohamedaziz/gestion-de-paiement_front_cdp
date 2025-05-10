import React from "react";
import "../main/style.css";
import Nav from "../../navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Teacher from "../teacher_dash/teacherdash";
import Admindash from "../admindash/admindash";
import Studentdash from "../studentdash/studentdash";
const Main = () => {
  return (
    <div>
      <div className="navbarposition">
        <Nav />
      </div>
      <div className="container py-4">
        <h3 className="fw-bold mb-3">Payment Tracking</h3>
        <div className="bg-aliceblue p-3 rounded shadow-sm mb-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">Weekly Payment Calendar</h6>
            <small className="text-success">● Student Payments</small>
          </div>
          <div className="d-flex align-items-center mb-3 ">
            <button className="btn btn-sm btn-outline-secondary me-2">
              &lt;
            </button>
            <div>
              Week of <strong>March 18, 2025</strong>
            </div>
            <button className="btn btn-sm btn-outline-secondary ms-2">
              &gt;
            </button>
          </div>
          <div className="d-flex flex-wrap gap-2 overflow-auto">
            {[
              {
                day: "Monday",
                date: "Mar 18",
                total: "$1",
                teachers: 1,
                students: 1,
              },
              {
                day: "Tuesday",
                date: "Mar 19",
                total: "$24.99",
                teachers: 0,
                students: 1,
              },
              {
                day: "Wednesday",
                date: "Mar 20",
                total: "$34.99",
                teachers: 1,
                students: 0,
              },
              { day: "Thursday", date: "Mar 21", total: null },
              {
                day: "Friday",
                date: "Mar 22",
                total: "$49.99",
                teachers: 0,
                students: 1,
              },
              { day: "Saturday", date: "Mar 23", total: null },
              { day: "Sunday", date: "Mar 24", total: null },
            ].map((item, index) => (
              <div
                key={index}
                className="card p-2 text-center"
                style={{ minWidth: "150px", flex: 1 }}
              >
                <strong>
                  {item.day}
                  <br />
                  {item.date}
                </strong>
                {item.total ? (
                  <>
                    <div className="small">Total</div>
                    <div>{item.total}</div>
                    <div className="text-primary small ">
                      {item.teachers} teachers
                    </div>
                    <div className="text-success small">
                      {item.students} students
                    </div>
                  </>
                ) : (
                  <div className="small">No payments</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <div className="align-items-center mb-2">
                <div className="me-2 d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center flex-nowrap justify-content-start">
                    <span className="fs-4">
                      <i
                        className="bi bi-person-check"
                        style={{ color: "red" }}
                      ></i>
                    </span>
                    <h6 className="mb-0">Teacher Payments</h6>
                  </div>
                  <div>
                    <a href="/teacherdash">
                      <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="small text-muted ">
                  Total Teachers: <strong>64</strong>
                </div>
                <div className="small text-muted">
                  Pending Payments: <strong>12</strong>
                </div>
                <div className="small text-muted">
                  Next Payout: <strong>Jan 31, 2024</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <div className="align-items-center mb-2">
                <div className="me-2 d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center flex-nowrap justify-content-start">
                    <span className="fs-4">
                      <i
                        className="bi bi-person-heart me-1"
                        style={{ color: "green" }}
                      >
                        {" "}
                      </i>
                    </span>
                    <h6 className="mb-0">Student Payments</h6>
                  </div>
                  <div>
                    <a href="/studentdash">
                    <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="small text-muted">
                  Total Students: <strong>1245</strong>
                </div>
                <div className="small text-muted">
                  Pending Tuition: <strong>45</strong>
                </div>
                <div className="small text-muted">
                  Due This Month: <strong>$12,750</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <div className="align-items-center mb-2">
                <div className="me-2 d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center flex-nowrap justify-content-start">
                    <span className="fs-4">
                      <i
                        className="bi bi-person-check me-1"
                        style={{ color: "blue" }}
                      >
                        {" "}
                      </i>
                    </span>
                    <h6 className="mb-0">Administration Payments</h6>
                  </div>
                  <div>
                    <a href="/admindash">
                    <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="small text-muted">
                  Total Students: <strong>1245</strong>
                </div>
                <div className="small text-muted">
                  Pending Tuition: <strong>45</strong>
                </div>
                <div className="small text-muted">
                  Due This Month: <strong>$12,750</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;

// <div>
// <Nav />
// <div className="container mt-4">
//   <h1 className="text-center">Welcome to the Dashboard</h1>
//   <p className="text-left fw-bold fs-4">Payment Tracking</p>
//   <div className="row">
//     <div className="col-md-6">
//       <h2>Section 1</h2>
//       <p>This is the first section of the main content.</p>
//     </div>
//     <div className="col-md-6">
//       <h2>Section 2</h2>
//       <p>This is the second section of the main content.</p>
//     </div>
//   </div>
// </div>
// </div>
