import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Icon, List } from 'semantic-ui-react'

import './footer.css';

export default class Footer extends React.PureComponent {
  static propTypes = {
    authorWebsiteUrl: PropTypes.string.isRequired
  }

  static defaultProps = {
    authorWebsiteUrl: 'http://danielgulyas.me'
  }

  handleAuthorClick = () => window.open(this.props.authorWebsiteUrl, '_blank');

  render() {
    return (
      <Grid className="iysr-footer" fixed="bottom" centered>
        <Grid.Row color="black">
          <Grid.Column width="16" textAlign="center">
            made with <Icon name="heart" color="red" />in Amsterdam by
          </Grid.Column>
          
          <Grid.Column width="16" textAlign="center">
            <List horizontal link inverted>
              <List.Item as="a" onClick={this.handleAuthorClick}><small>Daniel Gulyas</small></List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}