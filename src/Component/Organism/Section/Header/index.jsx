import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default () => (
  <Navbar dark color="dark" expand="md" fixed="top">
    <NavbarBrand href="#">Is Your Startup</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/">Running</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/about">?</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

