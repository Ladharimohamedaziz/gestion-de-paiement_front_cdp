import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Table,
  Form,
  Button,
  Dropdown,
  DropdownButton,
  Container,
  Row,
  Col,
} from "react-bootstrap";
// import "../../App.css";
// import "./style.css";
function AddUser() {
  const [department, setDepartment] = useState("");
  const [adminRole, setAdminRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Department:", department);
    console.log("Admin Role:", adminRole);
    // هنا يمكنك إرسال البيانات إلى الخادم أو أي معالجة أخرى
  };
  return (
    <div className="background min-vh-100 d-flex justify-content-center align-items-center">
      <Container
        className="p-4 mt-5 bg-light rounded"
        style={{ maxWidth: "500px" }}
      >
        <h4 className="mb-4">Add New Admin</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="adminRole">
            <Form.Label>Admin Role</Form.Label>
            <Form.Select
              value={adminRole}
              onChange={(e) => setAdminRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Moderator">Moderator</option>
            </Form.Select>
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Link to="/UserManagement">
              <Button variant="secondary" type="button">
                Back
              </Button>
            </Link>
            <Button variant="warning" id="color" type="submit">
              Add User
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default AddUser;

