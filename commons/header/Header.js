import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TopNavBar from './Navbar';


export default function Header(props) {
  return (
    <TopNavBar variant="light" title={props.title}>
      <Nav className="text-center">
        <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="#Services">Services</Nav.Link>
        <Nav.Link href="#Pricings">Pricing</Nav.Link>
        <Nav.Link href="#FAQs">FAQs</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>

        <NavDropdown title="Tools" id="Tools">
          <NavDropdown.Item href="#rfc">RawFoodCalculator</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#Contacts">Contacts</Nav.Link>
      </Nav>
    </TopNavBar>
  );
};


