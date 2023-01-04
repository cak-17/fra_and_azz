import React from 'react';
import Container from 'react-bootstrap/Container';

const Service = (props) => {
  const icon = props.icon;
  const title = props.name;
  const description = props.description;
  const link_to = props.link_to;

  return (
    <div id={props.id} className="col d-flex align-items-start">
    <div className="icon-square text-dark flex-shrink-0 me-3">
      {icon}
    </div>
    <div>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <a href={link_to} className="btn btn-warning">
        Read More
      </a>
    </div>
  </div>
  )
}

const ServicesTable = (props) => {
  const services = props.services;
  return services
    .filter(service => service.value != services.length - 1)
    .map(service => {
    return <Service 
      key={`service-row-${service.value}`}
      id={`service-row-${service.value}`}
      icon={service.icon}
      name={service.name}
      description={service.description}
      link_to={service.link_to}  
    /> 
  });
}

const Services = (props) => {
  const title = "Services";
  return (
    <Container id={props.id} fluid>
      <span className="anchor" id={props.id}></span>
      <h2 className="display-2 pb-2 fw-bold text-center">{title}</h2>
      
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <ServicesTable services={props.services} />
      </div>
    </Container>
  );
};

export default Services;
