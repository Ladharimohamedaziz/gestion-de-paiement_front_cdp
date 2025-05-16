import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Badge,
  ProgressBar,
} from "react-bootstrap";
import { BsCreditCard2Front, BsCalendar2Date } from "react-icons/bs";

// Step Progress Component with 9 steps
const StepProgressBootstrap = ({ currentStep }) => {
  // Create array of 9 steps
  const steps = Array.from({ length: 9 }, (_, i) => `Month ${i + 1}`);

  return (
    <div className="d-flex justify-content-center align-items-center mb-4 flex-wrap">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <div key={index} className="d-flex align-items-center me-3 mb-2">
            {/* Step Circle */}
            <div
              className={`rounded-circle  d-flex justify-content-center align-items-center ${
                isCompleted
                  ? "bgcolor text-white"
                  : isActive
                  ? "gold border  "
                  : "border text-muted "
              }`}
              style={{
                width: "32px",
                height: "32px",
                margin: "5px",
                // backgroundColor:"#c0a262",
                color: "#ff",
                fontWeight: "bold",
              }}
            >
              {stepNumber}
            </div>

            {/* Step Label */}
            <div
              className={`m-2  ${
                isCompleted || isActive ? "text-dark" : "text-muted"
              }`}
            >
              {step}
            </div>

            {/* Line Between Steps */}
            {index < steps.length - 1 && (
              <div
                className="me-3"
                style={{
                  height: "2px",
                  width: "60px",
                  backgroundColor: isCompleted ? "#ccc" : "#ccc",
                  alignSelf: "center",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

function StudentHome() {
  const paymentHistory = [
    {
      id: "INV-2025-01",
      amount: 1200,
      status: "Paid",
      due: "2025-01-05",
      paid: "2025-01-05",
    },
    {
      id: "INV-2025-02",
      amount: 1200,
      status: "Paid",
      due: "2025-02-05",
      paid: "2025-02-04",
    },
    {
      id: "INV-2025-03",
      amount: 1200,
      status: "Paid",
      due: "2025-03-05",
      paid: "2025-03-03",
    },
  ];

  const dashboardStats = {
    totalPaid: 4800,
    nextPayment: { amount: 1200, due: "2025-04-05", daysLeft: 16 },
    lastPayment: { date: "2025-06-05" },
    method: "Semester",
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Student Dashboard</h1>
      <Row className="mb-4">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="bg-primary-subtle p-3 rounded-circle me-3">
                <BsCreditCard2Front className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-muted mb-1">Total Paid</p>
                <h4 className="mb-0">${dashboardStats.totalPaid}</h4>
                <small className="text-muted">Current Academic Year</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="bg-success-subtle p-3 rounded-circle me-3">
                <BsCalendar2Date className="text-success" size={24} />
              </div>
              <div>
                <p className="text-muted mb-1">Next Payment</p>
                <h4 className="mb-0">{dashboardStats.nextPayment.due}</h4>
                <small className="text-muted">
                  Due in {dashboardStats.nextPayment.daysLeft} days
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <strong>Payment Method:</strong>
              <Button variant="secondary" size="sm" className="mx-2" disabled>
                {dashboardStats.method}
              </Button>
              <Button variant="outline-secondary" size="sm">
                Monthly
              </Button>
            </div>
          </div>

          {/* 9-step progress component */}
          <StepProgressBootstrap currentStep={3} />

          <div className="bg-light p-3 rounded">
            <h5>Upcoming Payment</h5>
            <p>
              Your next payment of{" "}
              <strong>${dashboardStats.nextPayment.amount}</strong> is due on{" "}
              <strong>{dashboardStats.nextPayment.due}</strong>.
            </p>
            <ProgressBar
              now={100 - (dashboardStats.nextPayment.daysLeft / 30) * 100}
              label={`${dashboardStats.nextPayment.daysLeft} days`}
              className="mb-2"
            />
            <small className="text-danger">
              For any issues, please contact the administration.
            </small>
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between mb-3">
            <h5>Payment History</h5>
            <div>
              <Button variant="outline-secondary" size="sm" className="me-2">
                This Year
              </Button>
              <Button variant="outline-primary" size="sm">
                Export
              </Button>
            </div>
          </div>

          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Payment Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((p, i) => (
                <tr key={i}>
                  <td>{p.id}</td>
                  <td>${p.amount.toFixed(2)}</td>
                  <td>
                    <Badge bg="success">{p.status}</Badge>
                  </td>
                  <td>{p.due}</td>
                  <td>{p.paid}</td>
                  <td>
                    <Button variant="link" size="sm">
                      View Receipt
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default StudentHome;
