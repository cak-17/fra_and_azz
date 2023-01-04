import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import iconLib from '../../utils/fontawesome/icons';
import "./navbar.css";

const logo = "https://react-template-statics.s3.amazonaws.com/img/petSitter/logo_react.png";

export default function TopNavBar(props) {
  const title = props.title;
  const variant = props.variant ? props.variant : 'dark';
  const bg = props.bg ? props.bg : 'light';

  return (
    <Navbar id="navBar" fixed="top" bg={bg} variant={variant} expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          <img src={logo} width={100}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {props.children}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


