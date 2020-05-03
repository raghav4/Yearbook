import React from 'react';
import propTypes from 'prop-types';
import Navbar from './private/navbar';
import Footer from './private/footer';

const PrivateLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

PrivateLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default PrivateLayout;
