import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small stylish-color-dark fixed-bottom">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <Link to="/"> Yearbook</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
