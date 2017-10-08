import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'reactstrap';

import Header from 'Component/Organism/Section/Header';
import IntroductionJumbotron from 'Component/Organism/Section/IntroductionJumbotron';
import ExplanationJumbotron from 'Component/Organism/Section/ExplanationJumbotron';
import StatusBlock from 'Component/Molecule/Block/StatusBlock';
import Footer from 'Component/Organism/Section/Footer';

import './landing.css';

export default class LandingTemplate extends React.PureComponent {
  static statuses = StatusBlock.statuses

  static propTypes = {
    // Status displayed in the <StatusBlock> next to the jumbotron.
    status: StatusBlock.propTypes.status,

    // Services displayed in the <StatusBlock> next to the jumbotron.
    services: StatusBlock.propTypes.services
  }

  static defaultProps = {
    status: 'OPERATIONAL',
    services: []
  }

  showMore() {
    console.log('hai!');
  }

  render() {
    return (
      <div className="iysr-landing">
        <Header activeMenuItem="landing" />
        <IntroductionJumbotron onClick={this.showMore}>
          <Col xs={12} md={6} lg={4} className="ml-auto mt-auto mb-auto">
            <StatusBlock services={this.props.services} status={this.props.status} showSubtitle />
          </Col>
        </IntroductionJumbotron>
        <ExplanationJumbotron />
        <Footer />
      </div>
    );
  }
}
