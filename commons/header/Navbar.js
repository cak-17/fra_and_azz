import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "./navbar.css";

// Style NavBar

export default function TopNavBar(props) {

  const variant = props.variant ? props.variant : 'dark';

  return (
    <Navbar id="navBar" variant={variant} fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#Home" className="fw-bold text-dark-1">
          <img src={props.logo} width={100} alt="Fra And Jazz"/>
        </Navbar.Brand>
        <Navbar.Toggle className="bg-secondary-gr" aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start"
        className="justify-content-end bg-offcanvas-gr bg-transparent mask-75"
        >
              <Offcanvas.Header closeButton />
              <Offcanvas.Body className="d-flex align-items-center">
                <Nav className="justify-content-end flex-grow-1 fs-2 font-1 pe-3">
                  {props.children}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

      </Container>
    </Navbar>
  );
};


