import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';

import './introduction-jumbotron.css';

export default class IntroductionJumbotron extends React.PureComponent {
  static propTypes = {
    // Rendered after the call-to-action block in the <Container />.
    children: PropTypes.node.isRequired,

    // Will be called when the primary call-to-action button is clicked.
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    children: null,
    onClick: () => {}
  }

  // TODO: make introduction <Col />'s sizeable from props.
  render () {
    return (
      <Jumbotron className="iysr-introduction-jumbotron">
        <Container>
          <Row>
            <Col md="6" xs="12" className="mt-auto mb-auto">
              <h1 className="jumbotron-heading">Is it like, running?</h1>
              
              <p className="lead">
                We all monitor our software services, the stack of our <i>organization</i> deserve the same priority.
              </p>
    
              <p className="lead">
                <Button className="call-to-action" color="primary" onClick={this.props.onClick}>Tell me more.</Button>
              </p>
            </Col>
            { this.props.children }
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
