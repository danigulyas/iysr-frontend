# iysr-frontend

This is the frontend of Is Your Startup Running?.

## Synopsis

The base command made by [create-react-app](https://github.com/facebookincubator/create-react-app) is available, as an
addition of commands made by [getstorybook](https://github.com/storybooks/storybook-package).

A quick summary:
* `yarn start` to start a development environment with hot-reload and such.
* `yarn test` to watch the files and run the tests whenever they change, handy for TDD.
* `yarn build` to make a production build in `build/`.
* `yarn run storybook` starts the [storybook](https://storybook.js.org/), it contains an overview of components.

## Description

The frontend is built with React, mostly from components reused from [Semantic React](https://react.semantic-ui.com), the aim in general is to make everything stateless, then, when a stateless template page is built, connect it to a store with a container in the `Page` folder.

[Redux](http://redux.js.org/) is responsible for the stores, management of side-effects is through [Redux Sagas](https://redux-saga.js.org/).