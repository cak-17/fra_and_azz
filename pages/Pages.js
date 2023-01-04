import React from 'react';

import Container from 'react-bootstrap/Container';

import Home from './home/Home';
import Services from './services/Services';
import Pricings from './pricings/Pricings';
import FAQs from './faqs/FAQs';
import About from './about/About';
import Contacts from './contacts/Contacts';
import Tools from './tools/Tools';

const Pages = (props) => {
  return (
    <Container fluid className="p-0">
      <Home title={props.title} id="Home" />
      <Services id="Services" />
      <Pricings id="Pricings" />
      <FAQs id="FAQs" />
      <About id="About" />
      <Tools id="Tools" />
      <Contacts id="Contacts" />
    </Container>
  );
};

export default Pages;
