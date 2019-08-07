import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class AppRedirect extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Redirect to="/test/form-user-information" />;
  }
}
