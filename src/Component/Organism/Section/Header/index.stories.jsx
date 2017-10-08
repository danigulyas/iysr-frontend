import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './'

storiesOf('Organism/Section/Header', Header)
  .add('default', () => (<Header />));
