import React from "react";
import { faker } from "@faker-js/faker";

function UserDetails({ user }) {
  if (!user || !user.classes || !user.payments) {
    return (
      <div className="container my-5 text-danger">
        User data is not available.
      </div>
    );
  }
  const avatar = faker.image.avatar();

  const total = user.classes.reduce(
    (acc, curr) => acc + parseFloat(curr.price.replace(",", ".")),
    0
  );

  return (
    <div className="container my-5">
      <h4 className="mb-4">← User Details</h4>
      <div className="row g-4">
        {/* Left panel */}
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <div className="text-center">
              <img
                src={avatar}
                alt="Profile"
                className="rounded-circle me-2"
                width="100"
                height="100"
              />
              <h5>{user.name}</h5>
              <p className="text-muted mb-1">{user.email}</p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-light btn-sm"><i class="bi bi-pen"></i></button>
                <button className="btn btn-danger btn-sm"><i class="bi bi-trash2"></i></button>
              </div>
            </div>
            <hr />
            <p>
              <strong>Role:</strong> {user.role}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
            <p>
              <strong>Payment Type:</strong>
            </p>
            <button className="btn btn-outline-dark btn-sm">
              {user.paymentType}
            </button>
          </div>
        </div>

        {/* Right panel */}
        <div className="col-md-8">
          {/* Classes */}
          <div className="card p-3 shadow-sm mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6>Classes</h6>
              <div>
                <button className="btn bgcolor btn-sm me-2">
                  Add salary
                </button>
                <button className="btn btn-secondary btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Modules</th>
                  <th>Number of Hours</th>
                  <th>Schedule</th>
                  <th>Prices</th>
                </tr>
              </thead>
              <tbody>
                {user.classes.map((cls, idx) => (
                  <tr key={idx}>
                    <td>{cls.module}</td>
                    <td>{cls.hours}</td>
                    <td>{cls.schedule}</td>
                    <td>
                      {cls.price}{" "}
                      {cls.selected && <span className="text-warning">✔</span>}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3" className="text-end">
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>{total.toFixed(1).replace(".", ",")} $</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment History */}
          <div className="card p-3 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="text-success">Payment History</h6>
              <div>
                <button className="btn btn-secondary btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {user.payments.map((p, idx) => (
                  <tr key={idx}>
                    <td>{p.date}</td>
                    <td>{p.amount}</td>
                    <td>
                      <span className="badge bg-success text-capitalize">
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
