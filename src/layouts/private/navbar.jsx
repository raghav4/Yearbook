import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBLink,
} from 'mdbreact';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <MDBNavbar color="special-color-dark" dark expand="md">
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
                <MDBNavLink className="waves-effect waves-light" to="/profile">
                  Profile
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="/details">
                  User Details
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink
                  className="waves-effect waves-light"
                  onClick={() => delete localStorage.token}
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
