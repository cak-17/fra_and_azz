import React from 'react';

import Container from 'react-bootstrap/Container';

import Home from './home/Home';
import Services from './services/Services';
import Rates from './rates/Rates';
import FAQs from './faqs/FAQs';
import About from './about/About';
import Contacts from './contacts/Contacts';
//import Tools from './tools/Tools';

import iconLib from '../utils/fontawesome/icons';


const SERVICE_LABELS = [
  { name: 'Pet Walking', value: 0 },
  { name: 'Day Care & Playdates', value: 1 },
  { name: 'Pet Sitting', value: 2 },
  { name: 'Feeding & Welfare Check', value: 3 },
  { name: 'Other Enquiries', value: 4 },
];

const SERVICE_DESCRIPTIONS = [
  `Toilet Breaks, around the block or bigger adventures.`,
  "Worried about your Fur baby home alone all day?\nDo you want to go out for the night?\nWe’d be HAPPY to hang out with them!",
  `Let your pet stay in their safe environment and we’ll come to you. 
  We will even water your plants.`,
  `Visits 1-3 Times Daily 
  Flexible to your needs.`,
];

const icons = iconLib.services;

const SERVICE_ICONS = [
    icons.walk,
    icons.dayCare,
    icons.sitter,
    icons.welfCheck,
];


function Pages(props) {
  const SERVICES = SERVICE_LABELS
    .map(service =>
      {   
        service.description = SERVICE_DESCRIPTIONS[service.value]
        service.icon = SERVICE_ICONS[service.value]
        return service;
      }
    );
  return (
    <Container fluid className="p-0">
      <Home title={props.title} id="Home" services={SERVICES} mainImg={props.mainImg} />

      <Services id="Services" services={SERVICES} />
      <Rates id="Rates" />
      <About id="About" />
      <FAQs id="FAQs" />
      {/*<Tools id="Tools" />*/}
      <Contacts id="Contacts" />
    </Container>
  );
}

export default Pages;
