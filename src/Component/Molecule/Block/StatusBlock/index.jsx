import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import ServiceBadge from 'Component/Atom/Service/ServiceBadge';
import './status-block.css';

export default class StatusBlock extends React.PureComponent {
  static statuses = ServiceBadge.statuses

  static propTypes = {
    // Decides the text and colors to show at the header.
    status: PropTypes.oneOf(StatusBlock.statuses).isRequired,
    
    // Controls if the subtitle should be displayed.
    showSubtitle: PropTypes.bool.isRequired,

    // Service to display.
    services: PropTypes.arrayOf(PropTypes.shape(ServiceBadge.propTypes)).isRequired
  }

  static defaultProps = {
    status: 'OPERATIONAL',
    showSubtitle: false,
    services: []
  }

  getCardTitle() {
    switch (this.props.status) {
      case 'OPERATIONAL': return 'Operational';
      case 'DEGRADED_PERFORMANCE': return 'Degraded Performance';
      case 'PARTIAL_OUTAGE': return 'Partial Outage';
      case 'OUTAGE': return 'Outage';
      default: return 'Operational';
    }
  }

  getCardSubtitle() {
    switch (this.props.status) {
      case 'OPERATIONAL': return 'Everything seem to run smooth!';
      case 'DEGRADED_PERFORMANCE': return 'There may be performance issues in your organization\'s stack.';
      case 'PARTIAL_OUTAGE': return 'There may be an outage in your organization\'s stack.';
      case 'OUTAGE': return 'There may be an outage in your organization\'s stack.';
      default: return 'Everything seem to run smooth!';
    }
  }

  render() {
    return (
      <Container className="iysr-service-block">
        <Row>
          <Col xs="12">
            <Card>
              <CardBody className={`header header-${this.props.status.toLowerCase()}`}>
                <CardTitle>{ this.getCardTitle() }</CardTitle>
                { this.props.showSubtitle && (<CardSubtitle>{ this.getCardSubtitle() }</CardSubtitle>) }
              </CardBody>
              <CardBody>
                { this.props.services.map(serviceDetails => (<ServiceBadge key={serviceDetails.name} {...serviceDetails} />)) }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
