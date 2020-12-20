import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';
import { NavLink } from 'react-router-dom';

const AdminNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MDBNavbar color="navbar-dark default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">YB Admin</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline" />
                  Add
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <NavLink to="/polls/manage">Admin</NavLink>
                  <NavLink to="/add-user">User</NavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline" />
                  Questions
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/users/add">Self</MDBDropdownItem>
                  <MDBDropdownItem href="/users/remove">Polls</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline" />
                  Polls
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  {/* <MDBDropdownItem href="/polls/manage">Manage</MDBDropdownItem> */}
                  <MDBDropdownItem href="#!">Stats</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </>
  );
};

export default AdminNavBar;
