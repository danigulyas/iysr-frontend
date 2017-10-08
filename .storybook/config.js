import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import 'bootstrap/dist/css/bootstrap.css';

addDecorator(withKnobs);

function loadStories() {
  const req = require.context('../src/Component', true, /stories.jsx$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
