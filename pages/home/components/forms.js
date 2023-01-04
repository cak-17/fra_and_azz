import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './forms.css';

const SERVICES = [
  { name: 'Pet Sitting', value: 0 },
  { name: 'Pet Day Care', value: 1 },
  { name: 'Pet Walking', value: 2 },
  { name: 'Other Enquiries', value: 3 },
];

const EnquiryForm = () => {
  const today = Date.now();
  // add tomorrow
  return (
    <Form id="EnquiryForm" className="bg-green-gr mt-2">
      <Form.Group className="mb-1" controlId="enquiryStartDate">
        <Form.Label>From:</Form.Label>
        <Form.Control className="text-center" type="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="enquiryEndDate">
        <Form.Label>To:</Form.Label>
        <Form.Control className="text-center" type="date" />
      </Form.Group>

      <Form.Group>
        <Form.Select aria-label="Select Service">
          <option>Select Service</option>
          {SERVICES.map((service) => {
            return <option value={service.value}>{service.name}</option>;
          })}
        </Form.Select>
      </Form.Group>
      <div className="d-flex flex-row justify-content-center">
        <div className="my-3">
          <Button variant="warning" type="submit">
            Enquiry Now!
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default EnquiryForm;
