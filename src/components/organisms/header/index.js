import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './header.scss'
import { Link } from "react-router-dom";

class index extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" className="header-web">
                    <Navbar.Brand as={Link} to="/">ADMIN PANEL ODP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="ml-5">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/tugas-kuis">Tugas & Kuis</Nav.Link>
                            <Nav.Link as={Link} to="/materi-pembelajaran">Materi Pembelajaran</Nav.Link>
                            <Nav.Link as={Link} to="/report">Report</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Syafrie Syamsudin">
                                <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default index;
