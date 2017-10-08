import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Icon from './'

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 5% auto;
  padding: 50px 50px;

  justify-content: center;
  align-items: center;

  border: 1px dotted lightgrey;

  span {
    display: block;
    width: 100%;
    height: 100%;
    align-self: center;
    margin: auto;
    
    svg {
      width: 100%;
      height: 100px!important;
    }
  }
`

const nameOptions = Icon.names;
const colorOptions = Icon.colors;

storiesOf('Atom/Text/Icon', Icon)
  .add('interactive', () => (
    <Wrapper>
      <Icon
        name={ select('name', Icon.names, 'heart') }
        color={ select('color', Icon.colors, 'red') }
      />
    </Wrapper>
  ));
