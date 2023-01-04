import React from 'react';

import Header from './commons/header/Header';
import Pages from './pages/Pages';
import Footer from './commons/footer/Footer';

const APP_NAME = 'Fra And Jazz';

const LOGO = "https://react-template-statics.s3.amazonaws.com/petSitter/img/logo_trans.png";

const MAIN_IMG = "https://react-template-statics.s3.amazonaws.com/petSitter/img/logo_main.png";

const LINKS = [
  "Home",
  "Services",
  "Rates",
  "About",
  "FAQs",
  "Contacts",
]

export default function App() {
  return (
    <>
      <Header title={APP_NAME} links={LINKS} logo={LOGO} />
      <Pages title={APP_NAME} mainImg={MAIN_IMG} />
      <Footer links={LINKS}/>
    </>
  );
};


