import React from 'react';
import propTypes from 'prop-types';
import { Navbar, Footer } from './private/user';

const PrivateLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
};

PrivateLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default PrivateLayout;
