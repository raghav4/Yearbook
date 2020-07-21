import React, { useState, useContext } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBIcon,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from 'mdbreact';
import { NavLink } from 'react-router-dom';
import { PrivateContext } from '../../../contexts';

const Navbar = () => {
  const value = useContext(PrivateContext);
  // const { location } = NavContext;
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
              <MDBNavItem>
                <MDBNavLink to="/write">Writes</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/polls">Polls</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
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
                    <MDBDropdownItem>
                      <NavLink to="/reset">Reset Password</NavLink>
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
                <MDBNavLink className="waves-effect waves-light" to="/logout">
                  Log Out
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    </>
  );
};

export default Navbar;
