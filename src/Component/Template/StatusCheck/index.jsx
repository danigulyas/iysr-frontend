import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

import Header from 'Component/Organism/Section/Header';
import Footer from 'Component/Organism/Section/Footer';

import './run-check.css';

export default class StatusCheck extends React.PureComponent {
  lofasz() {
    return this.kaka;
  }

  render() {
    return (
      <div>
        <Header />

        <Grid className="iysr-status-check" centered>
          hi. :)
        </Grid>

        <Footer />
      </div>
    );
  }
}
