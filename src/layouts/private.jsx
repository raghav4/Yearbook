import React from 'react';
import propTypes from 'prop-types';
import { Navbar, Footer } from './private/user';

const PrivateLayout = ({ children }) => {
  console.log('consoling children from private layouts', children);
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
