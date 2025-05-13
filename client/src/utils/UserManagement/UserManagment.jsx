import React from "react";
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

const UserManagement = ({
  users = [],
  roles = [],
  onSearchChange,
  onRoleFilterChange,
  onAddUserClick,
}) => {
  return (
    <Container id='body' className="mt-4 p-4 bg-light rounded shadow-sm">
      <h5>
        <strong>User Management</strong>
      </h5>
      <Row className="mb-3 align-items-center">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search users..."
            onChange={onSearchChange}
          />
        </Col>
        <Col md="auto">
          <DropdownButton
            id="dropdown-role-filter"
            title="All Roles"
            variant="outline-secondary"
          >
            {roles.map((role, idx) => (
              <Dropdown.Item key={idx} onClick={() => onRoleFilterChange(role)}>
                {role}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
        <Col md="auto">
          <Button id="color" onClick={onAddUserClick}>
            <i className="bi bi-person-plus-fill me-1"></i> Add User
          </Button>
        </Col>
      </Row>

      <Table responsive bordered hover className="bg-white">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Classes</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="text-center">
                  <i className="bi bi-chevron-right"></i>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-muted">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className="text-center text-muted">
        Showing {users.length} {users.length === 1 ? "user" : "users"}
      </div>
    </Container>
  );
};

export default UserManagement;
