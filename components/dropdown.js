import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function BtnGrp() {
  return (
    <ButtonGroup>
      <Button variant="success">1</Button>
      <Button variant="warning">2</Button>

      <DropdownButton
        as={ButtonGroup}
        variant="danger"
        title="Dropdown"
        id="bg-nested-dropdown"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
}

export default BtnGrp;
