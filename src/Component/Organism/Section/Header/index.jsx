import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => (
  <Menu fixed="top">
    <Menu.Item header>Is Your Startup Running?</Menu.Item>

    <Menu.Item link>Home</Menu.Item>
    <Menu.Item link>About</Menu.Item>
  </Menu>
);

export default Header;
