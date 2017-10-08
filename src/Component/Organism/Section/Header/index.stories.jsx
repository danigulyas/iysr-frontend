import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Header from './'

const menuItems = ['landing', 'about'];

storiesOf('Organism/Section/Header', Header)
  .add('default', () => (
    <Header activeMenuItem={ select('activeMenuItem', menuItems, 'landing') } />
  ));
