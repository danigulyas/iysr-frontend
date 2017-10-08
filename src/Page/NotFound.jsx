import React from 'react';
import { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Ayy caramba!</h1>
        <p>The thing you're looking for, well, it's not found, yet.</p>
        <b>Really missing it?</b>
        <p>Shoot <a href="mailto:hello@danielgulyas.me">me</a> a mail. ;)</p>
      </div>
    );
  }
}