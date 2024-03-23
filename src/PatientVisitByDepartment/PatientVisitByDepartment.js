import React, { useEffect, useState } from "react";
import '../PatientVisitByDepartment/PatientVisitByDepartment.css';
import { Button, Card } from "react-bootstrap";
import CanvasJSReact from '@canvasjs/react-charts';

function PatientTypeVisitByDepartment() {
    const url = 'http://localhost:8080/api/appointment';
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        try {
            fetch(url).then(response => response.json())
                .then(data => setAppointments(data));
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }, [])

    // we only want scheduled appointments
    function countAppointmentsBySpecialization(specialization) {
        let schedApp = appointments.filter((appointment) => {
            return (appointment.appointmentStatus === 'SCHEDULED'
                && appointment.appointmentSpecialization === specialization);
        })
        return schedApp.length;
    }

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Visited Patients By Specialization"
        },
        axisX: {
            title: "Specialization",
            reversed: true,
        },
        axisY: {
            title: "Patient Visits",
            includeZero: true,
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y: countAppointmentsBySpecialization("CARDIOLOGY"), label: "CARDIOLOGY" },
                { y: countAppointmentsBySpecialization("SURGERY"), label: "SURGERY" },
                { y: countAppointmentsBySpecialization("DERMATOLOGY"), label: "DERMATOLOGY" },
                { y: countAppointmentsBySpecialization("GYNAECOLOGY"), label: "GYNAECOLOGY" },
                { y: countAppointmentsBySpecialization("ORTHOPAEDICS"), label: "ORTHOPAEDICS" },
                { y: countAppointmentsBySpecialization("WELLNESS"), label: "WELLNESS" },
                { y: countAppointmentsBySpecialization("NEUROLOGY"), label: "NEUROLOGY" }
            ]
        }]
    }
    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && (
                <Card style={{ height: '35em' }}>
                    <Card.Header>
                        <h6>Patient Visit By Specialization - Today</h6>
                        <Button variant="info">Refresh</Button>{' '}
                    </Card.Header>
                    <Card.Body>
                        <CanvasJSChart options={options}
                        /* onRef={ref => this.chart = ref} */
                        />
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

export default PatientTypeVisitByDepartment;