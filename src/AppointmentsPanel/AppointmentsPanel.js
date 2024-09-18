import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "../AppointmentsPanel/AppointmentsPanel.css";

function AppointmentsPanel() {
  const url = "http://localhost:8080/api/appointment";
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setAppointments(data));
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fillTableData = appointments.map((appointment) => {
    const patient = appointment.patient;
    return (
      <tr>
        <td>
          {patient?.firstName + " " + patient?.lastName}
        </td>
        <td>
          {new Date(appointment.appointmentDateTime).toLocaleDateString(
            "en-US"
          )}
        </td>
        <td>{appointment.appointmentSpecialization}</td>
        <td>{appointment.appointmentStatus}</td>
        <td>
            <Button variant="secondary">E</Button>
            <Button variant="danger">X</Button>
        </td>
      </tr>
    );
  });

  return (
    <div className={"appointment_table"}>
      <br />
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
            <h1>Appointments</h1>
            <br/>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Appointment Date & Time</th>
                <th>Appointment Reason</th>
                <th>Appointment Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{fillTableData}</tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default AppointmentsPanel;
