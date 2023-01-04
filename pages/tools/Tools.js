import React from 'react';
import Container from 'react-bootstrap/Container';
import RFC from './rfc/rfc';

const Tools = (props) => {
  return (
    <Container
      id={props.id}
      className="d-flex justify-content-center align-items-center"
    >
      <RFC />
    </Container>
  );
};

export default Tools;
