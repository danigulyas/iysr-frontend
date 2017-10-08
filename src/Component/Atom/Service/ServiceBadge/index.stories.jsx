import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import ServiceBadge from './'

storiesOf('Atom/Service/ServiceBadge', ServiceBadge)
  .addDecorator(centered)
  .add('interactive', () => (
      <ServiceBadge
        name={ text('name', 'Trello') }
        status={ select('status', ServiceBadge.statuses, 'OPERATIONAL') }
        onClick={ action('onClick') }
      />
  ));
