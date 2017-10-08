import React from 'react';
import { Container } from 'reactstrap';

import Icon from 'Component/Atom/Text/Icon';

import './footer.css';

export default () => (
  <footer className="footer">
    <Container>
      <span className="text-muted">
        Made with <Icon name="heart" color="red"/>{' in Amsterdam by '}
        <a className="text-info" href="http://danielgulyas.me" target="_blank">Daniel Gulyas</a>
      </span>
    </Container>
  </footer>
);

