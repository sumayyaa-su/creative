import React, { useState, useEffect } from 'react';
import { Button, Table, Form, Modal, Card, Row, Col } from 'react-bootstrap';
import { FaUser, FaUserMd, FaTrashAlt, FaPen } from 'react-icons/fa'; // Adding icons
import axios from 'axios';
import axiosInstance from '../../axiosinterceptors';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showDoctorModal, setShowDoctorModal] = useState(false);

  const [newUser, setNewUser] = useState({ userName: '', userEmail: '', userBio: '' });
  const [newDoctor, setNewDoctor] = useState({ doctorName: '', doctorEmail: '', specialty: '', yearsOfExperience: '' });

  useEffect(() => {
    fetchUsers();
    fetchDoctors();
  }, []);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get('http://localhost:8000/user/user');
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch all doctors
  const fetchDoctors = async () => {
    try {
      const response = await axiosInstance.get('http://localhost:8000/doctor/doctor');
      setDoctors(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Create or Update User
  const handleUserSubmit = async () => {
    if (selectedUser) {
      // Update user
      await axiosInstance.put(`http://localhost:8000/user/${selectedUser.userId}`, newUser);
    } else {
      // Create new user
      await axiosInstance.post('http://localhost:8000/user/user/register', newUser);
    }
    setShowUserModal(false);
    fetchUsers();
  };

  // Create or Update Doctor
  const handleDoctorSubmit = async () => {
    if (selectedDoctor) {
      // Update doctor
      await axiosInstance.put(`http://localhost:8000/doctor/${selectedDoctor.doctorId}`, newDoctor);
    } else {
      // Create new doctor
      await axiosInstance.post('http://localhost:8000/doctor', newDoctor);
    }
    setShowDoctorModal(false);
    fetchDoctors();
  };

  // Delete User
  const handleDeleteUser = async (userId) => {
    await axiosInstance.delete(`http://localhost:8000/user/${userId}`);
    fetchUsers();
  };

  // Delete Doctor
  const handleDeleteDoctor = async (doctorId) => {
    await axiosInstance.delete(`http://localhost:8000/doctor/${doctorId}`);
    fetchDoctors();
  };

  return (
    <div>
      <h2 className="text-center mb-5" style={{ color: '#3b3b3b' }}>Admin Dashboard</h2>

      {/* Users Section */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <h3><FaUser /> Users</h3>
            </Col>
            <Col className="text-end">
              <Button variant="primary" onClick={() => setShowUserModal(true)}><FaUser /> Create User</Button>
            </Col>
          </Row>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Bio</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.userId}>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>{user.userBio}</td>
                  <td>
                    <Button variant="info" onClick={() => { setSelectedUser(user); setShowUserModal(true); }}><FaPen /> Edit</Button>{' '}
                    <Button variant="danger" onClick={() => handleDeleteUser(user.userId)}><FaTrashAlt /> Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Doctors Section */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <h3><FaUserMd /> Doctors</h3>
            </Col>
            <Col className="text-end">
              <Button variant="primary" onClick={() => setShowDoctorModal(true)}><FaUserMd /> Create Doctor</Button>
            </Col>
          </Row>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Specialty</th>
                <th>Experience</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map(doctor => (
                <tr key={doctor.doctorId}>
                  <td>{doctor.doctorName}</td>
                  <td>{doctor.doctorEmail}</td>
                  <td>{doctor.specialty}</td>
                  <td>{doctor.yearsOfExperience}</td>
                  <td>
                    <Button variant="info" onClick={() => { setSelectedDoctor(doctor); setShowDoctorModal(true); }}><FaPen /> Edit</Button>{' '}
                    <Button variant="danger" onClick={() => handleDeleteDoctor(doctor.doctorId)}><FaTrashAlt /> Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* User Modal */}
      <Modal show={showUserModal} onHide={() => setShowUserModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedUser ? 'Edit User' : 'Create User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="userName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newUser.userName}
                onChange={(e) => setNewUser({ ...newUser, userName: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="userEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={newUser.userEmail}
                onChange={(e) => setNewUser({ ...newUser, userEmail: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="userBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter bio"
                value={newUser.userBio}
                onChange={(e) => setNewUser({ ...newUser, userBio: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUserModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleUserSubmit}>
            {selectedUser ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Doctor Modal */}
      <Modal show={showDoctorModal} onHide={() => setShowDoctorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDoctor ? 'Edit Doctor' : 'Create Doctor'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="doctorName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newDoctor.doctorName}
                onChange={(e) => setNewDoctor({ ...newDoctor, doctorName: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="doctorEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={newDoctor.doctorEmail}
                onChange={(e) => setNewDoctor({ ...newDoctor, doctorEmail: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="specialty">
              <Form.Label>Specialty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter specialty"
                value={newDoctor.specialty}
                onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="yearsOfExperience">
              <Form.Label>Years of Experience</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter years of experience"
                value={newDoctor.yearsOfExperience}
                onChange={(e) => setNewDoctor({ ...newDoctor, yearsOfExperience: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDoctorModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleDoctorSubmit}>
            {selectedDoctor ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
