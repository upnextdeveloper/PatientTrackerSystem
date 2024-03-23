import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import '../PatientVisitByGender/PatientVisitByGender.css';
import CanvasJSReact from "@canvasjs/react-charts";

function PatientVisitByGender() {
    const url = 'http://localhost:8080/api/appointment';
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState([]);
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
    function countAppointmentsBySpecializationGender(specialization, gender) {
        let appointsBySpec = appointments.filter((appointment) => {
            return (appointment.appointmentStatus === 'SCHEDULED'
                && appointment.appointmentSpecialization === specialization);
        })
        let appointsByGender = appointsBySpec.filter((app) => {
            return (app.patient.gender === gender);
        })
        return Math.floor((appointsByGender.length / appointsBySpec.length) * 100);
    }

    const options = {
        title: {
            text: "Hospital Visits % by Women & Men"
        },
        toolTip: {
            shared: true
        },
        legend: {
            verticalAlign: "top"
        },
        axisY: {
            suffix: "%"
        },
        data: [{
            type: "stackedBar100",
            color: "pink",
            name: "Women",
            showInLegend: true,
            indexLabel: "{y}",
            indexLabelFontColor: "white",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { y: countAppointmentsBySpecializationGender("CARDIOLOGY", "F"), label: "CARDIOLOGY" },
                { y: countAppointmentsBySpecializationGender("SURGERY", "F"), label: "SURGERY" },
                { y: countAppointmentsBySpecializationGender("DERMATOLOGY", "F"), label: "DERMATOLOGY" },
                { y: countAppointmentsBySpecializationGender("GYNAECOLOGY", "F"), label: "GYNAECOLOGY" },
                { y: countAppointmentsBySpecializationGender("ORTHOPAEDICS", "F"), label: "ORTHOPAEDICS" },
                { y: countAppointmentsBySpecializationGender("WELLNESS", "F"), label: "WELLNESS" },
                { y: countAppointmentsBySpecializationGender("NEUROLOGY", "F"), label: "NEUROLOGY" }
            ]
        }, {
            type: "stackedBar100",
            color: "blue",
            name: "Men",
            showInLegend: true,
            indexLabel: "{y}",
            indexLabelFontColor: "white",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { y: countAppointmentsBySpecializationGender("CARDIOLOGY", "M"), label: "CARDIOLOGY" },
                { y: countAppointmentsBySpecializationGender("SURGERY", "M"), label: "SURGERY" },
                { y: countAppointmentsBySpecializationGender("DERMATOLOGY", "M"), label: "DERMATOLOGY" },
                { y: countAppointmentsBySpecializationGender("GYNAECOLOGY", "M"), label: "GYNAECOLOGY" },
                { y: countAppointmentsBySpecializationGender("ORTHOPAEDICS", "M"), label: "ORTHOPAEDICS" },
                { y: countAppointmentsBySpecializationGender("WELLNESS", "M"), label: "WELLNESS" },
                { y: countAppointmentsBySpecializationGender("NEUROLOGY", "M"), label: "NEUROLOGY" }
            ]
        }]
    }
    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && (
                <Card style={{ height: '35em' }}>
                    <Card.Header>
                        <h6>Patient Visitation By Gender - Today</h6>
                        <Button variant="info">Refresh</Button>{' '}
                    </Card.Header>
                    <Card.Body>
                        <CanvasJSChart options={options} />
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

export default PatientVisitByGender;