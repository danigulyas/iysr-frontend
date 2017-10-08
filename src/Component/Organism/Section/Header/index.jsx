import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.PureComponent {
  static propTypes = {
    activeMenuItem: PropTypes.oneOf(['running', 'about'])
  }

  static defaultProps = {
    activeMenuItem: 'landing'
  }

  isActive(pageName) {
    return this.props.activeMenuItem === pageName;
  }

  render () {
    return (
      <Navbar dark color="dark" expand="md" fixed="top">
        <Container>
          <NavbarBrand href="#">Is Your Startup</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink active={this.isActive('landing')} href="/">Running</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={this.isActive('about')} href="/about">?</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
