import React from 'react';
import Container from 'react-bootstrap/Container';

import iconLib from '../../utils/fontawesome/icons';

const logo = iconLib.commons.logo;
const icons = iconLib.services;

const Services = (props) => {
  const heroTitle = 'Pet Sitter v0.0.1';
  const subTitle =
    'Culpa flank officia, in hamburger ball tip ullamco lorem boudin tri-tip ut eu irure.';

  return (
    <Container fluid>
      <span class="anchor" id={props.id}></span>
      <h2 class="display-2 pb-2 fw-bold text-center">Services</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            {icons.sitter}
          </div>
          <div>
            <h2>Pet Siting</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#petSittingMore" class="btn btn-success">
              Read More
            </a>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            {icons.dayCare}
          </div>
          <div>
            <h2>House Visit</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#houseVisitMore" class="btn btn-success">
              Read More
            </a>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            {icons.walk}
          </div>
          <div>
            <h2>Pet Walking</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#petWalkingMore" class="btn btn-success">
              Read More
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
