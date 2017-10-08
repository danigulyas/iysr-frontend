import React from 'react';
import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import { uniqueId } from 'lodash';
import { Badge, UncontrolledTooltip } from 'reactstrap';

import Icon from 'Component/Atom/Text/Icon';

import './service-badge.css';

export default class ServiceBadge extends React.PureComponent {
  static statuses = ['OPERATIONAL', 'DEGRADED_PERFORMANCE', 'PARTIAL_OUTAGE', 'OUTAGE']

  static propTypes = {
    // Name of the service.
    name: PropTypes.string.isRequired,

    // The current status of the service.
    status: PropTypes.oneOf(ServiceBadge.statuses).isRequired,

    // The date-time when the service was last update, will show in a popover if hovered over.
    lastUpdated: MomentPropTypes.momentObj.isRequired
  }

  static defaultProps = {
    name: '',
    status: 'OPERATIONAL',
    lastUpdated: moment('1997'),
    onClick: () => {}
  }

  // This is needed for the popover, references use ID, it has to unique
  // in order to guarantee multiple instances working well with each other.
  uniqueId = uniqueId(`service-badge-${this.props.name.toLowerCase()}-`);

  getTooltipText() {
    switch (this.props.status) {
      case 'OPERATIONAL': return 'This service seem to run fine.';
      case 'DEGRADED_PERFORMANCE': return 'This service is facing degraded performance.';
      case 'PARTIAL_OUTAGE': return 'This service is having partial outages!';
      case 'OUTAGE': return 'This service is facing an outage!';
      default: return 'This service seem to run fine.';
    }
  }

  getStatusIconColor() {
    switch (this.props.status) {
      case 'OPERATIONAL': return 'green';
      case 'DEGRADED_PERFORMANCE': return 'orange';
      case 'PARTIAL_OUTAGE': return 'red';
      case 'OUTAGE': return 'red';
      default: return 'green';
    }
  }

  render() {
    return [
      (
        <Badge key="badge" id={this.uniqueId} className="iysr-service-badge" color="dark">
          <Icon name="primitive-dot" color={this.getStatusIconColor()} />
          <span className="service-name">{ this.props.name }</span>
        </Badge>
      ),
      (
        <UncontrolledTooltip 
          key="tooltip" 
          placement="top"
          target={this.uniqueId}
          delay={{ show: 0, hide: 20 }}
          className="iysr-service-badge-tooltip"
        >
          { this.getTooltipText() }
          <br />
          { `Last checked ${this.props.lastUpdated.fromNow()}.` }
        </UncontrolledTooltip>
      )
    ];
  }
}
