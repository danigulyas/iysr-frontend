import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import Icon from './'

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  padding: 50px;

  border: 1px dotted lightgrey;

  span {
    display: block;
    
    svg {
      width: 100%;
      height: 100px!important;
    }
  }
`

const nameOptions = Icon.names;
const colorOptions = Icon.colors;

storiesOf('Atom/Text/Icon', Icon)
  .addDecorator(centered)
  .add('interactive', () => (
    <Wrapper>
      <Icon
        name={ select('name', Icon.names, 'heart') }
        color={ select('color', Icon.colors, 'red') }
      />
    </Wrapper>
  ));
