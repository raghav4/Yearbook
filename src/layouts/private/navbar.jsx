import React, { Component } from 'react';
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
  MDBDropdown,
  MDBIcon,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from 'mdbreact';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <MDBNavbar color="unique-color-dark" dark expand="md">
          <MDBNavbarBrand>
            <NavLink to="/">
              <strong className="white-text">YearBook</strong>
            </NavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
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
                    {/* <MDBDropdownItem>Something else here</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem> */}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="/profile">
                  Profile
                </MDBNavLink>
              </MDBNavItem>
              {/* <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="/details">
                  User Details
                </MDBNavLink>
              </MDBNavItem> */}
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
      </>
    );
  }
}

export default Navbar;
