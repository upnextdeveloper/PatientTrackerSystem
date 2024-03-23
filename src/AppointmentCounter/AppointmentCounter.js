import React, { useEffect, useState } from "react";
import '../AppointmentCounter/AppointmentCounter.css';
import { Badge, Button, Card } from "react-bootstrap";

function AppointmentCounter() {
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState([]);
    const [appointmentsScheduled, setAppointmentsScheduled] = useState(0)
    const [appointmentsNoShow, setAppointmentsNoShow] = useState(0);
    const [appointmentsCancelled, setAppointmentsCancelled] = useState(0);
    const url = 'http://localhost:8080/api/appointment';

    useEffect(() => {
        try {
            fetch(url).then(response => response.json())
            .then(data => setAppointments(data));
        }catch(error){
            console.log(error.message)
        }finally {
            setLoading(false)
        }
    }, [])

    useEffect(()=> {
        loadAppointmentCounter();
    })

    function countTotalAppointments(){
        return appointments.length;
    }

    function countScheduledAppointments(){
        let schedApp = appointments.filter((appointment)=>{
            return appointment.appointmentStatus === 'SCHEDULED'
        })
        setAppointmentsScheduled(schedApp.length);
    }

    function countNoShowAppointments(){
        let noShows = appointments.filter((appointment) => {
            return appointment.appointmentStatus === 'NO_SHOW'
        })
        setAppointmentsNoShow(noShows.length);
    }

    function countCancelledAppointments(){
        let cancelled = appointments.filter((appointment) => {
            return appointment.appointmentStatus === 'CANCELLED'
        })
        setAppointmentsCancelled(cancelled.length);
    }

    console.log(appointments);

    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && (
                <Card style={{ width: '30rem' }} className={"card"}>
            <Card.Header>
                <h6>Appointments Panel - Today</h6>
                <Button variant="info" onClick={loadAppointmentCounter}>Refresh</Button>{' '}
            </Card.Header>
            <Card.Body>
                <Badge bg="primary" className={"badge_icons"}><span>{countTotalAppointments()} Today</span></Badge>
                <br />
                <Badge bg="success" className={"badge_icons"}><span>{appointmentsScheduled}</span> Scheduled</Badge>
                <Badge bg="danger" className={"badge_icons"}><span>{appointmentsNoShow}</span> No Show</Badge>
                <Badge bg="secondary" className={"badge_icons"}><span>{appointmentsCancelled}</span> Cancelled</Badge>
            </Card.Body>
        </Card>
            )}
        </div>
    )

    function loadAppointmentCounter(){
        countTotalAppointments()
        countScheduledAppointments();
        countNoShowAppointments();
        countCancelledAppointments();
    }
}
export default AppointmentCounter;