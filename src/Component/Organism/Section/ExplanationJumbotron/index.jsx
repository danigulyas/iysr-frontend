import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';

import './explanation-jumbotron.css';

export default class ExplanationJumbotron extends React.PureComponent {
  render () {
    return (
      <Jumbotron className="iysr-explanation-jumbotron text-center">
        <Container centered>
          <Row>
            <Col xs="12" sm={8} className="ml-auto mr-auto">
              <h1 className="jumbotron-heading">The end-to-end mindset</h1>
              <hr />
              <p className="lead text-muted">
                In the end, third party software outside the stack contribute to customer and employee experience as well, for example, a project 
                management tool is having an outage in the middle of a planning session or if a customer can't reach a sales rep.
              </p>
              <hr />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
