import { configure, addDecorator } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';

function loadStories() {
  const req = require.context('../src/Component', true, /stories.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
