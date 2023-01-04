import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './forms.css';

const EnquiryForm = (props) => {

  const services = props.services;

  return (
    <Form id="EnquiryForm" className="bg-secondary-gr mt-2">
      <Form.Group className="mb-1" controlId="enquiryStartDate">
        <Form.Label>From:</Form.Label>
        <Form.Control className="text-center" type="date"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="enquiryEndDate">
        <Form.Label>To:</Form.Label>
        <Form.Control className="text-center" type="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="sameDayBookingCheck">
        <Form.Check reverse type="checkbox" label="Same Day Booking" />
      </Form.Group>


      <Form.Group>
        <Form.Select className="text-center" aria-label="Select Service">
          <option>Select Service</option>
          {services.map((service) => {
            return <option key={`form-select-${service.value}`}value={service.value}>{service.name}</option>;
          })}
        </Form.Select>
      </Form.Group>
      <div className="d-flex flex-row justify-content-center">
        <div className="my-3">
          <Button variant="warning" className="fw-bold" type="submit">
            Enquire Now!
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default EnquiryForm;
