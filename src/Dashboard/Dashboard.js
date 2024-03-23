import React from "react";
import AppointmentCounter from "../AppointmentCounter/AppointmentCounter";
import CommonSymptoms from "../CommonSymptoms/CommonSymptoms";
import '../Dashboard/Dashboard.css';
import {Col, Row } from "react-bootstrap";
import WaitingTime from "../WaitingTime/WaitingTime";
import PatientTypeVisitByDepartment from "../PatientVisitByDepartment/PatientVisitByDepartment";
import PatientsCheckInTime from "../PatientsCheckInTime/PatientsCheckInTime";
import CustomerSatisfaction from "../CustomerSatisfaction/CustomerSatisfaction";
import PatientVisitByGender from "../PatientVisitByGender/PatientVisitByGender";

function Dashboard() {
    return (
        <div>
            <Row>
                <Col>
                    <AppointmentCounter />
                    <PatientTypeVisitByDepartment/>
                    <CustomerSatisfaction />
                </Col>
                <Col>
                    <CommonSymptoms />
                    <PatientsCheckInTime/>
                    <PatientVisitByGender />
                </Col>
                <Col>
                    <WaitingTime />
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;