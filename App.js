import React from 'react';

import Header from './commons/header/Header';
import Pages from './pages/Pages';
import Footer from './commons/footer/Footer';

const APP_NAME = 'Pet Sitter v0.0.1';

export default function App() {
  return (
    <>
      <Header title={APP_NAME} />
      <Pages title={APP_NAME} />
      <Footer />
    </>
  );
};


