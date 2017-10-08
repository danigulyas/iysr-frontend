import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import LandingTemplate from './'

const services = [
  { name: 'Confluence', status: 'OPERATIONAL', lastUpdated: moment() },
  { name: 'Datadog', status: 'OPERATIONAL', lastUpdated: moment() },
  { name: 'GitHub', status: 'OUTAGE', lastUpdated: moment() },
  { name: 'InVision', status: 'OPERATIONAL', lastUpdated: moment() },
  { name: 'Jira', status: 'TEMPORARY_OUTAGE', lastUpdated: moment() },
  { name: 'Mailchimp', status: 'DEGRADED_PERFORMANCE', lastUpdated: moment() },
  { name: 'Trello', status: 'OPERATIONAL', lastUpdated: moment() }
]

storiesOf('Template/LandingTemplate', LandingTemplate)
  .add('interactive', () => (
    <LandingTemplate 
      services={services}
      status={select('status', LandingTemplate.statuses, 'OPERATIONAL')}
    />
  ));
