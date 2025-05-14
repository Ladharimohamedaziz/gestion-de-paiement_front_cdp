import React, { useState } from 'react';
import {
  Table,
  Nav,
  ButtonGroup,
  Button,
  Badge,
  Row,
  Col,
  Dropdown,
} from 'react-bootstrap';
import {
  Calendar,
  ChevronDown,
  Filter,
  CheckCircle,
  Circle,
  XCircle,
  Mail,
  Printer,
} from 'lucide-react';

function StudentManagement() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeRole, setActiveRole] = useState('student');

  const payments = [
    { id: 1, name: 'Sadok Acacha', amount: 19623.0, paymentMethod: 'semester', paymentType: 'check', creationDate: 'Mar 23, 2022, 13:00 PM', status: 'succeeded' },
    { id: 2, name: 'Sadok Acacha1', amount: 19623.0, paymentMethod: 'annual', paymentType: 'cash', creationDate: 'Mar 23, 2022, 13:00 PM', status: 'pending' },
    { id: 3, name: 'Sadok Acacha2', amount: 19623.0, paymentMethod: 'trimester', paymentType: 'check', creationDate: 'Mar 23, 2022, 13:00 PM', status: 'declined' },
    { id: 4, name: 'Sadok Acacha3', amount: 19623.0, paymentMethod: 'semester', paymentType: 'cash', creationDate: 'Mar 23, 2022, 13:00 PM', status: 'succeeded' },
  ];

  const filteredPayments = payments.filter((payment) => {
    if (activeTab === 'all') return true;
    return payment.status === activeTab;
  });

  const getStatusDetails = (status) => {
    switch (status) {
      case 'succeeded':
        return { variant: 'success', icon: <CheckCircle size={16} className="me-1" />, text: 'Succeeded' };
      case 'pending':
        return { variant: 'warning', icon: <Circle size={16} className="me-1" />, text: 'Pending' };
      case 'declined':
        return { variant: 'danger', icon: <XCircle size={16} className="me-1" />, text: 'Declined' };
      case 'refunded':
        return { variant: 'info', icon: <Circle size={16} className="me-1" />, text: 'Refunded' };
      default:
        return { variant: 'secondary', icon: <Circle size={16} className="me-1" />, text: 'Unknown' };
    }
  };

  const handleEmail = (id) => {
    console.log(`Send email for payment ${id}`);
  };

  const handlePrint = (id) => {
    console.log(`Print payment ${id}`);
  };

  return (
    <div className="container py-4">
          <div className="text-center mb-3">
        <ButtonGroup>
          {['admin', 'teacher', 'student'].map((role) => (
            <Button 
            id="color"
              key={role}
              variant={activeRole === role ? 'primary' : 'outline-primary'}
              onClick={() => setActiveRole(role)}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <h3 className="textcolor mb-4 text-center fw-semibold">
        Student Payments Overview
      </h3>

      {/* Tabs */}
      <Nav variant="pills" className="justify-content-center mb-4">
        {['all', 'succeeded', 'pending', 'declined', 'refunded'].map((tab) => (
          <Nav.Item key={tab}id="navcolor">
            <Nav.Link
            id="navcolor"
              eventKey={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className="text-capitalize"
            >
              {tab} Payments
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Filters */}
      <Row className="g-3 mb-4">
        <Col md={4}>
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary" className="w-100 d-flex align-items-center justify-content-between">
              <span><Calendar size={16} className="me-2" />Date Range</span>
              <ChevronDown size={16} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Today</Dropdown.Item>
              <Dropdown.Item>Yesterday</Dropdown.Item>
              <Dropdown.Item>Last 7 Days</Dropdown.Item>
              <Dropdown.Item>Last 30 Days</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={4}>
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary" className="w-100 d-flex align-items-center justify-content-between">
              <span><Filter size={16} className="me-2" />Status</span>
              <ChevronDown size={16} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>All</Dropdown.Item>
              <Dropdown.Item>Succeeded</Dropdown.Item>
              <Dropdown.Item>Pending</Dropdown.Item>
              <Dropdown.Item>Declined</Dropdown.Item>
              <Dropdown.Item>Refunded</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={4}>
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary" className="w-100 d-flex align-items-center justify-content-between">
              <span><Filter size={16} className="me-2" />Payment Method</span>
              <ChevronDown size={16} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>All</Dropdown.Item>
              <Dropdown.Item>Cash</Dropdown.Item>
              <Dropdown.Item>Check</Dropdown.Item>
              <Dropdown.Item>Bank Transfer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      {/* Role switcher */}
  
      {/* Table */}
      <div className="table-responsive shadow-sm rounded bg-white p-3">
        <Table hover>
          <thead className="table-light">
            <tr className="text-uppercase small text-muted">
              <th>Name</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Date</th>
              <th>Status</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment) => {
              const statusDetails = getStatusDetails(payment.status);
              return (
                <tr key={payment.id}>
                  <td>{payment.name}</td>
                  <td>${payment.amount.toFixed(2)}</td>
                  <td>
                    <div>{payment.paymentMethod}</div>
                    <div className="text-muted small">{payment.paymentType}</div>
                  </td>
                  <td>{payment.creationDate}</td>
                  <td>
                    <Badge bg={statusDetails.variant} className="d-inline-flex align-items-center">
                      {statusDetails.icon}
                      {statusDetails.text}
                    </Badge>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <Button variant="outline-danger" size="sm" onClick={() => handleEmail(payment.id)}>
                        <Mail size={16} />
                      </Button>
                      <Button variant="outline-primary" size="sm" onClick={() => handlePrint(payment.id)}>
                        <Printer size={16} />
                      </Button>
                    </div>
                  </td>
                  <td>
                    <Button variant="outline-secondary" size="sm">
                      <Printer size={16} />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default StudentManagement;
