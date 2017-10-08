import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import moment from 'moment';
import { Container, Row, Col } from 'reactstrap';

import StatusBlock from './'

const services = [
  { name: 'Confluence', status: 'OPERATIONAL', lastUpdated: moment() },
  { name: 'Datadog', status: 'OPERATIONAL', lastUpdated: moment() },
  { name: 'GitHub', status: 'OUTAGE', lastUpdated: moment() },
  { name: 'InVision', status: 'OPERATIONAL', lastUpdated: moment() },
  { name: 'Jira', status: 'TEMPORARY_OUTAGE', lastUpdated: moment() },
  { name: 'Mailchimp', status: 'DEGRADED_PERFORMANCE', lastUpdated: moment() },
  { name: 'Trello', status: 'OPERATIONAL', lastUpdated: moment() }
]

storiesOf('Molecule/Block/StatusBlock', StatusBlock)
  .addDecorator(centered)
  .add('default', () => (
    <StatusBlock 
      status={select('status', StatusBlock.statuses, 'PARTIAL_OUTAGE')}
      showSubtitle={boolean('showSubtitle', true)}
      services={services}
    />
  ))
  .add('size constrained', () => (
    <Container>
      <Row>
        <Col xs="6">
          <StatusBlock
            status={select('status', StatusBlock.statuses, 'PARTIAL_OUTAGE')}
            showSubtitle={boolean('showSubtitle', true)}
            services={services}
          />
        </Col>
      </Row>
    </Container>
  ));
