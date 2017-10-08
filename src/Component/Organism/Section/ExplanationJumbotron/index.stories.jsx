import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ExplanationJumbotron from './';

storiesOf('Organism/Section/ExplanationJumbotron', ExplanationJumbotron)
  .add('default', () => (<ExplanationJumbotron />));
