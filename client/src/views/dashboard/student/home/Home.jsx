import React from 'react';
import { Card, Table, Form } from 'react-bootstrap';
import { Calendar, CreditCard, Download } from 'lucide-react';

// ✅ لازم تكون interface خارج الcomponent

const StudentHome = () => {
  const payments  = [
    {
      period: 'November 2023',
      amount: 1850.0,
      status: 'Paid',
      date: '2023-11-01',
      method: 'Direct Deposit',
      classes: ['Biology 101', 'Chemistry 201'],
    },
    {
      period: 'October 2023',
      amount: 1850.0,
      status: 'Paid',
      date: '2023-10-01',
      method: 'Direct Deposit',
      classes: ['Biology 101', 'Chemistry 201'],
    },
    {
      period: 'September 2023',
      amount: 1750.0,
      status: 'Paid',
      date: '2023-09-01',
      method: 'Direct Deposit',
      classes: ['Biology 101', 'Chemistry 201'],
    },
    {
      period: 'August 2023',
      amount: 1750.0,
      status: 'Paid',
      date: '2023-08-01',
      method: 'Direct Deposit',
      classes: ['Biology 101', 'Chemistry 201'],
    },
    {
      period: 'July 2023',
      amount: 1500.0,
      status: 'Paid',
      date: '2023-07-01',
      method: 'Check',
      classes: ['Biology 101'],
    },
    {
      period: 'December 2023',
      amount: 1850.0,
      status: 'Pending',
      date: '2023-12-01',
      method: 'Direct Deposit',
      classes: ['Biology 101', 'Chemistry 201'],
    },
  ];

  return (
    <div className="container-fluid px-4 py-4 bg-light min-vh-100">
      {/* Payment Summary Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                <CreditCard size={24} className="text-primary" />
              </div>
              <div>
                <div className="text-muted small">Total Paid</div>
                <h3 className="mb-0">$4,800</h3>
                <div className="text-muted small">For the current academic year</div>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="bg-success bg-opacity-10 rounded-circle p-3 me-3">
                <Calendar size={24} className="text-success" />
              </div>
              <div>
                <div className="text-muted small">Next Payment</div>
                <h3 className="mb-0">April 5, 2025</h3>
                <div className="text-muted small">Due in 16 days</div>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card className="h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="bg-danger bg-opacity-10 rounded-circle p-3 me-3">
                <Calendar size={24} className="text-danger" />
              </div>
              <div>
                <div className="text-muted small">Last Payment</div>
                <h3 className="mb-0">Jun 5, 2025</h3>
                <div className="text-muted small">Due in 16 days</div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Payment Details Section */}
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="mb-1">Payment Details</h5>
              <div className="text-muted small">Monthly payment records</div>
            </div>
            <div className="d-flex gap-2">
              <Form.Control
                type="text"
                placeholder="Filter by period..."
                className="w-auto"
              />
              <Form.Select className="w-auto">
                <option>All Statuses</option>
                <option>Paid</option>
                <option>Pending</option>
              </Form.Select>
            </div>
          </div>

          <Table responsive hover>
            <thead>
              <tr>
                <th>Period</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Method</th>
                <th>Classes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index}>
                  <td>{payment.period}</td>
                  <td>${payment.amount.toFixed(2)}</td>
                  <td>
                    <span
                      className={`badge bg-${payment.status === 'Paid' ? 'success' : 'warning'} bg-opacity-10 text-${payment.status === 'Paid' ? 'success' : 'warning'} px-2 py-1`}
                    >
                      {payment.status === 'Paid' ? '✓ ' : '⌛ '}
                      {payment.status}
                    </span>
                  </td>
                  <td>{payment.date}</td>
                  <td>{payment.method}</td>
                  <td>{payment.classes.join(', ')}</td>
                  <td>
                    <button className="btn btn-link btn-sm text-dark p-0">
                      <Download size={18} /> Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentHome;
