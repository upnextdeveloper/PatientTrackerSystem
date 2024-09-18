import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "../PhysicianPanel/PhysicianPanel.css";

function PhysicianPanel() {
  const url = "http://localhost:8080/api/physician";
  const [loading, setLoading] = useState(true);
  const [physicians, setPhysicians] = useState([]);

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setPhysicians(data));
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  function getDateFormat(date) {
    return new Date(date).toLocaleDateString('en-US')
  }

  const fillTableData = physicians.map((physician) => {
    return (
      <tr>
        <td>{physician.physicianFirstName}</td>
        <td>{physician.physicianLastName}</td>
        <td>{physician.speciality}</td>
        <td>{physician.speciality2}</td>
        <td>{getDateFormat(physician.dateLicensed)}</td>
        <td>{getDateFormat(physician.licenseExpDate)}</td>
        <td>
          <Button variant="secondary">E</Button>
          <Button variant="danger">X</Button>
        </td>
      </tr>
    );
  });

  return (
    <div className={"physician_table"}>
      <br />
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Speciality</th>
                <th>Speciality 2</th>
                <th>Date Licensed</th>
                <th>License Expiry Date</th>
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

export default PhysicianPanel;
