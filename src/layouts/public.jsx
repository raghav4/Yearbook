import React from 'react';
import Footer from './public/footer';

const PublicLayout = (props) => {
  return (
    <>
      {props.children}
      <Footer />
    </>
  );
};

export default PublicLayout;
