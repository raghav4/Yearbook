import React, { useState } from 'react';
import cookie from 'react-cookies';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBLink,
  // MDBFormInline,
  MDBDropdown,
  MDBIcon,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from 'mdbreact';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleCollapse = () => setisOpen(!isOpen);

  return (
    <>
      <div className="menu">
        <MDBNavbar color="unique-color-dark" dark expand="md">
          <MDBNavbarBrand>
            <NavLink to="/">
              <strong className="white-text">YearBook</strong>
            </NavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem active>
                <MDBNavLink to="/write">Writes</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/polls">Polls</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              {/* <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </MDBFormInline>
              </MDBNavItem> */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem>
                      <NavLink to="/details">Update Details</NavLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <NavLink to="/answers">Self Answers</NavLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="/profile">
                  Profile
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink
                  to=""
                  className="waves-effect waves-light"
                  onClick={() => cookie.remove('x-auth-token')}
                >
                  Log Out
                </MDBLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    </>
  );
};

export default Navbar;
