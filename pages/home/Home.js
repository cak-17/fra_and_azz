import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import iconLib from '../../utils/fontawesome/icons';

import EnquiryForm from './components/forms';
import './Home.css';

const logo = iconLib.commons.logo;
const mainLogo = "https://react-template-statics.s3.amazonaws.com/img/petSitter/logo_react.png";
const Home = (props) => {
  const heroTitle = props.title;
  const subTitle =
    'Culpa flank officia, in hamburger ball tip ullamco lorem boudin tri-tip ut eu irure.';

  return (
    <Container
      id={props.id}
      fluid
      className="d-flex flex-column mt-2 align-items-center justify-content-center vh-100"
    >
      <Row className="mt-5">
        <Col
          lg="8"
          className="text-center d-flex flex-column align-items-center justify-content-center"
        >
          <div>
            <h1 className=" display-1 fw-bold">{heroTitle} {logo}</h1>
            <p className="lead"><i>{subTitle}</i></p>
            {
            //<img src={mainLogo} className="img-fluid" />
            }
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
                      'https://react-template-statics.s3.amazonaws.com/img/petSitter/madpaws-logo-lg.png'
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
                      'https://react-template-statics.s3.amazonaws.com/img/petSitter/pawshake-logo-lg.png'
                    }
                    width={40}
                    alt="PS"
                    className="li-link img-fluid circle"
                  />
                </a>
              </li>
            </ul>
          </Container>
        </Col>
        <Col lg="4">
          <div id="enquiry-box" className="col-lg-6">
            <EnquiryForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
