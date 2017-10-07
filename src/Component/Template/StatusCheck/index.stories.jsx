import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Footer from './';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Pusher = styled.div`
  flex: 1;
`;

storiesOf('Organism/Section/Footer', Footer)
  .addDecorator(story => (<Wrapper><Pusher />{ story() }</Wrapper>))
  .add('default', () => (<Footer />));
