import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="mt-5">
        <footer className="page-footer font-small unique-color-dark fixed-bottom">
          <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <Link to="/"> Yearbook</Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
