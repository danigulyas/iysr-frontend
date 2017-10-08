import React from 'react';
import PropTypes from 'prop-types';
import Octicons from 'octicons';

import './icon.css';

export default class Icon extends React.PureComponent {
  static names = Object.keys(Octicons);
  static colors = ['blue', 'green', 'light-blue', 'orange', 'red', 'black', 'white'];

  static propTypes = {
    name: PropTypes.oneOf(Icon.names).isRequired,
    className: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    color: PropTypes.oneOf(Icon.colors)
  }

  static defaultProps = {
    name: 'heart',
    className: '',
    ariaLabel: '',
    color: 'black'
  }

  renderIcon() {
    const icon = Octicons[this.props.name];

    return icon.toSVG({
      class: `iysr-icon-${this.props.color} ${this.props.className}`,
      'aria-label': this.props.ariaLabel
    });
  }

  render() {
    return (<span className="iysr-icon" dangerouslySetInnerHTML={{ __html: this.renderIcon() }} />);
  }
}
