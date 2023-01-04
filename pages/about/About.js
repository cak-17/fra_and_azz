import React from 'react';
import Container from 'react-bootstrap/Container';

import iconLib from '../../utils/fontawesome/icons';

const logo = iconLib.logo;

const About = (props) => {
  const heroTitle = 'About Us';
  const subTitle =
    'Culpa flank officia, in hamburger ball tip ullamco lorem boudin tri-tip ut eu irure.';

  return (
    <Container
      id={props.id}
      className="d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <div className="text-center">
        <h1 className="fw-bold">
          {heroTitle} {logo}
        </h1>
        <p className="lead">
          <i>{subTitle}</i>
        </p>
      </div>
    </Container>
  );
};

export default About;
