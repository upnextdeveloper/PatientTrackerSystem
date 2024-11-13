import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import '../SideBarNav/SideBarNav.css';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import PatientPanel from "../PatientPanel/PatientPanel";
import PhysicianPanel from "../PhysicianPanel/PhysicianPanel";
import AppointmentsPanel from "../AppointmentsPanel/AppointmentsPanel";

function SideBarNav() {
    const [show, setShow] = useState(false);

    const closeCanvas = () => setShow(false);
    const openCanvas = () => setShow(true);

    return (
        <Router>
            <div>
                <Button variant="secondary" className="d-sm-none" onClick={openCanvas}>
                    =
                </Button>
                <Offcanvas show={show} onHide={closeCanvas} responsive="sm">
                    <Offcanvas.Header closeButton>
                        <hr />
                        <Offcanvas.Title>Navigation</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <Offcanvas.Body>
                        <Nav defaultActiveKey="/" className="flex-column" id="nav_bar">
                            <Nav.Link className={'nav_item'}>
                                <Link to="/" onClick={closeCanvas}>Dashboard</Link>
                            </Nav.Link>
                            <Nav.Link className={'nav_item'}>
                                <Link to="/patients" onClick={closeCanvas}>Patients</Link>
                            </Nav.Link>
                            <Nav.Link className={'nav_item'}>
                                <Link to="/physicians" onClick={closeCanvas}>Physicians</Link>
                            </Nav.Link>
                            <Nav.Link className={'nav_item'}>
                                <Link to="/appointment" onClick={closeCanvas}>Appointments</Link>
                            </Nav.Link>
                            <Nav.Link className={'nav_item'}>Documents</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/patients" element={<PatientPanel />}></Route>
                <Route path="/physicians" element={<PhysicianPanel />}></Route>
                <Route path="/appointment" element={<AppointmentsPanel />}></Route>
            </Routes>
        </Router>
    )
}

export default SideBarNav;