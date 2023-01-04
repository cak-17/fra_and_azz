import React from 'react';
import Container from 'react-bootstrap/Container';

import iconLib from '../../utils/fontawesome/icons';

const logo = iconLib.logo;

const Contacts = (props) => {
  const heroTitle = 'Contacts';
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
      <Container>
        <ul
          id="socialsBadges"
          className="list-unstyled d-flex flex-row align-items-center justify-content-evenly w-100
        "
          style={{ listStyleType: 'none' }}
        >
          <li>
            <a href="" target="_blank">
              <img
                src={
                  'https://react-template-statics.s3.amazonaws.com/petSitter/img/madpaws-logo-lg.png'
                }
                width={70}
                alt="MP"
                className="li-link img-fluid"
              />
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <img
                src={
                  'https://react-template-statics.s3.amazonaws.com/petSitter/img/pawshake-logo-lg.png'
                }
                width={40}
                alt="PS"
                className="li-link img-fluid circle"
              />
            </a>
          </li>
        </ul>
      </Container>
    </Container>
  );
};

export default Contacts;
