import React from 'react';
import Navbar from './private/navbar';
import Footer from './private/footer';

const PrivateLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default PrivateLayout;
