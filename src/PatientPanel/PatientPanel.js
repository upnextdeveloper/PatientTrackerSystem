import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../PatientPanel/PatientPanel.css";
import { Button } from "react-bootstrap";
import WaitingTime from "../WaitingTime/WaitingTime";

function PatientPanel() {
  const url = "http://localhost:8080/api/patient";
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setPatients(data));
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fillTableData = patients.map((patient) => {
    return (
      <tr>
        <td>{patient.firstName}</td>
        <td>{patient.lastName}</td>
        <td>{patient.dob}</td>
        <td>{patient.phone}</td>
        <td>{patient.email}</td>
        <td>
            <Button variant="secondary">E</Button>
            <Button variant="danger">X</Button>
        </td>
      </tr>
    );
  });

  return (
    <div className={"patient_table"}>
      <br />
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
        <WaitingTime />
        <br/>
          <div>
            <Table striped bordered hover size="sm" >
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of Birth</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{fillTableData}</tbody>
            </Table>
          </div>
          <br/>
        </div>
      )}
    </div>
  );
}

export default PatientPanel;
