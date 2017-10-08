import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IntroductionJumbotron from './';

storiesOf('Organism/Section/IntroductionJumbotron', IntroductionJumbotron)
  .add('default', () => (<IntroductionJumbotron onClick={action('onClick')} />));
