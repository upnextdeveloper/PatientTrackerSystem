import React from "react";
import { Nav } from "react-bootstrap";
import '../SideBarNav/SideBarNav.css';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import PatientPanel from "../PatientPanel/PatientPanel";

function SideBarNav() {
    return(
        <Router>
        <div>
        <Nav defaultActiveKey="/" className="flex-column" id="nav_bar">
            <Nav.Link className={'nav_item'}>
                <Link to="/">Dashboard</Link>
            </Nav.Link>
            <Nav.Link className={'nav_item'}>
                <Link to="/patients">Patients</Link>
            </Nav.Link>
            <Nav.Link className={'nav_item'}>Physicians</Nav.Link>
            <Nav.Link className={'nav_item'}>Appointments</Nav.Link>
            <Nav.Link className={'nav_item'}>Documents</Nav.Link>
        </Nav>
        
    </div>
    <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/patients" element={<PatientPanel/>}></Route>
        </Routes>
        </Router>
    )
}

export default SideBarNav;