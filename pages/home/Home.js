import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import iconLib from '../../utils/fontawesome/icons';

import EnquiryForm from './components/forms';
import './Home.css';

const logo = iconLib.commons.logo;

const Home = (props) => {
  const mainImg = props.mainImg;
  const heroTitle = props.title;
  const subTitle = 'Culpa flank officia, in hamburger ball tip ullamco lorem boudin tri-tip ut eu irure.';

  return (
    <Container
      id={props.id}
      className="d-flex flex-column mt-2 align-items-center justify-content-center">
      <span className="anchor" id={props.id}></span>
      <Row className="mt-5">
        <Col
          lg="8"
          className="text-center d-flex flex-column align-items-center justify-content-center">
        <div>
          <img src={mainImg} className="img-fluid" />
          <p className="lead"><i>{subTitle}</i></p>
        </div>
        </Col>
        <Col lg="4" id="enquiryBox">
            <EnquiryForm services={props.services}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
