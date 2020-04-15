import React from 'react';
import Navbar from '../components/user/navbar';

const PrivateLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default PrivateLayout;
