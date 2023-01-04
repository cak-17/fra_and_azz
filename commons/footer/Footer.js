import React from 'react';

const Footer = () => {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="#" className="nav-link px-2">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 ">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 ">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 ">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 ">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#tools" className="nav-link px-2 ">
            Tools
          </a>
        </li>
      </ul>
      <p className="text-center text-muted">
        Pet Sitter v0.0.1 <a href="https://github.com/cak-17">Cak-17</a> © 2022
        Company, Inc
      </p>
    </footer>
  );
};

export default Footer;
