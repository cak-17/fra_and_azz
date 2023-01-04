import React from 'react';
import Nav from 'react-bootstrap/Nav';
import TopNavBar from './Navbar';

import "./navbar.css";

const NavBarLink = props => {
  let result;
  if (props.link != "FAQs") {
    result = (
      <a className="nav-link nav-offcanvas-link" href={`#${props.link}`}>
        <div className="nav-offcanvas-text">
        {`${props.link}`}
        </div>
      </a>
      )
    } else {
      result = (
        <a className="nav-link nav-offcanvas-link" href={`#${props.link}`}>
        <span className="font-2">
          FAQ
        </span>
        s
        </a>
      )
    }
    return result;
    
}

const NavBarLinks = props => {
  return props.links.map(link => <NavBarLink key={`link-${link}`} link={link} />)
}

export default function Header(props) {
  return (
    <TopNavBar logo={props.logo} title={props.title}>
      <Nav className="text-center">
        <NavBarLinks links={props.links} />
      </Nav>
    </TopNavBar>
  );
};


